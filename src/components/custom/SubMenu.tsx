import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const links = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT US', to: '/about-us' },
  { name: 'SHOP', to: '/shop' },
  { name: 'BRANDS', to: '/brands' },
  { name: 'CONTACT US', to: '/contact-us' },
  { name: 'SHARPENING SERVICE', to: '/sharpening-service' },
  { name: 'DASHBOARD', to: '/dashboard' },
];

export function SubMenu() {
  return (
    <div className="hidden md:block">
      <nav className="px-4 border h-12 md:px-5 lg:px-10 xl:px-24 mb-2 mx-auto flex items-center justify-center xl:justify-start">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Button className="bg-green-800 text-white h-12">
                <Select>
                  <SelectTrigger className="w-[180px] border-0 focus:ring-0">
                    <SelectValue placeholder=" BROWSE CATEGORIES" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Power Tools</SelectItem>
                    <SelectItem value="clothing">
                      Catering & Commercial
                    </SelectItem>
                    <SelectItem value="books">Electrical Equipment</SelectItem>
                    <SelectItem value="home">Hand Tools</SelectItem>
                    <SelectItem value="home">Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </Button>

              {links.map((item) => (
                <Link
                  to={item.to}
                  className="py-4 px-2 text-xs text-black font-semibold hover:text-green-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
