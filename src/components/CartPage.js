import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item?.price || 0), 0);

  if (cartItems.length === 0) {
    return (
      <div className="pb-page flex flex-col items-center justify-center px-4 py-16">
        <div className="pb-card p-10 sm:p-14 text-center max-w-md w-full">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h1 className="pb-section-title mb-2">Your cart is empty</h1>
          <p className="pb-section-subtitle mb-6">Add items you love and checkout when ready.</p>
          <Link to="/" className="pb-btn-primary">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-page py-6 sm:py-10">
      <div className="pb-container">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="pb-section-title">Shopping cart</h1>
            <p className="pb-section-subtitle">{cartItems.length} items in your cart</p>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors w-fit"
          >
            Clear cart
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="pb-card p-4 sm:p-5 flex items-center gap-4"
              >
                <div className="w-20 h-20 shrink-0 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-2">
                  <img
                    className="w-full h-full object-contain"
                    src={item?.thumbnail}
                    alt={item?.title}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/products/${item?.id}`}
                    className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base hover:text-brand-600 dark:hover:text-brand-400 truncate block"
                  >
                    {item?.title}
                  </Link>
                  <p className="text-brand-600 font-bold mt-1">${item?.price?.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => dispatch(removeItem(index))}
                  aria-label="Remove item"
                  className="w-9 h-9 shrink-0 rounded-lg text-slate-400 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-600 dark:hover:text-red-400 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="pb-card p-6 lg:sticky lg:top-24">
              <h2 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Order summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Shipping</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Free</span>
                </div>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 mt-4 pt-4 flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">Total</span>
                <span className="text-2xl font-bold text-brand-600">${cartTotal.toFixed(2)}</span>
              </div>
              <Link to="/primepay" className="pb-btn-primary w-full mt-6 text-center">
                Proceed to checkout
              </Link>
              <Link
                to="/"
                className="block text-center text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 mt-4 transition-colors"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
