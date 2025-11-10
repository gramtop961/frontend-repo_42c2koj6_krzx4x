import { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import FiltersBar from './components/FiltersBar';
import GameCard from './components/GameCard';
import NavBar from './components/NavBar';

const sampleGames = [
  {
    id: 'g1',
    court: 'SmashZone Court 3',
    location: 'HSR Layout',
    date: 'Today',
    startTime: '7:00 PM',
    duration: 90,
    maxPlayers: 4,
    format: 'Doubles',
    status: 'OPEN',
    contactVisible: true,
    players: [{ id: 'u1' }, { id: 'u2' }],
  },
  {
    id: 'g2',
    court: 'FeatherHub Arena',
    location: 'Indiranagar',
    date: 'Tomorrow',
    startTime: '6:30 AM',
    duration: 60,
    maxPlayers: 2,
    format: 'Singles',
    status: 'OPEN',
    contactVisible: false,
    players: [{ id: 'u3' }],
  },
];

export default function App() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleGames;
    return sampleGames.filter((g) =>
      [g.court, g.location, g.format].some((v) => String(v).toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen w-full bg-black">
      <HeroCover />
      <FiltersBar onSearch={setQuery} />

      <main className="mx-auto max-w-md px-4 pb-28 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-white font-semibold">Upcoming Games</h2>
          <span className="text-xs text-zinc-400">Asia/Kolkata</span>
        </div>

        <div className="grid gap-4">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <button className="fixed right-4 bottom-24 z-20 rounded-full bg-[#FFD600] text-black font-bold shadow-xl px-5 py-3">
          + Host Game
        </button>
      </main>

      <NavBar />
    </div>
  );
}
