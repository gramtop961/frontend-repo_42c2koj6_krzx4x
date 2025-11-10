import { Bolt, User } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="sticky bottom-4 left-0 right-0 z-20">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-2xl bg-zinc-900/90 backdrop-blur border border-white/10 text-white shadow-2xl">
          <div className="grid grid-cols-2">
            <button className="flex items-center justify-center gap-2 py-3 font-medium text-[#FFD600]">
              <Bolt size={18} /> Games
            </button>
            <button className="flex items-center justify-center gap-2 py-3 font-medium text-white/80">
              <User size={18} /> Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
