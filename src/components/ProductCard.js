import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const data = props.prodData;
  

  return (
    <Link to={`/products/${data.id}`}>
    <div className="prod-card">
      <div className="img-wrap">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="card-body">
        <p className="card-title">{data.title}</p>
        <div className="card-meta">
          <span className="price">${data.price}</span>
          <span className="rating">
            <span className="star">★</span> {data.rating}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
