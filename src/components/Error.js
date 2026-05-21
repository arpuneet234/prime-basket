import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center gap-4">
      <h1 className="text-6xl sm:text-8xl font-bold text-red-500">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Oops! Page Not Found 😢</h2>
      <p className="text-gray-500 text-sm sm:text-base max-w-md">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
