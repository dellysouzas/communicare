import { useState, useEffect } from 'react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Estados do Wizard
  const [currentWizardStep, setCurrentWizardStep] = useState(1);
  const [formData, setFormData] = useState({
    responsavelNome: '',
    responsavelTelefone: '',
    idade: '',
    encaminhamento: '',
    quemEncaminhou: '',
    especialidade: '',
    profissionalPreferencia: '',
    horarioPreferencia: ''
  });
  
  // Efeito para animar elementos quando entrarem na viewport
  useEffect(() => {
    // Função para animar a foto da fundadora quando entrar na tela
    const animateFounderPhoto = () => {
      const founderSection = document.getElementById('quem-somos');
      if (!founderSection) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando a seção "Quem somos" entrar na viewport
            const founderPhoto = entry.target.querySelector('.founder-photo');
            if (founderPhoto) {
              // Adiciona a animação zoomIn
              founderPhoto.classList.add('animate__animated', 'animate__zoomIn');
              
              // Remove a classe após a animação terminar
              founderPhoto.addEventListener('animationend', () => {
                founderPhoto.classList.remove('animate__animated', 'animate__zoomIn');
              }, { once: true });
            }
            
            // Para de observar após animar
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.3, // Anima quando 30% da seção estiver visível
        rootMargin: '0px 0px -50px 0px' // Anima um pouco antes de entrar completamente
      });
      
      observer.observe(founderSection);
    };
    
    // Função para animar os diferenciais quando entrarem na tela
    const animateDifferentials = () => {
      const differentialsSection = document.getElementById('diferenciais');
      if (!differentialsSection) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando a seção "Diferenciais" entrar na viewport
            const differentialCards = entry.target.querySelectorAll('.differential-card');
            
            differentialCards.forEach((card, index) => {
              const animation = card.dataset.animation;
              const delay = parseInt(card.dataset.delay);
              
              // Anima cada card com delay sequencial
              setTimeout(() => {
                card.classList.add('animate__animated', `animate__${animation}`);
                
                // Remove a classe após a animação terminar
                card.addEventListener('animationend', () => {
                  card.classList.remove('animate__animated', `animate__${animation}`);
                }, { once: true });
              }, delay);
            });
            
            // Para de observar após animar
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2, // Anima quando 20% da seção estiver visível
        rootMargin: '0px 0px -100px 0px' // Anima um pouco antes de entrar completamente
      });
      
      observer.observe(differentialsSection);
    };
    
    // Executa as animações
    animateFounderPhoto();
    animateDifferentials();
    
    // Cleanup
    return () => {
      // Limpa observers se necessário
    };
  }, []);

  // Funções do carrossel
  const scrollCarousel = (direction) => {
    if (direction === 'next') {
      setCurrentSlide(prev => prev === 14 ? 0 : prev + 1);
    } else {
      setCurrentSlide(prev => prev === 0 ? 14 : prev - 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Função para lidar com o envio do formulário
  const handleWizardSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode implementar a lógica de envio
    // Por exemplo, enviar para um endpoint da API ou WhatsApp
    const message = `🚀 *NOVO AGENDAMENTO - COMMUNICARE* 🚀

👤 *Responsável:* ${formData.responsavelNome}
📱 *Telefone:* ${formData.responsavelTelefone}
👶 *Idade da criança:* ${formData.idade}
📋 *Encaminhamento:* ${formData.encaminhamento === 'sim' ? `Sim - ${formData.quemEncaminhou}` : 'Não'}
🏥 *Especialidade:* ${formData.especialidade}
👩‍⚕️ *Profissional preferido:* ${formData.profissionalPreferencia || 'Sem preferência'}
⏰ *Horário preferido:* ${formData.horarioPreferencia || 'Sem preferência'}

_Formulário enviado via site da Communicare_`;

    // Abrir WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/5581998660984?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Resetar formulário
    setFormData({
      responsavelNome: '',
      responsavelTelefone: '',
      idade: '',
      encaminhamento: '',
      quemEncaminhou: '',
      especialidade: '',
      profissionalPreferencia: '',
      horarioPreferencia: ''
    });
    setCurrentWizardStep(1);
  };

  // Efeito para atualizar o carrossel quando currentSlide mudar
  useEffect(() => {
    const carousel = document.getElementById('professionals-carousel');
    if (carousel) {
      const slideWidth = 100 / 15; // 15 slides
      const translateX = -(currentSlide * slideWidth);
      carousel.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentSlide]);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-[#a1d6dc] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src="/logos/Elemento colorido.png" alt="Communicare" className="h-12 sm:h-14 lg:h-16 w-auto" />
          </div>
          
          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#quem-somos" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap">
              <span className="relative z-10">Quem somos</span>
              <div className="absolute inset-0 bg-[#e5007e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#diferenciais" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap">
              <span className="relative z-10">Diferenciais</span>
              <div className="absolute inset-0 bg-[#f19100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#servicos" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap">
              <span className="relative z-10">Serviços</span>
              <div className="absolute inset-0 bg-[#37a935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#profissionais" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap">
              <span className="relative z-10">Profissionais</span>
              <div className="absolute inset-0 bg-[#009db0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#depoimentos" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap">
              <span className="relative z-10">Depoimentos</span>
              <div className="absolute inset-0 bg-[#e5007e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            
            <a href="#contato" className="text-[#4c3e92] hover:text-white font-semibold transition-all duration-300 font-title relative group px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap">
              <span className="relative z-10">Contato</span>
              <div className="absolute inset-0 bg-[#f19100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
          </nav>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <a href="#contato" className="bg-[#f19100] hover:bg-[#d98200] text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl font-title whitespace-nowrap">
              Agende sua visita
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            {/* Botão CTA Mobile */}
            <a href="#contato" className="bg-[#f19100] hover:bg-[#d98200] text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 font-title text-xs sm:text-sm whitespace-nowrap">
              Agende sua visita
            </a>
            
            {/* Menu Hamburguer */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 sm:p-3 rounded-xl transition-all duration-500 ease-out transform hover:scale-110 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-br from-[#e5007e] to-[#f19100] text-white shadow-lg scale-105 rotate-12' 
                  : 'text-[#4c3e92] hover:text-[#009db0] hover:bg-gradient-to-br hover:from-[#4c3e92]/10 hover:to-[#009db0]/10'
              }`}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center relative">
                {/* Linha superior com animação lúdica */}
                <span className={`block w-4 sm:w-5 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-1.5 scale-110' 
                    : 'rotate-0 translate-y-0 scale-100'
                }`}></span>
                
                {/* Linha do meio com efeito de desaparecimento */}
                <span className={`block w-4 sm:w-5 h-0.5 bg-current my-1 transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0 rotate-180' 
                    : 'opacity-100 scale-100 rotate-0'
                }`}></span>
                
                {/* Linha inferior com animação lúdica */}
                <span className={`block w-4 sm:w-5 h-0.5 bg-current transform transition-all duration-500 ease-out ${
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
          </div>
        </div>
            
            {/* Menu Mobile Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#a1d6dc] transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
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
          <div className="absolute top-8 left-4 w-6 h-6 opacity-20 transform -rotate-12">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute top-1/3 left-2 w-4 h-4 opacity-15 transform rotate-45">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-1/3 left-3 w-8 h-8 opacity-25 transform -rotate-30">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          
          {/* Estrelas decorativas - Lado direito */}
          <div className="absolute top-8 right-4 w-7 h-7 opacity-30 transform rotate-60">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute top-1/2 right-2 w-9 h-9 opacity-20 transform -rotate-45">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-1/4 right-3 w-6 h-6 opacity-25 transform rotate-20">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-8 right-4 w-8 h-8 opacity-15 transform -rotate-75">
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
                  <br /><br />
                  A nossa missão é <span className="text-[#a1d6dc] font-semibold">disseminar o que conhecemos</span>, levando informação e qualidade de vida para muitos lares e famílias.
                </p>
              </div>
              
              {/* Botões CTA */}
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 justify-center lg:justify-start">
                <a href="#contato" className="inline-flex items-center justify-center px-10 py-5 sm:px-8 sm:px-8 sm:py-4 bg-[#e5007e] hover:bg-[#cc0072] text-white font-semibold rounded-xl sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-title text-lg sm:text-base">
                  Visite gratuitamente
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
      <section id="quem-somos" className="w-full py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] via-[#e8f4f8] to-[#f0f9ff] relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          {/* Círculos decorativos sutis */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#a1d6dc]/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#e5007e]/5 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#f19100]/8 rounded-full blur-xl"></div>
          
          {/* Linhas geométricas sutis */}
          <div className="absolute top-1/3 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#a1d6dc]/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-20 w-32 h-px bg-gradient-to-r from-transparent via-[#e5007e]/15 to-transparent"></div>
          
          {/* Anzol decorativo sutil */}
          <div className="absolute top-16 right-16 w-16 h-16 opacity-20 transform rotate-12">
            <img src="/elementos/anzol.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-20 left-16 w-12 h-12 opacity-15 transform -rotate-6">
            <img src="/elementos/anzol.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute top-1/2 left-8 w-14 h-14 opacity-25 transform rotate-45">
            <img src="/elementos/anzol.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4c3e92] mb-6 font-title">
              <span className="block text-[#4c3e92]">Cuidando de cada</span>
              <span className="block text-[#e5007e]">criança e adolescente</span>
              <span className="block text-[#f19100]">com amor e dedicação</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f19100] to-[#e5007e] mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Layout de duas colunas: Imagem da fundadora + Texto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 items-stretch max-w-4xl mx-auto">
            {/* Coluna da esquerda - Imagem da fundadora */}
            <div className="text-center lg:text-left flex items-center justify-center lg:justify-start">
              <div className="relative group w-full">
                {/* Container principal com sombra e borda */}
                <div className="w-full max-w-sm sm:max-w-md lg:w-80 h-full mx-auto lg:mx-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#e8f4f8] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl lg:shadow-2xl border border-[#a1d6dc]/30 overflow-hidden">
                  {/* Elementos decorativos de fundo */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#e5007e]/5 to-[#f19100]/5 rounded-full blur-lg lg:blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[#a1d6dc]/10 to-[#4c3e92]/5 rounded-full blur-md lg:blur-xl"></div>
                  
                  {/* Foto da fundadora */}
                  <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-2 sm:border-3 lg:border-4 border-gradient-to-r from-[#e5007e] to-[#f19100] shadow-lg lg:shadow-2xl group-hover:shadow-xl lg:group-hover:shadow-3xl transition-all duration-500 founder-photo" style={{
                      '--animate-duration': '1.5s',
                      '--animate-delay': '0.2s'
                    }}>
                      <img 
                        src="/profissionais/ana sem fundo.png" 
                        alt="Ana Grécia - Fundadora da Communicare" 
                        className="w-full h-full object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {/* Borda luminosa sutil */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e5007e]/20 via-transparent to-[#f19100]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Informações da fundadora */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4c3e92] mb-1 sm:mb-2 font-title">Ana Grécia</h3>
                    <p className="text-xs sm:text-base lg:text-lg text-gray-700 mb-2 sm:mb-4 font-medium">Fundadora, Diretora e Fonoaudióloga</p>
                  </div>
                  
                  {/* Elementos decorativos flutuantes */}
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-[#f19100] to-[#d98200] rounded-full animate-pulse delay-1000 shadow-md sm:shadow-lg">
                    <div className="absolute inset-0.5 sm:inset-1 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coluna da direita - Texto da história */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#e5007e] to-[#f19100] rounded-full"></div>
                <div className="pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    A <span className="font-bold text-[#4c3e92]">Communicare</span> nasceu no Recife/PE em agosto de 2021, em um dos momentos mais desafiadores da nossa história: a pandemia. O que poderia ser apenas um sonho antigo tornou-se realidade quando percebemos a necessidade urgente dos nossos pacientes diante das mudanças impostas pela nova rotina.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#f19100] to-[#a1d6dc] rounded-full"></div>
                <div className="pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    Com mais de <span className="font-semibold text-[#f19100]">26 anos de experiência</span> como fonoaudióloga, nossa fundadora <span className="font-bold text-[#4c3e92]">Ana Grécia</span> decidiu transformar esse desafio em oportunidade: criar um espaço de acolhimento, empatia e estímulo, dedicado a contribuir ainda mais para o desenvolvimento e bem-estar daqueles que confiam em nosso trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Diferenciais */}
      <section id="diferenciais" className="w-full py-12 sm:py-16 md:py-24 bg-[#f19100] relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          {/* Formas geométricas criativas */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#4c3e92]/20 rounded-full blur-xl"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-[#e5007e]/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#4c3e92]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-[#a1d6dc]/15 rounded-full blur-lg"></div>
          
          {/* Triângulos decorativos */}
          <div className="absolute top-1/4 left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#4c3e92]/20 transform rotate-45"></div>
          <div className="absolute top-1/3 right-32 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#e5007e]/15 transform -rotate-12"></div>
          <div className="absolute bottom-1/4 right-20 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#4c3e92]/10 transform rotate-90"></div>
          
          {/* Estrelas decorativas */}
          <div className="absolute top-20 left-1/4 w-6 h-6 opacity-30">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute top-32 right-1/4 w-8 h-8 opacity-25">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <div className="absolute bottom-32 left-1/4 w-7 h-7 opacity-20">
            <img src="/elementos/estrela.png" alt="" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          

        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-title leading-tight">
              <span className="block text-white">O que nos torna</span>
              <span className="block text-[#4c3e92]">únicos</span>
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white max-w-3xl mx-auto mt-8">
              Descubra os diferenciais que fazem da Communicare uma referência em 
              <span className="font-semibold text-[#4c3e92]"> desenvolvimento humanizado</span>, 
              <span className="font-semibold text-white"> cuidando com afeto</span> e 
              <span className="font-semibold text-[#4c3e92]"> excelência profissional</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Diferencial 1: Atendimento Individualizado */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#a1d6dc]/20 group differential-card" data-animation="zoomIn" data-delay="0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#e5007e] to-[#cc0072] rounded-full mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300 interactive-animate">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title">
                Atendimento Individualizado
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-600 leading-relaxed">
                Respeitamos a <span className="font-semibold text-[#e5007e]">singularidade</span> de cada pessoa, 
                criando um plano personalizado para o seu desenvolvimento único.
              </p>
            </div>

            {/* Diferencial 2: Proximidade da Diretora - CARRO CHEFE */}
            <div className="bg-gradient-to-br from-white via-[#fff8e6] to-[#fff0cc] rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-[#f19100] group differential-card featured-differential" data-animation="zoomIn" data-delay="200">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#f19100] to-[#e5007e] rounded-full mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-lg sm:shadow-xl group-hover:shadow-xl sm:group-hover:shadow-2xl transition-shadow duration-500 interactive-animate">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title">
                Proximidade da Diretora
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-600 leading-relaxed">
                A diretora Ana Grécia está <span className="font-semibold text-[#f19100]">próxima e acessível </span>em cada etapa do processo, garantindo acompanhamento direto.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-[#f19100] to-[#e5007e] rounded-full"></div>
              </div>
            </div>

            {/* Diferencial 3: Acompanhamento Interdisciplinar */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#a1d6dc]/20 group differential-card" data-animation="zoomIn" data-delay="400">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#37a935] to-[#2d8a2b] rounded-full mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300 interactive-animate">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title">
                Equipe Interdisciplinar
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-600 leading-relaxed">
                Todas as <span className="font-semibold text-[#37a935]">especialidades atuam juntas</span> nos casos, buscando olhar pro paciente de forma holística.
              </p>
            </div>
          </div>
          
          {/* Seção dos Espaços da Clínica */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-title">
              Espaços Acolhedores e Multisensoriais
            </h3>
                          <p className="text-lg text-[#4c3e92]/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                Nossos espaços são <span className="font-semibold text-[#e5007e]">extremamente acolhedores e multisensoriais</span>, 
                com diversos detalhes pensados para receber cada criança, adolescente e família da melhor maneira possível.
              </p>
            
            {/* Container do Vídeo dos Espaços */}
            <div className="relative group">
              {/* Container do vídeo com efeitos elegantes */}
              <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                {/* Vídeo dos espaços da clínica */}
                <video 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl relative z-10"
                  controls
                  preload="metadata"
                  poster="/capa.jpg"
                >
                  <source src="/videos/videoespaco.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Overlay sutil no vídeo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Borda luminosa sutil */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f19100]/20 via-transparent to-[#e5007e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              {/* Sombra elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl transform translate-y-6 blur-2xl group-hover:translate-y-8 transition-transform duration-500 -z-10"></div>
              
              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#f19100] to-[#e5007e] rounded-full animate-pulse shadow-lg z-20">
                <div className="absolute inset-1 bg-white/20 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-[#e5007e] to-[#f19100] rounded-full animate-pulse delay-1000 shadow-lg z-20">
                <div className="absolute inset-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Nossos Serviços */}
      <section id="servicos" className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#00b8cc] via-[#00a8bc] to-[#0098ac] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-title leading-tight">
              <span className="block text-white">Nossos serviços são</span>
              <span className="block text-[#f4a261]">realizados com amor</span>
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mt-8">
              Oferecemos uma gama completa de serviços especializados para 
              <span className="font-semibold text-[#a1d6dc]"> desenvolvimento infantil</span>, 
              <span className="font-semibold text-white"> reabilitação</span> e 
              <span className="font-semibold text-[#f4a261]"> bem-estar</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Psicologia */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#e5007e] to-[#cc0072] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Psicologia
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center">
                Apoio emocional e psicológico para <span className="font-semibold text-[#e5007e]">crianças, adolescentes</span> e suas famílias, fortalecendo a autoestima e ajudando no enfrentamento de desafios.
              </p>
            </div>

            {/* Psicopedagogia */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#f19100] to-[#d98200] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Psicopedagogia
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center">
                Auxílio no processo de <span className="font-semibold text-[#f19100]">aprendizagem</span>, identificando dificuldades escolares e desenvolvendo estratégias para o avanço educacional.
              </p>
            </div>

            {/* Psicomotricidade */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#37a935] to-[#2d8a2b] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Psicomotricidade
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center">
                Estimulação do <span className="font-semibold text-[#37a935]">corpo e movimento</span>, promovendo desenvolvimento motor, cognitivo e socioemocional de forma integrada.
              </p>
            </div>

            {/* Fonoaudiologia */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#00b8cc] to-[#0098ac] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Fonoaudiologia
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center">
                Acompanhamento especializado para aprimorar a <span className="font-semibold text-[#00b8cc]">comunicação, linguagem</span>, fala, voz e funções orais.
              </p>
            </div>

            {/* Terapia Ocupacional */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#4c3e92] to-[#3a2e6f] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Terapia Ocupacional
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center">
                Desenvolvimento da <span className="font-semibold text-[#4c3e92]">autonomia e independência</span> nas atividades do dia a dia, com foco em habilidades práticas e sociais.
              </p>
            </div>

            {/* Terapia Alimentar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#f4a261] to-[#e76f51] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Terapia Alimentar
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center">
                Intervenção para crianças com dificuldades na <span className="font-semibold text-[#f4a261]">alimentação</span>, promovendo uma relação mais saudável e prazerosa com os alimentos.
              </p>
            </div>

            {/* Aplicação e Supervisão ABA */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group md:col-span-2 lg:col-span-3">
              <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 bg-gradient-to-br from-[#e5007e] via-[#f19100] to-[#37a935] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center shadow-md sm:shadow-lg group-hover:shadow-lg sm:group-hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#4c3e92] mb-2 sm:mb-3 lg:mb-4 font-title text-center">
                Aplicação e Supervisão ABA
              </h3>
              <p className="text-sm sm:text-base lg:text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Atendimento baseado na <span className="font-semibold text-[#e5007e]">Análise do Comportamento Aplicada (ABA)</span>, com estratégias personalizadas para promover habilidades e reduzir barreiras no desenvolvimento. Nossa equipe especializada trabalha com <span className="font-semibold text-[#f19100]">metodologias comprovadas</span> para criar um ambiente de aprendizado eficaz e acolhedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Nossos Profissionais */}
      <section id="profissionais" className="w-full py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] via-[#e8f4f8] to-[#f0f9ff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4c3e92] mb-6 font-title leading-tight">
              <span className="block text-[#4c3e92]">Especialistas que</span>
              <span className="block text-[#e5007e]">transformam vidas</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
              Nossa equipe de <span className="font-semibold text-[#4c3e92]">profissionais especializados</span> trabalha com 
              <span className="font-semibold text-[#e5007e]"> dedicação e amor</span> para garantir o melhor 
              <span className="font-semibold text-[#f19100]"> desenvolvimento</span> do seu filho
            </p>
          </div>
          
          {/* Carrossel de Profissionais */}
          <div className="relative">
            {/* Navegação do Carrossel */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <button 
                className="w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                onClick={() => scrollCarousel('prev')}
              >
                <svg className="w-6 h-6 text-[#4c3e92] group-hover:text-[#e5007e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-sm text-gray-600 font-medium">
                <span>{currentSlide + 1}</span> de <span>15</span>
              </div>
              
              <button 
                className="w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                onClick={() => scrollCarousel('next')}
              >
                <svg className="w-6 h-6 text-[#4c3e92] group-hover:text-[#e5007e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Container do Carrossel */}
            <div className="overflow-hidden">
              <div 
                id="professionals-carousel" 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ width: 'calc(15 * 100%)' }}
              >
                {/* Ana Grécia - Fonoaudióloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais/ana sem fundo.png" 
                        alt="Ana Grécia - Fonoaudióloga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Ana Grécia</h3>
                    <p className="text-xs sm:text-sm text-[#00b8cc] font-semibold mb-3">Fonoaudióloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#00b8cc] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Bruna Rafaella - Psicóloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Bruna Rafaella (sem fundo).png" 
                        alt="Bruna Rafaella - Psicóloga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Bruna Rafaella</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Suelen Basante - Psicóloga e Aplicadora ABA */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Suelen Basante (sem fundo).png" 
                        alt="Suelen Basante - Psicóloga e Aplicadora ABA" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Suelen Basante</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga e Aplicadora ABA</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Érica Figueira - Psicóloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Erica_Figueira_sem_fundo.png" 
                        alt="Érica Figueira - Psicóloga" 
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          console.log('Erro ao carregar imagem:', e.target.src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Érica Figueira</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Larissa Bezerra - Terapeuta Ocupacional */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Larissa Bezerra (sem fundo).png" 
                        alt="Larissa Bezerra - Terapeuta Ocupacional" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Larissa Bezerra</h3>
                    <p className="text-xs sm:text-sm text-[#4c3e92] font-semibold mb-3">Terapeuta Ocupacional</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#4c3e92] to-[#e5007e] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Maria Carolina - Psicóloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Maria Carolina (sem fundo).png" 
                        alt="Maria Carolina - Psicóloga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Maria Carolina</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Maria Victória - Terapeuta Ocupacional */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Maria Victoria (sem fundo).png" 
                        alt="Maria Victória - Terapeuta Ocupacional" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Maria Victória</h3>
                    <p className="text-xs sm:text-sm text-[#4c3e92] font-semibold mb-3">Terapeuta Ocupacional</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#4c3e92] to-[#e5007e] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Renata Veras - Psicomotricista */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Renata Veras (sem fundo).png" 
                        alt="Renata Veras - Psicomotricista" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Renata Veras</h3>
                    <p className="text-xs sm:text-sm text-[#37a935] font-semibold mb-3">Psicomotricista</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#37a935] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Izaura Souza - Nutricionista */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Izaura Souza (sem fundo).png" 
                        alt="Izaura Souza - Nutricionista" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Izaura Souza</h3>
                    <p className="text-xs sm:text-sm text-[#f4a261] font-semibold mb-3">Nutricionista</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#f4a261] to-[#e5007e] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Marina Mariah - Fonoaudióloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Marina Mariah (sem fundo).png" 
                        alt="Marina Mariah - Fonoaudióloga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Marina Mariah</h3>
                    <p className="text-xs sm:text-sm text-[#00b8cc] font-semibold mb-3">Fonoaudióloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#00b8cc] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Livânia Rodrigues - Psicóloga e Aplicadora ABA */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Livania Rodrigues (sem fundo).png" 
                        alt="Livânia Rodrigues - Psicóloga e Aplicadora ABA" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Livânia Rodrigues</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga e Aplicadora ABA</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Thais Ohanny - Fonoaudióloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Thais Ohanny (sem fundo).png" 
                        alt="Thais Ohanny - Fonoaudióloga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Thais Ohanny</h3>
                    <p className="text-xs sm:text-sm text-[#00b8cc] font-semibold mb-3">Fonoaudióloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#00b8cc] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Maria Gabriela - Psicóloga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Maria Gabriela (sem fundo).png" 
                        alt="Maria Gabriela - Psicóloga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Maria Gabriela</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Thais Farinha - Psicóloga e Supervisora ABA */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Thais Farinha (sem fundo).png" 
                        alt="Thais Farinha - Psicóloga e Supervisora ABA" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Thais Farinha</h3>
                    <p className="text-xs sm:text-sm text-[#e5007e] font-semibold mb-3">Psicóloga e Supervisora ABA</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Camilla Magalhães - Psicopedagoga */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <img 
                        src="/profissionais-sem-fundo/Camilla Magalhaes (sem fundo).png" 
                        alt="Camilla Magalhães - Psicopedagoga" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#4c3e92] mb-2 font-title">Camilla Magalhães</h3>
                    <p className="text-xs sm:text-sm text-[#f19100] font-semibold mb-3">Psicopedagoga</p>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#f19100] to-[#e5007e] mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores de Navegação */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: 15 }, (_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-[#e5007e] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Depoimentos */}
      <section id="depoimentos" className="w-full py-16 md:py-24 bg-[#f19100] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-title leading-tight">
              <span className="block text-white">Histórias que</span>
              <span className="block text-[#4c3e92]">inspiram e transformam</span>
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mt-8">
              Conheça os <span className="font-semibold text-[#4c3e92]">depoimentos reais</span> de famílias que confiaram na Communicare e 
              <span className="font-semibold text-white"> transformaram a vida</span> de seus filhos através do nosso cuidado especializado
            </p>
          </div>
          
          {/* Grid de depoimentos em vídeo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento em Vídeo 1 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative mb-6">
                {/* Container do vídeo */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-[#e5007e]">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/depo1.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
              
                              {/* Informações do depoimento */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#4c3e92] mb-2 font-title">Taiza, Júlia e Liz</h3>
                  <p className="text-sm text-[#e5007e] font-semibold mb-3">Mãe e ex pacientes</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Estava preocupada com o desenvolvimento da fala da minha filha e procurei a Ana para me ajudar. De forma muito segura e tranquila, a Ana conseguiu transmitir muitas vivências."
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#e5007e] to-[#f19100] rounded-full"></div>
                  </div>
                </div>
            </div>

            {/* Depoimento em Vídeo 2 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative mb-6">
                {/* Container do vídeo */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-[#00b8cc]">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/depo2.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
              
                              {/* Informações do depoimento */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#4c3e92] mb-2 font-title">Adriana</h3>
                  <p className="text-sm text-[#00b8cc] font-semibold mb-3">Mãe de 3 ex pacientes</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Eu tenho 3 filhos. Um dia, eu estava numa clínica aguardando e, quando vi a condução de Ana, simplesmente me apaixonei pela forma, carinho e paciência dela trabalhar."
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#00b8cc] to-[#f19100] rounded-full"></div>
                  </div>
                </div>
            </div>

            {/* Depoimento em Vídeo 3 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative mb-6">
                {/* Container do vídeo */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-[#37a935]">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/depo3.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
              
                              {/* Informações do depoimento */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#4c3e92] mb-2 font-title">Gabriela e Gabriel</h3>
                  <p className="text-sm text-[#37a935] font-semibold mb-3">Mãe e paciente</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Ana é uma pessoa altamente dedicada para a profissão e, além disso, é totalmente dedicada a pessoa que ela cuida. Eu e meu filho nos sentimos muito acolhidos."
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#37a935] to-[#f19100] rounded-full"></div>
                  </div>
                </div>
            </div>

            {/* Depoimento em Vídeo 4 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative mb-6">
                {/* Container do vídeo */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-[#f19100]">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/depo4.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
              
                              {/* Informações do depoimento */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#4c3e92] mb-2 font-title">Vanusa</h3>
                  <p className="text-sm text-[#f19100] font-semibold mb-3">Mãe de ex paciente</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Aos 3 anos, meu filho não falava nada ainda. Eu não acreditava mais em nenhum profissional, mas levei meu filho para Ana Grécia e foi a melhor coisa. Conheci uma profissional brilhante."
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#f19100] to-[#e5007e] rounded-full"></div>
                  </div>
                </div>
            </div>

            {/* Depoimento em Vídeo 5 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative mb-6">
                {/* Container do vídeo */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-[#4c3e92]">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/depo5.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
              
                              {/* Informações do depoimento */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#4c3e92] mb-2 font-title">Geovane</h3>
                  <p className="text-sm text-[#4c3e92] font-semibold mb-3">Ex paciente</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Ana Grécia sempre me recebeu com alegria, alto astral. Sempre foi muito carismática, não só comigo. Acredito eu que, nesse ramo, não existe outra como ela."
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#4c3e92] to-[#f19100] rounded-full"></div>
                  </div>
                </div>
            </div>

            {/* Depoimento em Vídeo 6 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative mb-6">
                {/* Container do vídeo */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-[#a1d6dc]">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/depo6.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
              
                              {/* Informações do depoimento */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#4c3e92] mb-2 font-title">Marcela Garcia</h3>
                  <p className="text-sm text-[#a1d6dc] font-semibold mb-3">Pedagoga</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Essas trocas interdiscplinares que a Ana faz são muito importantes, pra gente conseguir chegar no melhor desenvolvimento individual de cada criança."
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#a1d6dc] to-[#f19100] rounded-full"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7: Contato */}
      <section id="contato" className="w-full py-16 md:py-24 bg-gradient-to-br from-[#009db0] to-[#a1d6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-title leading-tight">
              <span className="block text-white">Vamos conversar sobre</span>
              <span className="block text-[#f4a261]">o futuro do seu filho?</span>
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mt-8">
              Agende uma <span className="font-semibold text-[#4c3e92]">visita gratuita</span> e sem compromisso para conhecer nossos espaços e 
              <span className="font-semibold text-white"> conversar sobre as necessidades</span> da sua família
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário Wizard */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4c3e92] to-[#e5007e] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-title">
                  Aproveite sua visita gratuita
                </h3>
                <p className="text-white/80 text-sm">
                  Preencha o formulário e nossa equipe entrará em contato
                </p>
              </div>
              
              {/* Indicadores de Progresso */}
              <div className="flex justify-center mb-10">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 transform ${
                      step <= currentWizardStep 
                        ? 'bg-gradient-to-br from-[#4c3e92] to-[#e5007e] text-white shadow-lg scale-110' 
                        : 'bg-white/20 text-white/60'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-16 h-1 mx-3 transition-all duration-500 rounded-full ${
                        step < currentWizardStep 
                          ? 'bg-gradient-to-r from-[#4c3e92] to-[#e5007e]' 
                          : 'bg-white/20'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Formulário Wizard */}
              <form onSubmit={handleWizardSubmit} className="space-y-6">
                {/* Etapa 1: Informações Básicas */}
                {currentWizardStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#4c3e92] to-[#00b8cc] rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Informações do Responsável
                      </h4>
                      <p className="text-white/70 text-sm">
                        Vamos começar com seus dados de contato
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#4c3e92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          value={formData.responsavelNome}
                          onChange={(e) => setFormData({...formData, responsavelNome: e.target.value})}
                          className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4c3e92] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                          placeholder="Digite o nome completo"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#37a935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Telefone/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          value={formData.responsavelTelefone}
                          onChange={(e) => setFormData({...formData, responsavelTelefone: e.target.value})}
                          className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#37a935] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                          placeholder="(81) 99999-9999"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Etapa 2: Informações da Criança */}
                {currentWizardStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f19100] to-[#e5007e] rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Sobre a Criança/Adolescente
                      </h4>
                      <p className="text-white/70 text-sm">
                        Conte-nos um pouco sobre quem será atendido
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#f19100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                          </svg>
                          Idade *
                        </label>
                        <select
                          value={formData.idade}
                          onChange={(e) => setFormData({...formData, idade: e.target.value})}
                          className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f19100] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                          required
                        >
                          <option value="">Selecione a idade</option>
                          <option value="0-6 meses">0 a 6 meses</option>
                          <option value="6-12 meses">6 a 12 meses</option>
                          <option value="1-2 anos">1 a 2 anos</option>
                          <option value="2-3 anos">2 a 3 anos</option>
                          <option value="3-4 anos">3 a 4 anos</option>
                          <option value="4-5 anos">4 a 5 anos</option>
                          <option value="5-6 anos">5 a 6 anos</option>
                          <option value="6-7 anos">6 a 7 anos</option>
                          <option value="7-8 anos">7 a 8 anos</option>
                          <option value="8-9 anos">8 a 9 anos</option>
                          <option value="9-10 anos">9 a 10 anos</option>
                          <option value="10-12 anos">10 a 12 anos</option>
                          <option value="12-14 anos">12 a 14 anos</option>
                          <option value="14-16 anos">14 a 16 anos</option>
                          <option value="16-18 anos">16 a 18 anos</option>
                        </select>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                        <label className="block text-white/90 text-sm font-medium mb-3 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#e5007e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Possui encaminhamento prévio? *
                        </label>
                        <div className="flex space-x-6">
                          <label className="flex items-center cursor-pointer group">
                            <div className="w-5 h-5 border-2 border-white/40 rounded-full mr-3 flex items-center justify-center transition-all duration-200 group-hover:border-[#e5007e]">
                              <input
                                type="radio"
                                name="encaminhamento"
                                value="sim"
                                checked={formData.encaminhamento === 'sim'}
                                onChange={(e) => setFormData({...formData, encaminhamento: e.target.value})}
                                className="sr-only"
                                required
                              />
                              {formData.encaminhamento === 'sim' && (
                                <div className="w-3 h-3 bg-[#e5007e] rounded-full"></div>
                              )}
                            </div>
                            <span className="text-white/90 group-hover:text-white transition-colors duration-200">Sim</span>
                          </label>
                          <label className="flex items-center cursor-pointer group">
                            <div className="w-5 h-5 border-2 border-white/40 rounded-full mr-3 flex items-center justify-center transition-all duration-200 group-hover:border-[#e5007e]">
                              <input
                                type="radio"
                                name="encaminhamento"
                                value="nao"
                                checked={formData.encaminhamento === 'nao'}
                                onChange={(e) => setFormData({...formData, encaminhamento: e.target.value})}
                                className="sr-only"
                                required
                              />
                              {formData.encaminhamento === 'nao' && (
                                <div className="w-3 h-3 bg-[#e5007e] rounded-full"></div>
                              )}
                            </div>
                            <span className="text-white/90 group-hover:text-white transition-colors duration-200">Não</span>
                          </label>
                        </div>
                      </div>
                      
                      {formData.encaminhamento === 'sim' && (
                        <div className="relative animate-fadeIn">
                          <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[#00b8cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Quem encaminhou? *
                          </label>
                          <select
                            value={formData.quemEncaminhou}
                            onChange={(e) => setFormData({...formData, quemEncaminhou: e.target.value})}
                            className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#00b8cc] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                            required
                          >
                            <option value="">Selecione quem encaminhou</option>
                            <option value="escola">Escola/Creche</option>
                            <option value="pediatra">Pediatra</option>
                            <option value="psicologo">Psicólogo</option>
                            <option value="fonoaudiologo">Fonoaudiólogo</option>
                            <option value="psicopedagogo">Psicopedagogo</option>
                            <option value="neurologista">Neurologista</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Etapa 3: Especialidades */}
                {currentWizardStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00b8cc] to-[#37a935] rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Especialidades e Preferências
                      </h4>
                      <p className="text-white/70 text-sm">
                        Escolha o tipo de atendimento desejado
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#00b8cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Qual especialidade procura? *
                        </label>
                        <select
                          value={formData.especialidade}
                          onChange={(e) => setFormData({...formData, especialidade: e.target.value})}
                          className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#00b8cc] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                          required
                        >
                          <option value="">Selecione a especialidade</option>
                          <option value="avaliacao">🎯 Avaliação Gratuita (sem encaminhamento)</option>
                          <option value="fonoaudiologia">🗣️ Fonoaudiologia</option>
                          <option value="psicologia">🧠 Psicologia</option>
                          <option value="psicopedagogia">📚 Psicopedagogia</option>
                          <option value="terapia_ocupacional">🎨 Terapia Ocupacional</option>
                          <option value="fisioterapia">💪 Fisioterapia</option>
                          <option value="nutricao">🥗 Nutrição</option>
                          <option value="psiquiatria">💊 Psiquiatria</option>
                          <option value="neurologia">⚡ Neurologia</option>
                          <option value="pediatria">👶 Pediatria</option>
                        </select>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#37a935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Tem preferência por alguma profissional?
                        </label>
                        <select
                          value={formData.profissionalPreferencia}
                          onChange={(e) => setFormData({...formData, profissionalPreferencia: e.target.value})}
                          className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#37a935] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                        >
                          <option value="">Sem preferência específica</option>
                          <option value="ana_grecia">👩‍⚕️ Ana Grécia Calado</option>
                          <option value="bruna_rafaella">👩‍⚕️ Bruna Rafaella</option>
                          <option value="camilla_magalhaes">👩‍⚕️ Camilla Magalhães</option>
                          <option value="erica_figueira">👩‍⚕️ Érica Figueira</option>
                          <option value="izaura_souza">👩‍⚕️ Izaura Souza</option>
                          <option value="larissa_bezerra">👩‍⚕️ Larissa Bezerra</option>
                          <option value="livania_rodrigues">👩‍⚕️ Livânia Rodrigues</option>
                          <option value="maria_carolina">👩‍⚕️ Maria Carolina</option>
                          <option value="maria_gabriela">👩‍⚕️ Maria Gabriela</option>
                          <option value="maria_victoria">👩‍⚕️ Maria Victória</option>
                          <option value="marina_mariah">👩‍⚕️ Marina Mariah</option>
                          <option value="renata_veras">👩‍⚕️ Renata Veras</option>
                          <option value="suelen_basante">👩‍⚕️ Suelen Basante</option>
                          <option value="thais_farinha">👩‍⚕️ Thais Farinha</option>
                          <option value="thais_ohanny">👩‍⚕️ Thais Ohanny</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Etapa 4: Horários e Finalização */}
                {currentWizardStep === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#e5007e] to-[#f19100] rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Horários e Finalização
                      </h4>
                      <p className="text-white/70 text-sm">
                        Última etapa! Confirme suas preferências
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-white/90 text-sm font-medium mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#e5007e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Preferência de horário para agendamento
                        </label>
                        <select
                          value={formData.horarioPreferencia}
                          onChange={(e) => setFormData({...formData, horarioPreferencia: e.target.value})}
                          className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#e5007e] focus:border-transparent transition-all duration-300 focus:bg-white/25"
                        >
                          <option value="">Sem preferência específica</option>
                          <option value="manha">🌅 Manhã (08h às 12h)</option>
                          <option value="tarde">🌇 Tarde (13h às 17h)</option>
                          <option value="manha_tarde">🕐 Manhã ou Tarde</option>
                          <option value="especifico">⏰ Horário específico</option>
                        </select>
                      </div>
                      
                      <div className="bg-gradient-to-br from-[#4c3e92]/30 to-[#e5007e]/20 rounded-xl p-6 border border-white/20 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#4c3e92] to-[#e5007e] rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h5 className="text-lg font-bold text-white">Resumo do Agendamento</h5>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/90">
                          <div className="bg-white/10 rounded-lg p-3">
                            <p className="font-semibold text-[#4c3e92] mb-1">👤 Responsável</p>
                            <p className="text-white">{formData.responsavelNome}</p>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <p className="font-semibold text-[#37a935] mb-1">📱 Telefone</p>
                            <p className="text-white">{formData.responsavelTelefone}</p>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <p className="font-semibold text-[#f19100] mb-1">👶 Idade</p>
                            <p className="text-white">{formData.idade}</p>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <p className="font-semibold text-[#e5007e] mb-1">📋 Encaminhamento</p>
                            <p className="text-white">{formData.encaminhamento === 'sim' ? `Sim - ${formData.quemEncaminhou}` : 'Não'}</p>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 md:col-span-2">
                            <p className="font-semibold text-[#00b8cc] mb-1">🏥 Especialidade</p>
                            <p className="text-white">{formData.especialidade}</p>
                          </div>
                          {formData.profissionalPreferencia && (
                            <div className="bg-white/10 rounded-lg p-3 md:col-span-2">
                              <p className="font-semibold text-[#37a935] mb-1">👩‍⚕️ Profissional Preferido</p>
                              <p className="text-white">{formData.profissionalPreferencia}</p>
                            </div>
                          )}
                          {formData.horarioPreferencia && (
                            <div className="bg-white/10 rounded-lg p-3 md:col-span-2">
                              <p className="font-semibold text-[#f19100] mb-1">⏰ Horário Preferido</p>
                              <p className="text-white">{formData.horarioPreferencia}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navegação do Wizard */}
                <div className="flex justify-between pt-6">
                  {currentWizardStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentWizardStep(currentWizardStep - 1)}
                      className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Anterior
                    </button>
                  )}
                  {currentWizardStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentWizardStep(currentWizardStep + 1)}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-[#4c3e92] to-[#00b8cc] hover:from-[#3d2f7a] hover:to-[#009db0] text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center"
                    >
                      Próximo
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-10 py-4 bg-gradient-to-r from-[#e5007e] to-[#f19100] hover:from-[#cc0072] hover:to-[#d98200] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Agendar Visita
                    </button>
                  )}
                </div>
              </form>
            </div>
            
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#4c3e92] mb-4 font-title">
                Fale conosco
              </h3>
              <div className="space-y-4">
                                         <div className="flex items-center">
                           <div className="w-8 h-8 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                             <span className="text-white text-sm">📞</span>
                           </div>
                           <a href="https://wa.me/5581998660984" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#f4a261] transition-colors duration-200">(81) 99866-0984</a>
                         </div>
                                         <div className="flex items-center">
                           <div className="w-8 h-8 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                             </svg>
                           </div>
                           <a href="mailto:communicare@greciacalado.com.br" className="text-white font-medium hover:text-[#f4a261] transition-colors duration-200">communicare@greciacalado.com.br</a>
                         </div>
                                         <div className="flex items-center">
                           <div className="w-8 h-8 bg-white/20 rounded-lg mr-4 flex items-center justify-center">
                             <span className="text-white text-sm">📍</span>
                           </div>
                           <a href="https://maps.app.goo.gl/ubbRa5pxMVYxFRxv5" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#f4a261] transition-colors duration-200">R. João Cardoso Aires, 555 - Boa Viagem, Recife/PE</a>
                         </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">🕒</span>
                  </div>
                  <div className="text-white font-medium">Segunda a sexta, das 08h às 18h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#4c3e92] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <img src="/logos/Branca.png" alt="Communicare" className="h-28 w-auto mb-2" />
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Communicare Clínica. Especializada em comunicação e desenvolvimento humano, oferecendo serviços personalizados para melhorar suas habilidades de comunicação e relacionamento.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/communicareclinica/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5581998660984" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Links rápidos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-title">Links rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#quem-somos" className="text-white/70 hover:text-white transition-colors duration-200">Quem somos</a></li>
                <li><a href="#diferenciais" className="text-white/70 hover:text-white transition-colors duration-200">Diferenciais</a></li>
                <li><a href="#servicos" className="text-white/70 hover:text-white transition-colors duration-200">Serviços</a></li>
                <li><a href="#profissionais" className="text-white/70 hover:text-white transition-colors duration-200">Profissionais</a></li>
              </ul>
            </div>
            
            {/* Fale conosco */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-title">Fale conosco</h3>
              <ul className="space-y-2">
                <li className="text-white/70">
                  <a href="https://wa.me/5581998660984" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">(81) 99866-0984</a>
                </li>
                <li className="text-white/70">
                  <a href="mailto:communicare@greciacalado.com.br" className="hover:text-white transition-colors duration-200">communicare@greciacalado.com.br</a>
                </li>
                <li className="text-white/70">
                  <a href="https://maps.app.goo.gl/ubbRa5pxMVYxFRxv5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">R. João Cardoso Aires, 555 - Boa Viagem, Recife/PE</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Communicare Clínica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Ícone Flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5581998660984" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-[#37a935] rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
          aria-label="Contato via WhatsApp"
        >
          {/* Efeito de anel pulsante por trás */}
          <div className="absolute inset-0 rounded-full bg-[#37a935]/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-[#37a935]/20 animate-pulse"></div>
          
          {/* Gradiente de fundo sutil */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#37a935] via-[#2d8a2b] to-[#37a935]"></div>
          
          {/* Ícone do WhatsApp em branco */}
          <svg 
            className="w-8 h-8 text-white relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.988C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
          
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Efeito de borda luminosa no hover */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:border-white/60"></div>
        </a>
      </div>
    </div>
  )
}

export default App
