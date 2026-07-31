import { cn } from "@/lib/utils";
import type { BlockProps } from "./types";

export interface BentoCardItem {
  id: string;
  className?: string;
  content?: React.ReactNode;
}

interface BentoGridProps extends BlockProps {
  items?: BentoCardItem[];
}

const DEFAULT_ITEMS: BentoCardItem[] = [
  { id: "a", className: "col-span-3 row-span-3" },
  { id: "b", className: "col-span-2 row-span-5" },
  { id: "c", className: "col-span-3 row-span-2" },
];

export function BentoGrid({ items = DEFAULT_ITEMS, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid h-full w-full grid-cols-1 grid-rows-none gap-3 md:grid-cols-5 md:grid-rows-5 md:gap-4",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "min-h-0 min-w-0 rounded-[16px] bg-black/[0.05] md:col-span-1 md:row-span-1",
            item.className
          )}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
