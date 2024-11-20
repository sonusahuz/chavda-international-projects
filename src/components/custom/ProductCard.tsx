import { Card, CardContent } from '../ui/card';
import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
}: {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}) => {
  return (
    <Link to={`/product/${id}`}>
      <Card
        key={id}
        className="w-full sm:w-64 rounded-lg overflow-hidden shadow-md mx-auto"
      >
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative w-full h-48 sm:h-64">
            <span className="absolute rounded-bl-lg right-0 top-0 bg-blue-500 px-3 py-1.5 text-xs uppercase tracking-wider text-white">
              56% <br />
              OFF
            </span>
            <img src={thumbnail} alt={title} className="w-full h-full" />
          </div>

          {/* Content Section */}
          <div className="p-4">
            <h3 className="font-medium text-sm mb-2 truncate">{title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">₹ {price}</span>
              <span className="text-sm text-muted-foreground line-through">
                ₹ 3999
              </span>
            </div>
            <div className="text-green-600 text-sm mt-1">
              Save - ₹ {discountPercentage}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
