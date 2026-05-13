import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ProductDetailShimmer from "./ProductDetailShimmer";
import useProductPage from "../utils/useProductPage";


const ProductPage = () => {
  const [showReviews, setShowReviews] = useState(null);
  const {id} = useParams();
  const product = useProductPage(id);   
  if (!product) return <ProductDetailShimmer/>

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex gap-10 bg-white rounded-2xl shadow-md p-8">
        
        {/* Product Image */}
        <div className="w-96 h-96 bg-gray-100 rounded-xl overflow-hidden shrink-0">
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
      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews 💬</h2>
        <div className="flex flex-col gap-4">
          {product.reviews.map((review, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${showReviews === index ? "border-red-200" : "border-gray-100"}`}>
              
              {/* Review Header */}
              <div 
                className={`flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${showReviews === index ? "bg-red-50" : ""}`}
                onClick={() => setShowReviews(showReviews === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-sm">
                    {review.reviewerName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.reviewerName}</p>
                    <p className="text-yellow-400 text-xs">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
                  </div>
                </div>
                <span className={`text-gray-400 text-lg transition-transform duration-300 ${showReviews === index ? "rotate-180" : ""}`}>↓</span>
              </div>

              {/* Review Content */}
              {showReviews === index && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;