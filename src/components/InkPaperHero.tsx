'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, PenTool, FileText, Code } from 'lucide-react'

export default function InkPaperHero() {
  const [text, setText] = useState('')
  const [isWriting, setIsWriting] = useState(true)
  const fullText = 'Mustafa GUL'
  
  useEffect(() => {
    let currentIndex = 0
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, 200)
      } else {
        setIsWriting(false)
      }
    }
    setTimeout(typeText, 2000)
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

  const skills = [
    {
      icon: Code,
      title: 'Data Analysis',
      subtitle: 'SQL, Python, R | Extracting insights from complex datasets',
      sketch: 'M2,2 L2,14 L14,14 L14,2 Z M4,4 L12,4 M4,6 L10,6 M4,8 L12,8 M4,10 L8,10'
    },
    {
      icon: FileText,
      title: 'Data Engineering',
      subtitle: 'ETL Pipelines, Airflow, PySpark | Building scalable data solutions',
      sketch: 'M3,3 L3,17 L17,17 L17,3 Z M6,6 L14,6 M6,8 L14,8 M6,10 L11,10 M6,12 L14,12'
    },
    {
      icon: PenTool,
      title: 'Machine Learning',
      subtitle: 'Predictive models, LLM integration | AI-powered solutions',
      sketch: 'M2,10 L10,2 L18,10 L10,18 Z M6,10 L10,6 L14,10 L10,14 Z'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper-50">
      {/* Paper Texture Background */}
      <div className="absolute inset-0 bg-paper-texture opacity-40"></div>
      <div className="absolute inset-0 bg-sketch-lines opacity-20"></div>
      <div className="absolute inset-0 bg-paper-grain opacity-30"></div>
      
      {/* Hand-drawn Border with Animation */}
      <motion.div 
        className="absolute inset-8 border border-ink-sketch opacity-20" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        style={{
          background: `linear-gradient(0deg, rgba(26,26,26,0.1) 0%, transparent 2px),
                       linear-gradient(90deg, rgba(26,26,26,0.1) 0%, transparent 2px),
                       linear-gradient(180deg, rgba(26,26,26,0.1) 0%, transparent 2px),
                       linear-gradient(270deg, rgba(26,26,26,0.1) 0%, transparent 2px)`
        }}
      ></motion.div>
      
      {/* Floating Ink Blots - More Dynamic */}
      <motion.div 
        className="absolute top-20 left-20 w-8 h-8 bg-ink-sketch rounded-full opacity-10"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-32 right-32 w-6 h-6 bg-ink-sketch rounded-full opacity-15"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute top-40 right-20 w-4 h-4 bg-ink-sketch rounded-full opacity-10"
        animate={{ 
          y: [0, -10, 0],
          x: [0, -5, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      
      {/* Flying Paper Pieces */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-paper-300 transform rotate-45 opacity-20"
        animate={{ 
          y: [0, -100, 0],
          x: [0, 50, 0],
          rotate: [45, 405, 45]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-2 h-4 bg-paper-400 opacity-15"
        animate={{ 
          y: [0, 80, 0],
          x: [0, -30, 0],
          rotate: [0, 270, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      ></motion.div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Hand-drawn Header Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-px bg-ink-sketch mx-auto opacity-40"
              animate={{ width: [128, 140, 128] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <div className="flex justify-center mt-2">
              <motion.div 
                className="w-2 h-2 border border-ink-sketch transform rotate-45 opacity-30"
                animate={{ rotate: [45, 225, 45] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Title - Enhanced Handwritten Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-ink-black leading-tight tracking-wide">
            <motion.span 
              className="relative inline-block"
              animate={{ 
                textShadow: [
                  "0 0 1px rgba(26,26,26,0.1)",
                  "0 0 2px rgba(26,26,26,0.2)",
                  "0 0 1px rgba(26,26,26,0.1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
              {isWriting && (
                <motion.span
                  animate={{ 
                    opacity: [0, 1, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 1, repeat: Infinity },
                    rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -right-4 top-0 text-ink-sketch text-4xl"
                >
                  ✎
                </motion.span>
              )}
              {/* Animated Hand-drawn underline */}
              <motion.svg 
                className="absolute -bottom-2 left-0 w-full h-4 opacity-30"
                viewBox="0 0 300 20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 4 }}
              >
                <motion.path 
                  d="M5,15 Q50,10 100,12 T200,11 T290,13" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  className="text-ink-sketch"
                  animate={{
                    d: [
                      "M5,15 Q50,10 100,12 T200,11 T290,13",
                      "M5,13 Q50,12 100,10 T200,13 T290,15",
                      "M5,15 Q50,10 100,12 T200,11 T290,13"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.svg>
            </motion.span>
          </h1>
          
          {/* Enhanced Subtitle with sketch style */}
          <div className="relative inline-block">
            <motion.p
              className="text-xl md:text-2xl text-ink-gray font-light tracking-wide"
              animate={{
                color: ["#505050", "#1a1a1a", "#505050"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              Data Professional | Data Engineering • Analytics • Machine Learning
            </motion.p>
            {/* Animated Bracket sketches */}
            <motion.svg 
              className="absolute -left-8 top-0 w-6 h-full opacity-20" 
              viewBox="0 0 20 40"
              animate={{ x: [-2, 0, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M15,5 Q5,5 5,20 Q5,35 15,35" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-ink-sketch"/>
            </motion.svg>
            <motion.svg 
              className="absolute -right-8 top-0 w-6 h-full opacity-20" 
              viewBox="0 0 20 40"
              animate={{ x: [2, 0, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <path d="M5,5 Q15,5 15,20 Q15,35 5,35" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-ink-sketch"/>
            </motion.svg>
          </div>
        </motion.div>

        {/* Enhanced Skills - Dynamic Sketch Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.7 + index * 0.2, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -8, 
                    rotate: index % 2 === 0 ? 2 : -2,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                >
                  <motion.div 
                    className="relative bg-paper-100 border border-ink-border p-8 overflow-hidden"
                    animate={{ 
                      boxShadow: [
                        "2px 2px 4px rgba(0,0,0,0.1)",
                        "4px 4px 8px rgba(0,0,0,0.15)",
                        "2px 2px 4px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Hand-drawn corners with animation */}
                    <motion.svg 
                      className="absolute top-1 left-1 w-4 h-4 opacity-30" 
                      viewBox="0 0 20 20"
                      animate={{ opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <path d="M2,2 L2,8 M2,2 L8,2" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-ink-sketch"/>
                    </motion.svg>
                    <svg className="absolute top-1 right-1 w-4 h-4 opacity-30" viewBox="0 0 20 20">
                      <path d="M18,2 L18,8 M18,2 L12,2" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-ink-sketch"/>
                    </svg>
                    <svg className="absolute bottom-1 left-1 w-4 h-4 opacity-30" viewBox="0 0 20 20">
                      <path d="M2,18 L2,12 M2,18 L8,18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-ink-sketch"/>
                    </svg>
                    <svg className="absolute bottom-1 right-1 w-4 h-4 opacity-30" viewBox="0 0 20 20">
                      <path d="M18,18 L18,12 M18,18 L12,18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-ink-sketch"/>
                    </svg>
                    
                    {/* Animated sketch icon */}
                    <div className="flex justify-center mb-6">
                      <motion.svg 
                        className="w-12 h-12 text-ink-black opacity-70" 
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.path 
                          d={skill.sketch}
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          fill="none" 
                          className="group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 2 + index * 0.3 }}
                        />
                      </motion.svg>
                    </div>
                    
                    <motion.h3 
                      className="text-lg font-medium text-ink-black mb-3 tracking-wide"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.title}
                    </motion.h3>
                    <motion.p 
                      className="text-ink-gray text-sm tracking-wide font-light leading-relaxed"
                      animate={{
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      {skill.subtitle}
                    </motion.p>
                    
                    {/* Animated Hand-drawn underline */}
                    <motion.svg 
                      className="absolute bottom-4 left-8 right-8 h-1 opacity-20" 
                      viewBox="0 0 100 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 3 + index * 0.2 }}
                    >
                      <motion.path 
                        d="M2,2 Q25,1 50,2 T98,2" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        fill="none"
                        className="text-ink-sketch"
                        animate={{
                          d: [
                            "M2,2 Q25,1 50,2 T98,2",
                            "M2,1 Q25,3 50,1 T98,3", 
                            "M2,2 Q25,1 50,2 T98,2"
                          ]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.svg>
                    
                    {/* Floating sketch particles */}
                    <motion.div 
                      className="absolute top-2 right-2 w-1 h-1 bg-ink-sketch rounded-full opacity-30"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-ink-sketch rounded-full opacity-40"
                      animate={{ 
                        x: [0, 8, 0],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Call to Action - Dynamic Sketched Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative px-8 py-3 bg-ink-black text-paper-50 font-medium tracking-wide border-2 border-ink-black hover:bg-paper-50 hover:text-ink-black transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.08, 
              rotate: [0, -1, 1, 0],
              boxShadow: "8px 8px 0px rgba(26, 26, 26, 0.3)"
            }}
            whileTap={{ 
              scale: 0.95, 
              rotate: 0,
              boxShadow: "2px 2px 0px rgba(26, 26, 26, 0.3)"
            }}
            animate={{
              boxShadow: [
                "4px 4px 0px rgba(26, 26, 26, 0.2)",
                "6px 6px 0px rgba(26, 26, 26, 0.25)",
                "4px 4px 0px rgba(26, 26, 26, 0.2)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              hover: { type: "spring", stiffness: 400, damping: 10 }
            }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View My Work</span>
            {/* Enhanced Sketch border effect */}
            <motion.svg 
              className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" 
              viewBox="0 0 100 40"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <path d="M2,2 L98,2 L98,38 L2,38 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-ink-sketch"/>
            </motion.svg>
          </motion.button>
          
          <motion.button
            className="group relative px-8 py-3 bg-transparent text-ink-black font-medium tracking-wide border-2 border-ink-sketch hover:bg-ink-sketch hover:text-paper-50 transition-all duration-300"
            whileHover={{ 
              scale: 1.08, 
              rotate: [0, 1, -1, 0],
              borderColor: "#1a1a1a"
            }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            animate={{
              borderWidth: ["2px", "3px", "2px"],
            }}
            transition={{ 
              borderWidth: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              hover: { type: "spring", stiffness: 400, damping: 10 }
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Social Links - More Dynamic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mb-8"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-12 h-px bg-ink-sketch opacity-40"
              animate={{ width: [48, 56, 48] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="mx-4 w-1 h-1 bg-ink-sketch rounded-full opacity-40"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="w-12 h-px bg-ink-sketch opacity-40"
              animate={{ width: [48, 56, 48] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
          </motion.div>
          
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 border border-ink-border hover:border-ink-black flex items-center justify-center transition-all duration-300 hover:bg-ink-black hover:text-paper-50 overflow-hidden"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -5, 5, 0],
                    y: -3,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                    hover: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                >
                  <IconComponent className="w-5 h-5 text-ink-black group-hover:text-paper-50 transition-colors duration-300 relative z-10" />
                  
                  {/* Enhanced Sketch effect on hover */}
                  <motion.svg 
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-40 transition-opacity duration-300" 
                    viewBox="0 0 48 48"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <path d="M4,4 L44,4 L44,44 L4,44 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-ink-sketch"/>
                  </motion.svg>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Status - Animated Handwritten Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <motion.div 
            className="relative inline-block"
            animate={{
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <motion.p
              className="text-ink-gray text-sm font-light tracking-wide italic"
              animate={{
                color: ["#505050", "#1a1a1a", "#505050"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              "Transforming raw data into actionable insights"
            </motion.p>
            {/* Enhanced Animated sketch arrow */}
            <motion.svg 
              className="absolute -right-16 top-0 w-12 h-8 opacity-30" 
              viewBox="0 0 40 20"
              animate={{
                x: [0, 3, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.path 
                d="M5,15 Q20,5 35,10 L30,8 M35,10 L30,12" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="text-ink-sketch"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 4, ease: "easeInOut" }}
              />
            </motion.svg>
            
            {/* Floating dots around text */}
            <motion.div 
              className="absolute -left-4 top-2 w-1 h-1 bg-ink-sketch rounded-full opacity-40"
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute -right-2 bottom-2 w-0.5 h-0.5 bg-ink-sketch rounded-full opacity-50"
              animate={{
                x: [0, 6, 0],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}