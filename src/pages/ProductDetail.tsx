'use client';

import { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  brand: string;
}
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="container mx-auto lg:px-10 px-4 ">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative rounded-lg bg-gray-100">
            <img
              src={product?.images[currentImage]}
              alt={`${product?.title} - img ${currentImage + 1}`}
              className="transition-all duration-300 ease-in-out w-96"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product?.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-square overflow-hidden rounded-md bg-gray-100 ${
                  currentImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} - Thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <h1 className="text-xs text-gray-700">{product?.description}</h1>
          <h1 className="text-sm font-bold">Brand : {product?.brand}</h1>
          <h1 className="text-3xl font-bold">{product?.price}</h1>

          <div className="space-y-4">
            <Button className="w-full h-11">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" className="w-full h-11">
              <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
