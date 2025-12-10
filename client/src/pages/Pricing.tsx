import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Pricing() {
  const [, setLocation] = useLocation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [currency, setCurrency] = useState<"USD" | "EUR" | "MT" | "ZAR" | "BRL" | "KZA">("MT");

  // Taxas de conversão (aproximadas - 1 MT = X moeda)
  const exchangeRates: Record<string, number> = {
    MT: 1,         // Base: Meticais
    USD: 1 / 63.5, // 1 MT = 0.0157 USD
    EUR: 0.92 / 63.5,  // 1 MT = 0.0145 EUR
    ZAR: 18.5 / 63.5,  // 1 MT = 0.291 ZAR
    BRL: 5.2 / 63.5,   // 1 MT = 0.0819 BRL
    KZA: 910 / 63.5    // 1 MT = 14.33 KZA
  };

  const currencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    MT: "MT",
    ZAR: "R",
    BRL: "R$",
    KZA: "Kz"
  };

  const convertPrice = (priceMT: number) => {
    const rate = exchangeRates[currency];
    const converted = Math.round(priceMT * rate);
    // Para moedas com valores muito altos, usar separador de milhar
    const formatted = converted.toLocaleString('pt-BR');
    return `${currencySymbols[currency]} ${formatted}`;
  };

  const currencyNames: Record<string, string> = {
    USD: "Dólar Americano",
    EUR: "Euro",
    MT: "Meticais (Moçambique)",
    ZAR: "Rand (S. África)",
    BRL: "Real (Brasil)",
    KZA: "Kwanza (Angola)"
  };

  const packages = [
    {
      name: "Starter",
      description: "Perfeito para iniciantes",
      priceMT: billingCycle === "monthly" ? 250 : 2700,
      price: convertPrice(billingCycle === "monthly" ? 250 : 2700),
      period: billingCycle === "monthly" ? "/mês" : "/ano",
      features: [
        { name: "1 vídeo por mês", included: true },
        { name: "Edição básica", included: true },
        { name: "Suporte por email", included: true },
        { name: "Acesso a templates", included: false },
        { name: "Consultoria estratégica", included: false },
        { name: "Análise de performance", included: false }
      ],
      cta: "Começar Agora",
      gumroadLink: "https://gumroad.com/seu-usuario/l/starter-package",
      highlighted: false
    },
    {
      name: "Professional",
      description: "Para empresas em crescimento",
      priceMT: billingCycle === "monthly" ? 5000 : 54000,
      price: convertPrice(billingCycle === "monthly" ? 5000 : 54000),
      period: billingCycle === "monthly" ? "/mês" : "/ano",
      features: [
        { name: "8-12 vídeos por mês", included: true },
        { name: "Edição profissional", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Acesso a templates", included: true },
        { name: "Consultoria estratégica", included: true },
        { name: "Análise de performance", included: false }
      ],
      cta: "Escolher Plano",
      gumroadLink: "https://gumroad.com/seu-usuario/l/professional-package",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Solução completa para grandes marcas",
      priceMT: billingCycle === "monthly" ? 15000 : 162000,
      price: convertPrice(billingCycle === "monthly" ? 15000 : 162000),
      period: billingCycle === "monthly" ? "/mês" : "/ano",
      features: [
        { name: "Vídeos ilimitados", included: true },
        { name: "Edição premium", included: true },
        { name: "Suporte 24/7", included: true },
        { name: "Acesso a templates", included: true },
        { name: "Consultoria estratégica", included: true },
        { name: "Análise de performance", included: true }
      ],
      cta: "Solicitar Proposta",
      gumroadLink: "https://gumroad.com/seu-usuario/l/enterprise-package",
      highlighted: false
    }
  ];

  const services = [
    {
      category: "Produção de Vídeos",
      items: [
        { name: "Vídeo curto (até 60s)", price: "3.000 - 5.000", gumroadLink: "https://gumroad.com/seu-usuario/l/video-curto" },
        { name: "Vídeo médio (até 3min)", price: "5.000 - 10.000", gumroadLink: "https://gumroad.com/seu-usuario/l/video-medio" },
        { name: "Vídeo longo (até 10min)", price: "10.000 - 25.000", gumroadLink: "https://gumroad.com/seu-usuario/l/video-longo" },
        { name: "Série de 5 vídeos", price: "12.000 - 20.000", gumroadLink: "https://gumroad.com/seu-usuario/l/serie-videos" }
      ]
    },
    {
      category: "Infoprodutos",
      items: [
        { name: "Curso online completo", price: "5.000 - 15.000", gumroadLink: "https://gumroad.com/seu-usuario/l/curso-online" },
        { name: "eBook profissional", price: "1.000 - 3.000", gumroadLink: "https://gumroad.com/seu-usuario/l/ebook-profissional" },
        { name: "Pack de templates", price: "500 - 2.000", gumroadLink: "https://gumroad.com/seu-usuario/l/pack-templates" },
        { name: "Pack de prompts IA", price: "250 - 1.000", gumroadLink: "https://gumroad.com/seu-usuario/l/pack-prompts" }
      ]
    },
    {
      category: "Personagens e Animações",
      items: [
        { name: "Design de personagem único", price: "3.000 - 8.000", gumroadLink: "https://gumroad.com/seu-usuario/l/personagem-design" },
        { name: "Personagem com voz e expressões", price: "6.000 - 15.000", gumroadLink: "https://gumroad.com/seu-usuario/l/personagem-voz" },
        { name: "Avatar animado (5 vídeos)", price: "8.000 - 20.000", gumroadLink: "https://gumroad.com/seu-usuario/l/avatar-animado" },
        { name: "Personagem 3D profissional", price: "15.000 - 40.000", gumroadLink: "https://gumroad.com/seu-usuario/l/personagem-3d" }
      ]
    },
    {
      category: "Formações e Workshops",
      items: [
        { name: "Workshop online (3h)", price: "500 - 1.500 por pessoa", gumroadLink: "https://gumroad.com/seu-usuario/l/workshop-online" },
        { name: "Formação corporativa", price: "5.000 - 25.000", gumroadLink: "https://gumroad.com/seu-usuario/l/formacao-corporativa" },
        { name: "Consultoria 1:1 (1h)", price: "500 - 2.000", gumroadLink: "https://gumroad.com/seu-usuario/l/consultoria-1v1" },
        { name: "Mentoria mensal", price: "2.000 - 5.000", gumroadLink: "https://gumroad.com/seu-usuario/l/mentoria-mensal" }
      ]
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
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
              Preços Transparentes
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            Escolha o plano perfeito para suas necessidades. Sem taxas ocultas, sem surpresas.
          </p>

          {/* Billing Toggle and Currency */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="inline-flex items-center gap-4 p-1 bg-white/10 rounded-lg border border-white/20">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === "monthly"
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === "yearly"
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Anual <span className="text-green-400 text-sm ml-1">(10% desc.)</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-2 bg-white/10 rounded-lg border border-white/20">
              <span className="text-gray-400 text-sm px-2">Moeda:</span>
              {["USD", "EUR", "MT", "ZAR", "BRL", "KZA"].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as "USD" | "EUR" | "MT" | "ZAR" | "BRL" | "KZA")}
                  className={`px-3 py-1 rounded-md transition-all text-xs font-semibold whitespace-nowrap ${
                    currency === curr
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  title={currencyNames[curr]}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${
                  pkg.highlighted
                    ? "border-purple-500/50 bg-gradient-to-br from-purple-900/30 to-blue-900/30 ring-2 ring-purple-500/20 scale-105"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ MAIS POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">
                      {pkg.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">{pkg.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <a
                      href={pkg.gumroadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block text-center px-4 py-2 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 ${
                        pkg.highlighted
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-transparent border-2 border-purple-500/50 text-white hover:bg-purple-500/10"
                      }`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/258848087372"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold text-sm"
                    >
                      WhatsApp Business
                    </a>
                  </div>

                  <div className="space-y-4">
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included ? "text-gray-300" : "text-gray-500"
                          }
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À la carte Services */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Serviços à la Carte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded" />
                  {service.category}
                </h3>

                <div className="space-y-4">
                  {service.items.map((item, iidx) => (
                    <a
                      key={iidx}
                      href={item.gumroadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors hover:bg-purple-500/5 cursor-pointer"
                    >
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-purple-400 font-semibold">{item.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Perguntas Frequentes</h2>

          <div className="space-y-6">
            {[
              {
                q: "Posso cancelar minha assinatura a qualquer momento?",
                a: "Sim, você pode cancelar sua assinatura a qualquer momento sem penalidades. Basta entrar em contato com nossa equipe."
              },
              {
                q: "Vocês oferecem descontos para contratos anuais?",
                a: "Sim! Oferecemos 10% de desconto para pagamentos anuais em todos os planos."
              },
              {
                q: "Posso mudar de plano durante minha assinatura?",
                a: "Claro! Você pode fazer upgrade ou downgrade a qualquer momento. Ajustaremos o valor proporcionalmente."
              },
              {
                q: "Quais são os prazos de entrega?",
                a: "Os prazos variam conforme o tipo de projeto. Vídeos curtos: 5-7 dias. Projetos maiores: 2-4 semanas."
              },
              {
                q: "Vocês oferecem suporte técnico?",
                a: "Sim! Clientes Professional e Enterprise recebem suporte prioritário. Starter tem suporte por email."
              },
              {
                q: "Posso solicitar revisões?",
                a: "Sim, incluímos até 2 rodadas de revisão em todos os projetos. Revisões adicionais têm custo extra."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ainda tem dúvidas?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Nossa equipe está pronta para ajudar você a escolher o plano perfeito.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setLocation("/#contact-form")}
          >
            Solicitar Consulta Gratuita
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
