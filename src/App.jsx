"use client"

import { useState } from "react"
import "./App.css"
import ProductImages from "./components/ProductImages"
import ProductInfo from "./components/ProductInfo"
import Cart from "./components/Cart"

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const product = {
    company: "SNEAKER COMPANY",
    name: "Fall Limited Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.0,
    originalPrice: 250.0,
    discount: "50%",
    // Now using direct image URLs instead of local file paths
    images: [
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F10%2F31%2Fnike-air-force-1-low-paris-hf4084-001-release-info-FI.jpg?w=960&cbr=1&q=90&fit=max", // Replace with your actual image URLs
      "https://cdn-images.farfetch-contents.com/17/52/35/55/17523555_37205170_600.jpg",
      "https://static.nike.com/a/images/t_default/33488090-162a-4480-830a-777b7eddb206/NIKE+AIR+FORCE+1+JEWEL.png",
      "https://mgclothing.co.za/wp-content/uploads/2023/09/Nike-Air-Force-1-07-Black-BQ4326-001-08-1.jpg",
    ],
  }

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.name)

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems]
      updatedItems[existingItemIndex].quantity += quantity
      setCartItems(updatedItems)
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.name,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity,
        },
      ])
    }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="app">
      <header>
        <div className="header-container">
          <div className="logo">
            <h1>sneakers</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="cart-profile">
            <button className="cart-icon" onClick={toggleCart}>
              <span className="cart-count">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
            </button>
            <div className="avatar">
              <img src="https://example.com/avatar.png" alt="User avatar" /> {/* Replace with your avatar URL */}
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="product-container">
          <ProductImages images={product.images} />
          <ProductInfo product={product} addToCart={addToCart} />
        </div>
        {isCartOpen && <Cart items={cartItems} setItems={setCartItems} />}
      </main>
    </div>
  )
}

export default App
