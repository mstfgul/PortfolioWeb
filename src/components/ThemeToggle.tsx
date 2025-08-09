'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (theme === 'dark' || (!theme && systemDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 glassmorphism-card rounded-xl hover:scale-105 transition-all duration-300 neon-glow group"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative"
      >
        {isDark ? (
          <Moon size={20} className="text-accent-400 drop-shadow-lg" />
        ) : (
          <Sun size={20} className="text-yellow-500 drop-shadow-lg" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
        isDark 
          ? 'bg-accent-500/20 opacity-0 group-hover:opacity-100' 
          : 'bg-yellow-500/20 opacity-0 group-hover:opacity-100'
      }`}></div>
    </motion.button>
  )
}