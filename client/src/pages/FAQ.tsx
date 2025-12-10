import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function FAQ() {
  const [, setLocation] = useLocation();
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      category: "Serviços",
      question: "Qual é a diferença entre os pacotes de produção de vídeo?",
      answer: "Nossos pacotes variam em complexidade e escopo. O pacote Starter inclui até 3 vídeos simples por mês. O pacote Professional inclui até 8 vídeos com roteiros customizados. O pacote Enterprise oferece produção ilimitada com equipe dedicada."
    },
    {
      id: 2,
      category: "Serviços",
      question: "Vocês oferecem serviços de edição de vídeos já existentes?",
      answer: "Sim! Oferecemos serviços de edição profissional para vídeos já gravados. Incluímos correção de cores, adição de efeitos, animações, legendas e mais. Entre em contato para uma análise do seu material."
    },
    {
      id: 3,
      category: "Serviços",
      question: "Como funciona a gestão de conteúdo mensal?",
      answer: "Nosso serviço de gestão mensal inclui: planejamento estratégico, criação de conteúdo, agendamento em redes sociais, análise de performance e relatórios mensais. Você recebe um dashboard com todas as métricas."
    },
    {
      id: 4,
      category: "Preços",
      question: "Qual é o valor mínimo para um projeto?",
      answer: "Nosso projeto mínimo começa em R$ 500. Oferecemos opções para todos os orçamentos, desde pequenas edições até produções de grande escala. Faça uma consulta gratuita para saber mais."
    },
    {
      id: 5,
      category: "Preços",
      question: "Vocês oferecem parcelamento?",
      answer: "Sim! Oferecemos parcelamento em até 3x sem juros para projetos acima de R$ 1.000. Também aceitamos PIX, transferência bancária e cartão de crédito."
    },
    {
      id: 6,
      category: "Preços",
      question: "Há desconto para contratos anuais?",
      answer: "Sim! Oferecemos desconto de 15% para contratos anuais de gestão de conteúdo. Quanto maior o compromisso, maior o desconto. Consulte nossa equipe para mais detalhes."
    },
    {
      id: 7,
      category: "Processo",
      question: "Qual é o tempo de entrega típico?",
      answer: "Vídeos simples: 5-7 dias úteis. Vídeos com animações: 10-14 dias úteis. Campanhas completas: 15-21 dias úteis. Prazos podem variar conforme a complexidade. Oferecemos opção de entrega express com taxa adicional."
    },
    {
      id: 8,
      category: "Processo",
      question: "Como é o processo de briefing?",
      answer: "Iniciamos com uma reunião de briefing onde discutimos seus objetivos, público-alvo, estilo desejado e prazos. Você recebe um documento de briefing detalhado para aprovação antes de começarmos a produção."
    },
    {
      id: 9,
      category: "Processo",
      question: "Quantas rodadas de revisão estão incluídas?",
      answer: "Incluímos até 2 rodadas de revisão em todos os pacotes. Revisões adicionais têm custo de R$ 150 cada. Alterações significativas podem resultar em ajuste de prazo e orçamento."
    },
    {
      id: 10,
      category: "Direitos",
      question: "Quem é o dono dos vídeos produzidos?",
      answer: "Você é o proprietário total dos vídeos. Nós apenas fornecemos o serviço de produção. Todos os direitos autorais e de uso pertencem a você."
    },
    {
      id: 11,
      category: "Direitos",
      question: "Posso usar os vídeos em múltiplas plataformas?",
      answer: "Sim! Você pode usar os vídeos em qualquer plataforma: YouTube, Instagram, TikTok, Facebook, LinkedIn, seu site, etc. Sem limitações de uso."
    },
    {
      id: 12,
      category: "Suporte",
      question: "Qual é o tempo de resposta do suporte?",
      answer: "Respondemos a todas as dúvidas em até 24 horas úteis. Clientes com contrato mensal recebem suporte prioritário com resposta em até 2 horas."
    }
  ];

  const categories = ["Todos", "Serviços", "Preços", "Processo", "Direitos", "Suporte"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredFaqs = selectedCategory === "Todos" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

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
              Perguntas Frequentes
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setExpandedId(null);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-purple-400 uppercase mb-2 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-400 transition-transform flex-shrink-0 ml-4 ${
                      expandedId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ainda tem dúvidas?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Não encontrou a resposta que procurava? Entre em contato conosco diretamente!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setLocation("/contact")}
            >
              Enviar Mensagem
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => setLocation("/#contact-form")}
            >
              Solicitar Orçamento
            </Button>
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
