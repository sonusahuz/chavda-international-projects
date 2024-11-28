import Carousel from './Carousel';

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  PhoneIcon as MobilePhone,
  Plus,
  RefreshCw,
  ShoppingBag,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card } from '../ui/card';
import useFetch from '@/hooks/useFetch';
import Loading from './Spinner';
import ProductCard from './ProductCard';
import { SubMenu } from './SubMenu';
import CountdownTimer from './CountDownTimer';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 640
      ? 2 // Small screens (<640px)
      : window.innerWidth < 1280
      ? 3 // Medium to Large screens (640px–1280px)
      : 4 // Extra-large screens (≥1280px)
  );

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // Small screens
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3); // Medium to Large screens
      } else {
        setItemsPerPage(4); // Extra-large screens
      }
    };

    window.addEventListener('resize', updateItemsPerPage);
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const api = `https://dummyjson.com/products`;
  const { data, loading, error } = useFetch<{ products: Product[] }>(api);

  if (loading) return <Loading />;
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!data || data.products.length === 0) {
    return <div className="text-center">No products found.</div>;
  }
  const categories = [
    { name: 'Dairy, Bread & Eggs', icon: '🥛' },
    { name: 'Snacks & Munchies', icon: '🍿' },
    { name: 'Fruits & Vegetables', icon: '🥬' },
    { name: 'Cold Drinks & Juices', icon: '🥤' },
    { name: 'Baby Care', icon: '👶' },
    { name: 'Bakery & Biscuits', icon: '🥖' },
    { name: 'Chicken, Meat & Fish', icon: '🍗' },
  ];

  const handleNext = () => {
    if (currentIndex + 4 < data.products.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <>
      <SubMenu />
      <Carousel />
      <div className="flex gap-6 p-6 px-4 md:px-5 lg:px-10 xl:px-24">
        {/* Categories Sidebar */}
        <div className="hidden lg:block w-72 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="space-y-1 border rounded-lg">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="#"
                className="flex items-center border-t justify-between p-3 hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </Link>
            ))}
          </div>

          <div className="space-y-4 mt-8 border rounded-lg">
            <div className="flex items-center gap-3 p-3">
              <MobilePhone className="h-8 w-8 text-green-600" />
              <p className="text-sm text-gray-600">
                Download the FreshCart App to your Phone.
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 border-t">
              <RefreshCw className="h-11 w-11 text-green-600" />
              <p className="text-sm text-gray-600">
                Return Policy customers can return a product and ask for a
                refund.
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 border-t">
              <ShoppingBag className="h-8 w-8 text-green-600" />
              <p className="text-sm text-gray-600">
                Order now so you don't miss the opportunities.
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 border-t">
              <Clock className="h-8 w-8 text-green-600" />
              <p className="text-sm text-gray-600">
                Your order will arrive at your door in 15 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* New Arrivals Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">New Arrivals</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  disabled={currentIndex + 4 >= data.products.length}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ScrollArea>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
                {data.products
                  .slice(currentIndex, currentIndex + itemsPerPage)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      thumbnail={product.thumbnail}
                      price={product.price}
                    />
                  ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Deal of the Day Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-1 text-green-600">
              Deal of the day
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Brings to users an array of discounts on a variety
            </p>

            <Card className="p-6 border-red-600">
              <div className="flex gap-8 flex-wrap">
                <img
                  src="https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg"
                  alt="Deal of the day product"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.3</span>
                  </div>
                  <h3 className="text-xl font-semibold">
                    NutriChoice Digestive
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">$24</span>
                    <span className="text-sm text-gray-500 line-through">
                      $24
                    </span>
                  </div>
                  <Button className="bg-[#0aad0a] hover:bg-green-700 h-11">
                    <Plus /> Add to cart
                  </Button>
                  <div>
                    <CountdownTimer />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <div className="w-full bg-[#ffe6e6] py-3 my-8 px-4 text-center rounded">
              <div className="flex items-center justify-center flex-wrap gap-2 text-[#ff4d4d] text-sm">
                <span>First time here? Get 10% off your first order!</span>
                <span>Click here</span>
                <code className="border border-dashed border-[#ff4d4d] px-2 py-0.5 font-normal">
                  FIRSTTIME10
                </code>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold">New Products</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                      New products with updated stocks.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNext}
                      disabled={currentIndex + 4 >= data.products.length}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <ScrollArea>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
                    {data.products
                      .slice(currentIndex, currentIndex + itemsPerPage)
                      .map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          thumbnail={product.thumbnail}
                          price={product.price}
                        />
                      ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
