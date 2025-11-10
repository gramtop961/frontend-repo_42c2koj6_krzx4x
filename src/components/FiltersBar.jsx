import { SlidersHorizontal, Search } from 'lucide-react';

export default function FiltersBar({ onSearch }) {
  return (
    <div className="sticky top-0 z-10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-md px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 rounded-2xl bg-zinc-900 ring-1 ring-white/10 px-3 py-2 text-white">
            <Search size={18} className="text-white/70" />
            <input
              type="text"
              placeholder="Search courts or hosts"
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
            />
          </div>
          <button className="rounded-2xl bg-zinc-900 ring-1 ring-white/10 p-2 text-white" aria-label="Filters">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
