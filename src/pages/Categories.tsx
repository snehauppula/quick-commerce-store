
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories, Category, getProductsByCategory, Product } from '@/lib/productData';
import ProductGrid from '@/components/ProductGrid';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API loading delay
    const timer = setTimeout(() => {
      if (selectedCategory) {
        const filteredProducts = getProductsByCategory(selectedCategory);
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {categories.map((category: Category) => (
          <div
            key={category.id}
            className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col cursor-pointer ${
              selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="h-32 bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">{category.name[0]}</span>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {selectedCategory ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            {categories.find(c => c.id === selectedCategory)?.name} Products
          </h2>
          <ProductGrid products={products} isLoading={isLoading} />
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Please select a category to view products</p>
        </div>
      )}
    </div>
  );
};

export default Categories;
