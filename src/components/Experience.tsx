'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Building, Award, Users, BookOpen } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Junior Data Engineer Intern",
      company: "MinersAI",
      location: "Belgium",
      period: "Jan 2025 - Mar 2025",
      type: "Internship",
      icon: Building,
      color: "blue",
      description: "Currently working on advanced data engineering solutions for geological data processing and AI integration.",
      achievements: [
        "ETL Pipeline Development: Design, optimization, extraction, transformation, and loading of geological data",
        "LLM Integration: Translation of unstructured geological text into structured formats",
        "OCR & LLM for Raster Data: Data extraction from images/maps in geological PDFs",
        "Feature Integration: Continuous workflow optimization and feature implementation",
        "Geospatial & Vector Data Structuring: Structuring spatial/vector data for AI/ML analysis"
      ]
    },
    {
      title: "Data Engineer Trainee",
      company: "BeCode",
      location: "Belgium",
      period: "May 2024 - Dec 2024",
      type: "Training",
      icon: Award,
      color: "green",
      description: "Intensive data engineering bootcamp focusing on practical skills and hands-on projects.",
      achievements: [
        "Mastered data pipelines, ETL processes, and cloud platforms through active learning",
        "Built end-to-end data solutions using modern tools and technologies",
        "Developed expertise in Python, SQL, and data engineering frameworks",
        "Collaborated on real-world projects fostering practical skills and continuous growth",
        "Gained proficiency in cloud services (Azure, AWS) and containerization (Docker)"
      ]
    },
    {
      title: "P4C Instructor/Mentor",
      company: "Private Educational Institution",
      location: "Turkey",
      period: "2021 - 2022",
      type: "Education",
      icon: BookOpen,
      color: "purple",
      description: "Teaching critical thinking through Philosophy for Children (P4C) methodology.",
      achievements: [
        "Designed and delivered philosophy curricula for students of various age groups",
        "Developed critical thinking and analytical skills in students through Socratic dialogue",
        "Created engaging educational materials and interactive learning experiences",
        "Mentored students in developing logical reasoning and ethical thinking",
        "Fostered inclusive classroom environments promoting intellectual curiosity"
      ]
    },
    {
      title: "International Volunteer",
      company: "European Solidarity Corps (ESC)",
      location: "Belgium",
      period: "2022 - 2023",
      type: "Volunteering",
      icon: Users,
      color: "orange",
      description: "Animator organizing projects based on social inclusion and integration for diverse communities.",
      achievements: [
        "Organized and facilitated community integration events for international participants",
        "Developed intercultural communication skills while working with diverse groups",
        "Created educational workshops focused on social inclusion and cultural exchange",
        "Coordinated logistics for large-scale community projects and events",
        "Built strong networks within international volunteer communities"
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', dot: 'bg-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', dot: 'bg-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', dot: 'bg-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', dot: 'bg-orange-600' }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey from philosophy to data engineering, enriched by diverse experiences 
            in education, volunteering, and hands-on technical training.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color)
            const IconComponent = exp.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-300 z-0"></div>
                )}
                
                <div className="flex items-start space-x-6 mb-12">
                  {/* Timeline dot and icon */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center border-4 ${colors.border}`}>
                      <IconComponent className={colors.text} size={24} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">{exp.company}</h4>
                    <p className="text-gray-600 mb-6">{exp.description}</p>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}