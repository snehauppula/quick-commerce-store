
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/productData';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setIsUpdating(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      updateQuantity(item.id, newQuantity);
      setIsUpdating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col sm:flex-row py-4 border-b border-gray-200 last:border-0 gap-4">
      <div className="sm:w-1/4 md:w-1/6">
        <Link to={`/product/${item.id}`}>
          <img 
            src={item.image}
            alt={item.name}
            className="w-full h-24 sm:h-28 object-cover rounded-md"
          />
        </Link>
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <Link to={`/product/${item.id}`}>
              <h3 className="font-medium text-lg hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {item.description}
            </p>
          </div>
          
          <div className="text-right mt-2 sm:mt-0">
            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1 || isUpdating}
            >
              <Minus size={14} />
            </Button>
            
            <span className="px-3 w-10 text-center">{item.quantity}</span>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={isUpdating}
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash size={16} className="mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
