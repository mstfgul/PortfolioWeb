'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Star, Award, Crown } from 'lucide-react'

export default function ArtDecoHero() {
  const [text, setText] = useState('')
  const fullText = 'Mustafa Gül'
  
  useEffect(() => {
    let currentIndex = 0
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, 120)
      }
    }
    setTimeout(typeText, 1500)
  }, [])

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mustafagul',
      label: 'GitHub',
      color: 'from-deco-gold to-deco-bronze'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mustafagul',
      label: 'LinkedIn',
      color: 'from-deco-bronze to-deco-copper'
    },
    {
      icon: Mail,
      href: 'mailto:mstfgul00@gmail.com',
      label: 'Email',
      color: 'from-deco-copper to-deco-gold'
    }
  ]

  const achievements = [
    { 
      icon: Crown, 
      title: 'Data Science Excellence', 
      subtitle: 'Advanced Analytics & ML',
      pattern: 'geometric-1'
    },
    { 
      icon: Award, 
      title: 'Engineering Mastery', 
      subtitle: 'Scalable Data Pipelines',
      pattern: 'geometric-2'
    },
    { 
      icon: Star, 
      title: 'Innovation Leader', 
      subtitle: 'Cutting-edge Solutions',
      pattern: 'geometric-3'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deco-bg">
      {/* Art Deco Background Patterns */}
      <div className="absolute inset-0 bg-deco-gradient"></div>
      <div className="absolute inset-0 bg-art-deco-rays opacity-20 animate-deco-rays"></div>
      <div className="absolute inset-0 bg-geometric-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-elegant-texture"></div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute inset-0 border-l-4 border-t-4 border-deco-gold opacity-30"></div>
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-deco-gold transform rotate-45 opacity-20"></div>
        <div className="absolute top-16 left-16 w-8 h-8 border border-deco-bronze transform rotate-45 opacity-40"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64">
        <div className="absolute inset-0 border-r-4 border-t-4 border-deco-gold opacity-30"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-deco-gold transform -rotate-45 opacity-20"></div>
        <div className="absolute top-16 right-16 w-8 h-8 border border-deco-bronze transform -rotate-45 opacity-40"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64">
        <div className="absolute inset-0 border-l-4 border-b-4 border-deco-gold opacity-30"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-deco-gold transform -rotate-45 opacity-20"></div>
        <div className="absolute bottom-16 left-16 w-8 h-8 border border-deco-bronze transform -rotate-45 opacity-40"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64">
        <div className="absolute inset-0 border-r-4 border-b-4 border-deco-gold opacity-30"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-deco-gold transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-16 right-16 w-8 h-8 border border-deco-bronze transform rotate-45 opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-deco-gold via-deco-bronze to-deco-gold blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-r from-transparent via-deco-surface to-transparent py-8 px-12 border-t border-b border-deco-gold/30">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-deco-gold"></div>
                <div className="mx-4 w-3 h-3 border-2 border-deco-gold transform rotate-45 bg-deco-gold/20"></div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-deco-gold"></div>
              </div>
              <p className="text-deco-gold text-lg tracking-[0.3em] font-light uppercase">
                Distinguished Portfolio
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="mb-16"
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-8 text-deco-cream leading-none tracking-tight animate-golden-glow">
            <span className="block font-serif">{text}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-deco-gold"
            >
              |
            </motion.span>
          </h1>
          
          {/* Subtitle with Art Deco styling */}
          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-deco-gold to-transparent"></div>
            <div className="bg-deco-bg px-8 inline-block relative">
              <p className="text-2xl md:text-3xl text-deco-gold font-light tracking-[0.2em] uppercase">
                Junior Data Scientist & Engineer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative bg-deco-surface border border-deco-gold/30 p-8 overflow-hidden">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-deco-gold"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-deco-gold"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-deco-gold"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-deco-gold"></div>
                    
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-deco-gold/5 to-transparent"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-deco-gold to-deco-bronze rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-deco-bg" />
                      </div>
                      <h3 className="text-xl font-bold text-deco-cream mb-2 font-serif">
                        {achievement.title}
                      </h3>
                      <p className="text-deco-gold/80 text-sm tracking-wider uppercase">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Elegant Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-16 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-deco-gold to-deco-bronze text-deco-bg font-bold text-lg uppercase tracking-wider border-2 border-deco-gold overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-deco-bronze to-deco-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 font-serif">View Portfolio</span>
          </motion.button>
          
          <motion.button
            className="group relative px-12 py-4 bg-transparent text-deco-gold font-bold text-lg uppercase tracking-wider border-2 border-deco-gold hover:bg-deco-gold hover:text-deco-bg transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 font-serif">Contact Me</span>
          </motion.button>
        </motion.div>

        {/* Sophisticated Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-deco-gold"></div>
            <div className="mx-6 text-deco-gold text-sm uppercase tracking-[0.3em] font-light">
              Connect
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-deco-gold"></div>
          </div>
          
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 border-2 border-deco-gold/50 hover:border-deco-gold flex items-center justify-center transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.7 + index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <IconComponent className="w-6 h-6 text-deco-gold group-hover:text-deco-gold relative z-10 transition-colors duration-300" />
                  
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-deco-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-deco-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-deco-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-deco-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Elegant Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-deco-surface border border-deco-gold/30 px-6 py-3">
            <div className="w-2 h-2 bg-deco-gold rounded-full animate-luxury-pulse mr-3"></div>
            <span className="text-deco-gold text-sm uppercase tracking-wider font-light">
              Available for Elite Projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}