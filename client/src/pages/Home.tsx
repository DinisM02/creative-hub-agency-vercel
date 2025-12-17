import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Film, Zap, Users, Play, ChevronLeft, Menu, X, Check, Sparkles, Target, Tv } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
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
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setLocation("/thank-you");
        }, 1500);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const services = [
    {
      title: "Produção de Vídeos",
      description: "Criamos vídeos virais e conteúdos humorísticos que geram engajamento",
      icon: <Film className="w-8 h-8 text-blue-400" />,
      features: ["Roteiros personalizados", "Edição profissional", "Entrega rápida", "Múltiplos formatos"],
      price: "A partir de 3.000 MT",
      gumroadLink: "https://gumroad.com/seu-usuario/l/producao-videos"
    },
    {
      title: "Gestão de Conteúdos",
      description: "Pacote mensal de produção de conteúdos para suas redes sociais",
      icon: <Tv className="w-8 h-8 text-blue-400" />,
      features: ["8-12 vídeos/mês", "Planejamento estratégico", "Calendário editorial", "Análise de performance"],
      price: "A partir de 5.000 MT",
      gumroadLink: "https://gumroad.com/seu-usuario/l/gestao-conteudos"
    },
    {
      title: "Infoprodutos Digitais",
      description: "Cursos, templates e materiais digitais para vender ao seu público",
      icon: <Sparkles className="w-8 h-8 text-blue-400" />,
      features: ["Cursos online", "Templates prontos", "eBooks", "Packs de recursos"],
      price: "A partir de 250 MT",
      gumroadLink: "https://gumroad.com/seu-usuario/l/infoprodutos"
    },
    {
      title: "Formações e Workshops",
      description: "Treinamentos para você ou sua equipe dominar criação de conteúdo",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      features: ["Aulas ao vivo", "Materiais de apoio", "Certificado", "Suporte contínuo"],
      price: "A partir de 500 MT",
      gumroadLink: "https://gumroad.com/seu-usuario/l/formacoes-workshops"
    },
    {
      title: "Personagens Animados",
      description: "Criamos avatares e personagens únicos para sua marca",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      features: ["Design personalizado", "Voz e expressões", "Manual de uso", "Vídeos iniciais"],
      price: "A partir de 6.000 MT",
      gumroadLink: "https://gumroad.com/seu-usuario/l/personagens-animados"
    },
    {
      title: "Campanhas Virais",
      description: "Pacotes completos para lançamentos e campanhas especiais",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      features: ["5 vídeos virais", "Storytelling", "Conteúdo educativo", "Análise de resultados"],
      price: "A partir de 8.000 MT",
      gumroadLink: "https://gumroad.com/seu-usuario/l/campanhas-virais"
    }
  ];

  const portfolioItems = [
    {
      title: "Campanha para E-commerce",
      category: "Produção de Vídeos",
      views: "2.5M visualizações",
      engagement: "18% engagement rate",
      description: "Série de 5 vídeos humorísticos que aumentou vendas em 340%"
    },
    {
      title: "Conteúdo para Restaurante",
      category: "Gestão de Conteúdos",
      views: "1.2M visualizações",
      engagement: "22% engagement rate",
      description: "12 vídeos mensais que triplicaram o fluxo de clientes"
    },
    {
      title: "Rebranding Digital",
      category: "Personagens Animados",
      views: "890K visualizações",
      engagement: "25% engagement rate",
      description: "Avatar animado que se tornou marca registrada da empresa"
    },
    {
      title: "Lançamento de Produto",
      category: "Campanhas Virais",
      views: "3.1M visualizações",
      engagement: "31% engagement rate",
      description: "Campanha completa que gerou 5.000 vendas em 2 semanas"
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      company: "E-commerce Fashion",
      result: "+340% em vendas",
      feedback: "Os vídeos criados transformaram completamente nossa presença nas redes sociais. Recomendo muito!"
    },
    {
      name: "Maria Santos",
      company: "Restaurante Gourmet",
      result: "+3x clientes",
      feedback: "Conteúdo criativo e consistente que realmente funciona. Excelente trabalho!"
    },
    {
      name: "Carlos Oliveira",
      company: "Agência de Viagens",
      result: "+2.5M views",
      feedback: "Profissionalismo e criatividade em cada projeto. Parceria de longo prazo garantida!"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Banner Superior */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <a
            href="#contact"
            className="text-sm text-white hover:text-purple-200 transition-colors flex items-center gap-2"
          >
            ✨ Transforme seu conteúdo em vendas. Vamos conversar?
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Ninguém Aguenta Agency" className="h-10 w-auto" />
            <span className="text-white font-bold text-lg md:text-xl hidden sm:inline">Ninguém Aguenta Agency</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              Serviços
            </a>
            <a href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              Preços
            </a>
            {/*<a href="/portfolio" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              Portfólio
            </a>*/}
       
            <a href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              Clientes
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base flex-shrink-0"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4 p-4">
              <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Serviços
              </a>
              <a href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Preços
              </a>
              <a href="/portfolio" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Portfólio
              </a>
              <a href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </a>
              <a href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Clientes
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-lg hover:bg-purple-600/30 transition-colors">
              <span className="text-xs md:text-sm text-purple-300 font-medium">
                🎬 AGÊNCIA DE CONTEÚDO CRIATIVO
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
              Conteúdo que Vende
            </span>
            <br />
            <span className="italic text-white">Histórias que Engajam</span>
          </h1>

          <p className="text-center text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12">
            Transformamos ideias em vídeos virais. Criamos conteúdos humorísticos, educativos e comerciais que geram resultados reais para sua marca.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-transparent border-2 border-purple-500/50 text-white hover:bg-purple-500/10 text-lg px-8 py-6"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</p>
              <p className="text-gray-400">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15M+</p>
              <p className="text-gray-400">Visualizações Geradas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">98%</p>
              <p className="text-gray-400">Satisfação de Clientes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3 Anos</p>
              <p className="text-gray-400">De Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Nossos Serviços</h2>
            <p className="text-gray-300 text-lg">Soluções completas para sua estratégia de conteúdo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`p-8 rounded-xl border transition-all duration-300 h-full flex flex-col ${
                    hoveredService === index
                      ? "border-purple-500/50 bg-purple-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4 flex-1">{service.description}</p>
                  
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    <p className="text-purple-400 font-semibold text-sm">{service.price}</p>
                    <a
                      href={service.gumroadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold text-sm w-full"
                    >
                      Comprar no Gumroad
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - HIDDEN */}
      {/* <section id="portfolio" className="py-20 md:py-32 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Portfólio de Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 hover:border-purple-500/50 transition-all group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
                  <Play className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-purple-400 text-xs font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-purple-400 font-bold text-sm">{item.views}</p>
                      <p className="text-gray-400 text-xs">Visualizações</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-bold text-sm">{item.engagement}</p>
                      <p className="text-gray-400 text-xs">Engajamento</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            >
              VER TODOS OS PROJETOS
            </Button>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section - HIDDEN */}
      {/* 
      <section id="testimonials" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">O Que Nossos Clientes Dizem</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
                <p className="text-purple-400 font-bold text-sm">{testimonial.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-white/10 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar Seu Conteúdo?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Vamos criar algo extraordinário juntos. Solicite um orçamento personalizado hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 md:py-32 border-t border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Solicite um Orçamento</h2>
          <p className="text-gray-300 text-lg text-center mb-12">
            Preencha o formulário abaixo e nossa equipe entrará em contato em breve
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Nome</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Mensagem</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none h-32"
                placeholder="Conte-nos sobre seu projeto"
              />
            </div>

            <Button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
            >
              {formStatus === "loading" ? "Enviando..." : formStatus === "success" ? "Enviado com sucesso!" : "Enviar Solicitação"}
            </Button>

            {formStatus === "error" && (
              <p className="text-red-400 text-center">Ocorreu um erro. Por favor, tenta novamente.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="#home" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-white font-bold text-xl">Ninguém Aguenta Agency</span>
              </a>
              <p className="text-gray-400 text-sm">
                Agência de conteúdo criativo que transforma ideias em resultados
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Produção de Vídeos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Gestão de Conteúdos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Infoprodutos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Clientes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:contato@creativehub.com" className="hover:text-white transition-colors">contato@creativehub.com</a></li>
                <li><a href="tel:+55" className="hover:text-white transition-colors">+55 (11) 9999-9999</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ninguém Aguenta Agency. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/258848087372"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-125 z-40 animate-bounce"
        title="Chat no WhatsApp - +258 848 087 372"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.929 1.242c-1.51.738-2.813 1.746-3.848 3.039C2.063 10.731 1.5 12.622 1.5 14.556c0 1.864.471 3.681 1.379 5.335L1.3 23.697a.75.75 0 00.933.933l4.806-1.579A9.868 9.868 0 0012.05 23c5.168 0 9.449-4.281 9.449-9.449 0-2.527-.981-4.9-2.764-6.684-1.784-1.784-4.157-2.765-6.684-2.765z" />
        </svg>
      </a>
    </div>
  );
}
