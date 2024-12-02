import {
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ChartBarStacked,
  CircleUserRound,
  Home,
  Search,
  GitCompare,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer } from '../ui/drawer';
import { handleNavigation } from '@/lib/utils';
import { useState } from 'react';
import { Bell, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>('');

  const items = [
    { id: '1', title: 'HOME', href: 'home' },
    { id: '2', title: 'SHOP', href: 'shop' },
    { id: '3', title: 'ABOUT US', href: 'about-us' },
    { id: '4', title: 'CONTACT US', href: 'contact-us' },
    { id: '4', title: 'SHARPENING SERVICE', href: 'sharpening-service' },
    { id: '4', title: 'CAREERS', href: 'career' },
    { id: '4', title: 'WISHLIST', href: 'wishlist' },
    { id: '4', title: 'LOGIN', href: 'login' },
    { id: '4', title: 'SIGNUP', href: 'signup' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  // Define the type for the onKeyDown event
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/search-result/${encodeURIComponent(search)}`);
    }
  };

  const bottomNavItems = [
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      label: 'Cart',
      href: '/cart',
    },
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      href: '/',
    },

    {
      icon: <Bell className="w-5 h-5" />,
      label: 'Notification',
      href: '/notifications',
    },
    {
      icon: <CircleUserRound className="w-5 h-5" />,
      label: 'Sign up',
      href: '/signup',
    },
  ];

  return (
    <>
      <header className="w-full">
        <div className="w-full bg-[#0B6623] text-white h-11 hidden md:block">
          <div className="flex items-center justify-between py-3 px-4 md:px-5 lg:px-10 xl:px-24">
            <p className="text-sm font-light hidden md:block">
              FREE SHIPPING OVER R1000
            </p>
            <div className="flex items-center space-x-4 mx-auto sm:mx-0">
              {/* Social Media Icons */}
              <Link to="/" className="hover:opacity-80">
                <Facebook size={16} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="/" className="hover:opacity-80">
                <Twitter size={16} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="/" className="hover:opacity-80">
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="/" className="hover:opacity-80">
                <Youtube size={16} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link to="/" className="hover:opacity-80">
                <Linkedin size={16} />
                <span className="sr-only">LinkedIn</span>
              </Link>

              {/* Vertical Line Separator */}
              <div className="hidden md:block w-px h-4 bg-white/30" />
              <div className="hidden space-x-4 md:flex">
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-sm hover:underline"
                  to="/"
                >
                  NEWSLETTER
                </Link>
                <div className="hidden md:block w-px h-4 bg-white/30" />
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-sm hover:underline"
                  to="/contact-us"
                >
                  CONTACT US
                </Link>
                <div className="hidden md:block w-px h-4 bg-white/30" />
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-sm hover:underline"
                  to="/"
                >
                  FAQS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4 px-4 md:px-5 lg:px-10 xl:px-24">
          <Menu onClick={() => setOpen(true)} className="h-5 w-5 md:hidden" />
          {/* Logo */}
          <Link to="/">
            <img
              alt="Chavda International Logo"
              className="h-7 lg:h-10"
              src="./logo.png"
            />
          </Link>

          <div className=" sm:hidden">
            <Link to={'/cart'}>
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 sm:hidden z-50">
            <ul className="flex justify-around items-center py-4">
              <li
                onClick={() => window.scrollTo(0, 0)}
                className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition"
              >
                <ChartBarStacked className="w-5 h-5" />
                <span className="text-xs hidden">Category</span>
              </li>
              {bottomNavItems.map((item, index) => (
                <>
                  <li key={index}>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={item.href}
                      className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition"
                    >
                      {item.icon}
                      <span className="text-xs hidden">{item.label}</span>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden flex-1 max-w-xl lg:block">
            <div className="relative lg:w-[500px] xl:w-auto mx-auto items-center">
              <div className="flex w-full max-w-3xl items-center gap-2 border">
                <Input
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyPress}
                  value={search}
                  placeholder="Search Products...."
                  className="w-full 2xl:w-full"
                  type="text"
                />
                <Select>
                  <SelectTrigger className="w-[180px] border-0 focus:ring-0">
                    <SelectValue placeholder="SELECT CATEGORY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 border rounded-none"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}

          <div className="hidden sm:block">
            <div className="flex items-center space-x-6">
              <div className="hidden md:block">
                <Link to={'/login'} className="text-sm font-bold">
                  LOGIN / REGISTER
                </Link>
              </div>

              <Link
                to="/cart"
                className="flex flex-col items-center gap-1 text-sm hover:text-foreground transition-colors relative"
              >
                <div className="relative">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-green-600 text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>

              <Link
                to="/cart"
                className="flex flex-col items-center gap-1 text-sm hover:text-foreground transition-colors relative"
              >
                <div className="relative">
                  <GitCompare className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-green-600 text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>

              <Link
                to="/cart"
                className="flex flex-col items-center gap-1 text-sm hover:text-foreground transition-colors relative"
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-green-600 text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>

              <div>
                <span className="text-sm">R0.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="container px-4 pb-4 lg:hidden">
          <div className="relative">
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
                value={search}
                placeholder="Search Products...."
                className="w-full mx-auto block"
                type="text"
              />
              <button className="inline-flex items-center bg-[#0aad0a] text-white rounded-none border border-input px-3 text-sm font-medium text-foreground outline-offset-2 transition-colors focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <Drawer
        content={
          <ul className="mt-10">
            {items.map(({ id, title, href }) => (
              <li key={id}>
                <Link
                  to={`/${href}`}
                  onClick={() => handleNavigation(href.toLowerCase())}
                  aria-label={`Go to ${title}`}
                  className="block font-light text-xl px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        }
        isOpen={open}
        width="250px"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
