import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButtonValue,setLoginButtonValue]=useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
        <img
          className="logo"
          src="https://prime-basket.developmentalphawizz.com/resources/themes/alpha_ecom/public/assets/images/primeLogo.png"
        />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        
      </div>
      <div>
        <button className="login-btn" onClick={()=>{loginButtonValue==="Login"?setLoginButtonValue("Logout"):setLoginButtonValue("Login")}}>{loginButtonValue}</button>
      </div>
      
    </div>
  );
};

export default Header;
