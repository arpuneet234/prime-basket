import ReactDOM from "react-dom/client";
import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import Error from "./components/Error";
import ProductPage from "./components/ProductPage";
import { lazy ,Suspense } from "react";
import "../index.css"
import UserContext from "./utils/UserContext";
import { ThemeProvider } from "./utils/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";
import Chatbot from "./components/Chatbot";

// import PrimePay from "./components/PrimePay";

const PrimePay=lazy(()=>import("./components/PrimePay"))
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <ThemeProvider>
    <UserContext.Provider value={{loggedInUser:"Puneet"}}>
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
    </UserContext.Provider>
    </ThemeProvider>
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
    element:<Suspense fallback={
      <div className="pb-page flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
          <p className="text-slate-500 dark:text-slate-400 font-medium">Loading PrimePay...</p>
        </div>
      </div>
    }><PrimePay/></Suspense>
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
