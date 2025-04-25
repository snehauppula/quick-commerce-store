
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart as CartIcon } from 'lucide-react';

const ShoppingCart = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate an API call for checkout
    setTimeout(() => {
      alert('Checkout functionality will be implemented with Stripe in the future!');
      setIsCheckingOut(false);
    }, 1500);
  };

  if (getTotalItems() === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <CartIcon size={32} className="text-gray-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Shopping Cart ({getTotalItems()} items)</h2>
        <Button variant="ghost" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <div className="space-y-2">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-medium">Free</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Tax:</span>
            <span className="font-medium">${(getTotalPrice() * 0.1).toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total:</span>
            <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
          </div>
          
          <Button 
            className="w-full mb-2" 
            size="lg"
            onClick={handleCheckout}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            By proceeding, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
