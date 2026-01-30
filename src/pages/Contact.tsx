import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Entre em </span>
                <span className="text-gradient-electric">Contato</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Estamos prontos para atender você. Solicite um orçamento ou 
                tire suas dúvidas com nossa equipe especializada.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-8 text-foreground">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6 mb-8">
                  {[
                    { icon: Phone, label: "Telefone", value: "(11) 9999-9999" },
                    { icon: Mail, label: "E-mail", value: "contato@itr.com.br" },
                    { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil" },
                    { icon: Clock, label: "Horário", value: "Seg-Sex: 8h às 18h" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="text-foreground font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Conversar no WhatsApp
                </Button>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                  Solicitar Orçamento
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome
                      </label>
                      <Input placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <Input placeholder="Nome da empresa" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Transformador
                    </label>
                    <Input placeholder="Ex: Trifásico 150 kVA" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea 
                      placeholder="Descreva sua necessidade..."
                      rows={4}
                    />
                  </div>
                  
                  <Button variant="electric" size="xl" className="w-full">
                    Enviar Solicitação
                  </Button>
                </form>
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
