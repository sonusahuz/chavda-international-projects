import ProductCard from '@/components/custom/ProductCard';
import { useEffect, useState } from 'react';
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
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="py-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
