import { createFileRoute } from '@tanstack/react-router'
import './about.css'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className='about-container'>


      <div className="about-card">
        <section className="about-section">
          <h1>About SoundWeb</h1>
          <p className="about-description">
            SoundWeb is an interactive music visualization tool that helps you explore
            relationships between songs in a visually engaging way. Each song is represented as
             a node in a 3D space, with connections showing how songs relate to each other based 
             on various musical attributes. 
             <br /> 
             <br />

            We originally planned on creating a personalized track graph based on one's listening history
            on Spotify. However, due to unfortunate complications with the Spotify API, we decided
            to use a curated selection of songs for demonstration purposes.
          </p>

          <h2>Features</h2>
          <ul className="features-list">
            <li>
              <span className="feature-icon">🎵</span>
              <strong>3D Visualization:</strong> Interactive 3D graph showing song connections
            </li>
            <li>
              <span className="feature-icon">🔍</span>
              <strong>Music Discovery:</strong> Explore related tracks through visual connections
            </li>
            <li>
              <span className="feature-icon">🎨</span>
              <strong>Visual Feedback:</strong> Color-coded nodes and animated particles
            </li>
          </ul>

          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <strong>Frontend:</strong> React, TypeScript, Three.js
            </div>
            <div className="tech-item">
              <strong>Backend:</strong> Django REST Framework
            </div>
            <div className="tech-item">
              <strong>Database:</strong> PostgreSQL
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}