
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Shop the Latest Trends
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Discover amazing products at unbeatable prices. From electronics to fashion, 
              we've got everything you need.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link to="/products">
                  Shop Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-700">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" 
              alt="Shopping" 
              className="rounded-lg shadow-xl max-w-sm md:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
