import Cards from "../component/Cards";

const skills = [
  {
    icon: "bi-filetype-jsx",
    title: "React",
    desc: "Component-driven UIs, hooks, routing, and reusable design patterns.",
    level: 85,
  },
  {
    icon: "bi-filetype-js",
    title: "JavaScript",
    desc: "ES6+, DOM manipulation, async logic, and clean problem-solving.",
    level: 88,
  },
  {
    icon: "bi-bootstrap",
    title: "HTML · CSS · Bootstrap",
    desc: "Semantic markup and responsive, accessible layouts.",
    level: 90,
  },
  {
    icon: "bi-filetype-jsx",
    title: "Next.js",
    desc: "Building fast and scalable React applications with server-side rendering, static site generation, and optimized performance.",
    level: 85,
  },
  {
    icon: "bi-database-fill",
    title: "MySQL · PostgreSQL",
    desc: "Experienced in database design, SQL optimization, CRUD operations, and managing relational data for web applications.",
    level: 85,
  },
  {
    icon: "bi-code-square",
    title: "JexFrame",
    desc: "Experienced in developing enterprise web applications using JexFrame, handling business logic, API integration, and database connectivity.",
    level: 85,
},
];

const projects = [
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2017/07/27/15/24/movie-2545676_640.jpg",
    title: "Legend Movie",
    text: "A dynamic movie app with detail views, link routing, and live content search.",
    link: "https://movie-website-ecru-iota.vercel.app/",
    tags: ["React", "Search", "Dynamic"],
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_640.jpg",
    title: "Domino Cake",
    text: "A responsive bakery landing page built with reusable, static-data components.",
    link: "https://domino-js6zpintg-sreyly-long.vercel.app/",
    tags: ["Responsive", "Static"],
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_640.jpg",
    title: "Croco Vegetables",
    text: "A clean, fully responsive food website showcasing layout and styling skills.",
    link: "https://responsive-croco-website-r8wj8yrxp-sreyly-long.vercel.app/",
    tags: ["Responsive", "UI"],
  },
];

function About() {
  return (
    <main>
      {/* About */}
      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7 reveal">
              <span className="section-eyebrow">About Me</span>
              <div className="about-card mt-3">
                <h2 className="section-title">
                  Turning ideas into <span className="gradient-text">interactive</span> web experiences
                </h2>
                <p> Hello! I'm <strong>Long Sreyly</strong>, a Frontend Developer based in Cambodia with a strong passion for building clean, responsive, and user-friendly web applications.</p>
                <p>I graduated with a Bachelor's degree in Computer Science from Royal University of Phnom Penh and currently have around 1 year and 8 months of professional experience in frontend development.</p>
                <p>My main tech stack includes JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and React. I also have experience working with tools and technologies such as SVN, Figma, and RESTful APIs.</p>
                <p>At KOSIGN, I work on developing and maintaining web applications, improving performance, and collaborating closely with designers and backend developers to create smooth and user-friendly digital experiences.</p>
                <p>Outside of work, I enjoy learning new technologies, building personal projects, and continuously improving my development and problem-solving skills. </p>
                <p>My goal is to grow as a strong frontend engineer while contributing to innovative and impactful projects with a collaborative team. </p>
              </div>
            </div>

         <div className="col-lg-5 reveal d2">
          <div className="about-card h-100">
            <h5 className="mb-3">Quick Info</h5>

            <ul className="info-list">
              <li>
                <i className="bi bi-person-badge" />
                <strong>Role</strong>
                Front-End Developer
              </li>

              <li>
                <i className="bi bi-briefcase" />
                <strong>Experience</strong>
                1 Year 8 Months
              </li>

              <li>
                <i className="bi bi-mortarboard" />
                <strong>Education</strong>
                Bachelor of Computer Science
              </li>

              <li>
                <i className="bi bi-building" />
                <strong>Company</strong>
                KOSIGN
              </li>

              <li>
                <i className="bi bi-geo-alt" />
                <strong>Based in</strong>
                Phnom Penh, Cambodia
              </li>

              <li>
                <i className="bi bi-code-slash" />
                <strong>Tech Stack</strong>
                    React · JavaScript · Tailwind CSS <br />
                    · HTML5 · CSS3 .Next.js · JexFrame
                    Restful API · Git · SVN
              </li>

              <li>
                <i className="bi bi-lightning-charge" />
                <strong>Focus</strong>
                Responsive UI · Frontend Development
              </li>

              <li>
                <i className="bi bi-translate" />
                <strong>Languages</strong>
                Khmer · English · Korean
              </li>

              <li>
                <i className="bi bi-laptop" />
                <strong>Interests</strong>
                UI Design · Web Performance · Modern Web Apps
              </li>
            </ul>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section pt-0">
        <div className="container">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            A focused front-end toolkit I use to ship polished, responsive interfaces.
          </p>
          <div className="row g-4">
            {skills.map((s, i) => (
              <div className={`col-md-4 reveal d${i + 1}`} key={s.title}>
                <div className="skill-card">
                  <div className="ico"><i className={`bi ${s.icon}`} /></div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                  <div className="skill-bar">
                    <div className="label"><span>Proficiency</span><span>{s.level}%</span></div>
                    <div className="track"><div className="fill" style={{ width: `${s.level}%` }} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section pt-0">
        <div className="container">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            A selection of things I've designed and built. Click through to see them live.
          </p>
          <div className="row">
            {projects.map((p) => (
              <Cards key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
