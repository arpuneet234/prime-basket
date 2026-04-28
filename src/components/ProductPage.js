import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

import ProductDetailShimmer from "./ProductDetailShimmer";


const ProductPage = () => {
    const {id}=useParams();
    console.log(id)
    const[product,setProduct]=useState(null);
  useEffect(()=>{
    fetchProduct();
  },[])

  async function fetchProduct(){

    const data = await fetch("https://dummyjson.com/products/"+id)

    const json = await data.json();
    
    setProduct(json);
  }

  if (!product) return <ProductDetailShimmer/>

  return (
    <div className="product-page">
      <div className="product-container">
        
        {/* Image Section */}
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* Details Section */}
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="brand">Brand: {product.brand}</p>
          <p className="category">Category: {product.category}</p>

          <p className="description">{product.description}</p>

          <div className="price-section">
            <span className="price">${product.price}</span>
            <span className="discount">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="rating">⭐ {product.rating}</p>
          <p className="stock">Stock: {product.stock}</p>

          <button className="buy-btn">Buy Now</button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews">
        <h2>Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p><strong>{review.reviewerName}</strong></p>
            <p>⭐ {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;