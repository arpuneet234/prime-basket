import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailShimmer from "./ProductDetailShimmer";
import useProductPage from "../utils/useProductPage";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [showReviews, setShowReviews] = useState(null);
  const { id } = useParams();
  const product = useProductPage(id);

  if (!product) return <ProductDetailShimmer />;

  const handleAddItems = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-96 aspect-square max-h-80 sm:max-h-96 lg:max-h-none bg-gray-100 rounded-xl overflow-hidden shrink-0 mx-auto lg:mx-0">
          <img
            className="w-full h-full object-contain p-4"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-500 text-sm">
            Brand: <span className="font-medium text-gray-700">{product.brand}</span>
          </p>
          <p className="text-gray-500 text-sm">
            Category: <span className="font-medium text-gray-700">{product.category}</span>
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
            <span className="text-red-500 font-bold text-xl sm:text-2xl">${product.price}</span>
            <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
          <p className="text-gray-500 text-sm">
            Stock: <span className="font-medium text-gray-700">{product.stock} items left</span>
          </p>

          <button
            className="mt-2 sm:mt-4 bg-red-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200 w-full sm:w-fit"
            onClick={() => handleAddItems(product)}
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 max-w-3xl mx-auto px-0 sm:px-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
          Customer Reviews 💬
        </h2>
        <div className="flex flex-col gap-4">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${
                showReviews === index ? "border-red-200" : "border-gray-100"
              }`}
            >
              <div
                className={`flex justify-between items-center p-4 sm:p-5 cursor-pointer hover:bg-gray-50 transition-colors duration-200 gap-2 ${
                  showReviews === index ? "bg-red-50" : ""
                }`}
                onClick={() => setShowReviews(showReviews === index ? null : index)}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-sm">
                    {review.reviewerName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800 truncate">{review.reviewerName}</p>
                    <p className="text-yellow-400 text-xs">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-gray-400 text-lg shrink-0 transition-transform duration-300 ${
                    showReviews === index ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </div>

              {showReviews === index && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-gray-100">
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
