import ReactDOM from "react-dom/client";
import React from "react";
import logo from "./assets/prime-basket-logo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://prime-basket.developmentalphawizz.com/resources/themes/alpha_ecom/public/assets/images/primeLogo.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="prod-card">
      <img
        className="prod-img"
        src="https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY436_FMwebp_QL65_.jpg"
        alt="test"
      />
      <h3>Iphone 17 Pro</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h1>Search</h1>
      </div>
      <div className="prod-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
