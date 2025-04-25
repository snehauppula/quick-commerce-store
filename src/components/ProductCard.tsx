
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/productData';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <div className="product-card-hover bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="block flex-grow">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="destructive" className="text-sm font-semibold py-1 px-3">
                Out of Stock
              </Badge>
            </div>
          )}
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-medium text-gray-900 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center ml-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
          </div>
          
          <div className="mb-4 text-gray-500 text-sm line-clamp-2">
            {product.description}
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
