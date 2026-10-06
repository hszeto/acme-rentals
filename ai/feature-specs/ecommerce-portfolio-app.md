# Feature Spec: E-commerce Portfolio App

## Summary
A React + Rails e-commerce application that showcases customer-facing digital experience features (navigation, search, filters, product recommendations) built as an interview portfolio piece for Lensrentals. Demonstrates full-stack development across frontend, backend, and database layers.

## Requirements
- Backend: Rails API serving product data, search, filtering, and recommendation logic
- Frontend: React app with responsive UI displaying products, navigation, and features
- Products page with catalog display and grid/list layout options
- Search functionality to find products by name/keywords
- Filter capability (e.g., by price range, category, ratings)
- Product recommendations engine (e.g., "similar products", "popular items")
- Product detail page with full information and image gallery
- Deployment: Both frontend and backend hosted on Render
- Production-ready code with tests, clean architecture, and documentation

## Non-Goals
- User authentication or shopping cart checkout flow
- Payment processing or order management
- Admin panel or backend management UI
- Mobile-native apps (responsive web only)
- Advanced analytics or A/B testing

## Edge Cases
- Empty search results → display helpful messaging and suggestions
- No filters match criteria → show "no products found" with filter reset option
- Slow API responses → loading states and error boundaries
- Missing product images → fallback placeholder images
- Product with no recommendations → gracefully omit recommendations section

## Acceptance Criteria
- Rails API serves product data with endpoints for listing, search, filtering
- React frontend renders product pages with responsive design
- Search bar filters products in real-time or on submit
- Filters (price, category, etc.) work independently and in combination
- Product recommendations display on product detail pages
- App deploys successfully to Render (frontend and backend)
- Code includes basic test coverage (API routes, React components)
- README documents setup, running locally, and deployment steps

## Design Patterns (from Lensrentals.com)

### Navigation
- Main nav: BRANDS, PRODUCTS (with dropdown categories), PACKAGES
- Breadcrumb trail on category/detail pages (Home > Products > Lenses)
- Search bar in header

### Product Categories
- Photography/video equipment: Lenses, Cameras, Audio, Lighting, Drones, Filters, Tripods, Storage, Post-Production
- Could simplify to: Lenses, Cameras, Accessories for initial MVP

### Catalog Page Features
- **Left sidebar filters (collapsible sections)**:
  - Rent or Buy (with count badges)
  - Brand (with "Show More" for overflow)
  - Item Type / Category
  - Price range / Other specs
- **Sort dropdown**: Most Popular, Newest, Price (↑/↓), Name (A-Z/Z-A), Focal Length (↑/↓)
- **Product grid**: 3-column layout with image, title, star rating, price, "Add to Cart" button
- **Applied Filters section**: Shows active filters with × to remove

### Product Detail Page
- **Left**: Image gallery with thumbnails
- **Center**: Title, star rating + review count, description, specs table, Q&A, "Read More" link
- **Right sidebar**: 
  - Price & rental duration
  - Availability status ("Available Tomorrow")
  - Date pickers for rental period
  - "Add to Cart" button
  - "What's Included" section
  - Links to resources
- **Recommendations section**: "Recommended: [complementary products]" (e.g., filters for a lens, cameras for lenses)

## Decisions (from Lensrentals exploration + your input)
- **Product domain**: Photography/video equipment (lenses, cameras, tripods, lighting, filters, audio gear)
- **Database**: PostgreSQL with seed data ✓
- **Recommendations**: Rule-based (e.g., "common accessories for this product type" + "same brand")
- **Pagination**: Start with simple pagination (10-20 products per page)
- **Filter persistence**: Store filter state in URL query params so bookmarks/back button preserve them
- **Rent/Buy toggle**: Support both rental pricing and purchase pricing on product cards
