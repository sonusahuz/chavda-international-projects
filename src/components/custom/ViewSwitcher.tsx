'use client';

import { LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewSwitcherProps {
  view: 'grid' | 'list';
  columns: 9 | 12 | 18 | 24;
  onViewChange: (view: 'grid' | 'list') => void;
  onColumnsChange: (columns: 9 | 12 | 18 | 24) => void;
}

export function ViewSwitcher({
  view,
  columns,
  onViewChange,
  onColumnsChange,
}: ViewSwitcherProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Show:</span>
        {[9, 12, 18, 24].map((col) => (
          <Button
            key={col}
            variant="ghost"
            size="sm"
            className={columns === col ? 'text-[#006400]' : 'text-gray-500'}
            onClick={() => onColumnsChange(col as 9 | 12 | 18 | 24)}
          >
            {col}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className={view === 'list' ? 'text-[#006400]' : 'text-gray-500'}
          onClick={() => onViewChange('list')}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={view === 'grid' ? 'text-[#006400]' : 'text-gray-500'}
          onClick={() => onViewChange('grid')}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
