import ReactDOM from "react-dom/client";
import React from "react";
import prodData from "./prodData";

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

const prodDataList = prodData.products;

const ProductCard = (props) => {
  const data = props.prodData;
  return (
    <div className="prod-card">
      <img className="prod-img" src={data.thumbnail} alt="test" />
      <h2>{data.title}</h2>

      <h4>Price:{data.price}$</h4>
      <h4>Rating:{data.rating}</h4>
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
        {prodDataList.map((product) => (
          <ProductCard key={product.id} prodData={product} />
        ))}
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
