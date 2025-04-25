
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { categories } from '@/lib/productData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Shop by Category</h2>
          <p className="text-gray-600 text-center mb-8">Browse our wide selection of products by category</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/products?category=${category.id}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">{category.name[0]}</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Discover thousands of products at unbeatable prices. Free shipping on orders over $50!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/products" className="font-semibold">
              <ShoppingCart size={18} className="mr-2" />
              Shop Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
