import {
  Search,
  ShoppingCart,
  Menu,
  User,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer } from '../ui/drawer';
import { handleNavigation } from '@/lib/utils';
import { useState } from 'react';

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
    { id: '4', title: 'REGISTER', href: 'register' },
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

  return (
    <>
      <header className="w-full">
        <div className="w-full bg-[#0B6623] text-white h-11">
          <div className="container flex items-center justify-between py-3 px-12">
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
                <Link className="text-sm hover:underline" to="/">
                  NEWSLETTER
                </Link>
                <div className="hidden md:block w-px h-4 bg-white/30" />
                <Link className="text-sm hover:underline" to="/">
                  CONTACT US
                </Link>
                <div className="hidden md:block w-px h-4 bg-white/30" />
                <Link className="text-sm hover:underline" to="/">
                  FAQS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container flex items-center justify-between py-4 lg:px-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              alt="Chavda International Logo"
              className="h-7 lg:h-10 w-auto"
              loading="lazy"
              src="https://chavda.com/wp-content/uploads/2023/07/logo_chavda_w_g.png"
            />
            {/* <div className="hidden md:block">
            <h1 className="text-xl font-bold">CHAVDA</h1>
            <p className="text-xs">INTERNATIONAL (PTY) LTD</p>
          </div> */}
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden flex-1 max-w-xl px-6 lg:block">
            <div className="relative">
              <Search className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground text-blue-500" />
              <Input
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
                value={search}
                className="w-full bg-[#f0f7f2] pl-8"
                placeholder="Search essentials, groceries and more..."
                type="search"
              />
            </div>
          </div>

          {/* Actions */}

          <div className="flex items-center space-x-4 mr-4 lg:mr-3">
            <div className="hidden md:block">
              <Link to={'/login'} className="flex items-center space-x-2">
                <User className=" text-[#0B6623] h-5 w-5" />
                <span className="text-sm ">Sign Up/Sign In</span>
              </Link>
            </div>
            <Link to="/cart" className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-[#0B6623]" />
              <span className="text-sm hidden md:block">Cart</span>
            </Link>
            <div>
              <Menu
                onClick={() => setOpen(true)}
                className="h-5 w-5 text-[#0B6623] md:hidden"
              />
            </div>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="container px-4 pb-4 lg:hidden">
          <div className="relative">
            <Search className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              value={search}
              className="w-full bg-[#f0f7f2] pl-8"
              placeholder="Search essentials, groceries and more..."
              type="search"
            />
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
