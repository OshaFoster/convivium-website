import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    id: 5,
    quote: "Marie's orchestrations precipitated a dramatic shift in my own teaching process. I've been leading group music classes my entire adult life (and I'm pushing 60!). Her breadth of knowledge and experience are formidable. She listens and dances in spontaneity, navigating energetic flow in song and prayer for Mother Earth and the Cosmos, teaching reciprocity and kindness towards self and others that inspires me, helping me become a better conduit for guiding others to realize their authentic selves, sharing music together in a safe space. Marie models dropping labels and concepts, fluidly serving the moment in whatever particular ways are truly needed. The sound of her voice sings with childlike innocence and speaks from the depths of elder wisdom, never passing up an opportunity for fun and laughter. O beautiful soul is she! In loving gratitude!",
    author: "Khabu",
  },
  {
    id: 3,
    quote: "Marie Luna brings guidance with honor, humbleness and competence, drawing from decades of work, dedication, and studies. To work with her is a profound experience that will drive you into mystical and magical worlds, and show you your true self, with no veils or excuses. Her songs take you into the open space and time that you didn't know you were seeking, and her humor will ground in the most lovely and caring way. In her practice, kindness and rigor, joy and discipline, focus and freedom are in a harmonious balance to provide the safest possible experience.",
    author: "Elena, singer, educator",
  },
  {
    id: 2,
    quote: "Marie Luna is a magical being, one of a kind. She has lived many lives, and she reminds me of what it means to be human and to be in community. When I am around her, I can feel my heart ache for the old ways—for a life filled with relationships of reciprocity with plants, animals, loved ones, land, and beyond. After I spend time with Marie, I find myself living in a more mindful rhythm, showing up with an open heart in my relationships, and noticing all the preciousness and beauty and blessings around me. Marie constantly redirects my attention to the collective and how to align myself, with joy and humor, in service. I am so grateful for Marie Luna.",
    author: "Emily, bodyworker",
  },
  {
    id: 4,
    quote: "Marie's gatherings have always provided me sincere spaces of warmth, safety, and heartfelt welcome. From my very first experience fifteen years ago, I felt the depth of her care in every detail— from the first welcome, to the thoughtful organization, the intentional curation of activities and songs, the reverence, and the nourishment offered through food and prayer. Marie creates an environment where people of all ages, beliefs, and backgrounds feel seen and at ease. Her events are not only well-run; they are crafted with a level of warmth, integrity, and quiet mastery that leaves a lasting imprint. The community and sense of belonging she fosters continue to resonate in my life and today. Thank you Marie.",
    author: "Scott",
  },
  {
    id: 1,
    quote: "I was warmly welcomed into a space of healing and community by Marie. My husband made the connection, and from that first meeting it was undeniably clearly that Marie has an uplifting presence. She uses her gifts and studies to create a sacred container that leads with love and light. I have enjoyed spending time with Marie around her home, during a music festival, and on trails with her beloved dogs, her insights and outlook on life are valuable and relatable.",
    author: "Danielle, photographer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight mb-4" style={{ fontFamily: 'var(--font-smooch-sans)', color: '#0a729f' }}>
            What People Say
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isLast = index === testimonials.length - 1;
            const isOddTotal = testimonials.length % 2 !== 0;
            const colClass = isLast && isOddTotal ? 'md:col-start-2 md:col-span-2' : 'md:col-span-2';
            return (
              <ScrollReveal key={testimonial.id} delay={index * 150} className={colClass}>
                <div className="bg-warm-cream p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 mb-4" fill="#0a729f" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  {/* Quote */}
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <p className="text-neutral-900 font-light text-sm">
                    — {testimonial.author}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
