import { useState } from "react";
import "./App.css";

const skills = [
  "Python",
  "SQL",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "HTML",
  "CSS",
  "JavaScript",
  "Data Analysis",
];

const projects = [
  {
    number: "01",
    title: "LinkPulse",
    category: "WEB DEVELOPMENT",
    description:
      "A short URL management project designed to make links easier to create, manage, and share.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    status: "In Development",
    link: "",
  },
  {
    number: "02",
    title: "Data Analysis Project",
    category: "DATA SCIENCE",
    description:
      "A data analysis project using Python libraries to explore datasets and understand meaningful patterns.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    status: "Planned",
    link: "",
  },
  {
    number: "03",
    title: "Smart Attendance System",
    category: "PYTHON PROJECT",
    description:
      "An attendance shortage alert system designed to help students track attendance and receive alerts.",
    tech: ["Python", "Tkinter", "SMTP"],
    status: "Academic Project",
    link: "",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-ab">A</span>B

        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu} className="nav-contact">
            Let's Talk ↗
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              BCA AI & DS STUDENT
            </div>

            <p className="hero-intro">HELLO, I'M ANMOL BABBAR</p>

            <h1>
              Turning ideas
              <br />
              into <span className="gradient-text">digital</span>
              <br />
              experiences<span className="accent-dot">.</span>
            </h1>

            <p className="hero-description">
              I am a BCA student passionate about technology, web
              development, Python, and data science. I enjoy learning
              new skills and building practical projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                Explore My Work <span>↗</span>
              </a>
             
             <a href="/Resume.jpeg" download="Anmol_Babbar_Resume" className ="resume-btn">
              Download Resume
            </a>

              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <span>FIND ME ON</span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* AVATAR */}
          <div className="hero-visual">
            <div className="avatar-orbit orbit-one"></div>
            <div className="avatar-orbit orbit-two"></div>

            <div className="avatar-card">
              <div className="avatar-top">
                <span>CREATIVE MIND</span>
                <span className="avatar-live"></span>
              </div>

              <div className="avatar-image-wrap">
                <img
                  src="/1anime.jpg"
                  alt="Anime-inspired developer avatar"
                  className="avatar-image"
                />

                <div className="avatar-fallback">
                  <span>AB</span>
                  <p>Developer in progress</p>
                </div>
              </div>

              <div className="avatar-caption">
                <div>
                  <h3>Anmol Babbar</h3>
                  <p>Developer in progress ✦</p>
                </div>

                <span className="avatar-symbol">✳</span>
              </div>
            </div>

            <div className="floating-tag tag-python">
              <span>⌘</span> Python
            </div>

            <div className="floating-tag tag-data">
              <span>✦</span> Data Science
            </div>

            <div className="floating-tag tag-code">
              &lt; / &gt;
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section-container content-section" id="about">
          <div className="section-heading">
            <span className="section-label">01 / ABOUT ME</span>
            <h2>
              A little about <span className="gradient-text">me.</span>
            </h2>
          </div>

          <div className="about-card">
            <div className="about-symbol">✳</div>

            <div className="about-content">
              <h3>Curious mind - Creative builder</h3>

              <p>
                I am currently pursuing BCA in Artificial Intelligence
                and Data Science at Graphic Era Hill University,
                Haldwani. I am developing my skills in programming,
                databases, web development, and data analysis.
              </p>

              <p>
                My goal is to build useful projects, strengthen my
                technical foundation, and grow as a data science
                professional.
              </p>

              <div className="about-details">
                <div>
                  <span>EDUCATION</span>
                  <strong>BCA — AI & DS</strong>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>Haldwani, Uttarakhand</strong>
                </div>

                <div>
                  <span>INTERESTS</span>
                  <strong>Data & Development</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section-container content-section" id="skills">
          <div className="section-heading">
            <span className="section-label">02 / MY TOOLKIT</span>
            <h2>
              Skills I am <span className="gradient-text">building.</span>
            </h2>

            <p className="section-description">
              Technologies and tools I use or am learning through
              coursework and practical projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skill-name">{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          className="section-container content-section"
          id="projects"
        >
          <div className="section-heading">
            <span className="section-label">03 / SELECTED WORK</span>

            <h2>
              Things I am <span className="gradient-text">creating.</span>
            </h2>

            <p className="section-description">
              A collection of projects and ideas from my learning journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span>PROJECT DETAILS</span>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title}`}
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="project-link-placeholder">↗</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          className="section-container content-section"
          id="contact"
        >
          <div className="contact-card">
            <span className="section-label">04 / GET IN TOUCH</span>

            <h2>
              Have an idea?
              <br />
              Let's <span className="gradient-text">connect.</span>
            </h2>

            <p>
              Interested in collaborating, discussing technology,
              or connecting about opportunities? Feel free to reach out.
            </p>

            <a
              href="mailto:anmolbabbar877@gmail.com"
              className="button button-primary"
            >
              Send Me an Email ↗
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
            <span className="logo-ab">A</span>B
        </a>

        <p>Designed with curiosity & built with code.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;