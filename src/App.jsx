import { useNavigate } from 'react-router-dom'
import Header from './Header'
import AboutUs from './AboutUs'

// Landing page (route "/"). The background image is set in App.css on .background-image.
function App() {
  const navigate = useNavigate()

  const handleGetStartedClick = () => navigate('/plants')

  return (
    <div className="app-container">
      <Header />
      <section className="hero background-image">
        <div className="hero-content">
          <p className="eyebrow">Indoor houseplants, thoughtfully grown</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p className="hero-lead">
            Bring nature indoors with plants chosen for healthy growth and easy living.
          </p>
          <button type="button" className="btn btn-primary btn-lg" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </section>

      <div className="page-container">
        <AboutUs />
      </div>
    </div>
  )
}

export default App
