import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section - Tomorrowland Style */}
      <section className="hero">
        <div className="hero-video-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">RETURN TO THE KINGDOM</div>
          <h1 className="hero-main-title">DREAMLAND</h1>
          <h2 className="hero-year">2025</h2>
          <div className="hero-details">
            <span className="hero-dates">JULY 18 - 20</span>
            <span className="hero-location">BOOM, BELGIUM</span>
          </div>
          <p className="hero-tagline">
            Three days of pure magic await in the enchanted kingdom where music transcends reality
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn-primary">GET TICKETS</Link>
            <button className="btn-secondary">EXPLORE THE MAGIC</button>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="announcement">
        <div className="container">
          <div className="announcement-content">
            <h3>PRESALE TICKETS NOW AVAILABLE</h3>
            <p>Join the waiting list for exclusive early access to tickets</p>
            <Link to="/shop" className="announcement-link">REGISTER NOW</Link>
          </div>
        </div>
      </section>

      {/* Lineup Section - Tomorrowland Grid Style */}
      <section className="lineup-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">LINEUP 2025</h2>
            <p className="section-subtitle">Experience the world's finest electronic artists</p>
          </header>
          
          <div className="lineup-grid">
            <div className="artist-card headliner">
              <div className="artist-image">
                <div className="artist-overlay">
                  <span className="artist-name">DAVID GUETTA</span>
                  <span className="artist-type">HEADLINER</span>
                </div>
              </div>
            </div>
            <div className="artist-card headliner">
              <div className="artist-image">
                <div className="artist-overlay">
                  <span className="artist-name">ARMIN VAN BUUREN</span>
                  <span className="artist-type">HEADLINER</span>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="artist-image">
                <div className="artist-overlay">
                  <span className="artist-name">MARTIN GARRIX</span>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="artist-image">
                <div className="artist-overlay">
                  <span className="artist-name">TIËSTO</span>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="artist-image">
                <div className="artist-overlay">
                  <span className="artist-name">CALVIN HARRIS</span>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="artist-image">
                <div className="artist-overlay">
                  <span className="artist-name">DEADMAU5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lineup-cta">
            <button className="btn-outline">VIEW FULL LINEUP</button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">15</div>
              <h3>MAGICAL STAGES</h3>
              <p>Immerse yourself in breathtaking stage designs and cutting-edge production</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">400+</div>
              <h3>WORLD-CLASS ARTISTS</h3>
              <p>The finest selection of electronic music's biggest names and rising stars</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">400K</div>
              <h3>PEOPLE OF TOMORROW</h3>
              <p>Join the global community celebrating music, friendship, and unity</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">LATEST NEWS</h2>
            <p className="section-subtitle">Stay up-to-date with all Dreamland announcements</p>
          </header>
          
          <div className="news-grid">
            <article className="news-card featured">
              <div className="news-image"></div>
              <div className="news-content">
                <h3>Phase 2 Lineup Announcement</h3>
                <p>More incredible artists added to the Dreamland 2025 experience</p>
                <time>August 15, 2025</time>
              </div>
            </article>
            <article className="news-card">
              <div className="news-image"></div>
              <div className="news-content">
                <h3>New Stage Design Revealed</h3>
                <p>Get ready for the most spectacular stage production yet</p>
                <time>August 10, 2025</time>
              </div>
            </article>
            <article className="news-card">
              <div className="news-image"></div>
              <div className="news-content">
                <h3>Accommodation Options</h3>
                <p>Discover all the magical places to stay during your journey</p>
                <time>August 5, 2025</time>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>READY FOR THE JOURNEY?</h2>
            <p>Step into the kingdom where dreams become reality</p>
            <Link to="/shop" className="btn-primary large">SECURE YOUR TICKETS</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
