import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import '../styles/ProductList.css';

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const q = searchParams.get('q') || '';
  const categoryId = searchParams.get('category_id') || '';
  const brandId = searchParams.get('brand_id') || '';
  const sort = searchParams.get('sort') || 'created_at';
  const page = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProducts({
        q,
        category_id: categoryId,
        brand_id: brandId,
        sort,
        page,
      });
      setProducts(response.data);
    } catch (err) {
      setError('Failed to load products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.search.value;
    const params = new URLSearchParams();
    if (searchInput) params.set('q', searchInput);
    setSearchParams(params);
  };

  const handleFilterChange = (filters) => {
    const params = new URLSearchParams();
    if (filters.q) params.set('q', filters.q);
    if (filters.categoryId) params.set('category_id', filters.categoryId);
    if (filters.brandId) params.set('brand_id', filters.brandId);
    if (filters.sort) params.set('sort', filters.sort);
    setSearchParams(params);
  };

  return (
    <div className="product-list-container">
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            defaultValue={q}
            autoComplete='off'
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="content">
        <FilterSidebar onFilterChange={handleFilterChange} />

        <div className="products-section">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {products.length === 0 && !loading && (
            <p>No products found. Try adjusting your filters.</p>
          )}

          <div className="products-grid">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                style={{ textDecoration: 'none' }}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {page > 1 && (
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set('page', page - 1);
              setSearchParams(params);
            }}
          >
            ← Previous
          </button>
        )}
        <span>Page {page}</span>
        {products.length === 6 && (
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set('page', page + 1);
              setSearchParams(params);
            }}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}