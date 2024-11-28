import {
  Menu,
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
import { Bell, User, Package, ShoppingCart } from 'lucide-react';

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

  interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    badge?: number;
    href: string;
  }

  function NavItem({ icon, label, badge, href }: NavItemProps) {
    return (
      <Link
        to={href}
        className="flex flex-col pt-2 items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors relative"
      >
        <div className="relative">
          {icon}
          {badge && (
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {badge}
            </span>
          )}
        </div>
        <span className="text-[13px]">{label}</span>
      </Link>
    );
  }

  return (
    <>
      <header className="w-full">
        <div className="w-full bg-[#0B6623] text-white h-11">
          <div className="container flex items-center justify-between py-3 px-24">
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
                  to="/"
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
        <div className="container flex items-center justify-between py-4 lg:px-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              alt="Chavda International Logo"
              className="h-7 lg:h-10 w-auto"
              loading="lazy"
              src="https://chavda.com/wp-content/uploads/2023/07/logo_chavda_w_g.png"
            />
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden flex-1 max-w-xl px-6 lg:block">
            <div className="relative">
              <div className="flex rounded-lg shadow-sm shadow-black/5">
                <Input
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyPress}
                  value={search}
                  className="w-full -me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                  placeholder="Search Products...."
                  type="text"
                />
                <button className="inline-flex items-center bg-[#0aad0a] text-white rounded-e-lg border border-input px-3 text-sm font-medium text-foreground outline-offset-2 transition-colors hover:bg-accent hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}

          <div className="hidden md:block mr-10">
            <nav className="flex justify-between gap-7 items-center">
              <NavItem
                href="/notifications"
                icon={<Bell className="w-5 h-5" />}
                label="Notification"
                badge={1}
              />
              <NavItem
                href="/signup"
                icon={<User className="w-5 h-5" />}
                label="Sign up"
              />
              <NavItem
                href="/orders"
                icon={<Package className="w-5 h-5" />}
                label="My Orders"
              />
              <NavItem
                href="/cart"
                icon={<ShoppingCart className="w-5 h-5" />}
                label="Shopping Cart"
              />
            </nav>
          </div>
          <Menu
            onClick={() => setOpen(true)}
            className="h-5 w-5 text-[#0B6623] md:hidden mr-4"
          />
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="container px-4 pb-4 lg:hidden">
          <div className="relative">
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
                value={search}
                className="w-full -me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                placeholder="Search Products...."
                type="text"
              />
              <button className="inline-flex items-center bg-[#0aad0a] text-white  rounded-e-lg border border-input px-3 text-sm font-medium text-foreground outline-offset-2 transition-colors hover:bg-accent hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50">
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
