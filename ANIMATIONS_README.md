# 🎭 Guia de Animações - Communicare

Este projeto está configurado com [Animate.css](https://animate.style/) para criar experiências visuais envolventes e interativas.

## ✨ Animações Configuradas

### 🖼️ Foto da Fundadora
- **Animação**: `animate__zoomIn`
- **Duração**: 1.5s
- **Delay**: 0.2s
- **Efeito**: A foto da fundadora Ana Grécia faz uma animação de "zoom" quando entrar na viewport

### 🎯 Diferenciais da Empresa
- **Diferencial 1**: `animate__zoomIn` (sem delay)
- **Diferencial 2**: `animate__zoomIn` (delay: 0.2s)
- **Diferencial 3**: `animate__zoomIn` (delay: 0.4s)

## 🚀 Como Usar

### 1. Classes Básicas
```html
<!-- Animação básica -->
<div className="animate__animated animate__bounce">
  Conteúdo animado
</div>

<!-- Com duração personalizada -->
<div className="animate__animated animate__fadeIn" style={{'--animate-duration': '2s'}}>
  Conteúdo com duração personalizada
</div>

<!-- Com delay personalizado -->
<div className="animate__animated animate__slideInUp" style={{'--animate-delay': '0.5s'}}>
  Conteúdo com delay
</div>
```

### 2. Classes CSS Personalizadas
```css
/* Usar as classes predefinidas */
.founder-photo { /* Duração: 1.5s, Delay: 0.8s */ }
.interactive-animate { /* Duração: 0.6s, Delay: 0.1s */ }
.scroll-animate { /* Duração: 1s, Delay: 0.3s */ }
.highlight-animate { /* Duração: 1.8s, Delay: 1s */ }
```

### 3. JavaScript/React
```jsx
import { animateCSS, animateOnScroll, useAnimation, ANIMATIONS } from './utils/animationUtils';

// Animar elemento por seletor
animateCSS('.meu-elemento', 'bounce').then(() => {
  console.log('Animação concluída!');
});

// Animar no scroll
animateOnScroll('.elementos-scroll', 'fadeInUp');

// Hook personalizado
const { animate, animateWithDelay } = useAnimation('bounce', {
  duration: '1s',
  delay: '0.5s'
});

// Usar com useRef
const elementRef = useRef();
animate(elementRef);
```

## 🎨 Animações Disponíveis

### 🎭 Attention Seekers
- `bounce` - Salto elástico
- `flash` - Piscada
- `pulse` - Pulsação
- `rubberBand` - Banda elástica ⭐
- `shakeX` - Tremor horizontal
- `shakeY` - Tremor vertical
- `headShake` - Balanço de cabeça
- `swing` - Balanço
- `tada` - Celebração
- `wobble` - Oscilação
- `jello` - Gelatina
- `heartBeat` - Batida do coração

### 🌅 Fading Entrances
- `fadeIn` - Aparecer suavemente
- `fadeInDown` - Aparecer de cima
- `fadeInLeft` - Aparecer da esquerda
- `fadeInRight` - Aparecer da direita
- `fadeInUp` - Aparecer de baixo

### 🎪 Bouncing Entrances
- `bounceIn` - Entrada com salto
- `bounceInDown` - Salto de cima
- `bounceInLeft` - Salto da esquerda
- `bounceInRight` - Salto da direita
- `bounceInUp` - Salto de baixo

### 🔍 Zooming Entrances
- `zoomIn` - Aproximação
- `zoomInDown` - Aproximação de cima
- `zoomInLeft` - Aproximação da esquerda
- `zoomInRight` - Aproximação da direita
- `zoomInUp` - Aproximação de baixo

### 📱 Sliding Entrances
- `slideInDown` - Deslizar de cima
- `slideInLeft` - Deslizar da esquerda
- `slideInRight` - Deslizar da direita
- `slideInUp` - Deslizar de baixo

### 🔄 Rotating Entrances
- `rotateIn` - Rotação na entrada
- `rotateInDownLeft` - Rotação de cima-esquerda
- `rotateInDownRight` - Rotação de cima-direita
- `rotateInUpLeft` - Rotação de baixo-esquerda
- `rotateInUpRight` - Rotação de baixo-direita

## ⚙️ Configurações

### Durações Predefinidas
```js
DURATIONS.FAST = '0.5s'      // Rápido
DURATIONS.NORMAL = '1s'      // Normal
DURATIONS.SLOW = '2s'        // Lento
DURATIONS.VERY_SLOW = '3s'   // Muito lento
```

### Delays Predefinidos
```js
DELAYS.NONE = '0s'           // Sem delay
DELAYS.SHORT = '0.2s'        // Delay curto
DELAYS.MEDIUM = '0.5s'       // Delay médio
DELAYS.LONG = '1s'           // Delay longo
DELAYS.VERY_LONG = '2s'      // Delay muito longo
```

## 🎯 Exemplos de Uso

### Botão com Animação
```jsx
<button 
  className="animate__animated animate__pulse interactive-animate"
  onClick={() => handleClick()}
>
  Clique aqui!
</button>
```

### Card com Animação no Hover
```jsx
<div 
  className="card animate__animated animate__fadeInUp scroll-animate"
  onMouseEnter={(e) => {
    e.target.classList.add('animate__pulse');
  }}
  onMouseLeave={(e) => {
    e.target.classList.remove('animate__pulse');
  }}
>
  Conteúdo do card
</div>
```

### Lista com Animações Sequenciais
```jsx
{items.map((item, index) => (
  <div 
    key={item.id}
    className="animate__animated animate__fadeInLeft"
    style={{'--animate-delay': `${index * 0.1}s`}}
  >
    {item.content}
  </div>
))}
```

## 🌟 Dicas de Uso

1. **Não exagere**: Use animações para destacar elementos importantes, não para poluir a interface
2. **Consistência**: Mantenha durações e delays consistentes em elementos similares
3. **Performance**: Animações CSS são mais performáticas que JavaScript
4. **Acessibilidade**: Respeite a preferência `prefers-reduced-motion` dos usuários
5. **Mobile**: Teste as animações em dispositivos móveis para garantir boa performance

## 🔧 Personalização

### Variáveis CSS Globais
```css
:root {
  --animate-duration: 1.2s;    /* Duração padrão */
  --animate-delay: 0.5s;       /* Delay padrão */
}
```

### Classes Personalizadas
```css
.minha-animacao {
  --animate-duration: 2s;
  --animate-delay: 1s;
  --animate-iteration-count: 3;
}
```

## 📱 Responsividade

As animações funcionam em todos os dispositivos, mas você pode ajustar durações para dispositivos móveis:

```css
@media (max-width: 768px) {
  :root {
    --animate-duration: 0.8s;  /* Mais rápido no mobile */
  }
}
```

## 🎨 Integração com Tailwind

As animações do Animate.css funcionam perfeitamente com as classes do Tailwind CSS. Você pode combinar:

```jsx
<div className="
  bg-blue-500 
  text-white 
  p-4 
  rounded-lg 
  animate__animated 
  animate__bounceIn 
  hover:scale-105 
  transition-transform
">
  Conteúdo com Tailwind + Animate.css
</div>
```

---

**🎉 Agora seu app está configurado com animações incríveis! Use com moderação e criatividade!** 