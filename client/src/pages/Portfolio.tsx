import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Portfolio() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "videos", name: "Produção de Vídeos" },
    { id: "branding", name: "Branding" },
    { id: "campaigns", name: "Campanhas" },
    { id: "animation", name: "Animações" }
  ];

  const projects = [
    {
      id: 1,
      title: "Campanha para E-commerce Fashion",
      category: "campaigns",
      image: "🎬",
      views: "2.5M",
      engagement: "18%",
      description: "Série de 5 vídeos humorísticos que aumentou vendas em 340%",
      results: [
        "340% aumento em vendas",
        "2.5M visualizações",
        "18% engagement rate",
        "5.000+ conversões"
      ]
    },
    {
      id: 2,
      title: "Conteúdo Mensal para Restaurante",
      category: "videos",
      image: "🍽️",
      views: "1.2M",
      engagement: "22%",
      description: "12 vídeos mensais que triplicaram o fluxo de clientes",
      results: [
        "3x aumento de clientes",
        "1.2M visualizações",
        "22% engagement rate",
        "Gestão mensal contínua"
      ]
    },
    {
      id: 3,
      title: "Rebranding Digital com Avatar",
      category: "branding",
      image: "👤",
      views: "890K",
      engagement: "25%",
      description: "Avatar animado que se tornou marca registrada da empresa",
      results: [
        "Avatar único criado",
        "890K visualizações",
        "25% engagement rate",
        "Reconhecimento de marca"
      ]
    },
    {
      id: 4,
      title: "Lançamento de Produto - Campanha Viral",
      category: "campaigns",
      image: "🚀",
      views: "3.1M",
      engagement: "31%",
      description: "Campanha completa que gerou 5.000 vendas em 2 semanas",
      results: [
        "3.1M visualizações",
        "31% engagement rate",
        "5.000 vendas em 2 semanas",
        "ROI 450%"
      ]
    },
    {
      id: 5,
      title: "Série de Animações Corporativas",
      category: "animation",
      image: "✨",
      views: "650K",
      engagement: "19%",
      description: "8 vídeos animados para treinamento corporativo",
      results: [
        "8 vídeos criados",
        "650K visualizações",
        "19% engagement rate",
        "Usado em 50+ empresas"
      ]
    },
    {
      id: 6,
      title: "Identidade Visual Completa",
      category: "branding",
      image: "🎨",
      views: "520K",
      engagement: "16%",
      description: "Desenvolvimento de marca desde zero até implementação",
      results: [
        "Logo e paleta de cores",
        "520K visualizações",
        "16% engagement rate",
        "Implementação em 5 canais"
      ]
    },
    {
      id: 7,
      title: "Conteúdo Viral para Agência de Viagens",
      category: "videos",
      image: "✈️",
      views: "2.8M",
      engagement: "24%",
      description: "Vídeos de destinos que geraram 200% aumento em bookings",
      results: [
        "2.8M visualizações",
        "24% engagement rate",
        "200% aumento em bookings",
        "Parceria de longo prazo"
      ]
    },
    {
      id: 8,
      title: "Personagem Animado para Startup",
      category: "animation",
      image: "🤖",
      views: "1.5M",
      engagement: "28%",
      description: "Mascote animado que se tornou face da marca",
      results: [
        "1.5M visualizações",
        "28% engagement rate",
        "Reconhecimento de marca",
        "Usado em 50+ vídeos"
      ]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
              Nosso Portfólio
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Veja alguns dos projetos que transformaram marcas em referências no mercado
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg border transition-all ${
                  selectedCategory === cat.id
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "border-white/20 text-gray-300 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-purple-400 text-xs font-semibold uppercase">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-purple-400 font-bold text-sm">{project.views}</p>
                      <p className="text-gray-500 text-xs">Visualizações</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-bold text-sm">{project.engagement}</p>
                      <p className="text-gray-500 text-xs">Engajamento</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm"
                    onClick={() => setLocation("/#contact-form")}
                  >
                    Ver Mais Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">{projects.length}+</p>
              <p className="text-gray-400">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">25M+</p>
              <p className="text-gray-400">Visualizações Totais</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">98%</p>
              <p className="text-gray-400">Taxa de Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">3 Anos</p>
              <p className="text-gray-400">De Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-white/10 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para seu próximo projeto?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Vamos criar algo extraordinário juntos. Solicite um orçamento personalizado.
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
