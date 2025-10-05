'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Terminal, Code, Database } from 'lucide-react'

export default function PixelCodeHero() {
  const [text, setText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const fullName = 'Mustafa Gül'
  
  const codeLines = [
    '> system.boot()',
    '> loading_profile...',
    '> name: "Mustafa Gül"',
    '> role: "Data Scientist & Engineer"',
    '> skills: ["Python", "SQL", "ML", "Data Pipeline"]',
    '> status: "Ready for awesome projects!"',
    '> welcome_message: "Let\'s build something amazing!"'
  ]

  useEffect(() => {
    let currentIndex = 0
    const typeText = () => {
      if (currentIndex <= fullName.length) {
        setText(fullName.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, 150)
      }
    }
    setTimeout(typeText, 2000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % codeLines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [codeLines.length])

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mustafagul',
      label: 'GitHub',
      color: 'pixel-green'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mustafagul',
      label: 'LinkedIn',
      color: 'pixel-blue'
    },
    {
      icon: Mail,
      href: 'mailto:mstfgul00@gmail.com',
      label: 'Email',
      color: 'pixel-amber'
    }
  ]

  const skills = [
    { 
      icon: Code, 
      title: 'CODING.exe', 
      subtitle: 'Python | SQL | R',
      color: 'text-pixel-green',
      bg: 'bg-pixel-green/10 border-pixel-green'
    },
    { 
      icon: Database, 
      title: 'ML_MODEL.dll', 
      subtitle: 'Machine Learning',
      color: 'text-pixel-blue',
      bg: 'bg-pixel-blue/10 border-pixel-blue'
    },
    { 
      icon: Terminal, 
      title: 'PIPELINE.sys', 
      subtitle: 'Data Engineering',
      color: 'text-pixel-amber',
      bg: 'bg-pixel-amber/10 border-pixel-amber'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pixel-bg">
      {/* CRT Screen Effect */}
      <div className="absolute inset-0 bg-pixel-grid opacity-30"></div>
      <div className="absolute inset-0 bg-scanlines opacity-20"></div>
      <div className="absolute inset-0 bg-crt-screen"></div>
      
      {/* Scanline Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-pixel-green/30 animate-scanline-move"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="bg-pixel-screen border-2 border-pixel-green rounded-lg p-4 font-mono text-left max-w-2xl mx-auto shadow-lg shadow-pixel-green/20">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-pixel-red mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-pixel-amber mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-pixel-green mr-2"></div>
              <span className="text-pixel-white text-sm ml-2">system_profile.exe</span>
            </div>
            <div className="h-32 overflow-hidden">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index <= currentLine ? 1 : 0.3,
                    color: index === currentLine ? '#00ff00' : '#808080'
                  }}
                  className="text-sm py-1 font-mono"
                >
                  {line}
                  {index === currentLine && (
                    <span className="animate-terminal-blink text-pixel-green">█</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono tracking-wider text-pixel-white animate-pixel-glow">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-pixel-green"
            >
              █
            </motion.span>
          </h1>
          <div className="bg-pixel-screen border border-pixel-cyan rounded px-6 py-3 inline-block mb-4">
            <p className="text-xl md:text-2xl text-pixel-cyan font-mono">
              &gt; Junior Data Scientist &amp; Data Engineer
            </p>
          </div>
        </motion.div>

        {/* Skills Display - Pixel Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12"
        >
          <div className="text-pixel-amber font-mono text-lg mb-6">
            &gt; LOADING_SKILLS.exe...
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={index}
                  className={`bg-pixel-screen border-2 ${skill.bg} rounded-lg p-6 font-mono hover:scale-105 transition-transform duration-300 group cursor-pointer`}
                  whileHover={{ y: -4 }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className={`w-6 h-6 ${skill.color} mr-3 animate-pixel-pulse`} />
                    <span className={`text-lg font-bold ${skill.color}`}>
                      {skill.title}
                    </span>
                  </div>
                  <div className="text-pixel-white text-sm">
                    {skill.subtitle}
                  </div>
                  <div className="mt-2 text-xs text-pixel-gray">
                    STATUS: LOADED ✓
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Action Buttons - Arcade Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative bg-pixel-green text-pixel-bg font-mono font-bold px-8 py-4 border-4 border-pixel-green hover:bg-pixel-bg hover:text-pixel-green transition-all duration-300 uppercase tracking-wider shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-pixel-green/20 animate-pixel-pulse"></div>
            <span className="relative z-10">► VIEW PROJECTS</span>
          </motion.button>
          
          <motion.button
            className="group relative bg-pixel-screen border-4 border-pixel-cyan text-pixel-cyan font-mono font-bold px-8 py-4 hover:bg-pixel-cyan hover:text-pixel-bg transition-all duration-300 uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">► CONTACT.exe</span>
          </motion.button>
        </motion.div>

        {/* Social Links - Game UI Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mb-8"
        >
          <div className="text-pixel-white font-mono text-sm mb-4">
            &gt; SOCIAL_LINKS.json
          </div>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 bg-pixel-screen border-2 border-${link.color} text-${link.color} flex items-center justify-center hover:bg-${link.color} hover:text-pixel-bg transition-all duration-300 group relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 animate-pixel-pulse"></div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Power Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-pixel-screen border border-pixel-green rounded px-4 py-2">
            <div className="w-2 h-2 bg-pixel-green rounded-full animate-pixel-pulse mr-2"></div>
            <span className="text-pixel-green font-mono text-sm">SYSTEM READY • ONLINE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}