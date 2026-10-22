
const skills = [
  { name: "HTML", type: "WEB" },
  { name: "CSS", type: "WEB" },
  { name: "JavaScript", type: "WEB" },
  { name: "React", type: "WEB" },
  { name: "C Programming", type: "PROGRAMMING" },
  { name: "Git & GitHub", type: "TOOLS" }
];

const projects = [
  {
    number: "01",
    title: "Student Portfolio",
    description:
      "A multi-page responsive website presenting my introduction, education, skills and projects.",
    tech: ["React", "CSS", "React Router"]
  },
  {
    number: "02",
    title: "Student Record System",
    description:
      "A practice project for organizing and managing student records using programming concepts.",
    tech: ["C Programming", "Structures", "File Handling"]
  }
];

function Projects() {
  return (
    <main className="work-page">
      <section className="work-heading">
        <p className="work-eyebrow">MY TOOLKIT & WORK</p>
        <h1>Ideas into <span>projects.</span></h1>
        <p>
          Technologies I'm learning and projects I'm building
          as I grow as a developer.
        </p>
      </section>

      <section className="work-section">
        <div className="section-title">
          <span>01 / SKILLS</span>
          <h2>My technical toolkit</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.name}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{skill.name}</h3>
              <p>{skill.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section">
        <div className="section-title">
          <span>02 / SELECTED WORK</span>
          <h2>Projects I'm showcasing</h2>
        </div>

        <div className="work-projects">
          {projects.map((project) => (
            <article className="work-card" key={project.number}>
              <span className="work-number">{project.number}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
