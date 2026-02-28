import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Certifications.css'

const certs = [
  {
    title: 'Oracle Cloud Infrastructure Data Science Professional',
    issuer: 'Oracle University',
    date: 'Sep 2025',
    icon: '☁️',
    link: 'https://your-certificate-link.com',
    color: '#f97316',
  },
  {
    title: 'Oracle Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Sep 2025',
    icon: '🤖',
    link: 'https://your-certificate-link.com',
    color: '#a855f7',
  },
  {
    title: 'Generative AI with Gemini & Streamlit',
    issuer: 'Google Cloud',
    date: 'Nov 2024',
    icon: '✨',
    link: 'https://your-certificate-link.com',
    color: '#06b6d4',
  },
  {
    title: 'Generative AI for Data Scientists',
    issuer: 'Google Cloud',
    date: 'Nov 2024',
    icon: '📊',
    link: 'https://your-certificate-link.com',
    color: '#ec4899',
  },
  {
    title: 'AI Fundamentals',
    issuer: 'IBM',
    date: 'May 2024',
    icon: '🧬',
    link: 'https://your-certificate-link.com',
    color: '#3b82f6',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="certifications__container">
        <motion.div
          className="certifications__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Certifications & <em>Credentials</em></h2>
          <div className="divider-line" />
          <p className="section-desc">
            Industry-recognized qualifications from Google Cloud, Oracle, and IBM.
          </p>
        </motion.div>

        <div className="certifications__grid">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="cert-card__icon-wrap"
                style={{ '--cert-color': cert.color, boxShadow: `0 0 24px ${cert.color}25` }}
              >
                <span>{cert.icon}</span>
              </div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              <div className="cert-card__arrow">↗</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
