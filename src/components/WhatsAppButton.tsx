import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Vim pelo site e gostaria de mais informações sobre transformadores."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(142_70%_45%)] text-white flex items-center justify-center shadow-[0_4px_20px_hsl(142_70%_45%/0.5)] hover:shadow-[0_4px_30px_hsl(142_70%_45%/0.7)] hover:scale-110 transition-all duration-300 animate-pulse-glow"
      style={{ animationDuration: "3s" }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}
