// Utilitários para animações com Animate.css

/**
 * Função para adicionar animações do Animate.css a um elemento
 * @param {string} elementSelector - Seletor CSS do elemento
 * @param {string} animation - Nome da animação (ex: 'bounce', 'fadeIn', 'rubberBand')
 * @param {string} prefix - Prefixo das classes (padrão: 'animate__')
 * @returns {Promise} - Promise que resolve quando a animação termina
 */
export const animateCSS = (elementSelector, animation, prefix = 'animate__') => {
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(elementSelector);

    if (!node) {
      reject('Elemento não encontrado');
      return;
    }

    node.classList.add(`${prefix}animated`, animationName);

    // Quando a animação termina, limpa as classes e resolve a Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animação concluída');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
};

/**
 * Função para animar elementos quando entram na viewport
 * @param {string} selector - Seletor CSS dos elementos
 * @param {string} animation - Nome da animação
 * @param {Object} options - Opções do Intersection Observer
 */
export const animateOnScroll = (selector, animation, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('animate__animated', `animate__${animation}`);
        
        // Remove a classe após a animação terminar
        element.addEventListener('animationend', () => {
          element.classList.remove('animate__animated', `animate__${animation}`);
        }, { once: true });
        
        observer.unobserve(element);
      }
    });
  }, defaultOptions);

  const elements = document.querySelectorAll(selector);
  elements.forEach(element => observer.observe(element));

  return observer;
};

/**
 * Hook personalizado para animações em React
 * @param {string} animation - Nome da animação
 * @param {Object} options - Opções da animação
 * @returns {Object} - Objeto com funções para controlar a animação
 */
export const useAnimation = (animation, options = {}) => {
  const {
    duration = '1s',
    delay = '0s',
    iterationCount = '1',
    timingFunction = 'ease'
  } = options;

  const animate = (elementRef) => {
    if (elementRef?.current) {
      const element = elementRef.current;
      element.style.setProperty('--animate-duration', duration);
      element.style.setProperty('--animate-delay', delay);
      element.style.setProperty('--animate-iteration-count', iterationCount);
      element.style.setProperty('--animate-timing-function', timingFunction);
      
      element.classList.add('animate__animated', `animate__${animation}`);
      
      return new Promise((resolve) => {
        element.addEventListener('animationend', () => {
          element.classList.remove('animate__animated', `animate__${animation}`);
          resolve();
        }, { once: true });
      });
    }
  };

  const animateWithDelay = (elementRef, delayMs = 0) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        animate(elementRef).then(resolve);
      }, delayMs);
    });
  };

  return {
    animate,
    animateWithDelay
  };
};

/**
 * Lista de animações disponíveis no Animate.css
 */
export const ANIMATIONS = {
  // Attention seekers
  BOUNCE: 'bounce',
  FLASH: 'flash',
  PULSE: 'pulse',
  RUBBER_BAND: 'rubberBand',
  SHAKE_X: 'shakeX',
  SHAKE_Y: 'shakeY',
  HEAD_SHAKE: 'headShake',
  SWING: 'swing',
  TADA: 'tada',
  WOBBLE: 'wobble',
  JELLO: 'jello',
  HEART_BEAT: 'heartBeat',
  
  // Fading entrances
  FADE_IN: 'fadeIn',
  FADE_IN_DOWN: 'fadeInDown',
  FADE_IN_LEFT: 'fadeInLeft',
  FADE_IN_RIGHT: 'fadeInRight',
  FADE_IN_UP: 'fadeInUp',
  
  // Bouncing entrances
  BOUNCE_IN: 'bounceIn',
  BOUNCE_IN_DOWN: 'bounceInDown',
  BOUNCE_IN_LEFT: 'bounceInLeft',
  BOUNCE_IN_RIGHT: 'bounceInRight',
  BOUNCE_IN_UP: 'bounceInUp',
  
  // Zooming entrances
  ZOOM_IN: 'zoomIn',
  ZOOM_IN_DOWN: 'zoomInDown',
  ZOOM_IN_LEFT: 'zoomInLeft',
  ZOOM_IN_RIGHT: 'zoomInRight',
  ZOOM_IN_UP: 'zoomInUp',
  
  // Sliding entrances
  SLIDE_IN_DOWN: 'slideInDown',
  SLIDE_IN_LEFT: 'slideInLeft',
  SLIDE_IN_RIGHT: 'slideInRight',
  SLIDE_IN_UP: 'slideInUp',
  
  // Rotating entrances
  ROTATE_IN: 'rotateIn',
  ROTATE_IN_DOWN_LEFT: 'rotateInDownLeft',
  ROTATE_IN_DOWN_RIGHT: 'rotateInDownRight',
  ROTATE_IN_UP_LEFT: 'rotateInUpLeft',
  ROTATE_IN_UP_RIGHT: 'rotateInUpRight'
};

/**
 * Configurações de duração predefinidas
 */
export const DURATIONS = {
  FAST: '0.5s',
  NORMAL: '1s',
  SLOW: '2s',
  VERY_SLOW: '3s'
};

/**
 * Configurações de delay predefinidas
 */
export const DELAYS = {
  NONE: '0s',
  SHORT: '0.2s',
  MEDIUM: '0.5s',
  LONG: '1s',
  VERY_LONG: '2s'
}; 