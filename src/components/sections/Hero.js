export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '90vh' }}>
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/IMG_1904.webp)',
        }}
      >
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pt-16 md:pr-48">
        <h1 className="mb-6 text-8xl font-normal md:text-9xl text-center" style={{ fontFamily: 'var(--font-smooch-sans)', color: '#90ee90', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
          pachamama<br />convivium
        </h1>
        <div className="max-w-2xl space-y-4 text-lg font-light md:text-xl backdrop-blur-[2px] p-6 rounded-2xl" style={{ fontFamily: 'var(--font-body)', color: '#fff5f0', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
          <p>
            <strong className="font-semibold">Pachamama:</strong> The space of nurturance of life on planet Earth — the atmospheric and earthen elements that promote vitality.
          </p>
          <p>
            <strong className="font-semibold">Convivium:</strong> A geographically isolated population of a species that shows differentiation from other populations of the same species. In our case, it is our carefully co-created Sangha — a feast, a celebration, a consortium of conviviality and fellowship on Earth.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #f6c156)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #f6c156, #f2b158)' }} />
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #f2b158)' }} />
        </div>
      </div>

      {/* Organic curved bottom transition */}
      <div className="absolute bottom-0 left-0 right-0" style={{ marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          {/* Fill shape */}
          <path
            d="M0,64 C360,110 720,110 1080,64 C1260,40 1350,20 1440,0 L1440,120 L0,120 Z"
            fill="#faf8f4"
          />
          {/* Top border only */}
          <path
            d="M0,64 C360,110 720,110 1080,64 C1260,40 1350,20 1440,0"
            stroke="#eb757f"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
