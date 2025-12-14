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
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

const MainSections = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedFilter, setSelectedFilter] = useState<string>('Все');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#gallery-')) {
        const houseType = decodeURIComponent(hash.replace('#gallery-', ''));
        setSelectedFilter(houseType);
        
        setTimeout(() => {
          const gallerySection = document.getElementById('gallery');
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
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
      image: 'https://cdn.poehali.dev/projects/e18ae36e-89aa-40ef-b591-3e11349bf7a1/files/932f7ba9-da81-405b-a5a5-08da42d66cd8.jpg',
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
      title: 'Одноэтажный',
      area: '121 м²',
      price: 'СКИДКА',
      rooms: '4 комнаты',
      plot: '7,7 сот.',
      image: 'https://cdn.poehali.dev/files/gen_cf362485-497e-488c-8a7b-fc52d2de15db.jpg'
    },
    {
      title: 'Двухэтажный',
      area: '144 м²',
      price: 'СКИДКА',
      rooms: '5 комнат',
      plot: '8,6 сот.',
      image: 'https://cdn.poehali.dev/files/gen_ab020d90-f774-413f-b496-d7a6f57164e3.png'
    },
    {
      title: 'Дом с мансардой',
      area: '120 м²',
      price: null,
      rooms: '5 комнат',
      plot: '7,5 сот.',
      image: 'https://cdn.poehali.dev/files/gen_75bbc5bb-bf25-488f-aef8-eba3eef79051.png'
    }
  ];

  const gallery = [
    { image: 'https://cdn.poehali.dev/files/gen_e132eacf-d32f-4e37-8cc3-ffd76ac01362.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/gen_e8510dc5-ca9e-4232-a1ee-41d59d1ad293.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/переделка.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196823_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196818_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196870_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196955_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196920_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5294368583800525473_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196915_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001196851_121.jpg', title: 'Одноэтажный' },
    { image: 'https://cdn.poehali.dev/files/Gemini_Generated_Image_gt7easgt7easgt7e.png', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/unnamed (2).jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/Gemini_Generated_Image_8bkvul8bkvul8bkv.png', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/12345.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5296620383614208880_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5301187243814882221_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001197615_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001197640_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001197653_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001197655_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5298935444001197662_121.jpg', title: 'Двухэтажный' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344299_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344314_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344305_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344315_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/6(1).jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/6.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/7(1).jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/7.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/8(1).png', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/8.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5(1).jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/гостиная трехугольный.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5292251328132355171_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344411_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344417_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344419_121.jpg', title: 'Дом с мансардой' },
    { image: 'https://cdn.poehali.dev/files/5303509859049344420_121.jpg', title: 'Дом с мансардой' }
  ];

  return (
    <>
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
              Только до конца месяца вы можете получить УНИКАЛЬНУЮ СКИДКУ при покупке Одноэтажного или Двухэтажного дома!
            </h2>
          </div>
        </div>
      </section>

      <section id="houses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                  {house.price && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-lg font-bold">
                      {house.price}
                    </Badge>
                  )}
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
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Maximize" size={18} />
                      <span>Участок: {house.plot}</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={`#gallery-${house.title}`}>
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
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">Наши работы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Фотогалерея проектов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Взгляните на возможную реализацию ландшафтного дизайна и внутреннее обустройство домов
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Все', 'Одноэтажный', 'Двухэтажный', 'Дом с мансардой'].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(filter)}
                  className="px-6"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full" setApi={setCarouselApi}>
              <CarouselContent>
                {gallery
                  .filter(item => selectedFilter === 'Все' || item.title === selectedFilter)
                  .map((item, index) => (
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Свяжитесь с нами</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Позвоните нам или напишите в удобный мессенджер
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Phone" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Позвонить</h3>
                  <p className="text-muted-foreground mb-4">Сергей</p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+79114717755">
                      <Icon name="Phone" size={18} className="mr-2" />
                      +7 (911) 471-77-55
                    </a>
                  </Button>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Instagram" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-4">Direct сообщения</p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="https://www.instagram.com/seregapostroy?igsh=aHFxZTl2dGJvMm5h" target="_blank" rel="noopener noreferrer">
                      <Icon name="Instagram" size={18} className="mr-2" />
                      Написать
                    </a>
                  </Button>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.51c-.46.47-1.07.73-1.67.73-.5 0-.97-.18-1.33-.51-.16-.15-.67-.61-1.28-1.16-.41.36-1.01.88-1.58 1.32-.34.26-.73.39-1.12.39-.62 0-1.18-.36-1.44-.93-.38-.85-.76-2.39-.76-3.35 0-.71.17-1.28.5-1.65.3-.33.72-.51 1.18-.51.85 0 1.53.55 2.05 1.65.24.51.43.98.57 1.39.52-.47 1.14-1.05 1.7-1.6.34-.34.53-.79.53-1.26 0-.42-.15-.82-.42-1.12-.28-.32-.68-.5-1.1-.5-.13 0-.26.02-.38.05.17-.4.56-.68 1-.68.62 0 1.13.51 1.13 1.13 0 .35-.13.68-.37.93-.53.56-1.18 1.24-1.76 1.82.65.67 1.22 1.26 1.45 1.5.15.16.35.24.56.24.24 0 .46-.11.61-.3.23-.28.35-.65.35-1.03v-2.58c0-.62.5-1.12 1.12-1.12s1.12.5 1.12 1.12v2.58c0 .89-.32 1.73-.91 2.35z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">ВКонтакте</h3>
                  <p className="text-muted-foreground mb-4">Личные сообщения</p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="https://vk.com/sunrise39" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Написать
                    </a>
                  </Button>
                </Card>
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <p>Калининградская область, Гурьевский муниципальный округ, пос. Первомайское</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;