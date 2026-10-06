import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct, getRecommendations } from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProduct(id);
      setProduct(res.data);

      // Fetch recommendations
      const recRes = await getRecommendations(id);
      setRecommendations(recRes.data);
    } catch (err) {
      setError('Failed to load product');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;
  if (error) return <div className="container"><p className="error">{error}</p></div>;
  if (!product) return <div className="container"><p>Product not found</p></div>;

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Products</Link>

      <div className="product-detail">
        <div className="product-image-section">
          <img src={product.image_url} alt={product.name} />
        </div>

        <div className="product-details-section">
          <h1>{product.name}</h1>

          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="review-count">{product.review_count} reviews</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="price-section">
            <span className="price">${product.price}</span>
            <span className="period">per day</span>
          </div>

          <div className="availability">
            <strong>Availability:</strong> {product.availability_status}
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>

          <div className="specs">
            <h3>Specifications</h3>
            <table>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>{product.brand_id}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product.category_id}</td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>{product.stock_quantity} available</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>{product.rating}/5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="specs-text">
            <h3>Details</h3>
            <p>{product.specs}</p>
          </div>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="recommendations-section">
          <h2>Recommended: Similar Products</h2>
          <div className="recommendations-grid">
            {recommendations.map((rec) => (
              <Link
                key={rec.id}
                to={`/products/${rec.id}`}
                style={{ textDecoration: 'none' }}
              >
                <ProductCard product={rec} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}