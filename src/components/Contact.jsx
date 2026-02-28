import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const socials = [
  {
    label: 'Email',
    value: 'ritika452044@gmail.com',
    href: 'mailto:ritika452044@gmail.com',
    icon: '✉️',
  },
  {
    label: 'LinkedIn',
    value: 'ritika-bhati',
    href: 'https://linkedin.com/in/ritika-bhati',
    icon: '💼',
  },
  {
    label: 'GitHub',
    value: 'Ritika-Bhati-22',
    href: 'https://github.com/Ritika-Bhati-22',
    icon: '💻',
  },
  {
    label: 'Phone',
    value: '+91-7465934575',
    href: 'tel:+917465934575',
    icon: '📱',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get in <em>Touch</em></h2>
          <div className="divider-line" />
          <p className="section-desc">
            Open to internships, collaborations, and full-time opportunities in AI & Data Science.
          </p>
        </motion.div>

        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card contact__card">
            <div className="contact__card-header">
              <div className="contact__avatar">
                <span>RB</span>
              </div>
              <div>
                <p className="contact__name">Ritika Bhati</p>
                <p className="contact__role">AI & Data Science Engineer</p>
                <div className="contact__status">
                  <span className="status-dot" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            <div className="contact__links">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') || s.href.startsWith('tel') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact__link-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="contact__link-icon">{s.icon}</span>
                  <div className="contact__link-body">
                    <span className="contact__link-label">{s.label}</span>
                    <span className="contact__link-value">{s.value}</span>
                  </div>
                  <span className="contact__link-arrow">→</span>
                </motion.a>
              ))}
            </div>

            <div className="contact__location">
              <span>📍</span>
              <span>Meerut, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="contact__aside">
            <div className="glass-card contact__quote-card">
              <p className="contact__quote">
                "I believe the best AI systems are built at the intersection of technical rigor and human-centered design."
              </p>
              <span className="contact__quote-author">— Ritika Bhati</span>
            </div>

            <div className="glass-card contact__internship-card">
              <span className="internship-badge">Experience</span>
              <h4>Generative AI Virtual Intern</h4>
              <p>SmartInternz × Google Cloud</p>
              <p className="internship-period">Sep 2024 – Oct 2024</p>
            </div>
          </div>
        </motion.div>

        <motion.footer
          className="site-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p>© 2025 Ritika Bhati · Built with ♥ using React + Framer Motion</p>
        </motion.footer>
      </div>
    </section>
  )
}
