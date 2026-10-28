import { useDispatch, useSelector } from 'react-redux'
import { CATEGORIES, PLANTS } from './data/plants'
import { addItem, selectCartItems } from './CartSlice'

const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

// Product catalog (route "/plants"), grouped by category.
function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const inCartIds = new Set(cartItems.map((item) => item.id))

  return (
    <main className="page-container">
      <h1 className="page-title">Shop Plants</h1>

      {CATEGORIES.map((category) => {
        const plants = PLANTS.filter((plant) => plant.category === category.id)
        return (
          <section key={category.id} className="category" aria-labelledby={`cat-${category.id}`}>
            <h2 id={`cat-${category.id}`} className="category-title">{category.title}</h2>
            <ul className="product-grid">
              {plants.map((plant) => {
                const isInCart = inCartIds.has(plant.id)
                return (
                  <li key={plant.id} className="product-card">
                    <img src={plant.image} alt={plant.alt} className="product-image" loading="lazy" />
                    <div className="product-body">
                      <h3 className="product-name">{plant.name}</h3>
                      <p className="product-desc">{plant.description}</p>
                      <div className="product-footer">
                        <span className="product-price">{formatPrice(plant.price)}</span>
                        <button
                          type="button"
                          className={`btn btn-primary ${isInCart ? 'btn-added' : ''}`}
                          disabled={isInCart}
                          onClick={() => dispatch(addItem(plant))}
                        >
                          {isInCart ? 'In Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </main>
  )
}

export default ProductList
