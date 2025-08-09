'use client'

import { useEffect, useRef } from 'react'

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Only use 0 and 1 for clean binary effect
    const binaryChars = ['0', '1']

    const fontSize = 16
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      // Create trailing effect with black overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font
      ctx.font = `${fontSize}px JetBrains Mono, Courier New, monospace`

      for (let i = 0; i < drops.length; i++) {
        // Random binary character (0 or 1)
        const text = binaryChars[Math.floor(Math.random() * binaryChars.length)]
        
        // Green gradient effect - brighter at the top of the drop
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - 100, 0, drops[i] * fontSize)
        gradient.addColorStop(0, '#00ff41') // Bright green
        gradient.addColorStop(0.5, '#00cc33') // Medium green
        gradient.addColorStop(1, '#004d0d') // Dark green
        
        ctx.fillStyle = gradient
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 50) // Slower for better readability

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-50"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}