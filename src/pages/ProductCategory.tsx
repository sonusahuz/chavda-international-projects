import ProductCard from '@/components/custom/ProductCard';
import Loading from '@/components/custom/Spinner';
import useFetch from '@/hooks/useFetch'; // Import the useFetch hook
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  images?: string[];
  thumbnail: string;
}

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>(); // Ensure that 'category' is typed as a string
  const {
    data: products,
    loading,
    error,
  } = useFetch<Product[]>(
    `https://dummyjson.com/products/search?q=${category}`
  );

  if (loading) return <Loading />;

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div className="py-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
