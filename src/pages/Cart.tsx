
import ShoppingCart from '@/components/ShoppingCart';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <ShoppingCart />
    </div>
  );
};

export default Cart;
