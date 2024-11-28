import { ChevronRight } from 'lucide-react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <div>
      <main className="px-4 md:px-5 lg:px-10 xl:px-24">
        <div className="flex items-center justify-between py-6">
          <h1 className="text-gray-600 text-lg">
            Grab the best deals on{' '}
            <span className="text-green-500 capitalize">{category}</span>
          </h1>
          <div className="text-gray-600">
            <Link
              to={`/search/${category.toLowerCase()}`}
              className="flex items-center justify-between gap-2"
            >
              <span className="hidden lg:block"> View All</span>
              <span>
                <ChevronRight size={20} className="text-green-500" />
              </span>{' '}
            </Link>
          </div>
        </div>
        <hr className="text-gray-500 mb-6" />
        <ProductList category={category.toLowerCase()} />
      </main>
    </div>
  );
};

export default CategoryCard;
