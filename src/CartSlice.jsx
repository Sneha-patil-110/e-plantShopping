import { createSlice } from '@reduxjs/toolkit'

// Cart state: { items: [{ id, name, price, image, alt, quantity }] }
// Rules:
// - addItem adds a new line with quantity 1. If the product is already in the cart it is
//   left unchanged, so there are never duplicate entries.
// - updateQuantity sets an item's quantity to the given value (minimum 1).
// - removeItem deletes the whole line.

const initialState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload
      const existing = state.items.find((item) => item.id === product.id)
      if (!existing) {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          alt: product.alt,
          quantity: 1,
        })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    // payload: { id, quantity }. Quantity never drops below 1; use removeItem to delete.
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) item.quantity = Math.max(1, quantity)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions

// Selectors derive everything from the store; components never keep their own copy.
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export const selectIsInCart = (id) => (state) => state.cart.items.some((item) => item.id === id)

const cartReducer = cartSlice.reducer
export default cartReducer
