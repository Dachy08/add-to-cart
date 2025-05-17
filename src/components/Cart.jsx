"use client"

import "./Cart.css"

function Cart({ items, setItems }) {
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  // Fallback image in case the URL is invalid
  const fallbackImage = "https://via.placeholder.com/50x50?text=Product"

  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
      </div>

      <div className="cart-content">
        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image || fallbackImage}
                    alt={item.name}
                    className="item-image"
                    onError={(e) => {
                      e.target.src = fallbackImage
                    }}
                  />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">
                      ${item.price.toFixed(2)} x {item.quantity}{" "}
                      <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>
                  <button className="delete-btn" onClick={() => removeItem(item.id)}>
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        fill="#C3CAD9"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button className="checkout-btn">Checkout</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
