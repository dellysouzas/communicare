

import { useState } from 'react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-[#a1d6dc] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logos/Elemento colorido.png" alt="Communicare" className="h-16 w-auto" />
          </div>
          
          {/* Navegação */}
          <nav className="hidden md:flex space-x-8">
            <a href="#quem-somos" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-4 py-2 rounded-lg overflow-hidden">
              <span className="relative z-10">Quem somos</span>
              <div className="absolute inset-0 bg-[#e5007e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#diferenciais" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-4 py-2 rounded-lg overflow-hidden">
              <span className="relative z-10">Diferenciais</span>
              <div className="absolute inset-0 bg-[#f19100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#servicos" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-4 py-2 rounded-lg overflow-hidden">
              <span className="relative z-10">Serviços</span>
              <div className="absolute inset-0 bg-[#37a935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#profissionais" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-4 py-2 rounded-lg overflow-hidden">
              <span className="relative z-10">Profissionais</span>
              <div className="absolute inset-0 bg-[#009db0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#depoimentos" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-4 py-2 rounded-lg overflow-hidden">
              <span className="relative z-10">Depoimentos</span>
              <div className="absolute inset-0 bg-[#e5007e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#contato" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-4 py-2 rounded-lg overflow-hidden">
              <span className="relative z-10">Contato</span>
              <div className="absolute inset-0 bg-[#f19100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
          </nav>

          {/* Botão CTA */}
          <div className="hidden md:block">
            <a href="#contato" className="bg-[#f19100] hover:bg-[#d98200] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl font-title">
              Agende sua consulta
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Botão CTA Mobile */}
            <a href="#contato" className="bg-[#f19100] hover:bg-[#d98200] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 font-title text-sm">
              Agende sua consulta
            </a>
            
            {/* Menu Hamburguer */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-500 ease-out transform hover:scale-110 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-br from-[#e5007e] to-[#f19100] text-white shadow-lg scale-105 rotate-12' 
                  : 'text-[#4c3e92] hover:text-[#009db0] hover:bg-gradient-to-br hover:from-[#4c3e92]/10 hover:to-[#009db0]/10'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                {/* Linha superior com animação lúdica */}
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-1.5 scale-110' 
                    : 'rotate-0 translate-y-0 scale-100'
                }`}></span>
                
                {/* Linha do meio com efeito de desaparecimento */}
                <span className={`block w-5 h-0.5 bg-current my-1 transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0 rotate-180' 
                    : 'opacity-100 scale-100 rotate-0'
                }`}></span>
                
                {/* Linha inferior com animação lúdica */}
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? '-rotate-45 -translate-y-1.5 scale-110' 
                    : 'rotate-0 translate-y-0 scale-100'
                }`}></span>
                
                {/* Elementos decorativos que aparecem quando aberto */}
                <div className={`absolute inset-0 transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}>
                  {/* Pontos decorativos */}
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute top-1/2 -right-0.5 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </button>
            
            {/* Menu Mobile Dropdown */}
            <div className={`absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#a1d6dc] transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
              <div className="px-4 py-6 space-y-2">
                {/* Quem somos */}
                <div className="bg-gradient-to-r from-[#e5007e]/10 to-transparent rounded-lg p-3 border-l-4 border-[#e5007e]">
                  <a href="#quem-somos" className="block text-[#4c3e92] hover:text-[#e5007e] font-semibold transition-colors duration-200 font-title py-2">
                    Quem somos
                  </a>
                </div>
                
                {/* Diferenciais */}
                <div className="bg-gradient-to-r from-[#f19100]/10 to-transparent rounded-lg p-3 border-l-4 border-[#f19100]">
                  <a href="#diferenciais" className="block text-[#4c3e92] hover:text-[#f19100] font-semibold transition-colors duration-200 font-title py-2">
                    Diferenciais
                  </a>
                </div>
                
                {/* Serviços */}
                <div className="bg-gradient-to-r from-[#37a935]/10 to-transparent rounded-lg p-3 border-l-4 border-[#37a935]">
                  <a href="#servicos" className="block text-[#4c3e92] hover:text-[#37a935] font-semibold transition-colors duration-200 font-title py-2">
                    Serviços
                  </a>
                </div>
                
                {/* Profissionais */}
                <div className="bg-gradient-to-r from-[#009db0]/10 to-transparent rounded-lg p-3 border-l-4 border-[#009db0]">
                  <a href="#profissionais" className="block text-[#4c3e92] hover:text-[#009db0] font-semibold transition-colors duration-200 font-title py-2">
                    Profissionais
                  </a>
                </div>
                
                {/* Depoimentos */}
                <div className="bg-gradient-to-r from-[#e5007e]/10 to-transparent rounded-lg p-3 border-l-4 border-[#e5007e]">
                  <a href="#depoimentos" className="block text-[#4c3e92] hover:text-[#e5007e] font-semibold transition-colors duration-200 font-title py-2">
                    Depoimentos
                  </a>
                </div>
                
                {/* Contato */}
                <div className="bg-gradient-to-r from-[#f19100]/10 to-transparent rounded-lg p-3 border-l-4 border-[#f19100]">
                  <a href="#contato" className="block text-[#4c3e92] hover:text-[#f19100] font-semibold transition-colors duration-200 font-title py-2">
                    Contato
                  </a>
                </div>
                
                {/* Botão CTA Mobile */}
                <div className="pt-4 mt-6 border-t border-gray-200">
                  <a href="#contato" className="block w-full bg-[#f19100] hover:bg-[#d98200] text-white py-4 px-6 rounded-lg font-medium transition-colors duration-200 text-center font-title shadow-lg">
                    Agende sua consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Seção 1: Hero */}
      <section id="hero" className="relative w-full bg-gradient-to-br from-[#00b8cc] via-[#00a8bc] to-[#0098ac] overflow-hidden">
        {/* Elementos de fundo decorativos */}
        <div className="absolute inset-0">
          {/* Círculos decorativos */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#a1d6dc]/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#e5007e]/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#f19100]/10 rounded-full blur-xl"></div>
          
          {/* Linhas geométricas sutis */}
          <div className="absolute top-1/3 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#a1d6dc]/30 to-transparent"></div>
          <div className="absolute bottom-1/4 left-20 w-32 h-px bg-gradient-to-r from-transparent via-[#a1d6dc]/20 to-transparent"></div>
          
          {/* Estrelas decorativas - Lado esquerdo */}
          <div className="absolute top-16 left-8 w-8 h-8 opacity-30 transform -rotate-12">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute top-1/3 left-6 w-6 h-6 opacity-20 transform rotate-45">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-1/3 left-10 w-10 h-10 opacity-25 transform -rotate-30">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-20 left-4 w-5 h-5 opacity-15 transform rotate-15">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          
          {/* Estrelas decorativas - Lado direito */}
          <div className="absolute top-24 right-12 w-7 h-7 opacity-30 transform rotate-60">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute top-1/2 right-8 w-9 h-9 opacity-20 transform -rotate-45">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-1/4 right-6 w-6 h-6 opacity-25 transform rotate-20">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-16 right-10 w-8 h-8 opacity-15 transform -rotate-75">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
        </div>
        
        {/* Overlay sutil para melhor contraste */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Conteúdo principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
            {/* Texto principal */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white font-title leading-tight">
                  Transformando
                  <span className="block text-[#a1d6dc]">vidas através</span>
                  <span className="block text-[#f4a261]">do cuidado</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  A <strong>Communicare</strong> nasceu do sonho de uma fonoaudióloga com mais de 26 anos de experiência. Criamos um espaço de <span className="text-[#a1d6dc] font-semibold">acolhimento</span>, <span className="text-[#a1d6dc] font-semibold">empatia</span> e <span className="text-[#a1d6dc] font-semibold">estímulo</span> para transformar vidas através do desenvolvimento humano.
                </p>
              </div>
              
              {/* Botões CTA */}
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 justify-center lg:justify-start">
                <a href="#contato" className="inline-flex items-center justify-center px-10 py-5 sm:px-8 sm:py-4 bg-[#e5007e] hover:bg-[#cc0072] text-white font-semibold rounded-xl sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-title text-lg sm:text-base">
                  Fale conosco
                  <svg className="ml-3 sm:ml-2 w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#quem-somos" className="inline-flex items-center justify-center px-10 py-5 sm:px-8 sm:py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white/60 font-semibold rounded-xl sm:rounded-lg transition-all duration-300 font-title text-lg sm:text-base">
                  Nossa história
                </a>
              </div>
              
              {/* Destaques da empresa */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white font-title">26+</div>
                  <div className="text-xs sm:text-sm text-white/70 font-body">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white font-title">2021</div>
                  <div className="text-xs sm:text-sm text-white/70 font-body">Ano de fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white font-title">100%</div>
                  <div className="text-xs sm:text-sm text-white/70 font-body">Dedicação humana</div>
                </div>
              </div>
              
              {/* Vídeo - Aparece depois dos números no mobile */}
              <div className="flex lg:hidden items-center justify-center pt-8">
                <div className="relative group">
                  {/* Container do vídeo com efeitos elegantes */}
                  <div className="relative w-full max-w-sm bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                    <video 
                      className="block w-full h-auto"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/videos/videocerto.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                    
                    {/* Overlay sutil no vídeo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    
                    {/* Borda luminosa sutil */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#a1d6dc]/20 via-transparent to-[#e5007e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Sombra elegante */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl transform translate-y-6 blur-2xl group-hover:translate-y-8 transition-transform duration-500"></div>
                  
                  {/* Elementos decorativos flutuantes */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#e5007e] to-[#cc0072] rounded-full animate-pulse shadow-lg">
                    <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-[#f19100] to-[#d98200] rounded-full animate-pulse delay-1000 shadow-lg">
                    <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-[#37a935] to-[#2d8a2b] rounded-full animate-pulse delay-500 shadow-lg">
                    <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                  </div>
                  
                  {/* Linhas decorativas sutis */}
                  <div className="absolute top-8 -right-16 w-16 h-px bg-gradient-to-l from-[#a1d6dc]/40 to-transparent"></div>
                  <div className="absolute bottom-8 -left-16 w-16 h-px bg-gradient-to-r from-[#e5007e]/40 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Vídeo - Desktop (lado direito) */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative group">
                {/* Container do vídeo com efeitos elegantes */}
                <div className="relative w-full max-w-sm lg:max-w-none bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  <video 
                    className="block w-full h-auto"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/videocerto.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  
                  {/* Overlay sutil no vídeo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  
                  {/* Borda luminosa sutil */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#a1d6dc]/20 via-transparent to-[#e5007e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Sombra elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl transform translate-y-6 blur-2xl group-hover:translate-y-8 transition-transform duration-500"></div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#e5007e] to-[#cc0072] rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-[#f19100] to-[#d98200] rounded-full animate-pulse delay-1000 shadow-lg">
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-[#37a935] to-[#2d8a2b] rounded-full animate-pulse delay-500 shadow-lg">
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Linhas decorativas sutis */}
                <div className="absolute top-8 -right-16 w-16 h-px bg-gradient-to-l from-[#a1d6dc]/40 to-transparent"></div>
                <div className="absolute bottom-8 -left-16 w-16 h-px bg-gradient-to-r from-[#e5007e]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="relative pb-8 text-center">
          <div className="flex flex-col items-center space-y-2 text-white/60 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Seção 2: Quem somos */}
      <section id="quem-somos" className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4c3e92] mb-6 font-title">
              Quem somos
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
                <button className="w-full bg-[#e5007e] hover:bg-[#cc0072] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 font-title">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <img src="/logos/Branca.png" alt="Communicare" className="h-12 w-auto mb-4" />
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Clínica especializada em comunicação e desenvolvimento humano, oferecendo serviços personalizados para melhorar suas habilidades de comunicação e relacionamento.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.297 2.026 1.297 3.323s-.422 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.49-1.787 0s-.49-1.297 0-1.787c.49-.49 1.297-.49 1.787 0s.49 1.297 0 1.787z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-title">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li><a href="#quem-somos" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Quem somos</a></li>
                <li><a href="#diferenciais" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Diferenciais</a></li>
                <li><a href="#servicos" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Serviços</a></li>
                <li><a href="#profissionais" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Profissionais</a></li>
                <li><a href="#depoimentos" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Depoimentos</a></li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-title">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-white/70 text-sm">
                  <span className="mr-2">📞</span>
                  (81) 99999-9999
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <span className="mr-2">📧</span>
                  contato@communicare.com
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <span className="mr-2">📍</span>
                  Recife, PE
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Communicare. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
