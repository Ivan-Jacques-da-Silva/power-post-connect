import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard, Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import transformer1 from "@/assets/transformer-1.jpg";
import transformer2 from "@/assets/transformer-2.jpg";
import transformer3 from "@/assets/transformer-3.jpg";

const products: Product[] = [
  {
    id: "1",
    name: "Transformador Trifásico 150 kVA",
    category: "Distribuição",
    power: "150 kVA",
    voltage: "13.8kV / 380V",
    description: "Transformador de distribuição trifásico ideal para redes de média tensão em áreas urbanas e rurais.",
    image: transformer1,
    featured: true,
  },
  {
    id: "2",
    name: "Transformador Monofásico 75 kVA",
    category: "Poste",
    power: "75 kVA",
    voltage: "13.8kV / 220V",
    description: "Transformador monofásico para instalação em postes, perfeito para distribuição em bairros residenciais.",
    image: transformer2,
  },
  {
    id: "3",
    name: "Transformador Industrial 500 kVA",
    category: "Industrial",
    power: "500 kVA",
    voltage: "34.5kV / 380V",
    description: "Transformador de alta capacidade para aplicações industriais de grande porte com alta eficiência.",
    image: transformer3,
    featured: true,
  },
  {
    id: "4",
    name: "Transformador Trifásico 300 kVA",
    category: "Distribuição",
    power: "300 kVA",
    voltage: "13.8kV / 380V",
    description: "Transformador robusto para distribuição de energia em médias e grandes instalações comerciais.",
    image: transformer1,
  },
  {
    id: "5",
    name: "Transformador Rural 45 kVA",
    category: "Rural",
    power: "45 kVA",
    voltage: "13.8kV / 220V",
    description: "Solução econômica para eletrificação rural com alta durabilidade e baixa manutenção.",
    image: transformer2,
  },
  {
    id: "6",
    name: "Transformador Especial 1000 kVA",
    category: "Industrial",
    power: "1000 kVA",
    voltage: "69kV / 13.8kV",
    description: "Transformador de força para subestações industriais de grande escala.",
    image: transformer3,
  },
];

const categories = ["Todos", "Distribuição", "Poste", "Industrial", "Rural"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no ${product.name} (${product.power}). Gostaria de mais informações e orçamento.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Nosso </span>
                <span className="text-gradient-electric">Catálogo</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore nossa linha completa de transformadores industriais com diferentes 
                capacidades e especificações para atender às suas necessidades.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "electric" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onWhatsApp={handleWhatsApp}
                />
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
