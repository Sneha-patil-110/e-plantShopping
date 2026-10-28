import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  updateQuantity,
} from './CartSlice'

const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

// Shopping cart page (route "/cart"). All numbers come from the Redux store.
function CartItem() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector(selectCartItems)
  const totalUnits = useSelector(selectCartCount)
  // Cart total: sum of each item's cost times its quantity.
  const cartTotal = items.reduce((sum, item) => sum + item.cost * item.quantity, 0)
  // Checkout is not implemented; this only shows a message. No payment is processed.
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const handleIncrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  const handleDecrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
  const handleRemove = (item) => dispatch(removeItem(item.name))
  const handleContinueShopping = () => navigate('/plants')

  return (
    <>
      <Header />
      {items.length === 0 ? (
        <main className="page-container cart-empty">
          <h1 className="page-title">Your Cart</h1>
          <p>Your cart is empty. Find something green to bring home.</p>
          <button type="button" className="btn btn-primary" onClick={handleContinueShopping}>
            Browse Plants
          </button>
        </main>
      ) : (
        <main className="page-container cart-container">
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
                  <p className="cart-unit-price">{formatPrice(item.cost)} each</p>
                </div>

                <div className="qty-controls">
                  <button
                    type="button"
                    className="btn btn-secondary btn-icon"
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => handleDecrement(item)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="qty-value" aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
                  <button
                    type="button"
                    className="btn btn-secondary btn-icon"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>

                <p className="cart-subtotal">{formatPrice(item.cost * item.quantity)}</p>

                <button
                  type="button"
                  className="btn btn-link btn-remove cart-item-delete"
                  aria-label={`Delete ${item.name} from cart`}
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <p className="cart-total">
              Cart total: <strong>{formatPrice(cartTotal)}</strong>
            </p>
            <div className="cart-actions">
              <button type="button" className="btn btn-secondary continue-shopping-button" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setCheckoutMessage('Checkout Coming Soon!')}
              >
                Checkout
              </button>
            </div>
            {checkoutMessage && (
              <p className="checkout-message" role="status">{checkoutMessage}</p>
            )}
          </div>
        </main>
      )}
    </>
  )
}

export default CartItem
