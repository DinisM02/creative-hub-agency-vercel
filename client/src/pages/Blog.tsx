import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Calendar, User } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Blog() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "video", name: "Produção de Vídeos" },
    { id: "marketing", name: "Marketing Digital" },
    { id: "trends", name: "Tendências" },
    { id: "tips", name: "Dicas e Truques" }
  ];

  const articles = [
    {
      id: 1,
      title: "Como Criar Vídeos Virais em 2024: Guia Completo",
      category: "video",
      author: "João Silva",
      date: "15 de Novembro, 2024",
      image: "🎬",
      excerpt: "Descubra as técnicas mais eficazes para criar vídeos que geram milhões de visualizações e engajamento massivo.",
      readTime: "8 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 2,
      title: "TikTok vs Instagram Reels: Qual Plataforma Escolher?",
      category: "marketing",
      author: "Maria Santos",
      date: "12 de Novembro, 2024",
      image: "📱",
      excerpt: "Análise comparativa das duas maiores plataformas de vídeos curtos e como aproveitar cada uma.",
      readTime: "6 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 3,
      title: "Tendências de Conteúdo que Vão Dominar em 2025",
      category: "trends",
      author: "Carlos Oliveira",
      date: "10 de Novembro, 2024",
      image: "🚀",
      excerpt: "Conheça as tendências emergentes em criação de conteúdo que você precisa acompanhar.",
      readTime: "7 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 4,
      title: "5 Erros Comuns na Edição de Vídeos (e Como Evitá-los)",
      category: "tips",
      author: "Ana Costa",
      date: "8 de Novembro, 2024",
      image: "✂️",
      excerpt: "Aprenda quais são os erros mais comuns na edição de vídeos e como corrigi-los para melhor qualidade.",
      readTime: "5 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 5,
      title: "Roteiros Que Vendem: Estrutura Comprovada",
      category: "video",
      author: "João Silva",
      date: "5 de Novembro, 2024",
      image: "📝",
      excerpt: "A estrutura de roteiro que funciona para criar vídeos comerciais de alta conversão.",
      readTime: "9 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 6,
      title: "Como Usar IA para Acelerar sua Produção de Conteúdo",
      category: "tips",
      author: "Pedro Mendes",
      date: "3 de Novembro, 2024",
      image: "🤖",
      excerpt: "Ferramentas de IA que podem revolucionar sua produção de conteúdo e economizar horas de trabalho.",
      readTime: "10 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 7,
      title: "Estratégia de Conteúdo para Pequenas Empresas",
      category: "marketing",
      author: "Sofia Gomes",
      date: "1 de Novembro, 2024",
      image: "📊",
      excerpt: "Plano de ação prático para pequenas empresas que querem crescer através do conteúdo.",
      readTime: "8 min",
      content: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 8,
      title: "Análise de Dados: Entendendo Suas Métricas",
      category: "marketing",
      author: "Lucas Ferreira",
      date: "30 de Outubro, 2024",
      image: "📈",
      excerpt: "Como interpretar dados de engajamento e usar insights para melhorar seu conteúdo.",
      readTime: "7 min",
      content: "Lorem ipsum dolor sit amet..."
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Blog Ninguém Aguenta Agency
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            Dicas, tendências e insights sobre criação de conteúdo, marketing digital e produção de vídeos
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
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

      {/* Articles Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {article.image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-purple-400 text-xs font-semibold uppercase mb-2">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <span className="ml-auto">{article.readTime}</span>
                    </div>

                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm"
                      onClick={() => setLocation(`/blog/${article.id}`)}
                    >
                      Ler Artigo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Nenhum artigo encontrado com esses critérios.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 border-t border-white/10 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Receba Novos Artigos por Email</h2>
          <p className="text-gray-300 mb-8">
            Inscreva-se em nossa newsletter e receba dicas exclusivas sobre criação de conteúdo
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Inscrever
            </Button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar seu projeto?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Combine nossos serviços com o conhecimento que você adquiriu aqui no blog
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
