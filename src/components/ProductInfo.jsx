"use client"

import { useState } from "react"
import "./ProductInfo.css"

function ProductInfo({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="product-info">
      <div className="company">{product.company}</div>
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>

      <div className="price-container">
        <div className="current-price">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className="discount">{product.discount}</span>
        </div>
        <div className="original-price">${product.originalPrice.toFixed(2)}</div>
      </div>

      <div className="actions">
        <div className="quantity-selector">
          <button className="quantity-btn" onClick={decreaseQuantity}>
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                fill="#FF7E1B"
              />
            </svg>
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={increaseQuantity}>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                fill="#FF7E1B"
              />
            </svg>
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductInfo
