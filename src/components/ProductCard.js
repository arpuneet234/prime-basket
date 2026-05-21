import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductCard = ({ prodData: data }) => {
  const dispatch = useDispatch();
  const hasDiscount = data.discountPercentage > 5;
  const originalPrice = hasDiscount
    ? (data.price / (1 - data.discountPercentage / 100)).toFixed(2)
    : null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem(data));
  };

  return (
    <Link to={`/products/${data.id}`} className="group block w-full h-full">
      <article className="relative h-full flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-shadow duration-200 hover:shadow-md dark:hover:shadow-black/20">
        <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-800/50 p-4">
          {hasDiscount && (
            <span className="absolute top-2 left-2 z-10 text-[11px] font-bold uppercase tracking-wide bg-brand-600 text-white px-2 py-0.5 rounded">
              {Math.round(data.discountPercentage)}% off
            </span>
          )}
          <img
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            src={data.thumbnail}
            alt={data.title}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col flex-1 p-4">
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
            {data.categoryLabel || data.category}
          </p>

          <h3 className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {data.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.round(data.rating) ? "fill-current" : "fill-slate-200 dark:fill-slate-700"}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">({data.rating})</span>
          </div>

          <div className="mt-auto pt-3 flex items-end justify-between gap-2">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  ${data.price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="text-xs text-slate-400 line-through">${originalPrice}</span>
                )}
              </div>
              {data.stock < 15 && (
                <p className="text-[11px] text-orange-600 dark:text-orange-400 mt-0.5">
                  Only {data.stock} left
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-3 w-full py-2.5 rounded-lg border border-brand-600 text-brand-600 dark:text-brand-400 text-sm font-semibold hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white transition-colors"
          >
            Add to cart
          </button>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
