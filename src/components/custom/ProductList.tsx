import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [category]);

  return (
    <div className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
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

export default ProductList;
