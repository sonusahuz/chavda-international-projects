import { useState } from 'react';
import { Facebook, Heart, Instagram, Share2, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RiWhatsappFill } from 'react-icons/ri';
import ProductList from '@/components/custom/ProductList';
import { PayFlexModal } from '@/components/custom/PayFlexModal';

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
  ];

  return (
    <div>
      <div className="container mx-auto px-4 md:px-5 lg:px-10 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="flex-1 space-y-4">
            <div className="relative h-96 w-full mx-auto overflow-hidden rounded-lg border bg-gray-100">
              <img
                src={images[selectedImage]}
                alt="Product image"
                className="object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg border ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1 bg-green-800 text-white ">
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="flex-1 bg-green-800 text-white hover:bg-green-600/95"
              >
                Buy Now
              </Button>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <img
                  className="w-36"
                  src="https://widgets.payflex.co.za/assets/widget-payflex.svg"
                />
                <div className="w-96">
                  <span className="text-purple-600 font-bold">
                    Buy now Pay later. 0% interest
                  </span>
                  <p className="">
                    Choose your payment plan, and pay from as little as R2.50
                    today.
                    <span
                      className="text-purple-600 hover:underline cursor-pointer"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {' '}
                      Learn More.
                    </span>
                    {isModalOpen && (
                      <PayFlexModal onClose={() => setIsModalOpen(false)} />
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">Share:</span>
                <Instagram className="mr-2 h-5 w-5" />
                <Facebook className="mr-2 h-5 w-5" />
                <RiWhatsappFill className="mr-2 h-5 w-5" />
                <Twitter className="mr-2 h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                TORK CRAFT Impact Phil.2 X 50Mm Power Bit Bulk Ph2 – TCIPH0250B
              </h1>
              <p className="text-xl text-green-800 mt-2">Special Price</p>
              <div className="mt-2 flex items-baseline gap-4">
                <span className="text-2xl font-bold">₹268</span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹320
                </span>
                <span className="rounded-md bg-green-100 px-2 py-1 text-sm text-green-700">
                  16% off
                </span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <label htmlFor="quantity" className="text-sm font-medium">
                      QTY
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="rounded-md border p-2"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Add to wishlist
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <Card className="p-4">
              <ul className="space-y-2 list-disc p-4">
                <li>FREE DELIVERY: Orders Above ₹1000</li>
                <li>WHEN WILL I GET MY ITEMS DELIVERED?</li>
                <li>Delivery: 2 – 7 Working Days</li>
                <li>Subject to Stock Availability</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                NOTE: Free delivery does not apply to large voluminous or
                weighty items. Image(s) is only used for illustrative purposes
                and may not exactly depict the actual item. International
                shipping fees are approximate and are subject to change after
                placing the order.
              </p>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="delivery">
                <AccordionTrigger className="bg-[#2B5335] text-white px-4 py-2">
                  DELIVERY OPTIONS
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  <ul className="flex flex-col gap-3 text-muted-foreground">
                    <li>
                      <span className="font-bold">FREE DELIVERY :</span> Orders
                      Above R1000
                    </li>
                    <li>
                      <span className="font-bold">Delivery Time: </span>2 – 7
                      Working Days
                    </li>
                    <li>Subject to Stock Availability</li>
                    <li>
                      Free delivery does not apply to large voluminous catering
                      items or goods
                    </li>
                    <li>
                      International shipping fees are approximate and are
                      subject to change after placing the order.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="payment">
                <AccordionTrigger className="bg-[#2B5335] text-white px-4 py-2">
                  PAYMENT METHODS
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  <ul className="flex flex-col gap-3 text-muted-foreground">
                    <h1 className="font-bold">PAYFAST:</h1>
                    <li>Credit & Debit Payment</li>
                    <li>Instant EFT</li>
                    <h1 className="font-bold">YOCO: </h1>
                    <li>Credit & Debit Payment</li>
                    <h1 className="font-bold">MANUAL EFT: </h1>
                    <li>Bank Transfer Through Online Banking </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="border-t pt-4">
              <p className="font-bold text-black">
                Tell us about a lower price so we can price match?
              </p>
              <p className="mt-2 text-sm text-green-800">
                Categories:{' '}
                <span className="text-green-800">Category Name</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-green-800">
            Product Description
          </h1>
          <div>
            <ul>
              <h1 className="font-bold">
                Impact Phil.2 X 50Mm Power Bit Bulk Ph2
              </h1>
              <h1 className="font-bold">TorkCraft – Impact Bits</h1>
              <h1 className="font-bold">Type: Phillips</h1>
              <li className="font-bold">Size: 2 x 50mm</li>
              <h1 className="font-bold">Application:</h1>
              <p>
                Impact bits and bit holders provides extended lifetime compared
                to standard insert bits and bit holders. For driving screws when
                using an impact driver or in high torque applications. Spinning
                collar on quick change bit holder allows for precision work
              </p>
              <li>
                Precision tip for better fitment which reduces stripping and
                increases Durability
              </li>
              <li>Torsion zone absorbs impact force and high torque output</li>
              <li>
                Black phosphate coating resists corrosion and increases bit life
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-green-800">
            Related Products
          </h1>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
