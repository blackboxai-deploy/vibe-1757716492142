import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Homem+Confiante')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">DEIXE DE SER APENAS UM CARA LEGAL.</h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-amber-400">TORNE-SE INESQUECÍVEL.</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            O método passo a passo para despertar o desejo e a admiração nas mulheres mais interessantes, mesmo que você seja tímido ou não se considere bonito.
          </p>
          <button className="mt-10 px-8 py-3 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-amber-500 transition-transform transform hover:scale-105">
            QUERO ME TORNAR INESQUECÍVEL
          </button>
          <p className="mt-4 text-sm text-gray-400">Acesso imediato e 100% online.</p>
        </div>
      </section>

      {/* Frustration Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Você se identifica com isso?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Medo da Rejeição</h4>
              <p className="text-gray-400">Você paralisa só de pensar em abordar uma mulher que te atrai.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Friend Zone</h4>
              <p className="text-gray-400">As mulheres te veem apenas como um amigo legal, mas nunca como um homem desejável.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Sem Assunto</h4>
              <p className="text-gray-400">Você não sabe o que dizer e as conversas morrem rapidamente.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Sentimento de Invisibilidade</h4>
              <p className="text-gray-400">Parece que você é invisível para as mulheres mais interessantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-amber-400 mb-8">Imagine uma nova realidade...</h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
            E se você pudesse andar em qualquer ambiente com uma confiança inabalável, sabendo exatamente como gerar atração e criar conexões profundas com as mulheres que você deseja? Essa não é uma realidade distante. É o que o Código da Atração vai construir com você.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Confiança Inabalável</h4>
              <p className="text-gray-400">Sinta-se seguro e no controle em qualquer situação social, sabendo que você é um homem de alto valor.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Atração Genuína</h4>
              <p className="text-gray-400">Aprenda a criar uma atração que vai além da aparência, baseada em sua personalidade e atitude.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-amber-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Poder de Escolha</h4>
              <p className="text-gray-400">Deixe de ser o coadjuvante e passe a ser o homem que escolhe com quem quer se relacionar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="bg-gray-800 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold">O Código da Atração</h3>
            <p className="text-lg text-gray-400 mt-2">O que você vai dominar:</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold">Módulo 1: A Mentalidade Alfa</h4>
                <p className="text-gray-400">Reprograme sua mente para a confiança e o sucesso social.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold">Módulo 2: A Arte da Conversa Magnética</h4>
                <p className="text-gray-400">Domine a habilidade de iniciar e manter conversas que fascinam.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold">Módulo 3: Linguagem Corporal Que Seduz</h4>
                <p className="text-gray-400">Use seu corpo para comunicar poder, confiança e atração sem dizer uma palavra.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold">Módulo 4: Do Online ao Encontro</h4>
                <p className="text-gray-400">Estratégias para ter sucesso em aplicativos e transformar matches em encontros reais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">E ainda... Receba 3 Bônus Exclusivos!</h3>
          <p className="text-lg text-gray-400 mb-8">Ao garantir seu acesso hoje, você leva também:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg border border-amber-400">
              <h4 className="text-xl font-semibold mb-2">Bônus #1</h4>
              <p>Guia de Estilo Masculino: Como se vestir para impressionar.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-amber-400">
              <h4 className="text-xl font-semibold mb-2">Bônus #2</h4>
              <p>Comunidade VIP: Acesso a um grupo exclusivo de alunos.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-amber-400">
              <h4 className="text-xl font-semibold mb-2">Bônus #3</h4>
              <p>Análise de Perfil: Vou analisar seu perfil em apps de paquera.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-amber-400 text-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Pronto para mudar o jogo?</h3>
          <p className="text-xl mb-2">De <span className="line-through">R$497</span> por apenas:</p>
          <p className="text-6xl font-bold mb-4">12x de R$29,90</p>
          <p className="mb-8">(ou R$297 à vista)</p>
          <button className="px-12 py-4 bg-gray-900 text-white font-bold text-xl rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
            QUERO ACESSO IMEDIATO!
          </button>
        </div>
      </section>
      
      {/* Guarantee Section */}
       <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <ShieldCheck className="w-24 h-24 text-green-400" />
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold mb-2">Risco Zero Para Você</h4>
            <p className="max-w-xl text-gray-400">
              Você tem 7 dias para testar o Código da Atração. Se por qualquer motivo você não ficar 100% satisfeito, basta me enviar um único e-mail e eu devolvo todo o seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Isso funciona para homens tímidos?</h4>
              <p className="text-gray-400">Sim. O método foi desenhado para funcionar para qualquer homem, especialmente para aqueles que são tímidos ou introvertidos. Vamos construir sua confiança passo a passo.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Preciso ser bonito ou rico?</h4>
              <p className="text-gray-400">Não. Você aprenderá a gerar atração através da sua personalidade e atitude, que são muito mais poderosas do que aparência ou dinheiro.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">E se eu não tiver resultado?</h4>
              <p className="text-gray-400">Você tem 7 dias de garantia incondicional. Se não gostar, é só pedir seu dinheiro de volta.</p>
            </div>
             <div>
              <h4 className="font-semibold text-lg">Como vou receber o acesso?</h4>
              <p className="text-gray-400">O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com os dados para acessar a área de membros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} O Código da Atração. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
