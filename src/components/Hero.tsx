'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden floating-shapes cyber-grid">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Interactive cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 bg-primary-400/30 rounded-full blur-xl"
        style={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative group">
              <motion.div 
                className="w-48 h-48 mx-auto mb-8 rounded-full glassmorphism neon-glow flex items-center justify-center floating-element group-hover:animate-pulse"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-400/80 to-accent-600/80 backdrop-blur-sm flex items-center justify-center text-6xl font-bold text-white relative overflow-hidden">
                  <span className="relative z-10">MG</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
              
              {/* Orbiting elements */}
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-accent-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 left-8 w-3 h-3 bg-primary-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 relative"
          >
            <span className="text-gradient-cyber bg-clip-text text-transparent">
              MUSTAFA GÜL
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 blur-2xl animate-pulse"></div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-white/90 font-medium"
          >
            <span className="inline-block px-4 py-2 glassmorphism rounded-full">
              Junior Data Engineer & Data Scientist
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base"
          >
            <motion.div 
              className="flex items-center gap-2 glassmorphism px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={16} className="text-accent-300" />
              Marche-en-Famenne, BE
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 glassmorphism px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} className="text-primary-300" />
              +32-467-83-9465
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Mail, href: 'mailto:mstfgul00@gmail.com', color: 'hover:shadow-red-500/50' },
              { icon: Github, href: 'https://github.com/mstfgul', color: 'hover:shadow-gray-500/50' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mustafa-gul00', color: 'hover:shadow-blue-500/50' }
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-14 h-14 glassmorphism rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 neon-glow group ${social.color}`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent size={22} className="group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12"
          >
            <motion.a 
              href="#about"
              className="btn-primary inline-flex items-center space-x-2 shimmer-effect"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ 
          y: [0, -20, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}