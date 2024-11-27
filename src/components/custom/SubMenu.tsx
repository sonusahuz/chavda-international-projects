import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const homeItems = [
  { title: 'Home Default', href: '#' },
  { title: 'Home Modern', href: '#' },
  { title: 'Home Creative', href: '#' },
  { title: 'Home Local Store', href: '#' },
  { title: 'Home Minimalist', href: '#' },
];

const shopItems = [
  { title: 'All Products', href: '#' },
  { title: 'Featured', href: '#' },
  { title: 'New Arrivals', href: '#' },
  { title: 'Best Sellers', href: '#' },
];

const storesItems = [
  { title: 'Find a Store', href: '#' },
  { title: 'Store Locator', href: '#' },
  { title: 'Store Details', href: '#' },
];

export function MainNav() {
  return (
    <NavigationMenu className="px-4 md:px-20 hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <button className="px-4 py-2">All Categories</button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              {homeItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              {shopItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Stores</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              {storesItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
