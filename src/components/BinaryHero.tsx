'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import BinaryRain from './BinaryRain'

export default function BinaryHero() {
  const [text, setText] = useState('')
  const fullText = 'Mustafa Gül'

  useEffect(() => {
    let currentIndex = 0
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, 150)
      }
    }
    setTimeout(typeText, 1000)
  }, [])

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mstfgul',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mustafa-gul00/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mstfgul00@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-binary-bg">
      {/* Binary Rain Background */}
      <BinaryRain />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="font-mono text-binary-green mb-2 text-sm">
            {'>'} whoami
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-binary-text mb-4">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-binary-green"
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-8"
        >
          <div className="font-mono text-binary-green mb-2 text-sm">
            {'>'} cat role.txt
          </div>
          <p className="text-xl md:text-2xl text-binary-text/80 font-mono">
            Junior Data Scientist & Data Engineer
          </p>
        </motion.div>

        {/* Binary Skills Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mb-12"
        >
          <div className="font-mono text-binary-green mb-4 text-sm">
            {'>'} ls skills/
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-binary-text font-mono">
            <div className="bg-binary-panel border border-binary-border rounded p-4">
              <div className="text-binary-accent mb-2">01001001</div>
              <div className="text-sm">Python • SQL • R</div>
            </div>
            <div className="bg-binary-panel border border-binary-border rounded p-4">
              <div className="text-binary-accent mb-2">01001010</div>
              <div className="text-sm">Machine Learning</div>
            </div>
            <div className="bg-binary-panel border border-binary-border rounded p-4">
              <div className="text-binary-accent mb-2">01001011</div>
              <div className="text-sm">Data Pipeline</div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="bg-binary-green text-binary-bg px-8 py-3 font-mono font-bold hover:bg-binary-accent transition-colors duration-300 border-2 border-binary-green hover:border-binary-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ./view_projects.sh
          </motion.button>
          <motion.button
            className="bg-binary-panel border-2 border-binary-border text-binary-text px-8 py-3 font-mono hover:border-binary-accent hover:text-binary-accent transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ./contact.sh
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5 }}
          className="mb-16"
        >
          <div className="font-mono text-binary-green mb-4 text-sm">
            {'>'} cat social_links.json
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
                  className="w-12 h-12 bg-binary-panel border border-binary-border rounded flex items-center justify-center text-binary-text hover:text-binary-accent hover:border-binary-accent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-binary-green font-mono text-sm mb-2">scroll_down</span>
            <ChevronDown className="text-binary-green" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}