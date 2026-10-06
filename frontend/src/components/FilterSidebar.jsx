import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import '../styles/FilterSidebar.css';

export default function FilterSidebar({ onFilterChange }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sort, setSort] = useState('created_at');

  useEffect(() => {
    // Fetch all products to extract unique categories and brands
    getProducts({ limit: 1000 }).then((res) => {
      // Deduplicate categories and brands by ID
      const catMap = new Map();
      const brdMap = new Map();
      res.data.forEach((p) => {
        catMap.set(p.category.id, p.category);
        brdMap.set(p.brand.id, p.brand);
      });
      const cats = Array.from(catMap.values());
      const brnds = Array.from(brdMap.values());

      setCategories(cats);
      setBrands(brnds);
    });
  }, []);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    onFilterChange({ categoryId: catId, brandId: selectedBrand, sort });
  };

  const handleBrandChange = (brdId) => {
    setSelectedBrand(brdId);
    onFilterChange({ categoryId: selectedCategory, brandId: brdId, sort });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    console.log("SORT");
    console.log(sort);
    onFilterChange({ categoryId: selectedCategory, brandId: selectedBrand, sort: e.target.value });
  };

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setSort('created_at');
    onFilterChange({});
  };

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-section">
        <h4>Sort</h4>
        <select value={sort} onChange={handleSortChange}>
          <option value="created_at">Newest</option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
          <option value="-rating">Rating</option>
        </select>
      </div>

      <div className="filter-section">
        <h4>Category</h4>
        {categories.length > 0 ? (
          categories.map((cat) => (
            <label key={cat.id}>
              <input
                type="checkbox"
                checked={selectedCategory === String(cat.id)}
                onChange={() =>
                  handleCategoryChange(
                    selectedCategory === String(cat.id) ? '' : String(cat.id)
                  )
                }
              />
              {cat.name}
            </label>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="filter-section">
        <h4>Brand</h4>
        {brands.length > 0 ? (
          brands.map((brd) => (
            <label key={brd.id}>
              <input
                type="checkbox"
                checked={selectedBrand === String(brd.id)}
                onChange={() =>
                  handleBrandChange(
                    selectedBrand === String(brd.id) ? '' : String(brd.id)
                  )
                }
              />
              {brd.name}
            </label>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <button onClick={handleReset} className="reset-btn">
        Reset Filters
      </button>
    </aside>
  );
}