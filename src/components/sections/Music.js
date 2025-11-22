import ScrollReveal from '@/components/ScrollReveal';

export default function Music() {
  return (
    <section id="music" className="py-32 px-6 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight mb-4" style={{ color: '#0a729f' }}>
            Singing to Sacred Landscapes
          </h2>
          <p className="text-xl font-light text-neutral-600 max-w-2xl mx-auto">
            This tune was gifted to me while hiking near a location with ancient art and undulating crystal-laden rock structures. It is called Pachakunata Wasichay—Building Worlds.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>

        {/* Centered Video Player */}
        <ScrollReveal>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <video
                controls
                className="w-full rounded-lg shadow-xl"
                preload="metadata"
              >
                <source src="https://iujb84v0ejq8dzag.public.blob.vercel-storage.com/pachakunata-wasichay_8ydMKWrR.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
