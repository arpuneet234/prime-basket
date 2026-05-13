const ProductDetailShimmer = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen animate-pulse">
      
      {/* Product Container */}
      <div className="flex gap-10 bg-white rounded-2xl shadow-md p-8">
        
        {/* Image shimmer */}
        <div className="w-96 h-96 bg-gray-200 rounded-xl shrink-0"></div>

        {/* Details shimmer */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Title */}
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          {/* Brand */}
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          {/* Category */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          {/* Description */}
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          {/* Price */}
          <div className="h-8 bg-gray-200 rounded w-1/4 mt-2"></div>
          {/* Button */}
          <div className="h-12 bg-gray-200 rounded-full w-36 mt-2"></div>
        </div>

      </div>

      {/* Reviews shimmer */}
      <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-4">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
      </div>

    </div>
  );
};

export default ProductDetailShimmer;