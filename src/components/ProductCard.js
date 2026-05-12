import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const data = props.prodData;
  

  return (
    <Link to={`/products/${data.id}`}>
    <div className="prod-card bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden w-60">
      <div className="img-wrap">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="card-body p-4">
        <p className="card-title text-gray-800 font-semibold text-sm truncate">{data.title}</p>
        <div className="card-meta flex justify-between items-center mt-2">
          <span className="price text-red-500 font-bold text-base">${data.price}</span>
          <span className="rating">
            <span className="star text-yellow-400 font-medium text-sm">★</span> {data.rating}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
