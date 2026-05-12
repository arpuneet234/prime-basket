import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ProductDetailShimmer from "./ProductDetailShimmer";
import useProductPage from "../utils/useProductPage";


const ProductPage = () => {
    const {id}=useParams();
    const product=useProductPage(id);   
  if (!product) return <ProductDetailShimmer/>

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex gap-10 bg-white rounded-2xl shadow-md p-8">
        
        {/* Product Image */}
        <div className="w-96 h-96 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
          <img className="w-full h-full object-contain p-4" src={product.thumbnail} alt={product.title} />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-500 text-sm">Brand: <span className="font-medium text-gray-700">{product.brand}</span></p>
          <p className="text-gray-500 text-sm">Category: <span className="font-medium text-gray-700">{product.category}</span></p>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-red-500 font-bold text-2xl">${product.price}</span>
            <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">{product.discountPercentage}% OFF</span>
          </div>

          <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
          <p className="text-gray-500 text-sm">Stock: <span className="font-medium text-gray-700">{product.stock} items left</span></p>

          <button className="mt-4 bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200 w-fit">
            Buy Now
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
        <div className="flex flex-col gap-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="font-semibold text-gray-800">{review.reviewerName}</p>
              <p className="text-yellow-400 text-sm">⭐ {review.rating}</p>
              <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;