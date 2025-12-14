import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Home" size={28} className="text-primary" />
              <span className="text-xl font-bold">SUNRISE</span>
            </div>
            <div className="flex gap-3">
              <a href="mailto:ds03219@gmail.com" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors" aria-label="Email">
                <Icon name="Mail" size={20} />
              </a>
              <a href="https://vk.com/sunrise39" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors" aria-label="VK">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.51c-.46.47-1.07.73-1.67.73-.5 0-.97-.18-1.33-.51-.16-.15-.67-.61-1.28-1.16-.41.36-1.01.88-1.58 1.32-.34.26-.73.39-1.12.39-.62 0-1.18-.36-1.44-.93-.38-.85-.76-2.39-.76-3.35 0-.71.17-1.28.5-1.65.3-.33.72-.51 1.18-.51.85 0 1.53.55 2.05 1.65.24.51.43.98.57 1.39.52-.47 1.14-1.05 1.7-1.6.34-.34.53-.79.53-1.26 0-.42-.15-.82-.42-1.12-.28-.32-.68-.5-1.1-.5-.13 0-.26.02-.38.05.17-.4.56-.68 1-.68.62 0 1.13.51 1.13 1.13 0 .35-.13.68-.37.93-.53.56-1.18 1.24-1.76 1.82.65.67 1.22 1.26 1.45 1.5.15.16.35.24.56.24.24 0 .46-.11.61-.3.23-.28.35-.65.35-1.03v-2.58c0-.62.5-1.12 1.12-1.12s1.12.5 1.12 1.12v2.58c0 .89-.32 1.73-.91 2.35z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/seregapostroy?igsh=aHFxZTl2dGJvMm5h" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors" aria-label="Instagram">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Готовые дома</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Земельные участки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Строительство</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Проектирование</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li>Сергей</li>
              <li>+7 (911) 471-77-55</li>
              <li>Калининградская область, Гурьевский муниципальный округ, пос. Первомайское</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p className="text-xs leading-relaxed mb-2">ИП КРИВОГОРНИЦЫН А.О. ИНН 380471284659 ОГРНИП 324180000012777<br />© 2025 SUNRISE. Все права защищены.<br />Материалы сайта защищены законом РФ об авторских и смежных правах. Копирование запрещено.<br />Данный сайт носит исключительно информационный характер и не является публичной офертой.</p>
          <a href="https://sunrise39.ru/privacy/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-primary transition-colors underline">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;