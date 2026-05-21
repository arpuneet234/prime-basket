import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/primepay", label: "PrimePay" },
];

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const data = useContext(UserContext);
  const [loginButtonValue, setLoginButtonValue] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-brand-600 dark:text-brand-400"
        : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
    }`;

  return (
    <>
    <div className="bg-slate-900 dark:bg-black text-slate-300 text-center text-xs sm:text-sm py-2 px-4">
      Free delivery on orders over $50 · Secure checkout with PrimePay
    </div>
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="pb-container">
        <div className="flex justify-between items-center h-[4.5rem] sm:h-20">
          <Link to="/" onClick={() => setMenuOpen(false)} className="shrink-0 py-1">
            <img
              className="h-14 sm:h-16 md:h-[4.25rem] w-auto max-w-[200px] sm:max-w-[240px] object-contain object-left"
              src="https://prime-basket.developmentalphawizz.com/resources/themes/alpha_ecom/public/assets/images/primeLogo.png"
              alt="Prime Basket"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <span className="text-sm text-slate-500 dark:text-slate-400 hidden lg:block">
              Hi, {data.loggedInUser}
            </span>
            <button
              className="pb-btn-secondary text-sm py-2 px-4 rounded-lg"
              onClick={() =>
                setLoginButtonValue(loginButtonValue === "Login" ? "Logout" : "Login")
              }
            >
              {loginButtonValue}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <Link
              to="/cart"
              className="relative p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 min-w-[1.1rem] h-[1.1rem] flex items-center justify-center rounded-full bg-brand-600 text-white text-[10px] font-bold">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
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
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 pb-container !px-4">
          <ul className="flex flex-col gap-1 m-0 p-0 list-none">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg text-base font-medium ${
                      isActive
                        ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950"
                        : "text-slate-700 dark:text-slate-200"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              <span className="text-sm text-slate-500 dark:text-slate-400 px-2">Hi, {data.loggedInUser}</span>
              <button
                className="pb-btn-primary w-fit mx-2"
                onClick={() => {
                  setLoginButtonValue(loginButtonValue === "Login" ? "Logout" : "Login");
                  setMenuOpen(false);
                }}
              >
                {loginButtonValue}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
    </>
  );
};

export default Header;
