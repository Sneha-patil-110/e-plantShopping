import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { store } from './store'
import App from './App'
import ProductList from './ProductList'
import CartItem from './CartItem'
import './App.css'

// HashRouter keeps routes working on GitHub Pages (no server rewrites needed).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>,
)
