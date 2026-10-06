# Plan: E-commerce Portfolio App

## Confirmed Decisions
- **Product domain**: Photography/video equipment (lenses, cameras, tripods, filters) — matches Lensrentals
- **Database**: PostgreSQL with seed data — easier than JSON fixtures, shows SQL knowledge
- **Recommendations**: Rule-based on category/brand — no ML needed, demonstrates logic
- **Filter persistence**: URL query params — standard e-commerce pattern
- **Styling**: Minimal functional CSS only (no fancy design) — keeps timeline tight
- **Pagination**: Simple page-based (10 products/page) — easier than infinite scroll
- **Rent/Buy**: Show both pricing models on cards — matches Lensrentals

## Approach
- **Backend**: Rails API (no views), seed data with ~30 products, 5 endpoints (list, show, search, filters, recommendations)
- **Frontend**: React single-page app, fetch from API, handle filters in URL, minimal Tailwind/CSS
- **Database**: PostgreSQL, 3 simple tables (Product, Category, Brand)
- **Deployment**: Both apps deploy to Render independently, hardcode API URL for now
- **Testing**: Basic Jest/RSpec tests on critical paths (search, filters, recommendations)
- **Timeline**: 5 checkpoints, ~1.5 hours each, target done by 5pm today for buffer

## Files Touched

### Backend (Rails)
- `backend/Gemfile` — Rails 7, postgresql, rack-cors
- `backend/config/database.yml` — PostgreSQL config
- `backend/db/schema.rb` — Product, Category, Brand tables
- `backend/db/seeds.rb` — ~30 camera products with categories/brands/pricing
- `backend/app/models/product.rb` — Product model with scopes for search/filter
- `backend/app/models/category.rb`, `brand.rb` — simple associations
- `backend/app/controllers/api/products_controller.rb` — list, show, search, filters
- `backend/app/controllers/api/recommendations_controller.rb` — GET /recommendations?product_id=X
- `backend/config/routes.rb` — namespace :api routes
- `backend/spec/requests/products_spec.rb` — test search, filters, show

### Frontend (React)
- `frontend/package.json` — React, axios, react-router-dom, optional Tailwind
- `frontend/src/App.jsx` — main layout, nav, routing
- `frontend/src/pages/ProductList.jsx` — grid layout, filters, search, sorting
- `frontend/src/pages/ProductDetail.jsx` — single product, recommendations, image
- `frontend/src/components/FilterSidebar.jsx` — collapsible filters (category, brand, price)
- `frontend/src/components/SortDropdown.jsx` — sort by popular/price/name
- `frontend/src/components/ProductCard.jsx` — product grid item
- `frontend/src/services/api.js` — axios instance, base URL
- `frontend/src/index.css` — minimal functional styles (grid, flexbox, spacing)
- `frontend/src/__tests__/ProductList.test.jsx` — render, filter behavior

### Config
- `backend/.env.example` → `backend/.env.local` (DATABASE_URL, CORS origin)
- `frontend/.env.example` → `frontend/.env` (REACT_APP_API_URL)
- `Render.yaml` or manual Render setup docs

## Checkpoints

1. **Backend: Rails setup + Product model + seed data** (1.5 hours)
   - `rails new backend --api --database=postgresql`
   - Create Product, Category, Brand models with migrations
   - Write seed data (~30 products: lenses, cameras, filters, tripods with prices, categories, brands)
   - Verify: `rails db:create db:migrate db:seed` works, products in DB

2. **Backend: API endpoints (list, show, search, filter, recommendations)** (1.5 hours)
   - ProductsController: `#index` (list + pagination), `#show`, search by name (q param), filter by category/brand/price (query params)
   - RecommendationsController: `#index` returns related products (same category or brand, exclude current product)
   - Add CORS middleware for frontend
   - Verify: curl/Postman test all endpoints, filters work in combination, recommendations are relevant

3. **Frontend: React setup + Product listing page + filters** (1.5 hours)
   - Create React app, install axios/react-router
   - ProductList page: fetch products from API, display grid (3 columns)
   - FilterSidebar: category checkboxes, brand checkboxes, price range inputs
   - URL query params for filter state (preserve on reload/bookmark)
   - Verify: see products in grid, select filters, URL updates, products filter correctly

4. **Frontend: Search, sort, product detail page** (1 hour)
   - Search bar in header, on input change updates URL + fetches
   - Sort dropdown (Most Popular, Price ↑/↓, Name A-Z)
   - ProductDetail page: fetch single product by ID, show specs, price, availability
   - Display recommendations section (fetches from /recommendations endpoint)
   - Verify: search finds products, sorting reorders grid, detail page loads recommendations

5. **Frontend: Minimal styling + responsive layout** (45 min)
   - Grid CSS (3 columns, wrap on mobile), flexbox for sidebar
   - Product cards: image, title, price, category badge, "Add to Cart" button
   - FilterSidebar: collapsible sections with checkboxes
   - Header: nav, search bar, breadcrumb on detail page
   - No fancy animations/design, just clean and functional
   - Verify: looks presentable, no horizontal scroll, touch-friendly

6. **Testing + deployment to Render** (1 hour)
   - Add one test per controller (search, filter, recommendations work)
   - Add one test per React component (renders, handles filter changes)
   - Create/push to GitHub repo (public)
   - Render: create Web Service for backend (PostgreSQL addon, run migrations)
   - Render: create Static Site for frontend (build, deploy)
   - Update API URL in frontend env for production
   - Verify: app runs locally, tests pass, both deployed on Render, API accessible from frontend

## Test Plan
- **Backend**: RSpec tests for ProductsController (search params, filter params, pagination), RecommendationsController
- **Frontend**: Jest tests for ProductList filter behavior, ProductDetail fetch logic
- **Manual**: browse catalog, apply filters, search, click product detail, see recommendations, deploy succeeds
- **Edge cases**: empty search results (show "no products found"), no filters match (same), missing product image (placeholder)

## Risks / Rollback

| Risk | Mitigation |
|------|-----------|
| Render DB setup takes too long | Pre-create PostgreSQL in Render, import schema quickly |
| API not connecting to frontend on Render | Test locally first, use explicit REACT_APP_API_URL |
| Styling looks bad | Keep it minimal: grid, flexbox, system fonts, no custom CSS |
| Not enough seed data | Pre-build ~30 products as JSON, paste into seeds.rb |
| Tests fail on deploy | Write tests last, skip if time runs out (manual test only) |
| Feature creep (Rent/Buy toggle, advanced filters) | Cut to MVP: show price, skip toggle; 3 filters max (category, brand, price) |

## Next Steps
- User approves plan
- Run `/feature-implement` to start Checkpoint 1
- After each checkpoint, commit and pause for user before next
