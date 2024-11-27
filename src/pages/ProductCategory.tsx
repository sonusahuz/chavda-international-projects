import React from 'react';
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

const ProductCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const api = `https://dummyjson.com/products/search?q=${category}`;

  // Typing the response correctly as { products: Product[] }
  const { data, loading, error } = useFetch<{ products: Product[] }>(api);

  if (loading) return <Loading />;

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  if (!data || data.products.length === 0) {
    return (
      <div className="text-center">No products found in this category.</div>
    );
  }

  return (
    <div className="py-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default ProductCategory;
