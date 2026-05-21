import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetailShimmer from "./ProductDetailShimmer";
import useProductPage from "../utils/useProductPage";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [showReviews, setShowReviews] = useState(null);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const product = useProductPage(id);

  if (!product) return <ProductDetailShimmer />;

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pb-page py-6 sm:py-8">
      <div className="pb-container">
        <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium truncate">{product.title}</span>
        </nav>

        <div className="pb-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[420px] aspect-square bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800">
              <img
                className="max-w-full max-h-full object-contain"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>

            <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10 flex-1 min-w-0">
              <div className="flex flex-wrap gap-2">
                <span className="pb-badge">{product.category}</span>
                {product.discountPercentage > 0 && (
                  <span className="pb-badge bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    {Math.round(product.discountPercentage)}% off
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {product.title}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Brand: <span className="font-medium text-slate-700 dark:text-slate-200">{product.brand}</span>
              </p>

              <div className="flex items-center gap-2 text-amber-500">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{product.rating}</span>
                <span className="text-slate-400 text-sm">customer rating</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                {product.description}
              </p>

              <div className="flex flex-wrap items-baseline gap-3 pt-2">
                <span className="text-3xl font-bold text-brand-600">${product.price}</span>
                <span className="text-sm text-slate-500">
                  {product.stock > 0 ? (
                    <span className="text-emerald-600 font-medium">{product.stock} in stock</span>
                  ) : (
                    <span className="text-red-500 font-medium">Out of stock</span>
                  )}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  className={`pb-btn-primary flex-1 sm:flex-none sm:min-w-[200px] ${
                    added ? "bg-emerald-600 hover:bg-emerald-600 shadow-emerald-600/20" : ""
                  }`}
                  onClick={handleAddToCart}
                >
                  {added ? "Added to cart ✓" : "Add to cart"}
                </button>
                <Link to="/cart" className="pb-btn-secondary flex-1 sm:flex-none text-center">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 sm:mt-12">
          <h2 className="pb-section-title mb-6">Customer reviews</h2>
          <div className="flex flex-col gap-3 max-w-3xl">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className={`pb-card overflow-hidden transition-all ${
                  showReviews === index ? "ring-2 ring-brand-500/20 border-brand-200 dark:border-brand-800" : ""
                }`}
              >
                <button
                  type="button"
                  className={`w-full flex justify-between items-center p-4 sm:p-5 text-left gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                    showReviews === index ? "bg-brand-50/50 dark:bg-brand-950/50" : ""
                  }`}
                  onClick={() => setShowReviews(showReviews === index ? null : index)}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-brand-100 dark:bg-brand-950 flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold text-sm">
                      {review.reviewerName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">{review.reviewerName}</p>
                      <p className="text-amber-500 text-xs tracking-wide">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      showReviews === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showReviews === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pt-4">{review.comment}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
