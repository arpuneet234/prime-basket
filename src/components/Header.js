import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/primepay", label: "PrimePay" },
];

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const data = useContext(UserContext);
  const [loginButtonValue, setLoginButtonValue] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "text-base md:text-lg text-gray-700 hover:text-red-500 font-medium transition-colors duration-200";

  return (
    <header className="Header bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-2">
        <div className="logo-container shrink-0">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              className="w-12 sm:w-16"
              src="https://prime-basket.developmentalphawizz.com/resources/themes/alpha_ecom/public/assets/images/primeLogo.png"
              alt="Prime Basket"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex gap-6 lg:gap-8 m-0 p-0 list-none">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/cart" className={linkClass}>
                Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            className="login-btn border-2 border-red-500 text-red-500 px-4 lg:px-5 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 text-sm lg:text-base"
            onClick={() =>
              setLoginButtonValue(loginButtonValue === "Login" ? "Logout" : "Login")
            }
          >
            {loginButtonValue}
          </button>
          <span className="text-sm text-gray-600 hidden lg:block">{data.loggedInUser}</span>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/cart"
            className="text-sm font-medium text-gray-700 hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({cartItems.length})
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={linkClass} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100 flex flex-col gap-3">
              <button
                className="login-btn border-2 border-red-500 text-red-500 px-5 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 w-fit"
                onClick={() => {
                  setLoginButtonValue(loginButtonValue === "Login" ? "Logout" : "Login");
                  setMenuOpen(false);
                }}
              >
                {loginButtonValue}
              </button>
              <span className="text-sm text-gray-600">{data.loggedInUser}</span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
