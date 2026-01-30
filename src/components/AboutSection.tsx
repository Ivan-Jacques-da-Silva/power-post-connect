import { CheckCircle, Users, Wrench, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Todos os nossos transformadores seguem rigorosas normas ABNT e possuem certificação INMETRO.",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica",
    description: "Equipe especializada disponível para instalação, manutenção preventiva e corretiva.",
  },
  {
    icon: Truck,
    title: "Entrega em Todo Brasil",
    description: "Logística eficiente para entrega segura em qualquer região do país.",
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Consultores técnicos prontos para ajudar na escolha do equipamento ideal.",
  },
];

const benefits = [
  "Garantia estendida de 2 anos",
  "Óleo isolante de alta qualidade",
  "Bobinas em cobre ou alumínio",
  "Proteção contra sobrecarga",
  "Baixo nível de ruído",
  "Alta eficiência energética",
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Por que escolher a </span>
            <span className="text-gradient-energy">VOLTRANS?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Há mais de 20 anos fornecendo soluções em transformadores para empresas, 
            concessionárias e industrias de todo o Brasil.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg gradient-electric flex items-center justify-center mb-4 shadow-glow group-hover:shadow-[0_0_40px_hsl(200_100%_50%/0.5)] transition-shadow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="rounded-2xl gradient-card border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Diferenciais dos Nossos Transformadores
              </h3>
              <p className="text-muted-foreground mb-6">
                Utilizamos os melhores materiais e processos de fabricação para 
                garantir a máxima durabilidade e eficiência dos nossos equipamentos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse-glow">
                <div className="text-center">
                  <div className="font-display text-6xl md:text-8xl font-bold text-gradient-electric">
                    20+
                  </div>
                  <div className="text-xl text-muted-foreground mt-2">
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
