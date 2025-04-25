
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">QuickShop</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link to="/categories" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Categories
          </Link>
        </nav>

        {/* Desktop Search & Cart */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="hover:text-blue-600 transition-colors" size={18} />
            </button>
          </form>
          <Link to="/cart">
            <Button variant="outline" className="relative p-2" aria-label="Cart">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Icons */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative p-2" aria-label="Cart">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="p-2 bg-white border-b border-gray-200 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="hover:text-blue-600 transition-colors" size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 inset-x-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <nav className="flex flex-col">
            <Link to="/" className="px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
            <Link to="/products" className="px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Products</Link>
            <Link to="/categories" className="px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Categories</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
