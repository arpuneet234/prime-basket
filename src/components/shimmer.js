const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center min-h-screen bg-gray-50">
      {Array(18).fill("").map((_, index) => (
        <div key={index} className="w-60 rounded-xl overflow-hidden bg-white shadow-md">
          
          {/* Image placeholder */}
          <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
          
          {/* Content placeholder */}
          <div className="p-4 flex flex-col gap-3">
            {/* Title */}
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            {/* Short title line */}
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            {/* Price and rating */}
            <div className="flex justify-between mt-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Shimmer;