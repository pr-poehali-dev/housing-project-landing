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