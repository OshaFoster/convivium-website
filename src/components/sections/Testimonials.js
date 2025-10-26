import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote: "Linda's music creates a space for deep reflection and connection. It's truly transformative.",
    author: "Sarah M.",
  },
  {
    id: 2,
    quote: "A beautiful gathering of sound and soul. Each composition invites you to slow down and listen.",
    author: "David K.",
  },
  {
    id: 3,
    quote: "The contemplative soundscapes transport you to the vast desert landscapes that inspire them.",
    author: "Maria L.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-neutral-900 mb-4">
            What People Say
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 150}>
            <div
              className="bg-warm-cream p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-gold mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              {/* Quote */}
              <p className="text-neutral-700 text-base leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <p className="text-neutral-900 font-light text-sm">
                — {testimonial.author}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
