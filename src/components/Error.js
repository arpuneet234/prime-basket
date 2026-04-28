const Error = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found 😢</h2>
      <p>The page you are looking for does not exist.</p>

      <a href="/" className="home-btn">
        Go Back Home
      </a>
    </div>
  );
};

export default Error;