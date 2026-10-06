import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>

        <div className="rating">
          <span className="stars">
            {Array(Math.round(product.rating))
              .fill('★')
              .join('')}
          </span>
          <span className="review-count">({product.review_count})</span>
        </div>

        <div className="price">
          <span className="amount">${product.price}</span>
          <span className="period">/ day</span>
        </div>

        <div className="status">
          <span className={`availability ${product.availability_status.toLowerCase().replace(' ', '-')}`}>
            {product.availability_status}
          </span>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}