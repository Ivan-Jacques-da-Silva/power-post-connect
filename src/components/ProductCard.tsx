import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Info } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  power: string;
  voltage: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onWhatsApp: (product: Product) => void;
}

export function ProductCard({ product, onWhatsApp }: ProductCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden gradient-card border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-glow">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="gradient-energy text-accent-foreground font-semibold px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            Destaque
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-muted-foreground border-muted-foreground/30">
            {product.category}
          </Badge>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="px-3 py-2 rounded-lg bg-muted/50">
            <div className="text-xs text-muted-foreground">Potência</div>
            <div className="font-semibold text-foreground">{product.power}</div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-muted/50">
            <div className="text-xs text-muted-foreground">Tensão</div>
            <div className="font-semibold text-foreground">{product.voltage}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="whatsapp" className="flex-1" onClick={() => onWhatsApp(product)}>
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
          <Button variant="outline" size="icon">
            <Info className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
