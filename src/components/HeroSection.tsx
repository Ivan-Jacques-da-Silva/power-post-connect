import { Button } from "@/components/ui/button";
import { Zap, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-transformer.jpg";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Transformador industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-slide-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Líder em Transformadores Industriais
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Energia que</span>
            <br />
            <span className="text-gradient-electric">Transforma</span>
            <br />
            <span className="text-foreground">o Futuro</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up">
            Fornecemos transformadores industriais de alta qualidade para 
            distribuição de energia elétrica. Mais de 20 anos de experiência 
            no mercado brasileiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button variant="electric" size="xl" onClick={() => onNavigate("catalog")}>
              Ver Catálogo
            </Button>
            <Button variant="outline" size="xl" onClick={() => onNavigate("contact")}>
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-slide-up">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-lg bg-accent/10">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">5000+</div>
              <div className="text-sm text-muted-foreground">Unidades Vendidas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
