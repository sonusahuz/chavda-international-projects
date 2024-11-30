'use client';

import { useState } from 'react';
import { MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Bosch Flap discs – Flap disc Standard for Metal 115 mm, 22.23 mm, 40, straight – 2608601707',
      price: 268,
      quantity: 1,
      image: 'https://chavda.com/wp-content/uploads/2021/09/AC50-430x430.jpg',
    },
    {
      id: 2,
      name: 'Bosch Flap discs – Flap disc Standard for Metal 115 mm, 22.23 mm, 40, straight – 2608601707',
      price: 268,
      quantity: 1,
      image:
        'https://chavda.com/wp-content/uploads/2022/01/dmp180z-001-430x430.jpg',
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(0, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 150;
  const total = subtotal + deliveryFee;
  const vat = total * 0.15;

  return (
    <>
      {/* Header */}
      <header className="bg-[#006400] py-16 lg:py-4 text-center">
        <div className="flex items-center md:justify-between justify-center px-4 md:px-5 lg:px-10 xl:px-24 flex-wrap">
          <h1 className="text-white text-5xl font-bold">CART</h1>
          <img
            className="h-60 hidden md:block"
            src="./assets/images/contact/cart-image.png"
            alt="Chavda International"
          />
        </div>
      </header>

      <div className="mx-auto px-4 md:px-5 lg:px-10 xl:px-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="pt-4">
            <div className="text-left mb-2">
              <h2 className="text-2xl font-bold"> Product Details</h2>
              <div className="w-44 h-1 bg-green-800 mb-4"></div>
            </div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4 flex-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">₹{item.price}</span>
                        <span className="text-sm text-green-600">
                          FREE DELIVERY : Orders Above R1000
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, false)}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, true)}
                        >
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className=" bg-blue-100 pt-4">
            <div className="text-center mx-auto mb-2">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              <div className="w-44 h-1 bg-green-800 mx-auto mb-4"></div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2 bg-green-600 text-white p-2">
                    PROMO CODE
                  </h3>
                  <Input
                    placeholder="Enter promo code"
                    className="w-full bg-white text-black"
                  />
                </div>

                <div className="bg-green-100 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>R{deliveryFee.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">
                    National Shipping - Delivers to Gauteng, South Africa
                  </h3>
                  <RadioGroup defaultValue="shipping">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shipping" id="shipping" />
                      <Label htmlFor="shipping">
                        National Shipping
                        <span className="block text-sm text-gray-500">
                          R150.00
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="collection" id="collection" />
                      <Label htmlFor="collection">
                        Collection at Chawda Sandton Office
                        <span className="block text-sm text-gray-500">
                          FREE
                        </span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Including R{vat.toFixed(2)} VAT 15%
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Button className="font-bold text-center rounded-full h-12 bg-green-600 hover:bg-green-700 text-white mx-auto w-52">
                    CHECKOUT
                    <ShoppingCart className="mr-2 h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
