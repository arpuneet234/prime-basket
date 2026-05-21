const ProductDetailShimmer = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen animate-pulse">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-white rounded-2xl shadow-md p-4 sm:p-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-96 aspect-square max-h-80 sm:max-h-96 bg-gray-200 rounded-xl shrink-0"></div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4 mt-2"></div>
          <div className="h-12 bg-gray-200 rounded-full w-full sm:w-36 mt-2"></div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 max-w-3xl mx-auto flex flex-col gap-4">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
      </div>
    </div>
  );
};

export default ProductDetailShimmer;
