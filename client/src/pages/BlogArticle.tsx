import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { useRoute, useLocation } from "wouter";

export default function BlogArticle() {
  const [match, params] = useRoute("/blog/:id");
  const [, setLocation] = useLocation();

  const articles: Record<string, any> = {
    "1": {
      title: "Como Criar Vídeos Virais em 2024: Guia Completo",
      category: "Produção de Vídeos",
      author: "João Silva",
      date: "15 de Novembro, 2024",
      readTime: "8 min",
      image: "🎬",
      excerpt: "Descubra as técnicas mais eficazes para criar vídeos que geram milhões de visualizações e engajamento massivo.",
      content: `
        <h2>Introdução</h2>
        <p>A criação de vídeos virais é uma arte e uma ciência. Neste guia completo, vamos explorar as técnicas mais eficazes para criar conteúdo que não apenas atrai visualizações, mas também gera engajamento massivo.</p>
        
        <h2>1. Entenda Seu Público</h2>
        <p>Antes de criar qualquer vídeo, você precisa entender profundamente quem é seu público-alvo. Qual é a faixa etária? Quais são seus interesses? O que os faz rir ou se emocionar?</p>
        
        <h2>2. Estrutura de Gancho</h2>
        <p>Os primeiros 3 segundos são cruciais. Você precisa de um gancho que prenda a atenção do espectador imediatamente. Isso pode ser uma pergunta provocativa, uma cena visualmente interessante ou uma afirmação surpreendente.</p>
        
        <h2>3. Mantenha o Ritmo</h2>
        <p>Vídeos virais geralmente têm um ritmo rápido. Cortes rápidos, transições suaves e mudanças de cena mantêm o espectador engajado.</p>
        
        <h2>4. Qualidade de Produção</h2>
        <p>Você não precisa de equipamento caro, mas a qualidade importa. Certifique-se de que o áudio está claro, a iluminação é adequada e o vídeo está bem editado.</p>
        
        <h2>Conclusão</h2>
        <p>Criar vídeos virais requer uma combinação de criatividade, técnica e compreensão do seu público. Com essas dicas, você está no caminho certo para criar conteúdo que realmente ressoa com as pessoas.</p>
      `
    },
    "2": {
      title: "TikTok vs Instagram Reels: Qual Plataforma Escolher?",
      category: "Marketing Digital",
      author: "Maria Santos",
      date: "12 de Novembro, 2024",
      readTime: "6 min",
      image: "📱",
      excerpt: "Análise comparativa das duas maiores plataformas de vídeos curtos e como aproveitar cada uma.",
      content: `
        <h2>Introdução</h2>
        <p>TikTok e Instagram Reels são as duas maiores plataformas de vídeos curtos atualmente. Mas qual você deve escolher? A resposta é: depende dos seus objetivos.</p>
        
        <h2>TikTok: O Rei da Viralidade</h2>
        <p>TikTok é conhecido por sua capacidade de viralizar conteúdo. O algoritmo é extremamente eficaz em encontrar e promover vídeos interessantes, mesmo de criadores desconhecidos.</p>
        
        <h2>Instagram Reels: Integração com Comunidade</h2>
        <p>Instagram Reels oferece a vantagem de estar integrado com uma plataforma que já possui uma comunidade estabelecida. Se você já tem seguidores no Instagram, os Reels são uma excelente forma de engajá-los.</p>
        
        <h2>Comparação Direta</h2>
        <p>Ambas as plataformas têm seus pontos fortes. TikTok é melhor para viralidade, enquanto Instagram Reels é melhor para construir comunidade com seguidores existentes.</p>
        
        <h2>Conclusão</h2>
        <p>A melhor estratégia é usar ambas as plataformas. Crie conteúdo que funcione em ambas e adapte conforme necessário.</p>
      `
    },
    "3": {
      title: "Tendências de Conteúdo que Vão Dominar em 2025",
      category: "Tendências",
      author: "Carlos Oliveira",
      date: "10 de Novembro, 2024",
      readTime: "7 min",
      image: "🚀",
      excerpt: "Conheça as tendências emergentes em criação de conteúdo que você precisa acompanhar.",
      content: `
        <h2>Introdução</h2>
        <p>2025 promete ser um ano emocionante para criadores de conteúdo. Novas tendências estão emergindo e é importante estar preparado.</p>
        
        <h2>1. Conteúdo Autêntico e Não Polido</h2>
        <p>A tendência de conteúdo "não polido" continua crescendo. As pessoas querem autenticidade, não perfeição.</p>
        
        <h2>2. Vídeos Educativos com Entretenimento</h2>
        <p>A combinação de educação com entretenimento é a fórmula do sucesso em 2025. Ensine algo enquanto diverte.</p>
        
        <h2>3. Conteúdo Personalizado com IA</h2>
        <p>A IA está revolucionando a forma como criamos conteúdo. Ferramentas de IA podem ajudar na geração de ideias, edição e até dublagem.</p>
        
        <h2>4. Comunidades Niche</h2>
        <p>Em vez de tentar agradar a todos, foque em comunidades específicas e nicho. Isso gera mais engajamento e lealdade.</p>
        
        <h2>Conclusão</h2>
        <p>Fique atento a essas tendências e adapte sua estratégia conforme necessário. O futuro do conteúdo é autêntico, educativo e personalizado.</p>
      `
    }
  };

  if (!match) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Button onClick={() => setLocation("/blog")}>Voltar para Blog</Button>
        </div>
      </div>
    );
  }

  const article = articles[params?.id || ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Button onClick={() => setLocation("/blog")}>Voltar para Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/blog")}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-20">
        {/* Hero Image */}
        <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-12 border border-white/10">
          <div className="text-8xl">{article.image}</div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/10">
          <span className="text-purple-400 text-sm font-semibold uppercase">{article.category}</span>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <User className="w-4 h-4" />
            {article.author}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
          <span className="text-gray-400 text-sm ml-auto">{article.readTime} de leitura</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Share */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-gray-400 text-sm">Compartilhar:</span>
          <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Share2 className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div
            className="text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/<h2>/g, '<h2 className="text-3xl font-bold text-white mt-8 mb-4">')
                .replace(/<p>/g, '<p className="text-lg">')
            }}
          />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para começar seu projeto?</h3>
          <p className="text-gray-300 mb-6">
            Combine os conhecimentos deste artigo com nossos serviços profissionais
          </p>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setLocation("/#contact-form")}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-white/10 py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(articles)
              .filter(([id]) => id !== params?.id)
              .slice(0, 3)
              .map(([id, art]) => (
                <div
                  key={id}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 hover:border-purple-500/50 transition-all cursor-pointer p-6"
                  onClick={() => setLocation(`/blog/${id}`)}
                >
                  <div className="text-4xl mb-4">{art.image}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{art.title}</h3>
                  <p className="text-gray-400 text-sm">{art.readTime} de leitura</p>
                </div>
              ))}
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
