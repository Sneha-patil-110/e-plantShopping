import { createSlice } from '@reduxjs/toolkit'

// Cart state: { items: [{ id, name, price, image, quantity }] }
// Rules:
// - addToCart adds a new line with quantity 1. If the product is already in the cart it is
//   left unchanged, so there are never duplicate entries.
// - increaseQuantity / decreaseQuantity change quantity by exactly one.
// - decreaseQuantity never goes below 1. It does NOT remove the item; use removeFromCart.
// - removeFromCart deletes the whole line.

const initialState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
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
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions

// Selectors derive everything from the store; components never keep their own copy.
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export const selectIsInCart = (id) => (state) => state.cart.items.some((item) => item.id === id)

const cartReducer = cartSlice.reducer
export default cartReducer
