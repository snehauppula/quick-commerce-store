
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
}

// Demo categories
export const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "home", name: "Home & Kitchen" },
  { id: "books", name: "Books" },
  { id: "sports", name: "Sports & Outdoors" },
];

// Demo product data
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal clear audio with these premium noise-cancelling headphones. Perfect for music lovers and professionals alike.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    description: "Stay connected and track your fitness with this stylish and feature-packed smartwatch. Water-resistant and long battery life.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Lightweight Cotton T-shirt",
    description: "Comfortable, breathable cotton t-shirt perfect for everyday wear. Available in multiple colors and sizes.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    category: "clothing",
    featured: false,
    inStock: true,
    rating: 4.3,
  },
  {
    id: "4",
    name: "Professional DSLR Camera",
    description: "Capture stunning photos and videos with this professional-grade camera. Includes multiple lenses and accessories.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.9,
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    description: "Work in comfort with this ergonomic office chair designed to support your posture during long working hours.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    category: "home",
    featured: false,
    inStock: true,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Bestselling Novel Collection",
    description: "A collection of five bestselling novels from renowned authors. Perfect for book lovers and as a gift.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    category: "books",
    featured: false,
    inStock: true,
    rating: 4.5,
  },
  {
    id: "7",
    name: "Premium Yoga Mat",
    description: "High-quality, non-slip yoga mat perfect for all types of yoga and exercise routines.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "sports",
    featured: true,
    inStock: true,
    rating: 4.4,
  },
  {
    id: "8",
    name: "Smart Home Security System",
    description: "Keep your home safe with this smart security system featuring cameras, motion sensors, and mobile alerts.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    category: "electronics",
    featured: false,
    inStock: false,
    rating: 4.6,
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

// Helper function to get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
