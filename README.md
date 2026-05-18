@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #F8FAFA;
  --foreground: #0F1F1E;
  --primary: #0E7C6E;
  --primary-foreground: #FFFFFF;
  --secondary: #E8F5F3;
  --secondary-foreground: #0F1F1E;
  --accent: #14B8A0;
  --accent-foreground: #FFFFFF;
  --muted: #F0F7F6;
  --muted-foreground: #5A7A77;
  --card: #FFFFFF;
  --card-foreground: #0F1F1E;
  --border: #D1EAE6;
  --input: #D1EAE6;
  --ring: #0E7C6E;
  --radius: 1rem;
  --font-sans: var(--font-dm-sans), sans-serif;
  --font-display: var(--font-fraunces), serif;
}

@layer base {
  * {
    box-sizing: border-box;
    border-color: var(--border);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
}

@layer components {
  /* Spotlight card effect */
  .spotlight-group {
    position: relative;
  }

  .spotlight-card {
    position: relative;
    overflow: hidden;
  }

  .spotlight-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(14, 124, 110, 0.08),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
    z-index: 1;
  }

  .spotlight-group:hover .spotlight-card::after {
    opacity: 1;
  }

  /* Text reveal animation */
  .text-reveal-wrapper {
    overflow: hidden;
    display: block;
  }

  .text-reveal-content {
    transform: translateY(100%);
    opacity: 0;
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1.4s ease;
    display: block;
  }

  .reveal-active .text-reveal-content {
    transform: translateY(0);
    opacity: 1;
  }

  /* Scroll scrub text */
  .scroll-scrub-text {
    background-image: linear-gradient(to right, var(--foreground) 50%, #A8C5C1 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  /* Reveal on scroll */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  .delay-100 { transition-delay: 100ms; }
  .delay-200 { transition-delay: 200ms; }
  .delay-300 { transition-delay: 300ms; }
  .delay-400 { transition-delay: 400ms; }

  /* Carousel */
  .carousel-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    z-index: 0;
  }

  .carousel-slide.active {
    opacity: 1;
    z-index: 1;
  }

  .carousel-slide img {
    transform: scale(1.06);
    transition: transform 10s ease-out;
  }

  .carousel-slide.active img {
    transform: scale(1);
  }

  /* Nav scrolled state */
  .nav-scrolled {
    background: rgba(248, 250, 250, 0.95) !important;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 1px 24px rgba(14, 124, 110, 0.06);
  }

  /* Font display utility */
  .font-display {
    font-family: var(--font-display);
  }
}

/* Parallax background grid */
#parallax-bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(rgba(14, 124, 110, 0.15) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.06;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
}

/* Mobile menu */
#mobile-menu {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

#mobile-menu.open {
  transform: translateY(0);
}

#mobile-menu.closed {
  transform: translateY(-100%);
}

::selection {
  background: var(--secondary);
  color: var(--primary);
}