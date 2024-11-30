import * as React from 'react';
import ProductCard from '@/components/custom/ProductCard';
import useFetch from '@/hooks/useFetch';
import FilterSideBar from '@/components/custom/FilterSideBar';
import { useParams } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { PaginationDemo } from '@/components/custom/ProdPagination';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
}

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const { data } = useFetch<{ products: Product[] }>(
    'https://dummyjson.com/products'
  );
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen px-4 md:px-5 lg:px-10 xl:px-24">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">{category}</h1>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
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

      <div>
        <PaginationDemo />
      </div>
      {/* Main Content */}
    </div>
  );
}
