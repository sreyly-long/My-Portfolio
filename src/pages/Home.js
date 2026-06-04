import { Link } from "react-router-dom";
import sreyly from "../photo/profile.png";
import useTypewriter from "../hooks/useTypewriter";

const tech = ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap",
  "Responsive Design", "Version Control (Git),(SVN)", "Next.js", "Tailwind CSS", "JexFrame",
  "Postgresql", "Oracle",
];

const roles = ["Front-End Developer", "React Developer", "UI Enthusiast", "Problem Solver"];

function Home() {
  const typed = useTypewriter(roles);

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left: intro */}
          <div className="reveal">
            <span className="hero-status">
              <span className="dot" /> Available for new opportunities
            </span>

            <h1>
              Hi, I'm Long Sreyly —<br />
              <span className="gradient-text">{typed}</span>
              <span className="type-caret" aria-hidden="true" />
            </h1>

            <p className="hero-lead">
              I build clean, responsive, and interactive web interfaces using React and modern JavaScript. I am a Computer Science graduate from Royal University of Phnom Penh,
              trained at ISTAD, and received a scholarship from the Korean Software HRD Center at 12 Generation.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="btn btn-grad">
                View My Work <i className="bi bi-arrow-right ms-1" />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact Me
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong className="gradient-text">3+</strong>
                <span>Projects shipped</span>
              </div>
              <div className="stat">
                <strong className="gradient-text">Year 4</strong>
                <span>Computer Science</span>
              </div>
              <div className="stat">
                <strong className="gradient-text">React</strong>
                <span>Primary stack</span>
              </div>
            </div>

            <div className="tech-row">
              {tech.map((t) => (
                <span className="tech-pill" key={t}>
                  <i className="bi bi-stars" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="hero-photo reveal d2">
            <div className="ring" />
            <div className="disc">
              <img src={sreyly} alt="Long Sreyly" />
            </div>
            <span className="chip c1">
              <i className="bi bi-code-slash" /> Clean Code
            </span>

            <span className="chip c2">
              <i className="bi bi-phone" /> Mobile-First
            </span>

            <span className="chip c3">
              <i className="bi bi-lightning-charge" /> Fast Performance
            </span>

            <span className="chip c4">
              <i className="bi bi-palette" /> Modern UI
            </span>

            <span className="chip c5">
              <i className="bi bi-window" /> Responsive Design
            </span>

            <span className="chip c6">
              <i className="bi bi-git" /> Version Control
            </span>

            <span className="chip c7">
              <i className="bi bi-diagram-3" /> RESTful APIs
            </span>

            <span className="chip c8">
              <i className="bi bi-rocket-takeoff" /> Problem Solving
            </span>

            <span className="chip c9">
              <i className="bi bi-braces" /> React Development
            </span>

            <span className="chip c10">
              <i className="bi bi-people" /> Team Collaboration
            </span>

            <span className="chip c11">
              <i className="bi bi-display" /> Interactive UI
            </span>

            <span className="chip c12">
              <i className="bi bi-book" /> Continuous Learning
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
