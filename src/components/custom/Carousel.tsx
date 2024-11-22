import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const banners = [
  {
    id: 1,
    title: 'SMART WEARABLE',
    subtitle: 'Best Deal Online on smart watches',
    offer: 'UP to 80% OFF',
    bgColor: 'bg-emerald-700',
    image:
      'https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png',
  },
  {
    id: 2,
    title: 'PREMIUM PHONES',
    subtitle: 'Latest Smartphones on Sale',
    offer: 'UP to 50% OFF',
    bgColor: 'bg-blue-700',
    image:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png',
  },
  {
    id: 3,
    title: 'WIRELESS AUDIO',
    subtitle: 'Premium Headphones Collection',
    offer: 'UP to 60% OFF',
    bgColor: 'bg-purple-700',
    image:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png',
  },
  {
    id: 4,
    title: 'PREMIUM LAPTOPS',
    subtitle: 'Premium Laptops Collection',
    offer: 'UP to 30% OFF',
    bgColor: 'bg-gray-400',
    image:
      'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png',
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mx-auto md:px-20 lg:mt-5">
      <div className="overflow-hidden md:rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`relative flex-[0_0_100%] min-w-0 ${banner.bgColor}`}
              onClick={scrollNext}
            >
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:ml-6 md:grid-cols-2 items-center h-[180px] md:h-[400px]">
                  <div className="space-y-2 p-8">
                    <h2 className="text-xl md:text-4xl font-bold text-white">
                      {banner.subtitle}
                    </h2>
                    <h1 className="text-2xl md:text-6xl font-bold text-white">
                      {banner.title}
                    </h1>
                    <p className="text-xl md:text-3xl font-semibold text-white">
                      {banner.offer}
                    </p>
                  </div>
                  <div className="relative h-full flex items-center justify-center p-8">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="max-h-[300px] object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {banners.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all ${
                      dotIndex === selectedIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      emblaApi?.scrollTo(dotIndex);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={scrollPrev}
        className="lg:h-20 h-10 lg:w-20 w-10 text-blue-600 absolute top-1/2 lg:left-10 left-1 transform -translate-y-1/2 lg:bg-white bg-black/10 rounded-full cursor-pointer hover:bg-white/10"
      >
        <ChevronLeft size={100} />
      </Button>

      <Button
        onClick={scrollNext}
        className="lg:h-20 h-10 lg:w-20 w-10 text-blue-600 absolute top-1/2 lg:right-10 right-1 transform -translate-y-1/2 lg:bg-white bg-black/10 rounded-full cursor-pointer hover:bg-white/10"
      >
        <ChevronRight size={100} />
      </Button>
    </div>
  );
}
