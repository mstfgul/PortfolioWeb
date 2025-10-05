'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Globe, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-dark-800/50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recent Junior Data Engineer Intern at MinersAI with hands-on experience across the full data lifecycle:
            ETL pipelines, exploratory analysis, ML model development, and workflow automation. My philosophy
            background brings exceptional problem-solving skills and critical thinking to data challenges.
            Currently expanding expertise through continuous learning while building production-ready solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glassmorphism-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-primary-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Master's in Philosophy</h4>
                <p className="text-gray-600">Istanbul MSGSU, Turkey (2020-2022)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Bachelor of Philosophy</h4>
                <p className="text-gray-600">Ankara YBU, Turkey (2013-2018)</p>
                <p className="text-sm text-gray-500">Minors: Psychology, Sociology</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glassmorphism-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">English</span>
                <span className="text-gray-600">B2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">French</span>
                <span className="text-gray-600">B1</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphism-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interests</h3>
            <div className="space-y-2">
              {['Reading', 'Chess', 'Cinema', 'Cycling'].map((hobby, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{hobby}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Work Authorization</h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-lg text-gray-700">Fully eligible to work in Belgium and EU</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}