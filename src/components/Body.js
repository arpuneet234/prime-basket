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
    setListOfProducts(json?.products);
    setOriginalList(json?.products);
  }

  if (listOfProducts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center px-4 py-6 sm:py-8 gap-4">
        <div className="flex w-full max-w-md sm:max-w-lg">
          <input
            className="border-2 rounded-l-lg p-2 sm:p-3 border-gray-300 flex-1 min-w-0 outline-none focus:border-red-400 text-sm sm:text-base"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
          />
          <button
            className="border-2 border-red-500 rounded-r-lg px-4 sm:px-5 py-2 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200 text-sm sm:text-base shrink-0"
            onClick={() => {
              const searchedList = originalList.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfProducts(searchedList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="border-2 border-red-500 text-red-500 px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200 text-sm sm:text-base"
          onClick={() => {
            const filteredProductList = originalList.filter(
              (product) => product.rating > 4.9
            );
            setListOfProducts(filteredProductList);
          }}
        >
          ⭐ Filter Top Rated
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto">
        {listOfProducts.map((product) => (
          <ProductCard key={product.id} prodData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
