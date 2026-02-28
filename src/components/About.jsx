import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-frame">
            <div className="profile-placeholder">
              <div className="profile-initials">RB</div>
              <div className="profile-ring ring-1" />
              <div className="profile-ring ring-2" />
              <div className="profile-glow" />
            </div>
            <div className="profile-badge">
              <span className="badge-dot" />
              <span>Open to Opportunities</span>
            </div>
          </div>

          <div className="about__info-cards">
            <div className="glass-card info-card">
              <span className="info-icon">🎓</span>
              <div>
                <p className="info-title">B.Tech CSE</p>
                <p className="info-sub">AI & Data Science</p>
              </div>
            </div>
            <div className="glass-card info-card">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-title">Meerut, UP</p>
                <p className="info-sub">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting intelligent<br /><em>solutions</em> with data
          </h2>
          <div className="divider-line" />
          <p className="about__bio">
            I'm a Computer Science undergraduate at MIET, specializing in Artificial Intelligence and Data Science. With a strong foundation in machine learning and a passion for generative AI, I design end-to-end ML pipelines that turn complex data into meaningful outcomes.
          </p>
          <p className="about__bio">
            From deploying real-time fraud detection systems to building generative AI tools with Google's Gemini API — I love building systems that are both technically rigorous and genuinely useful.
          </p>

          <div className="about__highlights">
            {[
              { num: 'Aug 2023', label: 'Started B.Tech' },
              { num: '8.22', label: 'Current CGPA' },
              { num: 'Google', label: 'Cloud Intern' },
              { num: 'Oracle', label: 'Certified Pro' },
            ].map((item) => (
              <div className="glass-card highlight-item" key={item.label}>
                <span className="highlight-num">{item.num}</span>
                <span className="highlight-label">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a
              href="mailto:ritika452044@gmail.com"
              className="btn-glass btn-primary"
            >
              <span>📬 Contact Me</span>
            </a>
            <a
              href="https://linkedin.com/in/ritika-bhati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
