import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 mt-auto transition-colors duration-300">
      <div className="pb-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Prime Basket</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium online grocery — fresh products, secure payments, and reliable delivery across India.
            </p>
            <p className="text-xs text-slate-500 mt-3">Visa · Mastercard · UPI · Secure SSL</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/primepay" className="hover:text-white transition-colors">
                  PrimePay
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>support@primebasket.com</li>
              <li>+91 98765 43210</li>
              <li>Mon–Sat, 9am–6pm IST</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Prime Basket. All rights reserved.</p>
          <p>Built with React & Redux</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
