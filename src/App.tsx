import { useState, useEffect } from "react";
import "./App.css";
// import keepaImg from "./assets/keepa.png";
// import sellerampImg from "./assets/selleramp.jpg";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   tech?: string[];
//   github?: string;
//   demo?: string;
//   img?: string;
// }

interface Skill {
  category: string;
  items: string[];
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* const projects: Project[] = [
    {
      id: 1,
      img: keepaImg,
      title: "Keepa",
      description:
        "I use Keepa charts to analyze product price history, sales rank trends, Buy Box prices, and competition over time. By interpreting historical data, I evaluate product demand, price stability, seasonality, and market performance to help identify potential product opportunities",
      // tech: ["React", "Node.js", "MongoDB", "Stripe"],
      // github: "https://github.com",
      // demo: "https://demo.com",
    },
    {
      id: 2,
      img: sellerampImg,
      title: "Selleramp ",
      description:
        "I use SellerAmp SAS (Sourcing Analysis Simplified) to evaluate potential Amazon products and determine whether they meet key profitability and sourcing criteria. By analyzing product costs, selling prices, estimated fees, ROI, profit margins, sales rank, and competition, I assess whether a product is worth sourcing for resale.",
      // tech: ["TypeScript", "Socket.io", "PostgreSQL", "Express"],
      // github: "https://github.com",
      // demo: "https://demo.com",
    },
    // {
    //   id: 3,
    //   title: "Portfolio Dashboard",
    //   description:
    //     "Analytics dashboard for tracking portfolio performance with interactive charts and real-time data visualization.",
    //   tech: ["React", "D3.js", "TypeScript", "TailwindCSS"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
  ]; */

  const skills: Skill[] = [
    {
      category: "Chart Analysis Tools",
      items: ["Keepa", "Selleramp"],
    },
    {
      category: "Deal Analysis Tools",
      items: ["Coupert", "Paypal Honey", "DS Amazon Quick View"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#home" className="logo">
            Portfolio
          </a>
          <ul className="nav-links">
            {["home", "about", "skills", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    className={activeSection === section ? "active" : ""}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img
              src="src/assets/profile.jpg"
              alt="Kenneth Lester Alapad"
              className="w-25 pb-3"
            />
            <br />
            <h1>
              <span className="highlight">Kenneth Lester Alapad</span>
            </h1>
            <h2>Amazon Product Researcher</h2>
            <p>
              Amazon Product Research and Product Hunting
              <br />
              Market and Competitor Analysis
            </p>
            <p></p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection("contact")}>
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="about" className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi! I’m an Amazon Product Researcher passionate about helping
                businesses discover profitable product opportunities in the
                competitive e-commerce marketplace. I specialize in product
                research, market analysis, competitor analysis, and evaluating
                product demand to identify potential winning products. I focus
                on analyzing market trends, competition levels, pricing, sales
                performance, and profit margins to support data-driven business
                decisions.
              </p>
              <p>
                {" "}
                My goal is to help Amazon sellers find products with strong
                market potential, reduce research risks, and build a sustainable
                and profitable online business. I value accuracy, continuous
                learning, and delivering reliable insights that contribute to
                business growth. I’m always eager to improve my skills, explore
                new market opportunities, and help brands grow in the
                ever-changing world of e-commerce.
              </p>
            </div>
            <div className="about-stats">
              {/* <div className="stat">
                <span className="number">50+</span>
                <span className="label">Projects Completed</span>
              </div> */}
              <div className="stat">
                <span className="number">1</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="number">100%</span>
                <span className="label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/*
        <section id="projects" className="projects-section">
          <h2>Featured</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <h3 className="project-title">
                  {project.img && (
                    <img
                      src={project.img}
                      alt={`${project.title} logo`}
                      className="project-image"
                    />
                  )}
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech?.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="ticks"></div>
        */}

        <section id="skills" className="skills-section">
          <h2>Skills & Tools</h2>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ticks"></div>

        <section id="contact" className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
            <div className="contact-info">
              <a href="mailto:alapadkennethlester@gmail.com">
                alapadkennethlester@gmail.com
              </a>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jobstreet
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Kenneth Lester Alapad. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
