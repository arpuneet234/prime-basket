import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
  constructor(){
    super()
    console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent Component Did Mount")
  }

  render(){
    console.log("Parent Render")
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        
        {/* Hero */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">About Prime Basket 🛒</h1>
          <p className="text-gray-500 text-lg">Your one-stop shop for exploring amazing products.</p>
        </div>

        {/* Cards */}
        <div className="flex gap-6 justify-center flex-wrap">
          
          <div className="bg-white rounded-2xl shadow-md p-6 w-72">
            <h2 className="text-xl font-bold text-gray-800 mb-3">💡 What is this app?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Prime Basket is a React-based product listing app where users can browse, search, and filter products in a smooth and interactive way.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 w-72">
            <h2 className="text-xl font-bold text-gray-800 mb-3">⚙️ Tech Stack</h2>
            <ul className="text-gray-600 text-sm flex flex-col gap-2">
              <li>⚛️ React (Functional Components)</li>
              <li>🪝 Hooks (useState, useEffect)</li>
              <li>📦 Parcel Bundler</li>
              <li>🌐 DummyJSON API</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 w-72">
            <h2 className="text-xl font-bold text-gray-800 mb-3">🚀 Features</h2>
            <ul className="text-gray-600 text-sm flex flex-col gap-2">
              <li>🔍 Live product search</li>
              <li>⭐ Filter top-rated products</li>
              <li>⚡ Fast loading with shimmer UI</li>
              <li>📱 Responsive design</li>
            </ul>
          </div>

        </div>

        {/* User Card */}
        <div className="mt-10 flex justify-center">
          <UserClass name={"Puneet (Class Based)"} />
        </div>

      </div>
    );
  }
}

export default About;