

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-[#a1d6dc] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logos/Colorida.png" alt="Communicare" className="h-12 w-auto" />
          </div>
          
          {/* Navegação */}
          <nav className="hidden md:flex space-x-8">
            <a href="#quem-somos" className="text-[#4c3e92] hover:text-[#009db0] font-medium transition-colors duration-200">Quem Somos</a>
            <a href="#diferenciais" className="text-[#4c3e92] hover:text-[#009db0] font-medium transition-colors duration-200">Diferenciais</a>
            <a href="#servicos" className="text-[#4c3e92] hover:text-[#009db0] font-medium transition-colors duration-200">Serviços</a>
            <a href="#profissionais" className="text-[#4c3e92] hover:text-[#009db0] font-medium transition-colors duration-200">Profissionais</a>
            <a href="#depoimentos" className="text-[#4c3e92] hover:text-[#009db0] font-medium transition-colors duration-200">Depoimentos</a>
            <a href="#contato" className="text-[#4c3e92] hover:text-[#009db0] font-medium transition-colors duration-200">Contato</a>
          </nav>

          {/* Menu Mobile */}
          <button className="md:hidden text-[#4c3e92] hover:text-[#009db0]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Seção 1: Vídeo do Slogan */}
      <section id="hero" className="w-full min-h-screen bg-gradient-to-br from-[#009db0] to-[#a1d6dc] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-title">
            Vídeo do Slogan
          </h1>
          <div className="w-full max-w-4xl mx-auto bg-black/30 rounded-lg p-8">
            <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Área do Vídeo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Quem Somos */}
      <section id="quem-somos" className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-[#e5007e] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                          <h3 className="text-2xl font-semibold text-[#4c3e92] font-title">
              Título da Seção
            </h3>
              <div className="space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
            
            <div className="bg-[#a1d6dc] rounded-lg p-8 h-64 flex items-center justify-center">
              <span className="text-[#4c3e92] text-lg">Imagem/Ilustração</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Diferenciais */}
      <section id="diferenciais" className="w-full py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Diferenciais
            </h2>
            <div className="w-24 h-1 bg-[#f19100] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Diferencial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#e5007e] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Diferencial 1
              </h3>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#f19100] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Diferencial 2
              </h3>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#37a935] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Diferencial 3
              </h3>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Nossos Serviços */}
      <section id="servicos" className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-[#37a935] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white rounded-lg shadow-lg border border-[#a1d6dc] p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#009db0] rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">S1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Serviço 1
              </h3>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white rounded-lg shadow-lg border border-[#a1d6dc] p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#e5007e] rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">S2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Serviço 2
              </h3>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white rounded-lg shadow-lg border border-[#a1d6dc] p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#f19100] rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">S3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Serviço 3
              </h3>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Nossos Profissionais */}
      <section id="profissionais" className="w-full py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Nossos Profissionais
            </h2>
            <div className="w-24 h-1 bg-[#009db0] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Profissional 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-[#a1d6dc] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#4c3e92] text-2xl">P1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Profissional 1
              </h3>
              <div className="w-20 h-3 bg-gray-200 rounded mx-auto"></div>
            </div>

            {/* Profissional 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-[#a1d6dc] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#4c3e92] text-2xl">P2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Profissional 2
              </h3>
              <div className="w-20 h-3 bg-gray-200 rounded mx-auto"></div>
            </div>

            {/* Profissional 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-[#a1d6dc] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#4c3e92] text-2xl">P3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Profissional 3
              </h3>
              <div className="w-20 h-3 bg-gray-200 rounded mx-auto"></div>
            </div>

            {/* Profissional 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-[#a1d6dc] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#4c3e92] text-2xl">P4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Profissional 4
              </h3>
              <div className="w-20 h-3 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Depoimentos */}
      <section id="depoimentos" className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Depoimentos
            </h2>
            <div className="w-24 h-1 bg-[#e5007e] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-[#009db0]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a1d6dc] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-[#4c3e92] text-sm">D1</span>
                </div>
                <div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded mt-1"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-[#e5007e]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a1d6dc] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-[#4c3e92] text-sm">D2</span>
                </div>
                <div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded mt-1"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-[#f19100]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a1d6dc] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-[#4c3e92] text-sm">D3</span>
                </div>
                <div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded mt-1"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7: Contato */}
      <section id="contato" className="w-full py-16 md:py-24 bg-gradient-to-br from-[#009db0] to-[#a1d6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Contato
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Entre em Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div className="w-32 h-4 bg-white/20 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div className="w-40 h-4 bg-white/20 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div className="w-48 h-4 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Envie uma Mensagem
              </h3>
              <div className="space-y-4">
                <div className="w-full h-12 bg-white/20 rounded-lg"></div>
                <div className="w-full h-12 bg-white/20 rounded-lg"></div>
                <div className="w-full h-24 bg-white/20 rounded-lg"></div>
                <button className="w-full bg-[#e5007e] hover:bg-[#cc0072] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#4c3e92] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="col-span-1 md:col-span-2">
              <img src="/logos/Branca.png" alt="Communicare" className="h-12 w-auto mb-4" />
              <div className="space-y-2">
                <div className="w-full h-4 bg-white/20 rounded"></div>
                <div className="w-3/4 h-4 bg-white/20 rounded"></div>
              </div>
            </div>
            
            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-title">
                Links Rápidos
              </h4>
              <div className="space-y-2">
                <div className="w-20 h-3 bg-white/20 rounded"></div>
                <div className="w-24 h-3 bg-white/20 rounded"></div>
                <div className="w-16 h-3 bg-white/20 rounded"></div>
              </div>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-title">
                Contato
              </h4>
              <div className="space-y-2">
                <div className="w-28 h-3 bg-white/20 rounded"></div>
                <div className="w-32 h-3 bg-white/20 rounded"></div>
                <div className="w-24 h-3 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="w-48 h-4 bg-white/20 rounded mx-auto"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
