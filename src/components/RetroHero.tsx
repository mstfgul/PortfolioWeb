'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, Code, Database, Cpu, Monitor, Zap } from 'lucide-react'

export default function RetroHero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const bootSequence = [
    'MUSTAFA COMPUTER SYSTEMS v2.1',
    'Copyright (C) 2025 Data Engineering Corp.',
    '',
    'Memory Test: 640K OK',
    'Hard Disk: C:\\ [DATA_ENGINEER] 2048MB',
    'Floppy Disk: A:\\ [PORTFOLIO] 1.44MB',
    '',
    'Loading AUTOEXEC.BAT...',
    'Loading CONFIG.SYS...',
    '',
    'Starting MS-DOS...',
    '',
    'C:\\MUSTAFA> DIR',
    'Volume in drive C is DATA_ENGINEER',
    'Directory of C:\\MUSTAFA',
    '',
    'SKILLS     DIR     <DIR>         2025-01-09  14:30',
    'PROJECTS   DIR     <DIR>         2025-01-09  14:31', 
    'EXPERIENCE DIR     <DIR>         2025-01-09  14:32',
    'CONTACT    TXT     1,234         2025-01-09  14:33',
    'RESUME     PDF     89,123        2025-01-09  14:34',
    '',
    '       5 File(s)     90,357 bytes',
    '   2,048,000 bytes free',
    '',
    'C:\\MUSTAFA> TYPE HELLO.TXT',
    '',
    'Hello! I am a Junior Data Engineer',
    'Specializing in Python, ETL, and ML',
    'Ready to build amazing data solutions!',
    '',
    'C:\\MUSTAFA> RUN PORTFOLIO.EXE',
    'Loading portfolio interface...',
    'Ready.'
  ]

  const skills = [
    { name: 'Python', level: 90, color: 'text-dos-yellow' },
    { name: 'SQL', level: 85, color: 'text-dos-cyan' },
    { name: 'ETL', level: 80, color: 'text-dos-green' },
    { name: 'Airflow', level: 75, color: 'text-dos-magenta' },
    { name: 'Docker', level: 70, color: 'text-dos-blue' }
  ]

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 100 + Math.random() * 200) // Variable timing for realistic effect
      return () => clearTimeout(timeout)
    }
  }, [currentLine, bootSequence.length])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen bg-crt-bg relative overflow-hidden flex items-center justify-center p-4">
      {/* CRT Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-1 bg-crt-amber opacity-20 animate-retro-scan"
          style={{ boxShadow: '0 0 10px rgba(255,176,0,0.5)' }}
        />
      </div>

      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Main CRT Monitor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="crt-monitor p-6 h-[600px] overflow-hidden relative z-10"
          >
            {/* DOS Boot Sequence */}
            <div className="font-mono text-sm text-crt-amber space-y-1 h-full overflow-auto">
              {bootSequence.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="whitespace-pre leading-tight"
                >
                  {line}
                </motion.div>
              ))}
              
              {currentLine < bootSequence.length && (
                <div className="flex">
                  <span className="animate-pulse">_</span>
                  {showCursor && <span className="bg-crt-amber w-2 h-4 ml-1 animate-blink">█</span>}
                </div>
              )}
            </div>
          </motion.div>

          {/* Side Panel - Retro Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Personal Info Window */}
            <div className="dos-window">
              <div className="dos-title-bar">
                <span>MUSTAFA.EXE</span>
                <span>[■]</span>
              </div>
              <div className="p-4 text-dos-text font-dos text-sm space-y-2">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-crt-bg p-3 border border-dos-text">
                    <div className="text-2xl font-bold text-dos-yellow mb-1">MG</div>
                    <div className="text-xs">USER.ID</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-dos-cyan">STATUS:</div>
                    <div className="text-dos-green">ONLINE</div>
                    <div className="text-dos-yellow">READY</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-dos-cyan">LOC:</div>
                    <div className="text-dos-text text-xs">BELGIUM</div>
                    <div className="text-dos-green">●</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Progress Bars */}
            <div className="dos-window">
              <div className="dos-title-bar">
                <span>SKILLS.DAT</span>
                <span>[■]</span>
              </div>
              <div className="p-4 space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    <div className="flex justify-between text-dos-text font-dos text-xs mb-1">
                      <span>{skill.name.toUpperCase()}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="bg-crt-bg border border-dos-text h-4 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                        className={`h-full ${skill.color} bg-current`}
                      />
                      {/* ASCII progress pattern */}
                      <div className="absolute inset-0 flex items-center px-1">
                        <span className="font-dos text-xs text-crt-bg">
                          {'█'.repeat(Math.floor(skill.level / 10))}
                          {'░'.repeat(10 - Math.floor(skill.level / 10))}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Commands */}
            <div className="dos-window">
              <div className="dos-title-bar">
                <span>COMMANDS.BAT</span>
                <span>[■]</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { cmd: 'CD PROJECTS', desc: 'View my work', icon: Code, action: '#projects' },
                  { cmd: 'TYPE SKILLS.TXT', desc: 'Technical abilities', icon: Database, action: '#skills' },
                  { cmd: 'DIR EXPERIENCE', desc: 'Work history', icon: Cpu, action: '#experience' },
                  { cmd: 'MAIL MUSTAFA', desc: 'Send message', icon: Mail, action: '#contact' }
                ].map((cmd, index) => {
                  const IconComponent = cmd.icon
                  return (
                    <motion.a
                      key={index}
                      href={cmd.action}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + index * 0.1 }}
                      className="block font-dos text-xs text-dos-text hover:text-dos-yellow hover:bg-dos-bg p-2 border border-transparent hover:border-dos-yellow transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <IconComponent size={12} />
                        <span className="text-dos-cyan">{cmd.cmd}</span>
                        <span className="text-dos-text">- {cmd.desc}</span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="dos-window">
              <div className="dos-title-bar">
                <span>NETWORK.CFG</span>
                <span>[■]</span>
              </div>
              <div className="p-4 space-y-2 font-dos text-xs">
                {[
                  { name: 'GITHUB.COM/MSTFGUL', url: 'https://github.com/mstfgul', icon: Github },
                  { name: 'LINKEDIN.COM/IN/MUSTAFA-GUL00', url: 'https://linkedin.com/in/mustafa-gul00', icon: Linkedin },
                  { name: 'MAILTO:MSTFGUL00@GMAIL.COM', url: 'mailto:mstfgul00@gmail.com', icon: Mail }
                ].map((link, index) => {
                  const IconComponent = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 + index * 0.1 }}
                      className="flex items-center space-x-2 p-2 text-dos-text hover:text-dos-cyan hover:bg-dos-bg border border-transparent hover:border-dos-cyan transition-all duration-200"
                    >
                      <IconComponent size={12} />
                      <span>{link.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="mt-8 bg-dos-cyan text-dos-bg px-4 py-1 font-dos text-sm flex justify-between items-center"
        >
          <div className="flex space-x-4">
            <span>F1-Help</span>
            <span>F2-Save</span>
            <span>F3-Open</span>
            <span>F10-Menu</span>
          </div>
          <div className="flex items-center space-x-2">
            <Monitor size={14} />
            <span>640x480 VGA</span>
            <Zap size={14} />
            <span>READY</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-dos-yellow font-dos text-xs cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <div>PRESS ANY KEY</div>
            <div>TO CONTINUE...</div>
            <div className="mt-2">▼</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}