import ReactDOM from "react-dom/client";
import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import Error from "./components/Error";
import ProductPage from "./components/ProductPage";
import { lazy ,Suspense } from "react";
import "../index.css"
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";

// import PrimePay from "./components/PrimePay";

const PrimePay=lazy(()=>import("./components/PrimePay"))
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:"Puneet"}}>
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[

  {
    path:"/",
    element:<Body/>
  },

  {
    path:"/primepay",
    element:<Suspense fallback={<h1>Loading....</h1>}><PrimePay/></Suspense>
  },

  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/cart",
    element:<CartPage/>
  },

  {
    path:"/products/:id",
    element:<ProductPage/>
  }
    ],
    errorElement:<Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
