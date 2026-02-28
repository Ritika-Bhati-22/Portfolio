import { motion } from 'framer-motion'
import './Hero.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__noise" />
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="section-label" variants={itemVariants}>
          AI · Data Science · ML Engineering
        </motion.span>

        <motion.h1 className="hero__title" variants={itemVariants}>
          Hello, I'm<br />
          <em>Ritika Bhati</em>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          Computer Science undergraduate specializing in{' '}
          <span className="highlight">Artificial Intelligence</span> &amp;{' '}
          <span className="highlight">Data Science</span> — building intelligent systems that solve real-world problems.
        </motion.p>

        <motion.div className="hero__actions" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn-glass btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View Projects</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-glass"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>

        <motion.div className="hero__stats" variants={itemVariants}>
          <div className="stat-item">
            <span className="stat-num">5+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">2+</span>
            <span className="stat-label">AI Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">8.22</span>
            <span className="stat-label">CGPA</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
