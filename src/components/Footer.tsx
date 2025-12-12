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
              <span className="text-xl font-bold">ДомСтрой</span>
            </div>
            <p className="text-white/70">
              Строим дома премиум-класса с 2008 года. Качество, проверенное временем.
            </p>
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
              <li>+7 (911) 471-77-55</li>
              <li>info@domstroy.ru</li>
              <li>г. Москва, ул. Строителей, 10</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© 2024 ДомСтрой. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
