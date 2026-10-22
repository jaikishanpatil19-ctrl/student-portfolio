
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been prepared.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <p>LET'S CONNECT</p>
        <h1>Have an idea? <span>Let's talk.</span></h1>
        <p>
          Have a project idea, a question, or an opportunity?
          I'd be happy to connect.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>
          <h2>Let's create something meaningful.</h2>
          <p>
            I'm interested in learning, collaborating, and
            building projects that solve real problems.
          </p>

          <div className="contact-detail">
            <span>EMAIL</span>
            <p>jaikishanpatil.cs25@rvce.edu.in</p>
          </div>

          <div className="contact-detail">
            <span>GITHUB</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub →
            </a>
          </div>

          <div className="contact-detail">
            <span>LOCATION</span>
            <p>Karnataka, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>

          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit">Send Message →</button>

          <p className="form-note">
            Demo form only — messages are not sent to a server.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
