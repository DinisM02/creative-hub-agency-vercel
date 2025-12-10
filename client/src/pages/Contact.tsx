import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("/api/trpc/leads.subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          json: {
            email: formData.email,
            name: formData.name,
            message: `Telefone: ${formData.phone}\nEmpresa: ${formData.company}\nServiço: ${formData.service}\n\nMensagem: ${formData.message}`
          }
        })
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
        setTimeout(() => {
          setLocation("/thank-you");
        }, 2000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Ninguém Aguenta Agency" className="h-10 w-auto" />
            <span className="text-white font-bold hidden sm:inline">Ninguém Aguenta Agency</span>
          </a>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setLocation("/")}
          >
            Voltar ao Home
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
              Vamos Conversar?
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estamos prontos para transformar sua visão em realidade. Entre em contato conosco hoje!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 text-center hover:border-purple-500/50 transition-all">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">contato@creativehub.com</p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 text-center hover:border-purple-500/50 transition-all">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
              <p className="text-gray-400">+55 (11) 98765-4321</p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 text-center hover:border-purple-500/50 transition-all">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
              <p className="text-gray-400">São Paulo, Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="+55 (11) 98765-4321"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Sua empresa"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Serviço de Interesse *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="">Selecione um serviço</option>
                <option value="producao-videos">Produção de Vídeos</option>
                <option value="gestao-conteudo">Gestão de Conteúdo</option>
                <option value="infoprodutos">Infoprodutos</option>
                <option value="formacoes">Formações</option>
                <option value="personagens">Personagens Animados</option>
                <option value="campanhas">Campanhas Virais</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Mensagem *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" id="terms" required className="rounded" />
              <label htmlFor="terms">
                Concordo com a política de privacidade e termos de serviço
              </label>
            </div>

            <Button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
            >
              {formStatus === "loading" ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" />
                  Enviar Mensagem
                </>
              )}
            </Button>

            {formStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-900/30 border border-green-500/50 text-green-300">
                Mensagem enviada com sucesso! Redirecionando...
              </div>
            )}
            {formStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/50 text-red-300">
                Erro ao enviar mensagem. Por favor, tente novamente.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-2">Qual é o tempo de entrega?</h3>
              <p className="text-gray-400">Os prazos variam de acordo com o projeto. Normalmente, vídeos simples são entregues em 5-7 dias úteis.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-2">Vocês oferecem revisões?</h3>
              <p className="text-gray-400">Sim! Incluímos até 2 rodadas de revisões em todos os nossos pacotes.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-2">Como funciona o pagamento?</h3>
              <p className="text-gray-400">Aceitamos transferência bancária, cartão de crédito e PIX. Oferecemos parcelamento em até 3x.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-2">Posso cancelar meu pedido?</h3>
              <p className="text-gray-400">Sim, oferecemos garantia de satisfação de 30 dias ou dinheiro de volta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ninguém Aguenta Agency. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
