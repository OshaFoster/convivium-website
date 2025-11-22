import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote: "I was warmly welcomed into a space of healing and community by Marie. My husband made the connection, and from that first meeting it was undeniably clearly that Marie has an uplifting presence. She uses her gifts and studies to create a sacred container that leads with love and light. I have enjoyed spending time with Marie around her home, during a music festival, and on trails with her beloved dogs, her insights and outlook on life are valuable and relatable.",
    author: "Danielle, photographer",
  },
  {
    id: 2,
    quote: "Marie Luna is a magical being, one of a kind. She has lived many lives, and she reminds me of what it means to be human and to be in community. When I am around her, I can feel my heart ache for the old ways—for a life filled with relationships of reciprocity with plants, animals, loved ones, land, and beyond. After I spend time with Marie, I find myself living in a more mindful rhythm, showing up with an open heart in my relationships, and noticing all the preciousness and beauty and blessings around me. Marie constantly redirects my attention to the collective and how to align myself, with joy and humor, in service. I am so grateful for Marie Luna.",
    author: "Emily, bodyworker",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight mb-4" style={{ color: '#0a729f' }}>
            What People Say
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 150}>
            <div
              className="bg-warm-cream p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 mb-4"
                fill="#0a729f"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              {/* Quote */}
              <p className="text-neutral-700 text-base leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
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
