import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from './CartSlice'

// Shared header used on every page. The badge shows total units, not distinct products.
function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">🌿</span>
          <span className="brand-name">Paradise Nursery</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/plants" className="nav-link">Plants</NavLink>
          <NavLink to="/cart" className="nav-link cart-link" aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}>
            <svg className="cart-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge" data-testid="cart-badge">{cartCount}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
