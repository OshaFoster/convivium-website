import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <section className="py-32 px-6 bg-warm-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <ScrollReveal delay={0}>
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-xl border-4 border-gold1/30 mx-auto">
            <Image
              src="/images/about1.jpeg"
              alt="Marie"
              fill
              className="object-cover object-top"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>
          {/* Accent circle */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={200}>
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b rounded-full" style={{ backgroundImage: 'linear-gradient(to bottom, #8bc785, transparent)' }}></div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight mb-3" style={{ color: '#0a729f' }}>
              Marie
            </h2>
          </div>

          <div className="space-y-5 text-lg text-neutral-800 leading-relaxed font-light">
            <p>
              I am a hunter gatherer of wisdoms, anchoring ways of thriving with Pachamama and the realms of existence.
            </p>
            <p>
              I curate online and in-person gatherings for sharing meaningful ritual according to ancient meaningful calendars. We promote healing music, sacred language acquisition, herbal remedies, fungal potentiators, plant medicines, and wholistic cooking.
            </p>
          </div>

          {/* Accent line */}
          <div className="pt-2 flex items-center gap-2">
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold1 to-gold2 rounded-full"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold1"></div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
