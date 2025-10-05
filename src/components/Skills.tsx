'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, Settings, TrendingUp } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Analysis",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Python (Pandas, NumPy)", level: 90 },
        { name: "SQL (PostgreSQL, MySQL)", level: 90 },
        { name: "R (Statistical Analysis)", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "green",
      skills: [
        { name: "Apache Spark & PySpark", level: 80 },
        { name: "Airflow", level: 75 },
        { name: "n8n Automation", level: 80 },
        { name: "Docker", level: 75 },
        { name: "ETL Pipeline Design", level: 85 }
      ]
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "AWS (S3, RDS, Lambda)", level: 70 },
        { name: "Google Cloud (BigQuery)", level: 65 },
        { name: "PostgreSQL & MySQL", level: 85 },
        { name: "MongoDB & Redis", level: 70 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "orange",
      skills: [
        { name: "Scikit-Learn & TensorFlow", level: 80 },
        { name: "LangChain & OpenAI API", level: 75 },
        { name: "Feature Engineering", level: 85 },
        { name: "Model Deployment", level: 75 }
      ]
    },
    {
      title: "Data Analysis & Viz",
      icon: TrendingUp,
      color: "red",
      skills: [
        { name: "Exploratory Data Analysis", level: 90 },
        { name: "Statistical Testing", level: 80 },
        { name: "Matplotlib & Seaborn", level: 85 },
        { name: "Streamlit & Plotly", level: 80 },
        { name: "Power BI", level: 65 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "indigo",
      skills: [
        { name: "Git & CI/CD", level: 80 },
        { name: "GeoPandas", level: 75 },
        { name: "Web Scraping", level: 85 },
        { name: "OCR & LLM Integration", level: 75 },
        { name: "FastAPI & Flask", level: 80 }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', bar: 'bg-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', bar: 'bg-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', bar: 'bg-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', bar: 'bg-orange-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600', bar: 'bg-red-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', bar: 'bg-indigo-600' }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical expertise spanning the entire data lifecycle, from pipeline development
            to ML deployment, with active learning through Coursera and DataCamp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color)
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className={colors.text} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${colors.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}