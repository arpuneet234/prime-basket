const ProductDetailShimmer = () => {
  return (
    <div className="product-shimmer">
      <div className="product-container">
        
        {/* Image shimmer */}
        <div className="shimmer-box image"></div>

        {/* Details shimmer */}
        <div className="product-details">
          <div className="shimmer-box title"></div>
          <div className="shimmer-box text"></div>
          <div className="shimmer-box text short"></div>

          <div className="shimmer-box price"></div>
          <div className="shimmer-box button"></div>
        </div>
      </div>

      {/* Reviews shimmer */}
      <div className="reviews">
        <div className="shimmer-box review"></div>
        <div className="shimmer-box review"></div>
        <div className="shimmer-box review"></div>
      </div>
    </div>
  );
};

export default ProductDetailShimmer;