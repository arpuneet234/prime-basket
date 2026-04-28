import { useState } from "react";

const Header = () => {
  const [loginButtonValue,setLoginButtonValue]=useState("Login")
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
      <div>
        <button className="login-btn" onClick={()=>{loginButtonValue==="Login"?setLoginButtonValue("Logout"):setLoginButtonValue("Login")}}>{loginButtonValue}</button>
      </div>
      
    </div>
  );
};

export default Header;
