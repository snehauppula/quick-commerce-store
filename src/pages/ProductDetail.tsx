
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, Product } from '@/lib/productData';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(id);
        setProduct(foundProduct || null);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 animate-pulse">
          <div className="lg:w-1/2 bg-gray-200 h-96 rounded-lg"></div>
          <div className="lg:w-1/2">
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded mb-2 w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded mb-4 w-1/3"></div>
            <div className="h-24 bg-gray-200 rounded mb-6"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't seem to exist.</p>
        <Button asChild>
          <Link to="/products">
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      {/* Product Detail */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Product Image */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
        </div>
        
        {/* Right Column - Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Product Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xl ${i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-gray-600">{product.rating} ({Math.floor(product.rating * 24)} reviews)</span>
          </div>
          
          {/* Price */}
          <div className="text-2xl font-bold text-blue-600 mb-4">
            ${product.price.toFixed(2)}
          </div>
          
          {/* Availability */}
          <div className="mb-4">
            {product.inStock ? (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                In Stock
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                Out of Stock
              </Badge>
            )}
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <Button 
                variant="outline"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                disabled={!product.inStock || quantity <= 1}
                className="h-10 w-10"
              >
                -
              </Button>
              <span className="mx-4 text-center w-8">{quantity}</span>
              <Button 
                variant="outline"
                onClick={() => setQuantity(quantity + 1)}
                disabled={!product.inStock}
                className="h-10 w-10"
              >
                +
              </Button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            size="lg" 
            className="w-full mb-4"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          
          {/* Additional Info */}
          <div className="text-sm text-gray-600">
            <p className="mb-1">• Free shipping on orders over $50</p>
            <p className="mb-1">• Easy 30-day returns</p>
            <p>• 1-year warranty included</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
