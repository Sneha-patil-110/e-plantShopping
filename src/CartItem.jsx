import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './CartSlice'

const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

// Shopping cart page (route "/cart"). All numbers come from the Redux store.
function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const totalUnits = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  // Checkout is not implemented; this only shows a message. No payment is processed.
  const [checkoutMessage, setCheckoutMessage] = useState('')

  if (items.length === 0) {
    return (
      <main className="page-container cart-empty">
        <h1 className="page-title">Your Cart</h1>
        <p>Your cart is empty. Find something green to bring home.</p>
        <Link to="/plants" className="btn btn-primary">Browse Plants</Link>
      </main>
    )
  }

  return (
    <main className="page-container">
      <h1 className="page-title">Your Cart</h1>
      <p className="cart-summary">
        Total items: <strong>{totalUnits}</strong>
      </p>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-row">
            <img src={item.image} alt={item.alt} className="cart-thumb" />
            <div className="cart-info">
              <h2 className="cart-name">{item.name}</h2>
              <p className="cart-unit-price">{formatPrice(item.price)} each</p>
            </div>

            <div className="qty-controls">
              <button
                type="button"
                className="btn btn-secondary btn-icon"
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={() => dispatch(decreaseQuantity(item.id))}
                disabled={item.quantity <= 1}
              >
                −
              </button>
              <span className="qty-value" aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
              <button
                type="button"
                className="btn btn-secondary btn-icon"
                aria-label={`Increase quantity of ${item.name}`}
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>

            <p className="cart-subtotal">{formatPrice(item.price * item.quantity)}</p>

            <button
              type="button"
              className="btn btn-link btn-remove"
              aria-label={`Remove ${item.name} from cart`}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <p className="cart-total">
          Cart total: <strong>{formatPrice(cartTotal)}</strong>
        </p>
        <div className="cart-actions">
          <Link to="/plants" className="btn btn-secondary">Continue Shopping</Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCheckoutMessage('Checkout coming soon!')}
          >
            Checkout
          </button>
        </div>
        {checkoutMessage && (
          <p className="checkout-message" role="status">{checkoutMessage}</p>
        )}
      </div>
    </main>
  )
}

export default CartItem
