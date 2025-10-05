'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id === 'home' ? '' : item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const sectionTop = section.offsetTop || 0
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-paper-50/95 backdrop-blur-sm border-b border-ink-border"
      >
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-ink-black border border-ink-sketch flex items-center justify-center relative">
                <span className="text-paper-50 font-medium text-lg">MG</span>
                {/* Hand-drawn border effect */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 40 40">
                  <path d="M2,2 L38,2 L38,38 L2,38 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-ink-sketch"/>
                </svg>
              </div>
              <span className="font-medium text-xl text-ink-black tracking-wide">Mustafa Gül</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 transition-all duration-300 text-sm relative ${
                      activeSection === item.id
                        ? 'text-paper-50 bg-ink-black'
                        : 'text-ink-black hover:text-paper-50 hover:bg-ink-sketch'
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={16} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
              
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-ink-border text-ink-black hover:text-paper-50 hover:bg-ink-sketch transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={false}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute right-0 top-0 h-full w-80 bg-paper-50/98 backdrop-blur-sm border-l border-ink-border shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-ink-sketch border border-ink-border flex items-center justify-center">
                  <span className="text-paper-50 font-medium">MG</span>
                </div>
                <span className="font-medium text-lg text-ink-black tracking-wide">Menu</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="sm:hidden">
                  <ThemeToggle />
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 border border-ink-border text-ink-black hover:text-paper-50 hover:bg-ink-sketch transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 transition-all duration-300 text-sm relative ${
                      activeSection === item.id
                        ? 'text-paper-50 bg-ink-black'
                        : 'text-ink-black hover:text-paper-50 hover:bg-ink-sketch'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-ink-border">
              <div className="text-center">
                <p className="text-sm text-ink-gray mb-4 tracking-wide">Get in touch</p>
                <motion.a
                  href="mailto:mstfgul00@gmail.com"
                  className="bg-ink-black text-paper-50 px-6 py-3 font-medium border border-ink-black hover:bg-paper-50 hover:text-ink-black transition-all duration-300 inline-block tracking-wide relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  {/* Sketch border on hover */}
                  <svg className="absolute inset-0 w-full h-full opacity-0 hover:opacity-30 transition-opacity duration-300" viewBox="0 0 120 40">
                    <path d="M2,2 L118,2 L118,38 L2,38 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-ink-sketch"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  )
}