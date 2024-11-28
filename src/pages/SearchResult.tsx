import ProductCard from '@/components/custom/ProductCard';
import Loading from '@/components/custom/Spinner';
import useFetch from '@/hooks/useFetch';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const SearchProductList = () => {
  const { term } = useParams<{ term: string }>();
  const api = `https://dummyjson.com/products/search?q=${term}`;

  const { data, loading, error } = useFetch<{ products: Product[] }>(api);

  if (loading) return <Loading />;
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!data || data.products.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 md:px-5 lg:px-10 xl:px-24">
      {data.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default SearchProductList;
