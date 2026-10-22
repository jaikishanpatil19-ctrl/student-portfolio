import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <section className="about-heading">
        <p className="about-label">GET TO KNOW ME</p>
        <h1>A little about <span>my journey.</span></h1>
        <p>
          A curious learner, an engineering student, and someone
          who enjoys turning ideas into practical projects.
        </p>
      </section>

      <section className="about-layout">
        <div className="about-card">
          <div className="about-avatar">JK</div>
          <h2>Jai Kishan Patil</h2>
          <p>Computer Science Engineering</p>
          <div className="about-divider"></div>
          <p><strong>College:</strong> RV College of Engineering</p>
          <p><strong>Focus:</strong> Software & Web Development</p>
          <p><strong>Goal:</strong> Build useful technology</p>
        </div>

        <div className="about-story">
          <h2>My Story</h2>
          <p>
            I am an engineering student interested in understanding
            how software works and how technology can solve
            everyday problems. I enjoy learning programming,
            exploring web development, and improving my
            problem-solving skills through practice.
          </p>

          <h2>Education</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <p className="timeline-label">CURRENT EDUCATION</p>
              <h3>B.E. in Computer Science Engineering</h3>
              <p>RV College of Engineering</p>
              <p>Currently pursuing my degree</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <p className="timeline-label">LEARNING FOCUS</p>
              <h3>Technical Development</h3>
              <p>Programming, web technologies, and data structures</p>
            </div>
          </div>

          <Link to="/projects" className="about-button">
            Explore My Work →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;