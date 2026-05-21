import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="pb-page flex flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-8xl sm:text-9xl font-bold text-brand-600/20 dark:text-brand-500/10 leading-none select-none">404</p>
      <h1 className="pb-section-title -mt-4 sm:-mt-6">Page not found</h1>
      <p className="pb-section-subtitle max-w-md mt-3 mb-8">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="pb-btn-primary">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
