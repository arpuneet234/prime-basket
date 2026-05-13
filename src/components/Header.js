import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems);
  const data=useContext(UserContext);
  console.log(data)
  const [loginButtonValue,setLoginButtonValue]=useState("Login")
  return (
    <div className=" Header flex justify-between items-center px-6 py-2 bg-white  shadow-md sticky top-0 z-50">
      <div className="logo-container">
        <Link to="/">
        <img
          className="w-16"
          src="https://prime-basket.developmentalphawizz.com/resources/themes/alpha_ecom/public/assets/images/primeLogo.png"
        />
        </Link>
      </div>
      <div className="">
        <ul className="flex gap-8 m-0 p-0 list-none">
          <Link to="/"><li className=" text-lg text-gray-700 hover:text-red-500 cursor-pointer font-medium transition-colors duration-200">Home</li></Link>
          <Link to="/about"><li className=" text-lg text-gray-700 hover:text-red-500 cursor-pointer font-medium transition-colors duration-200">About</li></Link>
          <Link to="/contact"><li className= " text-lg text-gray-700 hover:text-red-500 cursor-pointer font-medium transition-colors duration-200">Contact</li></Link>
          <Link to="/primepay"><li className="text-lg text-gray-700 hover:text-red-500 cursor-pointer font-medium transition-colors duration-200">PrimePay</li></Link>
           <Link to="/cart"><li className="text-lg text-gray-700 hover:text-red-500 cursor-pointer font-medium transition-colors duration-200">Cart ( {cartItems.length} Items) </li></Link>
        </ul>
        
      </div>
      <div>
        <button className="login-btn border-2 border-red-500 text-red-500 px-5 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 " onClick={()=>{loginButtonValue==="Login"?setLoginButtonValue("Logout"):setLoginButtonValue("Login")}}>{loginButtonValue}</button>
        <div>{data.loggedInUser}</div>
      </div>
      
    </div>
  );
};

export default Header;
