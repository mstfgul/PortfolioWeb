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
        // Modern Corporate Theme
        primary: {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Lighter blue
          300: '#93c5fd',  // Light accent blue
          400: '#60a5fa',  // Medium blue
          500: '#3b82f6',  // Primary blue
          600: '#2563eb',  // Strong blue
          700: '#1d4ed8',  // Dark blue
          800: '#1e40af',  // Darker blue
          900: '#1e3a8a',  // Navy blue
        },
        secondary: {
          50: '#f8fafc',   // Very light gray
          100: '#f1f5f9',  // Light gray
          200: '#e2e8f0',  // Lighter gray
          300: '#cbd5e1',  // Light accent gray
          400: '#94a3b8',  // Medium gray
          500: '#64748b',  // Primary gray
          600: '#475569',  // Strong gray
          700: '#334155',  // Dark gray
          800: '#1e293b',  // Darker gray
          900: '#0f172a',  // Almost black
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          teal: '#14b8a6',
          green: '#10b981',
          orange: '#f97316',
        },
        // Keep backward compatibility
        ink: {
          black: '#0f172a',
          gray: '#475569',
          sketch: '#1e293b',
          border: '#e2e8f0',
        },
        paper: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Ink & Paper Backgrounds
        'paper-texture': 'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)',
        'sketch-lines': 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        'crosshatch': 'repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 4px)',
        'paper-grain': 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(0,0,0,0.01) 0deg, transparent 2deg, rgba(0,0,0,0.01) 4deg, transparent 6deg)',
        'ink-blot': 'radial-gradient(circle at 30% 70%, rgba(0,0,0,0.1) 0%, transparent 30%), radial-gradient(circle at 70% 30%, rgba(0,0,0,0.08) 0%, transparent 25%)',
        'notebook-lines': 'repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(0,0,0,0.1) 23px, rgba(0,0,0,0.1) 24px)',
        'hand-drawn-border': 'linear-gradient(0deg, rgba(0,0,0,0.1) 0%, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 2px), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 2px), linear-gradient(270deg, rgba(0,0,0,0.1) 0%, transparent 2px)',
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
        // Ink & Paper Animations
        'sketch-draw': 'sketch-draw 2s ease-in-out',
        'paper-fold': 'paper-fold 1s ease-in-out',
        'ink-flow': 'ink-flow 3s ease-in-out infinite',
        'hand-write': 'hand-write 4s steps(40)',
        'pencil-sketch': 'pencil-sketch 1.5s ease-out',
        'page-turn': 'page-turn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'draw-line': 'draw-line 1s ease-in-out',
        'fade-sketch': 'fade-sketch 2s ease-in-out infinite alternate',
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
        // Ink & Paper Keyframes
        'sketch-draw': {
          '0%': { 
            strokeDasharray: '0 1000',
            opacity: '0' 
          },
          '50%': { 
            strokeDasharray: '500 500',
            opacity: '0.8' 
          },
          '100%': { 
            strokeDasharray: '1000 0',
            opacity: '1' 
          }
        },
        'paper-fold': {
          '0%': { 
            transform: 'perspective(1000px) rotateX(-90deg)',
            transformOrigin: 'bottom',
            opacity: '0' 
          },
          '100%': { 
            transform: 'perspective(1000px) rotateX(0deg)',
            transformOrigin: 'bottom',
            opacity: '1' 
          }
        },
        'ink-flow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'scale(1.02)',
            opacity: '1' 
          }
        },
        'hand-write': {
          '0%': { width: '0', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { width: '100%', opacity: '0.9' }
        },
        'pencil-sketch': {
          '0%': { 
            filter: 'blur(2px)',
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '50%': { 
            filter: 'blur(1px)',
            opacity: '0.7' 
          },
          '100%': { 
            filter: 'blur(0)',
            opacity: '1',
            transform: 'translateY(0)' 
          }
        },
        'page-turn': {
          '0%': { 
            transform: 'perspective(1000px) rotateY(-20deg)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'perspective(1000px) rotateY(0deg)',
            opacity: '1' 
          }
        },
        'draw-line': {
          '0%': { 
            width: '0',
            opacity: '0' 
          },
          '100%': { 
            width: '100%',
            opacity: '1' 
          }
        },
        'fade-sketch': {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '0.9' }
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