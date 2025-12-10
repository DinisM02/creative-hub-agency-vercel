import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function TermsOfService() {
  const [, setLocation] = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "payment-methods",
      title: "Métodos de Pagamento",
      content: `Aceitamos os seguintes métodos de pagamento para cada moeda:

**Meticais (MT) - Moçambique:**
- Transferência bancária
- M-Pesa (Vodacom)
- Airtel Money
- Depósito em conta

**Dólar Americano (USD):**
- PayPal
- Stripe
- Transferência bancária internacional
- Cartão de crédito/débito

**Euro (EUR):**
- Transferência SEPA
- PayPal
- Stripe
- Cartão de crédito/débito

**Rand (ZAR) - África do Sul:**
- Transferência bancária
- PayFast
- Capitec
- FNB

**Real (BRL) - Brasil:**
- Pix
- Transferência bancária
- PayPal
- Boleto bancário

**Kwanza (KZA) - Angola:**
- Transferência bancária
- Multicaixa
- Transferência móvel

Todos os pagamentos devem ser realizados antes da entrega dos serviços, exceto em casos de contratos anuais pré-aprovados.`
    },
    {
      id: "refund-policy",
      title: "Política de Reembolso",
      content: `**Período de Reembolso: 7 dias**

Oferecemos reembolso total dentro de 7 dias após o pagamento se:
- O serviço não foi iniciado
- Você não está satisfeito com a qualidade do trabalho inicial
- Houve erro na cobrança

**Não são elegíveis para reembolso:**
- Serviços já entregues e aprovados
- Trabalhos customizados após 48 horas de início
- Cancelamentos após 7 dias
- Serviços de consultoria já realizados

**Processo de Reembolso:**
1. Envie solicitação de reembolso por email
2. Fornecemos motivo e documentação
3. Análise em até 3 dias úteis
4. Reembolso processado em 5-7 dias úteis

**Reembolsos por Moeda:**
- MT: Transferência bancária (2-3 dias úteis)
- USD: PayPal ou Stripe (3-5 dias úteis)
- EUR: SEPA ou PayPal (3-5 dias úteis)
- ZAR: Transferência bancária (2-3 dias úteis)
- BRL: Pix (1 dia útil) ou transferência (2-3 dias)
- KZA: Transferência bancária (3-5 dias úteis)`
    },
    {
      id: "payment-schedule",
      title: "Cronograma de Pagamento",
      content: `**Pacotes Mensais:**
- Pagamento devido no primeiro dia de cada mês
- Serviços iniciados após confirmação do pagamento
- Cancelamento com 7 dias de antecedência

**Pacotes Anuais:**
- Pagamento único no início do contrato
- Desconto de 10% aplicado automaticamente
- Reembolso proporcional se cancelado antes de 6 meses
- Sem reembolso após 6 meses de uso

**Serviços à la Carte:**
- 50% de depósito para iniciar
- Saldo devido antes da entrega final
- Prazos de entrega começam após pagamento do depósito

**Taxas de Transação:**
- MT: Sem taxa adicional
- USD: +2% para pagamentos internacionais
- EUR: +1.5% para pagamentos SEPA
- ZAR: +2% para transferências
- BRL: Sem taxa para Pix, +1% para boleto
- KZA: +2% para transferências internacionais`
    },
    {
      id: "late-payment",
      title: "Política de Atraso de Pagamento",
      content: `**Consequências de Pagamento Atrasado:**

- **1-3 dias**: Aviso por email
- **4-7 dias**: Suspensão de serviços
- **8-14 dias**: Possível cancelamento de contrato
- **15+ dias**: Encaminhamento para cobrança

**Multa por Atraso:**
- 2% de juros ao mês sobre o valor em atraso
- Máximo de 10% do valor total do contrato

**Reativação Após Atraso:**
- Pagamento do valor em atraso + multa
- Possível taxa de reativação de 5%
- Serviços retomados em até 24 horas

**Exceções:**
- Problemas técnicos comprovados
- Situações de força maior
- Acordos prévios de extensão`
    },
    {
      id: "currency-conversion",
      title: "Conversão de Moedas",
      content: `**Taxas de Câmbio Utilizadas:**

As taxas de câmbio são atualizadas diariamente com base em:
- Taxas de mercado interbancário
- Provedores de pagamento oficiais
- Banco Central relevante

**Taxas Aplicadas (aproximadas):**
- 1 MT = $0.0157 USD
- 1 MT = €0.0145 EUR
- 1 MT = 0.291 ZAR
- 1 MT = 0.0819 BRL
- 1 MT = 14.33 KZA

**Variação de Câmbio:**
- Preços em MT são fixos
- Preços em outras moedas podem variar diariamente
- Cotação final confirmada no momento do pagamento
- Diferenças de câmbio não geram reembolso

**Proteção do Cliente:**
- Preço bloqueado por 24 horas após cotação
- Notificação se taxa variar mais de 5%
- Opção de cancelamento sem penalidade se taxa variar mais de 10%`
    },
    {
      id: "payment-disputes",
      title: "Disputas de Pagamento",
      content: `**Processo de Resolução:**

1. **Contato Inicial** (24 horas)
   - Envie detalhes da disputa por email
   - Inclua comprovante de pagamento
   - Descreva o problema

2. **Investigação** (3-5 dias úteis)
   - Análise da transação
   - Verificação de registros
   - Comunicação com provedor de pagamento

3. **Resolução** (5-10 dias úteis)
   - Reembolso se erro confirmado
   - Documentação fornecida
   - Comunicação de resultado

**Tipos de Disputas:**
- Pagamento duplicado
- Cobrança não autorizada
- Serviço não entregue
- Qualidade insatisfatória
- Erro de moeda

**Proteção do Consumidor:**
- Conformidade com regulações locais
- Proteção de dados de pagamento
- Segurança PCI DSS
- Suporte multilíngue`
    },
    {
      id: "cancellation",
      title: "Política de Cancelamento",
      content: `**Cancelamento de Pacotes Mensais:**
- Aviso com 7 dias de antecedência
- Sem penalidade se cancelado antes do próximo ciclo
- Reembolso proporcional se cancelado no meio do mês

**Cancelamento de Pacotes Anuais:**
- Reembolso de 100% se cancelado nos primeiros 30 dias
- Reembolso de 50% se cancelado entre 30-180 dias
- Sem reembolso após 180 dias
- Desconto de 10% não é reembolsável

**Cancelamento de Serviços à la Carte:**
- Reembolso total se cancelado antes do início
- 50% de reembolso se cancelado durante a produção
- Sem reembolso após entrega

**Processo de Cancelamento:**
1. Envie solicitação por email
2. Confirme a decisão
3. Processamento em 2-3 dias úteis
4. Reembolso em 5-7 dias úteis

**Dados Após Cancelamento:**
- Acesso removido em 30 dias
- Backup fornecido sob solicitação
- Conformidade com LGPD/GDPR`
    },
    {
      id: "taxes",
      title: "Impostos e Taxas",
      content: `**Responsabilidade Fiscal:**

Os clientes são responsáveis por qualquer imposto local aplicável:
- IVA/GST
- Imposto de renda
- Taxas de importação
- Outras obrigações fiscais locais

**Emissão de Faturas:**
- Fatura emitida para todos os pagamentos
- Detalhamento de serviços fornecido
- Número de identificação fiscal incluído
- Disponível em português, inglês e espanhol

**Retenção Fiscal:**
- Aplicável conforme legislação local
- Documentação fornecida para dedução
- Conformidade com autoridades fiscais

**Moedas e Impostos:**
- MT: Impostos conforme legislação moçambicana
- USD/EUR: Sem imposto adicional (cliente responsável)
- ZAR: Conformidade com SARS
- BRL: Conformidade com Receita Federal
- KZA: Conformidade com autoridades angolanas`
    },
    {
      id: "contact",
      title: "Contato e Suporte",
      content: `**Dúvidas sobre Pagamento:**
- Email: financeiro@creativehub.com
- WhatsApp Business: +258 848 087 372
- Horário: Segunda-Sexta, 9h-17h (Horário de Moçambique)

**Suporte Técnico:**
- Email: suporte@creativehub.com
- Chat ao vivo: Disponível no website
- Tempo de resposta: Até 2 horas

**Escalações:**
- Gerente de Contas: contas@creativehub.com
- Diretor Financeiro: financeiro@creativehub.com
- Diretor Geral: contato@creativehub.com

**Documentação Necessária:**
- Comprovante de pagamento
- Número de transação
- Data e hora da transação
- Descrição do problema

**Resolução de Conflitos:**
- Mediação amigável (7 dias)
- Arbitragem (se necessário)
- Conformidade com legislação local`
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
              Termos de Serviço
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Políticas de pagamento, reembolso e termos gerais para todos os nossos serviços
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 md:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-400 transition-transform flex-shrink-0 ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === section.id && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-12 p-6 rounded-lg bg-white/5 border border-white/10">
            <p className="text-gray-400 text-sm">
              <strong>Última atualização:</strong> Novembro 2024
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Estes Termos de Serviço podem ser atualizados a qualquer momento. Recomendamos revisar periodicamente para mudanças.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-b border-white/10 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Escolha o plano perfeito para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setLocation("/pricing")}
            >
              Ver Preços
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => setLocation("/contact")}
            >
              Fale Conosco
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
