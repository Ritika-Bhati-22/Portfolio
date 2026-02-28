import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    icon: '🐍',
    title: 'Programming',
    skills: ['Python', 'Java', 'SQL'],
    color: 'var(--purple-light)',
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    skills: ['Model Training', 'Predictive Modeling', 'Feature Engineering', 'Model Evaluation', 'Data Preprocessing'],
    color: 'var(--pink-accent)',
  },
  {
    icon: '📊',
    title: 'Libraries & Frameworks',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Streamlit'],
    color: 'var(--blue-accent)',
  },
  {
    icon: '☁️',
    title: 'Tools & Platforms',
    skills: ['Google Cloud Platform', 'Gemini API', 'Power BI', 'Git', 'Jupyter Notebook', 'Excel'],
    color: 'var(--gold-accent)',
  },
  {
    icon: '🔍',
    title: 'Data Techniques',
    skills: ['Exploratory Data Analysis', 'Data Visualization', 'Dashboard Development'],
    color: '#34d399',
  },
  {
    icon: '✨',
    title: 'Generative AI',
    skills: ['Prompt Engineering', 'Gemini API Integration', 'LLM Workflows', 'Inference Pipelines'],
    color: '#fb923c',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">Skills & <em>Technologies</em></h2>
          <div className="divider-line" />
          <p className="section-desc">
            A curated toolkit built through hands-on projects, internships, and industry certifications.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skill-card__header">
                <div
                  className="skill-card__icon-wrap"
                  style={{ boxShadow: `0 0 20px ${cat.color}30` }}
                >
                  <span className="skill-card__icon">{cat.icon}</span>
                </div>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{ '--tag-color': cat.color }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
