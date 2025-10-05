'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Brain, Cloud, FileText, Bot, Mail } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered SQL Query Generator",
      description: "Natural language to SQL converter enabling non-technical users to query databases using plain English. Features 95% query accuracy with <2s response time.",
      category: "AI/ML",
      icon: Bot,
      color: "blue",
      tags: ["Python", "OpenAI API", "Streamlit", "Database Design"],
      features: [
        "Natural language processing for SQL generation",
        "95% query accuracy with sub-2-second response time",
        "User-friendly Streamlit interface",
        "Support for complex JOIN operations and aggregations"
      ],
      github: "https://github.com/mstfgul/Retrieve-SQL-Data-via-AI",
      status: "Completed"
    },
    {
      title: "Wine Recommendation System",
      description: "ML-based recommendation engine using collaborative filtering to suggest wines based on user preferences. Trained on 10,000+ wine records with 87% prediction accuracy.",
      category: "Machine Learning",
      icon: Brain,
      color: "green",
      tags: ["Python", "Scikit-Learn", "Flask", "Collaborative Filtering"],
      features: [
        "Collaborative filtering algorithm implementation",
        "87% prediction accuracy on test dataset",
        "RESTful API with Flask for integration",
        "Trained on dataset of 10,000+ wine records"
      ],
      github: "https://github.com/mstfgul/WinesRecommendationProject",
      status: "Completed"
    },
    {
      title: "Real Estate Price Prediction",
      description: "End-to-end ML pipeline for predicting real estate prices with advanced feature engineering. Achieved 92% R² score with production-ready API deployment on AWS.",
      category: "Data Science",
      icon: Database,
      color: "purple",
      tags: ["Machine Learning", "AWS", "Docker", "Feature Engineering"],
      features: [
        "Advanced feature engineering and selection",
        "92% R² score on validation dataset",
        "Production-ready API with <200ms response time",
        "Containerized deployment with Docker on AWS"
      ],
      github: "https://github.com/mstfgul/Immo_Eliza_Deployment",
      status: "Completed"
    },
    {
      title: "Document Q&A System",
      description: "AI-powered document analysis system using semantic search and LLMs. Capable of processing 100+ pages in 30 seconds with 92% accuracy.",
      category: "AI/NLP",
      icon: FileText,
      color: "orange",
      tags: ["NLP", "LangChain", "Vector Embeddings", "Python"],
      features: [
        "Semantic search with vector embeddings",
        "Processes 100+ pages in under 30 seconds",
        "92% accuracy on question-answering tasks",
        "Integration with multiple LLM providers"
      ],
      github: "https://github.com/mstfgul/Gemma-Q-A-with-Docs",
      status: "Completed"
    },
    {
      title: "Data Automation Workflows",
      description: "Intelligent automation workflows using n8n for data processing tasks. Reduced manual data processing time by 70% through automated pipelines.",
      category: "Data Engineering",
      icon: Cloud,
      color: "red",
      tags: ["n8n", "Workflow Automation", "API Integration", "Python"],
      features: [
        "Automated data collection from multiple sources",
        "70% reduction in manual processing time",
        "Error handling and retry mechanisms",
        "Real-time monitoring and alerting"
      ],
      github: "https://github.com/mstfgul",
      status: "Completed"
    },
    {
      title: "Temporary Email Service",
      description: "API-based disposable email generation system with 99.9% uptime. Handles 1000+ daily requests with robust error handling.",
      category: "Web Development",
      icon: Mail,
      color: "indigo",
      tags: ["FastAPI", "Web Scraping", "Python", "API Design"],
      features: [
        "RESTful API with FastAPI framework",
        "99.9% uptime with error handling",
        "Handles 1000+ requests per day",
        "Comprehensive API documentation"
      ],
      github: "https://github.com/mstfgul/temp-mail-generator",
      status: "Completed"
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
            Production-ready solutions demonstrating expertise in data engineering, machine learning,
            and AI integration with measurable impact and real-world applications.
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
                        <span className={`inline-block w-2 h-2 rounded-full bg-green-400`}></span>
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 ${colors.text} border ${colors.border} rounded-lg hover:bg-white transition-colors`}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 ${colors.text} border ${colors.border} rounded-lg hover:bg-white transition-colors`}
                  >
                    <ExternalLink size={16} />
                    <span>Details</span>
                  </a>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Open to New Opportunities</h3>
            <p className="text-blue-100 mb-6">
              Currently seeking Data Analyst, Data Engineer, Junior Data Scientist, or ML Engineer roles in Belgium.
              Available for full-time positions, freelance projects, and technical collaborations.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
