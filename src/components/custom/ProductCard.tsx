import { Card, CardContent } from '../ui/card';
import { Link } from 'react-router-dom';

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
        className="rounded-lg overflow-hidden mx-auto hover:border-green-500 duration-300 hover:shadow-2xl max-w-sm w-full"
      >
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative w-full h-full sm:h-40">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full aspect-[4/3] object-contain"
            />
          </div>

          {/* Content Section */}
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
