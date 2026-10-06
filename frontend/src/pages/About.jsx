import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About ACME Rentals</h1>
        <p className="intro">
          A full-stack e-commerce application showcasing <strong>customer-facing digital experience features</strong><br/>
          including search, filtering, sorting, pagination, and product recommendations.
        </p>

        <h2>Tech Stack</h2>
        <div className="stack">
          <div className="stack-item">
            <h3>Frontend</h3>
            <p>React with responsive design, URL-based state management</p>
          </div>
          <div className="stack-item">
            <h3>Backend</h3>
            <p>Rails REST API with PostgreSQL</p>
          </div>
          <div className="stack-item">
            <h3>Database</h3>
            <p>PostgreSQL 18.6</p>
          </div>
          <div className="stack-item">
            <h3>Deployment</h3>
            <p>Both services live on Render.io</p>
          </div>
        </div>

        <p className="footer-text">Built as a portfolio project demonstrating full-stack competence.</p>
      </div>
    </div>
  );
}