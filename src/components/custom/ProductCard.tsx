import { Heart, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const ProductCard = ({
  id,
  title,
  thumbnail,
  price,
}: {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}) => {
  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
      <Card
        key={id}
        className="relative rounded-lg mx-auto hover:border-green-500 duration-300 hover:shadow-2xl max-w-sm w-full"
      >
        {/* Floating Buttons */}
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Button
            size="icon2"
            variant="ghost"
            className="rounded-full z-10 bg-green-600 hover:bg-green-700 text-white"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button
            size="icon2"
            variant="ghost"
            className="rounded-full z-10 bg-green-600 hover:bg-green-700 text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>

        {/* Card Content */}
        <CardContent className="p-0">
          <div className="relative w-full h-full sm:h-40">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full aspect-[4/3] object-contain"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-sm mb-2 truncate">{title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">₹ {price}</span>
              <span className="text-sm text-muted-foreground line-through">
                ₹ 3999
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
