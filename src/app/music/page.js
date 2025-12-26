export default function MusicPage() {
  return (
    <main className="min-h-screen bg-warm-cream">
      <div className="py-32 px-6 bg-warm-beige">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-4" style={{ fontFamily: 'var(--font-smooch-sans)', color: '#0a729f' }}>
              Listen
            </h1>
            <p className="text-xl font-light text-neutral-600 max-w-2xl mx-auto">
              Explore soundscapes that invite reflection and connection
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
            </div>
          </div>

          {/* SoundCloud Player */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-371113205&color=%23d4af37&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
                title="SoundCloud Player"
              />
            </div>

            {/* Link to SoundCloud Profile */}
            <div className="text-center mt-6">
              <a
                href="https://soundcloud.com/user-371113205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 transition-colors text-sm"
              >
                Visit SoundCloud Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
