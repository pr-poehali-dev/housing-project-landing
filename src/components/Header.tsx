import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ДомСтрой</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#houses" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex" asChild>
            <a href="tel:+79114717755">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
