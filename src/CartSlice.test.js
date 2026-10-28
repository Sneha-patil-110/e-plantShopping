import { describe, expect, it } from 'vitest'
import reducer, {
  addItem,
  clearCart,
  updateQuantity,
  removeItem,
  selectCartCount,
  selectCartTotal,
} from './CartSlice'

const snake = { id: 'snake-plant', name: 'Snake Plant', price: 28, image: 'x.svg', alt: 'a' }
const lily = { id: 'peace-lily', name: 'Peace Lily', price: 26, image: 'y.svg', alt: 'b' }
const wrap = (items) => ({ cart: { items } })

describe('cart slice', () => {
  it('adds a product with quantity 1 and never duplicates it', () => {
    let state = reducer(undefined, addItem(snake))
    state = reducer(state, addItem(snake))
    expect(state.items).toHaveLength(1)
    expect(state.items[0].quantity).toBe(1)
  })

  it('increments and decrements by exactly one, never below 1', () => {
    let state = reducer(undefined, addItem(snake))
    state = reducer(state, updateQuantity({ id: snake.id, quantity: 2 }))
    expect(state.items[0].quantity).toBe(2)
    state = reducer(state, updateQuantity({ id: snake.id, quantity: 0 }))
    expect(state.items[0].quantity).toBe(1)
    state = reducer(state, updateQuantity({ id: snake.id, quantity: 0 }))
    expect(state.items[0].quantity).toBe(1)
  })

  it('removes an entire line', () => {
    let state = reducer(undefined, addItem(snake))
    state = reducer(state, addItem(lily))
    state = reducer(state, removeItem(snake.name))
    expect(state.items.map((i) => i.id)).toEqual([lily.id])
  })

  it('clears the cart', () => {
    let state = reducer(undefined, addItem(snake))
    state = reducer(state, clearCart())
    expect(state.items).toEqual([])
  })

  it('counts units and totals from quantities', () => {
    const state = wrap([
      { ...snake, cost: 28, quantity: 2 },
      { ...lily, cost: 26, quantity: 3 },
    ])
    expect(selectCartCount(state)).toBe(5)
    expect(selectCartTotal(state)).toBe(28 * 2 + 26 * 3)
  })
})
