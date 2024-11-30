import useFetch from '@/hooks/useFetch';
import ProductCard from './ProductCard';
import Loading from './Spinner';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
}

const ProductList = () => {
  const api = `https://dummyjson.com/products`;
  const { data, loading, error } = useFetch<{ products: Product[] }>(api);

  if (loading) return <Loading />;
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!data || data.products.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
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

export default ProductList;
