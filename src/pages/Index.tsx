
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const advantages = [
    {
      icon: 'Building2',
      title: 'Готовая инфраструктура',
      description: 'Поселок активно развивается: рядом школа, детский сад, автобусная остановка, а на территории строится магазин «Пятёрочка». Все повседневные нужды — в шаговой доступности.'
    },
    {
      icon: 'Trees',
      title: 'Экологичность и развитие',
      description: 'Чистый воздух, тишина, просторные участки, отсутствие плотной застройки. Идеальные условия для семей с детьми и спокойной жизни на природе.'
    },
    {
      icon: 'Zap',
      title: 'Полностью подведённые коммуникации',
      description: 'Электричество, газ, скважина и станция биоочистки — всё уже подключено. Можно сразу заходить с бригадой и начинать отделку, без дополнительных вложений и ожиданий.'
    },
    {
      icon: 'MapPin',
      title: 'Удобное расположение',
      description: 'До Гурьевска — 5 минут, до центра Калининграда — 20 минут, до моря — 35. Быстрый выезд в город, при этом вы живёте в тишине и спокойствии.'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Готовые дома',
      description: 'Ваш новый дом — уже ждет вас. Мы предлагаем современные, полностью построенные дома, в формате "под отделку", в уютном и развитом поселке. Продуманные планировки, большие участки, свежий воздух и готовые коммуникации — всё создано для комфортной и спокойной жизни. Вам остаётся только выбрать свой дом и начать новую главу.',
      image: 'https://cdn.poehali.dev/files/gen_d9b047a2-64b2-4486-a110-755891fadd07.png',
      link: '#houses'
    },
    {
      icon: 'Hammer',
      title: 'Строительство',
      description: 'Если вам не подошли готовые варианты — у нас есть решение. Мы предложим десятки других проектов из нашей базы: одноэтажные, двухэтажные, дома с мансардой, компактные или просторные. А если хотите что-то особенное — разработаем индивидуальный проект и построим дом, который будет полностью соответствовать вашим пожеланиям, стилю и бюджету.',
      image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/34f14c4e-57b7-49b3-aceb-a4ef71c9df42.jpg',
      link: '#contacts'
    },
    {
      icon: 'MapPin',
      title: 'Земельные участки',
      description: 'Начните с чистого листа — создайте дом своей мечты. Просторные участки с ИЖС в живописном месте. Готовые подъездные пути, коммуникации по границе, зеленая территория и удобное расположение — идеальная база, чтобы построить то, что вы хотите: уютный дом, сад, зону отдыха или полноценную семейную усадьбу.',
      image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/8ca6227a-bf6b-419a-821f-942a85fd5f68.jpg',
      link: '#contacts'
    }
  ];

  const houses = [
    {
      title: 'Проект "Комфорт"',
      area: '120 м²',
      price: '8 500 000 ₽',
      rooms: '3 спальни',
      image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/016d0735-a52c-425b-ab66-26ab6ee1cc26.jpg'
    },
    {
      title: 'Проект "Премиум"',
      area: '180 м²',
      price: '12 800 000 ₽',
      rooms: '4 спальни',
      image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/67815578-d227-4ffc-8c29-3e46955cb54f.jpg'
    },
    {
      title: 'Проект "Семейный"',
      area: '150 м²',
      price: '10 200 000 ₽',
      rooms: '3 спальни + кабинет',
      image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/5250ee57-704c-4f77-9aa0-69fcd979d836.jpg'
    }
  ];

  const gallery = [
    { image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/016d0735-a52c-425b-ab66-26ab6ee1cc26.jpg', title: 'Современный фасад' },
    { image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/67815578-d227-4ffc-8c29-3e46955cb54f.jpg', title: 'Уютный интерьер' },
    { image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/5250ee57-704c-4f77-9aa0-69fcd979d836.jpg', title: 'Процесс строительства' }
  ];

  return (
    <div className="min-h-screen">
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

      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ваш новый дом
                <br />
                <span className="text-primary">— уже построен.</span>
              </h1>
              <p className="text-2xl font-semibold">
                Выберите один из 3 готовых домов в Первомайском.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Современный стиль</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Свежий воздух</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Продуманные планировки</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground">
                Большие участки и все коммуникации подключены.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#houses">
                    <Icon name="Home" size={20} className="mr-2" />
                    Выбрать дом
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="tel:+79114717755">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться с нами
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/gen_ab020d90-f774-413f-b496-d7a6f57164e3.png" 
                alt="Современный дом в Первомайском" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Home" size={28} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">3 дома</div>
                    <div className="text-sm text-muted-foreground">Готовы к заселению</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">О нас</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Мы — команда профессионалов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы — команда профессионалов с более чем 10-летним опытом строительства современных домов из газобетона в Калининграде и области.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Мы создаём жильё, в котором сочетаются комфорт, стиль и надежность, используя современные технологии и проверенные материалы. Наша миссия — сделать качественные дома доступными каждому, сохраняя индивидуальный подход к каждому проекту.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={advantage.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">Что мы предлагаем</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для вашего загородного комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all group animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <a href={service.link}>
                      Подробнее
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Специальное предложение</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Только до конца месяца вы можете получить УНИКАЛЬНУЮ СКИДКУ при покупке Одноэтажного или Двухэтажного дома!
            </h2>
          </div>
        </div>
      </section>

      <section id="houses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Готовые решения</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Популярные проекты домов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите готовый проект или создадим индивидуальный специально для вас
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {houses.map((house, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={house.image} 
                    alt={house.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {house.price}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{house.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Square" size={18} />
                      <span>{house.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Bed" size={18} />
                      <span>{house.rooms}</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="#contacts">
                      Подробнее
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">Наши работы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Фотогалерея проектов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Взгляните на реализованные проекты и убедитесь в нашем профессионализме
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {gallery.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden">
                      <div className="relative h-80">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-white font-semibold text-lg">{item.title}</p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Свяжитесь с нами</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79114717755" className="text-lg text-primary hover:underline">+7 (911) 471-77-55</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@domstroy.ru" className="text-lg text-primary hover:underline">info@domstroy.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес офиса</div>
                    <p className="text-muted-foreground">г. Москва, ул. Строителей, д. 10</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Что вас интересует?</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option>Готовый дом</option>
                    <option>Земельный участок</option>
                    <option>Строительство по проекту</option>
                    <option>Консультация</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    rows={4}
                    placeholder="Расскажите о ваших пожеланиях..."
                  />
                </div>
                <Button type="button" className="w-full" size="lg" asChild>
                  <a href="tel:+79114717755">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Связаться с нами
                  </a>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;