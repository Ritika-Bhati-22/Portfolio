import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'AI Credit Card Fraud Detection',
    period: 'Oct 2025 – Nov 2025',
    description: 'Architected a supervised machine learning pipeline for real-time credit card fraud detection using synthetic transaction datasets with confidence scoring.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'ML Pipeline'],
    highlights: [
      'Multi-model evaluation for classification reliability',
      'Real-time prediction with confidence scoring',
      'Interactive Streamlit dashboard',
    ],
    emoji: '🛡️',
    color: '#7c3aed',
    link: 'https://github.com/Ritika-Bhati-22',
  },
  {
    title: 'AI-Powered MCQ Generator',
    period: 'Feb 2025 – Apr 2025',
    description: 'Automated MCQ generation system leveraging Google Gemini API for contextual question creation from any domain-specific content.',
    tech: ['Python', 'Streamlit', 'Google Gemini API', 'Generative AI'],
    highlights: [
      '40% reduction in manual question prep effort',
      'Dynamic domain-specific question generation',
      'Bulk export functionality',
    ],
    emoji: '🧠',
    color: '#ec4899',
    link: 'https://github.com/Ritika-Bhati-22',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <em>Projects</em></h2>
          <div className="divider-line" />
          <p className="section-desc">
            Real-world AI solutions built with precision, purpose, and production-ready code.
          </p>
        </motion.div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="project-card__visual" style={{ '--project-color': project.color }}>
                <div className="project-card__emoji-wrap">
                  <span className="project-card__emoji">{project.emoji}</span>
                </div>
                <div className="project-card__glow" />
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <h3 className="project-card__title">{project.title}</h3>
                  <span className="project-card__period">{project.period}</span>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>
                      <span className="highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-card__footer">
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass project-btn"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>View on GitHub ↗</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="https://github.com/Ritika-Bhati-22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            <span>View All on GitHub ↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
