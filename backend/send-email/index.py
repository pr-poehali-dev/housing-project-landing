import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, ValidationError

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=1)
    interest: str = Field(..., min_length=1)
    comment: str = ""

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправляет заявку с формы контактов на email
    Принимает: name, phone, interest, comment
    Возвращает: статус отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    form = ContactForm(**body_data)
    
    smtp_password = os.environ.get('SMTP_PASSWORD')
    if not smtp_password:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'SMTP not configured'}),
            'isBase64Encoded': False
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {form.name}'
    msg['From'] = 'russ.marina85@gmail.com'
    msg['To'] = 'russ.marina85@gmail.com'
    
    html = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Новая заявка с сайта SUNRISE</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Имя:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{form.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Телефон:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{form.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Интересует:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{form.interest}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Комментарий:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{form.comment if form.comment else "—"}</td>
          </tr>
        </table>
      </body>
    </html>
    '''
    
    part = MIMEText(html, 'html')
    msg.attach(part)
    
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login('russ.marina85@gmail.com', smtp_password)
        server.send_message(msg)
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
        'isBase64Encoded': False
    }