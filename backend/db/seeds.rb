# Clear existing data
Product.delete_all
Category.delete_all
Brand.delete_all

# Create categories
lenses = Category.create!(name: "Lenses", description: "Camera lenses for various mounts")
cameras = Category.create!(name: "Cameras", description: "Digital cameras")
tripods = Category.create!(name: "Tripods", description: "Camera support equipment")
filters = Category.create!(name: "Filters", description: "Lens filters and accessories")

# Create brands
canon = Brand.create!(name: "Canon")
sony = Brand.create!(name: "Sony")
nikon = Brand.create!(name: "Nikon")
manfrotto = Brand.create!(name: "Manfrotto")

# Create products
Product.create!(
  name: "Canon RF 24-70mm f/2.8L IS",
  description: "Versatile professional-grade zoom lens",
  price: 96.00,
  category: lenses,
  brand: canon,
  image_url: "https://placehold.co/300x300/white/red?text=Canon+Lens",
  stock_quantity: 5,
  rating: 4.8,
  review_count: 901,
  specs: "Focal Length: 24-70mm, Aperture: f/2.8, Mount: RF",
  availability_status: "Available Tomorrow"
)

Product.create!(
  name: "Canon EOS R5",
  description: "High-resolution mirrorless camera",
  price: 250.00,
  category: cameras,
  brand: canon,
  image_url: "https://placehold.co/300x300/white/red?text=Canon+Camera",
  stock_quantity: 3,
  rating: 4.9,
  review_count: 456,
  specs: "Resolution: 45MP, Sensor: Full Frame, Video: 8K",
  availability_status: "Available Tomorrow"
)

Product.create!(
  name: "Sony FE 70-200mm f/2.8 GM OSS II",
  description: "Professional telephoto lens with optical stabilization",
  price: 180.00,
  category: lenses,
  brand: sony,
  image_url: "https://placehold.co/300x300/black/white?text=Sony+Lens",
  stock_quantity: 4,
  rating: 4.7,
  review_count: 234,
  specs: "Focal Length: 70-200mm, Aperture: f/2.8, Mount: Sony E",
  availability_status: "Available Today"
)

Product.create!(
  name: "Sony A7R V",
  description: "Ultra high-resolution full-frame mirrorless",
  price: 300.00,
  category: cameras,
  brand: sony,
  image_url: "https://placehold.co/300x300/black/white?text=Sony+Camera",
  stock_quantity: 2,
  rating: 4.9,
  review_count: 512,
  specs: "Resolution: 61MP, Sensor: Full Frame, Video: 4K",
  availability_status: "Available Tomorrow"
)

Product.create!(
  name: "Nikon Z 14-24mm f/2.8S",
  description: "Ultra-wide professional zoom",
  price: 140.00,
  category: lenses,
  brand: nikon,
  image_url: "https://placehold.co/300x300/yellow/black?text=Nikon+Lens",
  stock_quantity: 3,
  rating: 4.6,
  review_count: 178,
  specs: "Focal Length: 14-24mm, Aperture: f/2.8, Mount: Nikon Z",
  availability_status: "Available Today"
)

Product.create!(
  name: "Nikon Z9",
  description: "Professional flagship mirrorless camera",
  price: 320.00,
  category: cameras,
  brand: nikon,
  image_url: "https://placehold.co/300x300/yellow/black?text=Nikon+Camera",
  stock_quantity: 1,
  rating: 4.8,
  review_count: 389,
  specs: "Resolution: 45.7MP, Sensor: Full Frame, Video: 8K",
  availability_status: "Available Tomorrow"
)

Product.create!(
  name: "Manfrotto MT190 Tripod",
  description: "Professional aluminum tripod with ball head",
  price: 45.00,
  category: tripods,
  brand: manfrotto,
  image_url: "https://placehold.co/300x300/red/white?text=Manfrotto+Tripods",
  stock_quantity: 8,
  rating: 4.4,
  review_count: 234,
  specs: "Max Height: 1.6m, Load Capacity: 8kg, Material: Aluminum",
  availability_status: "Available Today"
)

Product.create!(
  name: "Canon RF 100-500mm f/4.5-7.1L IS USM",
  description: "Super telephoto zoom for wildlife and sports",
  price: 120.00,
  category: lenses,
  brand: canon,
  image_url: "https://placehold.co/300x300/white/red?text=Canon+Lens",
  stock_quantity: 2,
  rating: 4.7,
  review_count: 567,
  specs: "Focal Length: 100-500mm, Aperture: f/4.5-7.1, Mount: RF",
  availability_status: "Available Today"
)

Product.create!(
  name: "Sony FE 24-70mm f/2.8 GM II",
  description: "Standard zoom lens for professionals",
  price: 148.00,
  category: lenses,
  brand: sony,
  image_url: "https://placehold.co/300x300/black/white?text=Sony+Lens",
  stock_quantity: 4,
  rating: 4.8,
  review_count: 412,
  specs: "Focal Length: 24-70mm, Aperture: f/2.8, Mount: Sony E",
  availability_status: "Available Tomorrow"
)

Product.create!(
  name: "Nikon Z 50mm f/2.8 Macro",
  description: "Premium macro lens for detailed close-ups",
  price: 110.00,
  category: lenses,
  brand: nikon,
  image_url: "https://placehold.co/300x300/yellow/black?text=Nikon+Lens",
  stock_quantity: 3,
  rating: 4.9,
  review_count: 289,
  specs: "Focal Length: 50mm, Aperture: f/2.8, Mount: Nikon Z",
  availability_status: "Available Today"
)

Product.create!(
  name: "Canon EF 82mm Circular Polarizer",
  description: "Professional circular polarizing filter",
  price: 12.00,
  category: filters,
  brand: canon,
  image_url: "https://placehold.co/300x300/white/red?text=Canon+Filters",
  stock_quantity: 15,
  rating: 4.6,
  review_count: 145,
  specs: "Diameter: 82mm, Type: Circular Polarizer",
  availability_status: "Available Today"
)

Product.create!(
  name: "Sony ND Filter Kit (52-77mm)",
  description: "Neutral density filter set for exposure control",
  price: 18.00,
  category: filters,
  brand: sony,
  image_url: "https://placehold.co/300x300/black/white?text=Sony+Filter",
  stock_quantity: 10,
  rating: 4.7,
  review_count: 98,
  specs: "Sizes: 52mm, 58mm, 67mm, 77mm, ND 8/16/32",
  availability_status: "Available Today"
)

Product.create!(
  name: "Sony FE 16-35mm f/2.8 GM",
  description: "Ultra-wide zoom for landscape and architecture",
  price: 165.00,
  category: lenses,
  brand: sony,
  image_url: "https://placehold.co/300x300/black/white?text=Sony+Lens",
  stock_quantity: 2,
  rating: 4.7,
  review_count: 234,
  specs: "Focal Length: 16-35mm, Aperture: f/2.8, Mount: Sony E",
  availability_status: "Available Today"
)

Product.create!(
  name: "Manfrotto Befree Travel Tripod",
  description: "Compact lightweight tripod for on-the-go shooting",
  price: 35.00,
  category: tripods,
  brand: manfrotto,
  image_url: "https://placehold.co/300x300/red/white?text=Manfrotto+Tripod",
  stock_quantity: 6,
  rating: 4.4,
  review_count: 156,
  specs: "Max Height: 1.4m, Load Capacity: 2kg, Weight: 600g",
  availability_status: "Available Today"
)

puts "Seeded #{Product.count} products, #{Category.count} categories, #{Brand.count} brands"
