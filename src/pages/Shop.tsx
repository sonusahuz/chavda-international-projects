'use client';

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PriceRangeSlider } from '@/components/price-range-slide';
import { ViewSwitcher } from '@/components/custom/ViewSwitcher';
import { ProductCard } from '@/components/custom/ProductFilter';

const brands = [
  { name: 'AOC' },
  { name: 'BOSCH' },
  { name: 'OneOdio' },
  { name: 'PDPOWER' },
];

const powerTypes = [
  { name: 'Corded', count: 342 },
  { name: 'Cordless', count: 247 },
  { name: 'Petrol', count: 29 },
];

const products = [
  {
    title:
      'TORK CRAFT Cutting Disc Industrial Metal 115 x 1.0 X 22.2 Mm – ABR115S-10',
    sku: 'ABR115S-10',
    price: 7.0,
    originalPrice: 8.0,
    discount: 13,
    image: '/placeholder.svg',
  },
  {
    title: 'Bosch Standard for metal cutting disc 2608619383',
    sku: '2608619383',
    price: 8.0,
    image: '/placeholder.svg',
    soldOut: true,
  },
];

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 972490,
  ]);
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [columns, setColumns] = React.useState<9 | 12 | 18 | 24>(12);

  return (
    <div className="min-h-screen bg-gray-50 px-4 lg:px-12">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-80 h-full bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Price Filter */}
          <div className="border-b py-4">
            <h3 className="font-semibold mb-4">FILTER BY PRICE</h3>
            <PriceRangeSlider
              min={0}
              max={972490}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex items-center justify-between mt-4 text-sm">
              <span>R{priceRange[0]}</span>
              <span>R{priceRange[1]}</span>
            </div>
            <Button className="w-full mt-4 bg-[#006400] hover:bg-[#005400]">
              FILTER
            </Button>
          </div>

          {/* Brands */}
          <div className="border-b py-4">
            <h3 className="font-semibold mb-4">BRANDS</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center gap-2">
                  <Checkbox id={`brand-${brand.name}`} />
                  <label
                    htmlFor={`brand-${brand.name}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Power Type */}
          <div className="py-4">
            <h3 className="font-semibold mb-4">POWER TYPE</h3>
            <div className="space-y-2">
              {powerTypes.map((type) => (
                <div key={type.name} className="flex items-center gap-2">
                  <Checkbox id={`power-${type.name}`} />
                  <label
                    htmlFor={`power-${type.name}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {type.name} ({type.count})
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-0 p-4">
        {/* Top Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <p className="text-sm text-gray-500">Showing 1–16 of 54855 results</p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <ViewSwitcher
              view={view}
              columns={columns}
              onViewChange={setView}
              onColumnsChange={setColumns}
            />

            <Select defaultValue="popularity">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Sort by popularity</SelectItem>
                <SelectItem value="rating">Sort by rating</SelectItem>
                <SelectItem value="date">Sort by latest</SelectItem>
                <SelectItem value="price_low">
                  Sort by price: low to high
                </SelectItem>
                <SelectItem value="price_high">
                  Sort by price: high to low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid gap-4 ${
            view === 'grid'
              ? `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
              : 'grid-cols-1'
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.sku} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
