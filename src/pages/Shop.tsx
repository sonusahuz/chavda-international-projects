import * as React from 'react';
import ProductCard from '@/components/custom/ProductCard';
import useFetch from '@/hooks/useFetch';
import FilterSideBar from '@/components/custom/FilterSideBar';
import FilterTopBar from '@/components/custom/FilterTopBar';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
}

export default function Shop() {
  const { data } = useFetch<{ products: Product[] }>(
    'https://dummyjson.com/products'
  );
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [columns, setColumns] = React.useState<9 | 12 | 18 | 24>(12);

  return (
    <div className="min-h-screen px-4 md:px-5 lg:px-10 xl:px-24">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="lg:flex lg:items-start lg:justify-between lg:gap-6">
        {/* Sidebar */}
        <FilterSideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="lg:ml-0">
          {/* Top Bar */}
          <FilterTopBar
            view={view}
            columns={columns}
            setView={setView}
            setColumns={setColumns}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Product Grid */}
          <div
            className={`grid gap-4 ${
              view === 'grid'
                ? `grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
                : 'grid-cols-1'
            }`}
          >
            {data?.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Main Content */}
    </div>
  );
}
