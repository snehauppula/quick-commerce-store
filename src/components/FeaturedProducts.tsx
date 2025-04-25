
import { useState, useEffect } from 'react';
import { getFeaturedProducts, Product } from '@/lib/productData';
import ProductGrid from './ProductGrid';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a timeout
    const timer = setTimeout(() => {
      const featuredProducts = getFeaturedProducts();
      setProducts(featuredProducts);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Featured Products</h2>
        <p className="text-gray-600 text-center mb-8">Discover our most popular items selected just for you</p>
        <ProductGrid products={products} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
