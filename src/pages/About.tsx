import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Shield, Award, Users, Zap, CheckCircle, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Sobre a </span>
                <span className="text-gradient-electric">ITR</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Há mais de 20 anos fornecendo soluções em transformadores 
                industriais para todo o Brasil.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Award, value: "20+", label: "Anos de Experiência" },
                { icon: Zap, value: "5000+", label: "Unidades Vendidas" },
                { icon: Users, value: "1000+", label: "Clientes Satisfeitos" },
                { icon: Shield, value: "100%", label: "Garantia" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Nossa História
                </h2>
                <p className="text-muted-foreground mb-4">
                  A ITR nasceu da paixão por transformar a distribuição de energia elétrica 
                  no Brasil. Fundada por engenheiros especializados, começamos nossa jornada 
                  fornecendo transformadores de alta qualidade para pequenas comunidades rurais.
                </p>
                <p className="text-muted-foreground mb-4">
                  Hoje, somos referência nacional em transformadores industriais, atendendo 
                  desde pequenos projetos até grandes indústrias e concessionárias de energia.
                </p>
                <p className="text-muted-foreground">
                  Nossa missão é garantir que cada transformador ITR represente o mais alto 
                  padrão de qualidade, eficiência e durabilidade do mercado.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Nossos Valores
                </h3>
                <ul className="space-y-4">
                  {[
                    "Qualidade sem compromissos",
                    "Inovação tecnológica constante",
                    "Compromisso com o meio ambiente",
                    "Atendimento personalizado",
                    "Garantia estendida em todos os produtos",
                    "Suporte técnico especializado",
                  ].map((value, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">
                Certificações e Normas
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["ISO 9001", "NBR 5440", "NBR 5356", "INMETRO"].map((cert) => (
                  <div
                    key={cert}
                    className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary font-semibold"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
