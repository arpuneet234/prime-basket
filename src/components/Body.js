import { useState } from "react";
import prodData from "../utils/prodData";
import ProductCard from "./ProductCard";

const prodDataList = prodData.products;

const Body = () => {
  const [listOfProducts, setListOfProducts] = useState(prodDataList);
  return (
    <div className="body">
      <div>
        <button
          className="top-rated-btn"
          onClick={() => {
            let filteredProductList = listOfProducts.filter(
              (product) => product.rating > 4.9,
            );
            setListOfProducts(filteredProductList);
          }}
        >
          Filter Top Rated
        </button>
      </div>
      <div className="prod-container">
        {listOfProducts.map((product) => (
          <ProductCard key={product.id} prodData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
