import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  sku: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  soldOut?: boolean;
}

export function ProductCard({
  title,
  sku,
  price,
  originalPrice,
  discount,
  image,
  soldOut,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm">
      {discount && (
        <div className="absolute top-2 left-2 z-10 bg-[#006400] text-white text-sm px-2 py-1 rounded">
          -{discount}%
        </div>
      )}
      {soldOut && (
        <div className="absolute top-2 right-2 z-10 bg-gray-600 text-white text-sm px-2 py-1 rounded">
          SOLD OUT
        </div>
      )}
      <button className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 hover:bg-white">
        <Heart className="w-5 h-5 text-gray-600" />
      </button>
      <div className="aspect-square relative mb-4">
        <img src={image} alt={title} className="object-contain p-4" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">SKU: {sku}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            R{price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
