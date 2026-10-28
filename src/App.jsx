import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'

// Landing page (route "/"). The background image is set in App.css on .hero.
function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Indoor houseplants, thoughtfully grown</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-lead">
            Bring nature indoors with plants chosen for healthy growth and easy living.
          </p>
          <Link to="/plants" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>

      <div className="page-container">
        <AboutUs />
      </div>
    </>
  )
}

export default App
