'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Brain, Cloud, Map, FileText, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Geological Data ETL Pipeline",
      description: "Advanced ETL pipeline for processing and structuring geological data from multiple sources, integrating OCR and LLM technologies for unstructured data extraction.",
      category: "Data Engineering",
      icon: Database,
      color: "blue",
      tags: ["Python", "ETL", "OCR", "LLM", "Geological Data"],
      features: [
        "Automated geological data extraction from PDFs and images",
        "LLM integration for text-to-structured data conversion",
        "Scalable pipeline architecture with error handling",
        "Real-time data processing and validation"
      ],
      status: "In Progress",
      company: "MinersAI"
    },
    {
      title: "Geospatial Data Processing System",
      description: "Comprehensive system for processing and analyzing geospatial and vector data, optimized for AI/ML analysis workflows in geological applications.",
      category: "Data Science",
      icon: Map,
      color: "green",
      tags: ["GeoPandas", "Vector Data", "Spatial Analysis", "AI/ML"],
      features: [
        "Advanced geospatial data structuring and cleaning",
        "Vector data optimization for machine learning models",
        "Interactive mapping and visualization capabilities",
        "Integration with AI/ML prediction models"
      ],
      status: "In Progress",
      company: "MinersAI"
    },
    {
      title: "Automated Data Pipeline Framework",
      description: "Robust framework for building and managing automated data pipelines with monitoring, logging, and scalable architecture using modern orchestration tools.",
      category: "Data Engineering",
      icon: Zap,
      color: "purple",
      tags: ["Airflow", "Python", "Docker", "Pipeline Orchestration"],
      features: [
        "Automated workflow orchestration with Airflow",
        "Containerized deployment with Docker",
        "Comprehensive monitoring and alerting system",
        "Modular and reusable pipeline components"
      ],
      status: "Completed",
      company: "BeCode Training"
    },
    {
      title: "Cloud Data Warehouse Solution",
      description: "Scalable data warehouse implementation using Snowflake and DBT for efficient data transformation and analytics workflows.",
      category: "Data Engineering",
      icon: Cloud,
      color: "orange",
      tags: ["Snowflake", "DBT", "SQL", "Data Warehousing"],
      features: [
        "Optimized data modeling and transformation logic",
        "Automated testing and deployment processes",
        "Performance optimization and cost management",
        "Integration with business intelligence tools"
      ],
      status: "Completed",
      company: "BeCode Training"
    },
    {
      title: "Machine Learning Model Pipeline",
      description: "End-to-end ML pipeline for data preprocessing, model training, evaluation, and deployment with automated retraining capabilities.",
      category: "Data Science",
      icon: Brain,
      color: "red",
      tags: ["Scikit-learn", "Python", "ML Pipeline", "Model Deployment"],
      features: [
        "Automated feature engineering and selection",
        "Model training with hyperparameter optimization",
        "Comprehensive model evaluation and validation",
        "Automated model deployment and monitoring"
      ],
      status: "Completed",
      company: "BeCode Training"
    },
    {
      title: "Web Scraping & Data Collection Framework",
      description: "Scalable web scraping framework for automated data collection from various sources with data quality checks and storage optimization.",
      category: "Data Engineering",
      icon: FileText,
      color: "indigo",
      tags: ["Web Scraping", "Python", "Data Collection", "API Integration"],
      features: [
        "Multi-source data extraction capabilities",
        "Robust error handling and retry mechanisms",
        "Data quality validation and cleaning",
        "Efficient storage and indexing strategies"
      ],
      status: "Completed",
      company: "Personal Project"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', tag: 'bg-blue-100' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', tag: 'bg-green-100' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', tag: 'bg-purple-100' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', tag: 'bg-orange-100' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', tag: 'bg-red-100' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', tag: 'bg-indigo-100' }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my data engineering and data science projects, demonstrating practical 
            application of modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color)
            const IconComponent = project.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colors.bg} p-8 rounded-xl ${colors.border} border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center`}>
                      <IconComponent className={colors.text} size={24} />
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 ${colors.tag} ${colors.text} rounded-full text-sm font-medium mb-2`}>
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm ${colors.text} font-medium`}>{project.company}</span>
                        <span className={`inline-block w-2 h-2 rounded-full ${
                          project.status === 'In Progress' ? 'bg-yellow-400' : 'bg-green-400'
                        }`}></span>
                        <span className="text-sm text-gray-500">{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className={`flex items-center space-x-2 px-4 py-2 ${colors.text} border ${colors.border} rounded-lg hover:bg-white transition-colors`}>
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className={`flex items-center space-x-2 px-4 py-2 ${colors.text} border ${colors.border} rounded-lg hover:bg-white transition-colors`}>
                    <ExternalLink size={16} />
                    <span>Details</span>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-primary-100 mb-6">
              I'm always open to discussing new projects and opportunities in data engineering and data science.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}