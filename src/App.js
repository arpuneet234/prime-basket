import ReactDOM from "react-dom/client";
import React from "react";
import prodData from "./utils/prodData";
import Header from "./components/Header";
import Body from "./components/Body";

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
