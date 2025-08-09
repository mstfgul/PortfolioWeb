'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Database } from 'lucide-react'

export default function GradientHero() {
  const [text, setText] = useState('')
  const fullText = 'Mustafa Gül'

  useEffect(() => {
    let currentIndex = 0
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, 100)
      }
    }
    setTimeout(typeText, 1000)
  }, [])

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mstfgul',
      label: 'GitHub',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mustafa-gul00/',
      label: 'LinkedIn',
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      icon: Mail,
      href: 'mailto:mstfgul00@gmail.com',
      label: 'Email',
      gradient: 'from-pink-400 to-orange-400'
    }
  ]

  const skills = [
    { icon: Code, label: 'Python • SQL • R', color: 'from-blue-400 to-purple-600' },
    { icon: Database, label: 'Machine Learning', color: 'from-purple-400 to-pink-600' },
    { icon: Sparkles, label: 'Data Pipeline', color: 'from-pink-400 to-orange-500' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-rainbow-gradient bg-[length:400%_400%] animate-gradient-xy opacity-30"></div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 bg-floating-shapes opacity-60"></div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-gentle"></div>
      <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-gentle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-gentle" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-6">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-gradient-primary mr-2" />
              <span className="text-gradient-text text-sm font-medium">Welcome to my digital space</span>
            </motion.div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-rainbow-flow bg-[length:200%_auto]">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-pink-400"
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl text-gradient-text font-light mb-4">
            Junior Data Scientist & Data Engineer
          </p>
          <p className="text-lg text-gradient-muted max-w-2xl mx-auto">
            Turning data into insights, creating beautiful visualizations, and building intelligent systems that make a difference.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl mb-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gradient-text font-semibold text-lg mb-2">Expertise</h3>
                    <p className="text-gradient-muted text-sm">{skill.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">View My Work</span>
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md text-gradient-text border border-white/20 hover:border-white/40 font-semibold rounded-2xl overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mb-16"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 bg-gradient-to-r ${link.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="w-6 h-6 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-gradient-muted text-sm mb-2 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gradient-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}