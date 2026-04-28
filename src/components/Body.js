import { useState , useEffect } from "react";
import Shimmer from "./shimmer"
import ProductCard from "./ProductCard";



const Body = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const[originalList,setOriginalList]=useState([])
  const[searchText,setSearchText]=useState("");

  useEffect(()=>{

    fetchData ();

  },[])

  async function fetchData(){

    const data= await fetch("https://dummyjson.com/products?skip=30&limit=300");
    const json=await data.json();
    console.log(json)
    setListOfProducts(json?.products)
    setOriginalList(json?.products);


  }

  if(listOfProducts.length===0){
    return <Shimmer/>
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input className="searchBox" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
          <button className="search Button" onClick={()=>{const searchedList=originalList.filter(res=>res.title.toLowerCase().includes(searchText.toLowerCase()))
            setListOfProducts(searchedList)
          }}> Search </button>


        </div>
        <button
          className="top-rated-btn"
          onClick={() => {
            let filteredProductList = originalList.filter(
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
