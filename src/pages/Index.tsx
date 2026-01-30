import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard, Product } from "@/components/ProductCard";
import { Zap, Shield, Award, ArrowRight, Calendar, Newspaper } from "lucide-react";
import heroImage from "@/assets/hero-transformer.jpg";
import transformer1 from "@/assets/transformer-1.jpg";
import transformer2 from "@/assets/transformer-2.jpg";
import transformer3 from "@/assets/transformer-3.jpg";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Transformador Trifásico 150 kVA",
    category: "Distribuição",
    power: "150 kVA",
    voltage: "13.8kV / 380V",
    description: "Transformador de distribuição trifásico ideal para redes de média tensão.",
    image: transformer1,
    featured: true,
  },
  {
    id: "3",
    name: "Transformador Industrial 500 kVA",
    category: "Industrial",
    power: "500 kVA",
    voltage: "34.5kV / 380V",
    description: "Transformador de alta capacidade para aplicações industriais de grande porte.",
    image: transformer3,
    featured: true,
  },
  {
    id: "2",
    name: "Transformador Monofásico 75 kVA",
    category: "Poste",
    power: "75 kVA",
    voltage: "13.8kV / 220V",
    description: "Transformador monofásico para instalação em postes.",
    image: transformer2,
  },
];

const latestNews = [
  {
    id: "1",
    title: "ITR lança nova linha de transformadores de alta eficiência",
    date: "28 Jan 2026",
    category: "Lançamento",
  },
  {
    id: "2",
    title: "Parceria estratégica com concessionárias de energia",
    date: "20 Jan 2026",
    category: "Parceria",
  },
];

const Index = () => {
  const handleWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no ${product.name} (${product.power}). Gostaria de mais informações e orçamento.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Transformador industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

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
                <Button variant="electric" size="xl" asChild>
                  <Link to="/catalog">Ver Catálogo</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">Fale Conosco</Link>
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

        {/* Featured Products Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Produtos em </span>
                  <span className="text-gradient-electric">Destaque</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Conheça nossos transformadores mais vendidos e solicite um orçamento.
                </p>
              </div>
              <Button variant="outline" size="lg" className="mt-6 md:mt-0" asChild>
                <Link to="/catalog">
                  Ver Catálogo Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onWhatsApp={handleWhatsApp}
                />
              ))}
            </div>
          </div>
        </section>

        {/* News Preview Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Últimas </span>
                  <span className="text-gradient-electric">Notícias</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Fique por dentro das novidades da ITR e do setor elétrico.
                </p>
              </div>
              <Button variant="outline" size="lg" className="mt-6 md:mt-0" asChild>
                <Link to="/news">
                  Ver Todas as Notícias
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {latestNews.map((news) => (
                <Card 
                  key={news.id}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">{news.category}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Pronto para </span>
              <span className="text-gradient-electric">Transformar</span>
              <span className="text-foreground"> sua Energia?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Entre em contato conosco e descubra como podemos ajudar no seu projeto 
              de distribuição de energia elétrica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="electric" size="xl" asChild>
                <Link to="/contact">Solicitar Orçamento</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Conhecer a ITR</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
