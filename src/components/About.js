const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Prime Basket 🛒</h1>
        <p>Your one-stop shop for exploring amazing products.</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>💡 What is this app?</h2>
          <p>
            Prime Basket is a React-based product listing app where users can
            browse, search, and filter products in a smooth and interactive way.
          </p>
        </div>

        <div className="about-card">
          <h2>⚙️ Tech Stack</h2>
          <ul>
            <li>React (Functional Components)</li>
            <li>Hooks (useState, useEffect)</li>
            <li>Parcel Bundler</li>
            <li>DummyJSON API</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🚀 Features</h2>
          <ul>
            <li>🔍 Live product search</li>
            <li>⭐ Filter top-rated products</li>
            <li>⚡ Fast loading with shimmer UI</li>
            <li>📱 Responsive design</li>
          </ul>
        </div>

        <div className="about-card highlight">
          <h2>👨‍💻 Developer</h2>
          <p>
            Built by <strong>Puneet Arora</strong> as part of a React learning
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;