import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ViewSwitcher } from '@/components/custom/ViewSwitcher';

const FilterTopBar = ({
  view,
  columns,
  setView,
  setColumns,
  setSidebarOpen,
}: {
  view: 'grid' | 'list';
  columns: 9 | 12 | 18 | 24;
  setView: (view: 'grid' | 'list') => void;
  setColumns: (columns: 9 | 12 | 18 | 24) => void;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div className="flex flex-wrap flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
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

          <div className=" hidden lg:block">
            <Select defaultValue="popularity">
              <SelectTrigger className="lg:w-[180px] w-full">
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
      </div>
    </div>
  );
};

export default FilterTopBar;
