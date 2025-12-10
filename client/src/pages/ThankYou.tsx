import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Mail, Calendar, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function ThankYou() {
  const [, setLocation] = useLocation();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setLocation("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center border border-blue-400/50">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-bold text-lg md:text-xl hidden sm:inline">SAVVY</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
              <CheckCircle className="w-24 h-24 text-green-400 relative z-10" />
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Obrigado!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              A tua mensagem foi recebida com sucesso
            </p>
            <p className="text-gray-400 text-lg">
              Estamos muito entusiasmados em trabalhar contigo para transformar o teu negócio
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-8">O que acontece agora?</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Confirmação por Email</h3>
                  <p className="text-gray-400">
                    Receberás um email de confirmação nos próximos minutos com os detalhes do teu contacto
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Agendamento da Reunião</h3>
                  <p className="text-gray-400">
                    A nossa equipa entrará em contacto para agendar uma reunião de descoberta personalizada
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Análise X-Ray Gratuita</h3>
                  <p className="text-gray-400">
                    Receberás uma análise completa do teu negócio e um plano de ação personalizado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Enquanto isso...</h2>
            <p className="text-gray-300 mb-6">
              Explora os nossos recursos e descobre como outras empresas como a tua transformaram o seu crescimento
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                onClick={() => setLocation("/#cases")}
              >
                Ver Casos de Estudo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10 flex-1"
                onClick={() => setLocation("/#blog")}
              >
                Ler Blog
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4">
              Se tiveres alguma dúvida, contacta-nos diretamente:
            </p>
            <a
              href="https://wa.me/258848087372"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.929 1.242c-1.51.738-2.813 1.746-3.848 3.039C2.063 10.731 1.5 12.622 1.5 14.556c0 1.864.471 3.681 1.379 5.335L1.3 23.697a.75.75 0 00.933.933l4.806-1.579A9.868 9.868 0 0012.05 23c5.168 0 9.449-4.281 9.449-9.449 0-2.527-.981-4.9-2.764-6.684-1.784-1.784-4.157-2.765-6.684-2.765z" />
              </svg>
              Chat no WhatsApp
            </a>
          </div>

          {/* Auto-redirect Message */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Redirecionando para a página inicial em <span className="text-blue-400 font-semibold">{countdown}</span> segundos...
            </p>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white/5 mt-4"
              onClick={() => setLocation("/")}
            >
              Voltar Agora
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SAVVY Growth Agency. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
