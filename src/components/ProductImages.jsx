"use client"

import { useState } from "react"
import "./ProductImages.css"

function ProductImages({ images }) {
  const [mainImage, setMainImage] = useState(0)

  // Fallback image in case the URL is invalid
  const fallbackImage = "https://via.placeholder.com/450x450?text=Product+Image"

  return (
    <div className="product-images">
      <div className="main-image">
        <img
          src={images[mainImage] || fallbackImage}
          alt="Product"
          onError={(e) => {
            e.target.src = fallbackImage
          }}
        />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${mainImage === index ? "active" : ""}`}
            onClick={() => setMainImage(index)}
          >
            <img
              src={image || fallbackImage}
              alt={`Thumbnail ${index + 1}`}
              onError={(e) => {
                e.target.src = fallbackImage
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
