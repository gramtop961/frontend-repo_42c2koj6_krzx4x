import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="h-72 sm:h-96 w-full">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>
      <div className="absolute inset-x-0 bottom-3 px-4">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#FFD600] drop-shadow-sm">
            Flash Sports Arena
          </h1>
          <p className="mt-1 text-sm text-white/80">
            Host or join badminton games around you.
          </p>
        </div>
      </div>
    </section>
  );
}
