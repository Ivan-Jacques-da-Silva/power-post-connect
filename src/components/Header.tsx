import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "home", label: "Início" },
  { id: "catalog", label: "Catálogo" },
  { id: "about", label: "Sobre Nós" },
  { id: "contact", label: "Contato" },
];

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center shadow-glow">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold text-gradient-electric">
              ITR
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="electric" size="lg" onClick={() => onTabChange("contact")}>
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                    activeTab === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="electric" size="lg" className="mt-2" onClick={() => onTabChange("contact")}>
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
