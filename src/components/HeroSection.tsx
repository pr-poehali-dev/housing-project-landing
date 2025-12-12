import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
