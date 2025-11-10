import { Users, MapPin, Clock, Phone } from 'lucide-react';

export default function GameCard({ game }) {
  const { court, date, startTime, duration, maxPlayers, format, status, contactVisible } = game;

  return (
    <div className="rounded-2xl bg-zinc-900 text-white p-4 shadow-xl ring-1 ring-white/5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#FFD600]">{court}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${
          status === 'OPEN' ? 'bg-emerald-500/20 text-emerald-300' :
          status === 'FULL' ? 'bg-orange-500/20 text-orange-300' :
          status === 'CANCELLED' ? 'bg-rose-500/20 text-rose-300' : 'bg-zinc-700 text-zinc-200'
        }`}>{status}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-zinc-300">
        <div className="flex items-center gap-2"><MapPin size={16} />{game.location || 'Nearby court'}</div>
        <div className="flex items-center gap-2"><Clock size={16} />{date} • {startTime} • {duration}m</div>
        <div className="flex items-center gap-2"><Users size={16} />{game.players?.length || 0}/{maxPlayers} • {format}</div>
        <div className="flex items-center gap-2"><Phone size={16} />{contactVisible ? 'Phone shared on accept' : 'Phone private'}</div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-xl bg-[#FFD600] text-black font-semibold py-2 active:scale-[0.99]">Request to Join</button>
        <button className="rounded-xl bg-zinc-800 px-3 py-2 text-sm">Details</button>
      </div>
    </div>
  );
}
