function Home() {
  return (
    <main className="home-page">
      <div className="hero-content">
        <p className="tagline">HELLO, WORLD! I'M</p>

        <h1>Jai Kishan Patil</h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="intro">
          I enjoy programming, exploring new technologies, and
          building projects that solve real-world problems.
          Welcome to my digital portfolio.
        </p>

        <a href="/projects" className="primary-btn">
          Explore My Projects →
        </a>
      </div>

      <div className="hero-visual">
        <div className="profile-circle">JK</div>
        <p>LEARN. BUILD. GROW.</p>
      </div>
    </main>
  );
}

export default Home;