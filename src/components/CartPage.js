import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  function handleClearCart() {
    dispatch(clearCart());
  }

  function handleRemoveItem(index) {
    dispatch(removeItem(index));
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Cart 🛒</h1>
        <p className="text-gray-500">Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 max-w-2xl mx-auto sm:mx-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Cart 🛒 ({cartItems.length} Items)
        </h1>
        <button
          onClick={handleClearCart}
          className="border-2 border-red-400 text-red-400 px-5 py-2 rounded-full font-semibold hover:bg-red-400 hover:text-white transition-all duration-200 w-fit"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto sm:mx-0">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
          >
            <img
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl bg-gray-100 p-2 shrink-0"
              src={item?.thumbnail}
              alt={item?.title}
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                {item?.title}
              </h3>
              <p className="text-red-500 font-bold">${item?.price}</p>
            </div>
            <button
              onClick={() => handleRemoveItem(index)}
              className="w-9 h-9 shrink-0 rounded-full border border-gray-200 text-gray-400 hover:border-red-400 hover:text-red-400 transition-all duration-200 flex items-center justify-center font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
