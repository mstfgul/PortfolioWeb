'use client'

import { motion } from 'framer-motion'
import { Terminal, Github, Linkedin, Mail, MapPin, Code, Database, Cpu } from 'lucide-react'
import TypewriterText from './TypewriterText'
import MatrixRain from './MatrixRain'

export default function HeroTerminal() {
  const skills = ['Data Engineer', 'Python Developer', 'ML Enthusiast', 'Pipeline Architect', 'ETL Specialist']

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mstfgul', label: 'GitHub', color: 'hover:text-terminal-green' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mustafa-gul00', label: 'LinkedIn', color: 'hover:text-terminal-blue' },
    { icon: Mail, href: 'mailto:mstfgul00@gmail.com', label: 'Email', color: 'hover:text-terminal-purple' }
  ]

  return (
    <section className="min-h-screen bg-terminal-bg relative overflow-hidden flex items-center justify-center">
      <MatrixRain />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-matrix-500/30 animate-scan-line"></div>
      </div>

      <div className="container-max section-padding relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="terminal-window max-w-2xl"
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <div className="flex items-center space-x-2 ml-4">
                <Terminal size={16} className="text-matrix-500" />
                <span className="text-matrix-500 font-mono text-sm">mustafa@developer: ~/portfolio</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-matrix-500"
              >
                <span className="text-terminal-blue">mustafa@developer</span>
                <span className="text-white">:</span>
                <span className="text-terminal-purple">~/portfolio</span>
                <span className="text-white">$ </span>
                <span className="text-matrix-500">whoami</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-terminal-green pl-0"
              >
                Junior Data Engineer & Data Scientist
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-matrix-500"
              >
                <span className="text-terminal-blue">mustafa@developer</span>
                <span className="text-white">:</span>
                <span className="text-terminal-purple">~/portfolio</span>
                <span className="text-white">$ </span>
                <span className="text-matrix-500">cat skills.json</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-terminal-green pl-0 space-y-1"
              >
                <div>{'{'}</div>
                <div className="pl-4">&quot;languages&quot;: [&quot;Python&quot;, &quot;SQL&quot;],</div>
                <div className="pl-4">&quot;frameworks&quot;: [&quot;Pandas&quot;, &quot;PySpark&quot;, &quot;Airflow&quot;],</div>
                <div className="pl-4">&quot;databases&quot;: [&quot;PostgreSQL&quot;, &quot;Snowflake&quot;],</div>
                <div className="pl-4">&quot;cloud&quot;: [&quot;AWS&quot;, &quot;Azure&quot;],</div>
                <div className="pl-4">&quot;passion&quot;: &quot;Building data pipelines&quot;</div>
                <div>{'}'}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-matrix-500"
              >
                <span className="text-terminal-blue">mustafa@developer</span>
                <span className="text-white">:</span>
                <span className="text-terminal-purple">~/portfolio</span>
                <span className="text-white">$ </span>
                <TypewriterText 
                  texts={[
                    'python data_pipeline.py --run',
                    'docker-compose up -d',
                    'git push origin main',
                    'pytest tests/ --verbose'
                  ]}
                  className="text-matrix-500"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-10"
          >
            {/* ASCII Art Profile */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-matrix-500 font-mono text-sm ml-4">profile.ascii</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <motion.div 
                      className="w-32 h-32 rounded-lg bg-gradient-to-br from-matrix-500 to-terminal-blue flex items-center justify-center text-4xl font-bold text-black font-mono relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>MG</span>
                      <div className="absolute inset-0 bg-matrix-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-matrix-500"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-matrix-500"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-matrix-500"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-matrix-500"></div>
                    </motion.div>
                    
                    {/* Status indicators */}
                    <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
                      <div className="w-3 h-3 bg-matrix-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-terminal-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold font-mono">
                      <span className="text-matrix-500">MUSTAFA</span>
                      <span className="text-terminal-blue"> GÜL</span>
                    </h1>
                    <div className="text-terminal-green font-mono">
                      <TypewriterText texts={skills} speed={150} className="text-lg" />
                    </div>
                    <div className="flex items-center space-x-4 text-sm font-mono">
                      <div className="flex items-center space-x-1 text-terminal-blue">
                        <MapPin size={14} />
                        <span>Marche-en-Famenne, BE</span>
                      </div>
                      <div className="flex items-center space-x-1 text-terminal-purple">
                        <span className="w-2 h-2 bg-matrix-500 rounded-full animate-pulse"></span>
                        <span>Available for work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Command Buttons */}
            <div className="space-y-6">
              <h3 className="text-matrix-500 font-mono text-lg flex items-center space-x-2">
                <span className="text-terminal-green">$</span>
                <span>cat available-commands.sh</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Code, text: './view-projects', action: '#projects', color: 'hover:text-matrix-500' },
                  { icon: Database, text: './show-skills', action: '#skills', color: 'hover:text-terminal-blue' },
                  { icon: Cpu, text: './list-experience', action: '#experience', color: 'hover:text-terminal-purple' },
                  { icon: Mail, text: './send-message', action: '#contact', color: 'hover:text-terminal-orange' }
                ].map((cmd, index) => {
                  const IconComponent = cmd.icon
                  return (
                    <motion.a
                      key={index}
                      href={cmd.action}
                      className={`btn-terminal flex items-center space-x-2 group ${cmd.color}`}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <span className="text-terminal-green">$</span>
                      <IconComponent size={16} />
                      <span>{cmd.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links Terminal Style */}
            <div className="space-y-6">
              <h3 className="text-matrix-500 font-mono text-lg flex items-center space-x-2">
                <span className="text-terminal-green">$</span>
                <span>ls -la ./social-networks</span>
              </h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-3 terminal-window ${social.color} transition-all duration-300 group hover:bg-terminal-bg/50`}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <IconComponent size={18} className="group-hover:animate-pulse" />
                      </div>
                      <div className="font-mono text-sm">
                        <div className="text-matrix-500 group-hover:text-terminal-blue transition-colors duration-300">
                          {social.label.toLowerCase()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {social.href.replace('mailto:', '').replace('https://', '')}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Repositioned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div 
            className="flex flex-col items-center space-y-3 text-matrix-500 font-mono cursor-pointer group"
            onClick={() => {
              const aboutSection = document.getElementById('about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-sm group-hover:text-terminal-blue transition-colors duration-300"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* scroll_down() */}
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-matrix-500 group-hover:border-terminal-blue rounded-full flex justify-center transition-colors duration-300"
            >
              <motion.div 
                className="w-1 h-3 bg-matrix-500 group-hover:bg-terminal-blue rounded-full mt-2 transition-colors duration-300"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}