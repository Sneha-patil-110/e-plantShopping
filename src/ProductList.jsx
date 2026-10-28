import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import { CATEGORIES, PLANTS } from './data/plants'
import { addItem, selectCartCount, selectCartItems } from './CartSlice'

const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

// Sums quantities across cart items. Used for the cart count shown on this page.
const calculateTotalQuantity = (items) => items.reduce((sum, item) => sum + item.quantity, 0)

// Product catalog (route "/plants"), grouped by category.
function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  const totalQuantity = calculateTotalQuantity(cartItems)
  // Keyed by product name: addedToCart[plant.name] is true while the plant is in the cart.
  const addedToCart = Object.fromEntries(cartItems.map((item) => [item.name, true]))

  const handleAddToCart = (product) => dispatch(addItem(product))

  return (
    <>
      <Header />
      <main className="page-container product-list">
        <h1 className="page-title">Shop Plants</h1>
        <p className="cart-summary cart_quantity_count">
          Items in cart: <strong>{cartCount || totalQuantity}</strong>
        </p>

        {CATEGORIES.map((category) => {
          const plantsArray = PLANTS.filter((plant) => plant.category === category.id)
          return (
            <section key={category.id} className="category" aria-labelledby={`cat-${category.id}`}>
              <h2 id={`cat-${category.id}`} className="category-title">{category.title}</h2>
              <ul className="product-grid">
                {plantsArray.map((plant) => (
                  <li key={plant.id} className="product-card">
                    <img src={plant.image} alt={plant.alt} className="product-image" loading="lazy" />
                    <div className="product-body">
                      <h3 className="product-name">{plant.name}</h3>
                      <p className="product-desc">{plant.description}</p>
                      <div className="product-footer">
                        <span className="product-price">{formatPrice(plant.price)}</span>
                        <button
                          type="button"
                          className={`btn btn-primary ${addedToCart[plant.name] ? 'btn-added' : ''}`}
                          disabled={addedToCart[plant.name]}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default ProductList
