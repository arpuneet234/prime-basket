import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import ProductCard from "./ProductCard";

const Body = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://dummyjson.com/products?skip=30&limit=300");
    const json = await data.json();
    console.log(json);
    setListOfProducts(json?.products);
    setOriginalList(json?.products);
  }

  if (listOfProducts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Search and Filter Bar */}
      <div className="flex flex-col items-center py-8 gap-4">

        {/* Search */}
        <div className="flex">
          <input
            className="border-2 rounded-l-lg p-2 border-gray-300 w-80 outline-none focus:border-red-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
          />
          <button
            className="border-2 border-red-500 rounded-r-lg px-5 py-2 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200"
            onClick={() => {
              const searchedList = originalList.filter(res =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfProducts(searchedList);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200"
          onClick={() => {
            let filteredProductList = originalList.filter(
              (product) => product.rating > 4.9
            );
            setListOfProducts(filteredProductList);
          }}
        >
          ⭐ Filter Top Rated
        </button>

      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {listOfProducts.map((product) => (
          <ProductCard key={product.id} prodData={product} />
        ))}
      </div>

    </div>
  );
};

export default Body;