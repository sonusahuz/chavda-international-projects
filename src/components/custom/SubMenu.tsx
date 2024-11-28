import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

type Items = {
  name: string;
  to: string;
};
const homemenu = [
  { name: 'Home Default', to: '/homemenu/web-development' },
  { name: 'Home Modern', to: '/homemenu/mobile-app-development' },
  { name: 'Home Creative', to: '/homemenu/ui-ux-design' },
  { name: 'Home Local Store', to: '/homemenu/cloud-homemenu' },
];

// Reusable NavigationMenu component
function NavigationSubMenu({
  title,
  items,
}: {
  title: string;
  items?: Items[];
}) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="py-4 px-2 text-black font-normal hover:text-green-500 transition duration-300">
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="gap-3 p-2 w-auto">
                {items?.map((item) => (
                  <li key={item.name}>
                    <NavigationMenuLink asChild className="w-[200px]">
                      <Link
                        to={item.to}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.name}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export function SubMenu() {
  return (
    <nav>
      <div className="px-4 md:px-24">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <NavigationSubMenu title="Home" items={homemenu} />
              <NavigationSubMenu title="Shop" items={homemenu} />
              <NavigationSubMenu title="Stores" items={homemenu} />
              <NavigationSubMenu title="Mega menu" items={homemenu} />
              <NavigationSubMenu title="Pages" items={homemenu} />
              <NavigationSubMenu title="Accounts" items={homemenu} />
              <NavigationSubMenu title="Docs" items={homemenu} />
              <div>
                <Link
                  to={'/dashboard'}
                  className="py-4 px-2 text-sm text-black font-normal hover:text-green-500 transition duration-300"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
