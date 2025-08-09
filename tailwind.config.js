/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 8-bit Retro Arcade + Code Theme
        pixel: {
          bg: '#0f0f0f',        // Almost black like old CRT
          screen: '#1a1a1a',    // Dark screen
          green: '#00ff00',     // Classic terminal green
          amber: '#ffaa00',     // Amber monitor color
          red: '#ff0040',       // Bright red
          blue: '#0080ff',      // Electric blue
          purple: '#8000ff',    // Neon purple
          cyan: '#00ffff',      // Bright cyan
          yellow: '#ffff00',    // Bright yellow
          white: '#ffffff',     // Pure white
          gray: '#808080',      // Mid gray
          darkgray: '#404040',  // Dark gray
        },
        // Code editor inspired colors
        code: {
          bg: '#1e1e1e',        // VS Code dark
          sidebar: '#252526',   // Sidebar color
          line: '#2d2d2d',      // Line highlight
          comment: '#6a9955',   // Comment green
          keyword: '#569cd6',   // Keyword blue
          string: '#ce9178',    // String orange
          function: '#dcdcaa',  // Function yellow
          variable: '#9cdcfe',  // Variable cyan
          error: '#f44747',     // Error red
        },
        // Retro arcade colors
        arcade: {
          coin: '#ffd700',      // Gold coin
          powerup: '#ff69b4',   // Hot pink
          energy: '#00ff7f',    // Spring green
          warning: '#ff4500',   // Orange red
          bonus: '#ff1493',     // Deep pink
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 8-bit Retro Backgrounds
        'pixel-grid': 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
        'scanlines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
        'crt-screen': 'radial-gradient(ellipse at center, rgba(0,255,0,0.1) 0%, transparent 70%)',
        'code-editor': 'linear-gradient(135deg, #1e1e1e 0%, #252526 100%)',
        'terminal-glow': 'radial-gradient(ellipse at center, rgba(0,255,0,0.2) 0%, rgba(0,0,0,0.8) 70%)',
        'pixel-noise': 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(0,255,0,0.02) 0deg, transparent 1deg, rgba(0,255,0,0.02) 2deg, transparent 3deg)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'matrix-rain': 'matrixRain 3s linear infinite',
        'typewriter': 'typewriter 4s steps(40) infinite',
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 2s infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'terminal-boot': 'terminalBoot 3s ease-out',
        // 8-bit Pixel Animations
        'pixel-pulse': 'pixel-pulse 2s ease-in-out infinite',
        'scanline-move': 'scanline-move 3s linear infinite',
        'crt-flicker': 'crt-flicker 0.1s linear infinite',
        'pixel-glow': 'pixel-glow 1.5s ease-in-out infinite alternate',
        'code-typing': 'code-typing 4s steps(20) infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
        'pixel-bounce': 'pixel-bounce 0.6s ease-in-out infinite alternate',
        'retro-slide': 'retro-slide 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.3)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        terminalBoot: {
          '0%': { width: '0', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { width: '100%', opacity: '1' },
        },
        // 8-bit Pixel Keyframes
        'pixel-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 0 rgba(0, 255, 0, 0.5)' 
          },
          '50%': { 
            transform: 'scale(1.05)', 
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)' 
          }
        },
        'scanline-move': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'crt-flicker': {
          '0%, 98%': { opacity: '1' },
          '99%': { opacity: '0.96' },
          '100%': { opacity: '1' }
        },
        'pixel-glow': {
          '0%': { 
            textShadow: '0 0 5px currentColor',
            filter: 'brightness(1)' 
          },
          '100%': { 
            textShadow: '0 0 20px currentColor, 0 0 30px currentColor',
            filter: 'brightness(1.2)' 
          }
        },
        'code-typing': {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' }
        },
        'terminal-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'pixel-bounce': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' }
        },
        'retro-slide': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
        'terminal': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        // Retro Computer Fonts
        'dos': ['Perfect DOS VGA 437', 'MS Sans Serif', 'monospace'],
        'retro': ['C64 Pro Mono', 'Courier New', 'monospace'],
        'pixel': ['Press Start 2P', 'monospace'],
      },
    },
  },
  plugins: [],
}