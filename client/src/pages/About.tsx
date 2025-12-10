import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const team = [
    {
      name: "João Silva",
      role: "Fundador & Diretor Criativo",
      image: "👨‍💼",
      bio: "10 anos de experiência em produção de conteúdo e marketing digital"
    },
    {
      name: "Maria Santos",
      role: "Diretora de Produção",
      image: "👩‍💼",
      bio: "Especialista em edição de vídeos e pós-produção profissional"
    },
    {
      name: "Carlos Oliveira",
      role: "Estrategista de Conteúdo",
      image: "👨‍💻",
      bio: "Especialista em estratégia de redes sociais e crescimento viral"
    },
    {
      name: "Ana Costa",
      role: "Designer & Motion Graphics",
      image: "👩‍🎨",
      bio: "Criadora de animações e design visual de alta qualidade"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete em cada projeto que criamos"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Foco em Resultados",
      description: "Cada estratégia é pensada para gerar resultados mensuráveis e reais"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Inovação",
      description: "Sempre buscamos as tendências mais recentes e ferramentas mais modernas"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Colaboração",
      description: "Trabalhamos como parceiros, não apenas fornecedores de serviços"
    }
  ];

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
            onClick={() => setLocation("/#contact-form")}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
              Sobre a Ninguém Aguenta Agency
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Somos uma agência de conteúdo criativo dedicada a transformar ideias em histórias que vendem
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A Ninguém Aguenta Agency nasceu em 2021 com uma visão simples: transformar a forma como as marcas se comunicam através do conteúdo criativo e autêntico.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Começamos como um pequeno estúdio com 2 pessoas e hoje somos uma equipe de 15 profissionais talentosos, tendo trabalhado com mais de 50 marcas e gerado mais de 25 milhões de visualizações.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cada projeto é uma oportunidade de criar algo extraordinário. Nós não apenas produzimos conteúdo, criamos experiências que conectam marcas com suas audiências de forma genuína e memorável.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-white/10 text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-gray-300">
                Desde 2021, transformando ideias em conteúdo viral que gera resultados reais para nossas marcas parceiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Nossa Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Capacitar marcas a contar suas histórias de forma autêntica, criativa e impactante, gerando conexões reais com suas audiências através de conteúdo de qualidade excepcional.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Nossa Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser a agência de conteúdo criativo mais confiável e inovadora, reconhecida por transformar ideias em resultados mensuráveis e histórias que deixam marca no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 hover:border-purple-500/50 transition-all text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">50+</p>
              <p className="text-gray-400">Marcas Parceiras</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">25M+</p>
              <p className="text-gray-400">Visualizações Geradas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">150+</p>
              <p className="text-gray-400">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">98%</p>
              <p className="text-gray-400">Satisfação de Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-white/10 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Se você compartilha da nossa paixão por conteúdo criativo e resultados reais, vamos conversar!
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setLocation("/#contact-form")}
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
