import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const newsItems = [
  {
    id: "1",
    title: "ITR lança nova linha de transformadores de alta eficiência",
    excerpt: "Nossa nova linha de transformadores oferece até 30% mais eficiência energética, reduzindo custos operacionais e impacto ambiental.",
    date: "28 Jan 2026",
    readTime: "3 min",
    category: "Lançamento",
    featured: true,
  },
  {
    id: "2",
    title: "Parceria estratégica com concessionárias de energia",
    excerpt: "A ITR fecha acordos com as principais concessionárias de energia do Sudeste para fornecimento de transformadores de distribuição.",
    date: "20 Jan 2026",
    readTime: "2 min",
    category: "Parceria",
  },
  {
    id: "3",
    title: "Certificação ISO 14001: Compromisso ambiental",
    excerpt: "Conquistamos a certificação ISO 14001, reforçando nosso compromisso com práticas sustentáveis na fabricação de transformadores.",
    date: "15 Jan 2026",
    readTime: "4 min",
    category: "Sustentabilidade",
  },
  {
    id: "4",
    title: "Expansão da fábrica aumenta capacidade produtiva",
    excerpt: "Com investimento de R$ 50 milhões, nossa nova ala de produção permite dobrar a capacidade de fabricação de transformadores industriais.",
    date: "10 Jan 2026",
    readTime: "3 min",
    category: "Empresa",
  },
  {
    id: "5",
    title: "Guia: Como escolher o transformador ideal",
    excerpt: "Confira nosso guia completo sobre como dimensionar e escolher o transformador correto para sua aplicação industrial ou comercial.",
    date: "05 Jan 2026",
    readTime: "8 min",
    category: "Educacional",
  },
  {
    id: "6",
    title: "ITR presente na maior feira de energia do Brasil",
    excerpt: "Participamos da Feira Internacional de Energia Elétrica apresentando nossas inovações em transformadores smart grid.",
    date: "28 Dez 2025",
    readTime: "2 min",
    category: "Eventos",
  },
];

export default function News() {
  const featuredNews = newsItems.find(n => n.featured);
  const regularNews = newsItems.filter(n => !n.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Últimas </span>
                <span className="text-gradient-electric">Notícias</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fique por dentro das novidades da ITR, lançamentos de produtos, 
                eventos e conteúdos educacionais sobre o setor elétrico.
              </p>
            </div>

            {/* Featured News */}
            {featuredNews && (
              <Card className="mb-12 overflow-hidden bg-card border-primary/30 hover:border-primary/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl">⚡</div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/30">
                        {featuredNews.category}
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent/30">
                        Destaque
                      </Badge>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredNews.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredNews.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredNews.readTime} de leitura
                      </span>
                    </div>
                    <Button variant="electric" className="w-fit">
                      Ler Notícia Completa
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((news) => (
                <Card 
                  key={news.id} 
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-4xl">📰</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {news.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {news.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
