import ScrollReveal from '@/components/ScrollReveal';
import PhotoMontage from '@/components/PhotoMontage';

// Select images for the montage from gallery folder - all 18 images
const montageImages = [
  { src: '/images/gallery/about1.webp', alt: 'Marie' },
  { src: '/images/gallery/15B4FA56-27CE-444E-91F9-912B8F2C843F_1_102_a.webp', alt: 'Gallery image' },
  { src: '/images/gallery/23FA1726-4C9D-44A2-B802-E4C8FBC2EF6E_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/28490673-0199-414C-9E83-1D0E91501307_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/286FD914-379C-4373-831A-6FB1EB664642_1_201_a.webp', alt: 'Gallery image' },
  { src: '/images/gallery/38426A96-2F21-4806-A5CD-AA8977558528_1_201_a.webp', alt: 'Gallery image' },
  { src: '/images/gallery/48FCAB53-BF09-4B55-9660-54BA848A1849_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/49F7CA55-26E9-4D88-A558-5720880D3716_1_201_a.webp', alt: 'Gallery image' },
  { src: '/images/gallery/4EBAF7B2-A937-4F7F-81A9-8C0AA26F29D9_4_5005_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/5154938A-5084-45EA-B1BB-56C2C3653756_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/92FE85A0-E204-4491-9E0F-E9DA637DE9FE_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/974C99A3-56F2-4A1F-BABB-33D84A70F15A_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/A7E959F2-9E49-43A1-8A17-33DC62FA252B_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/BD57C58F-72B9-4EE4-AD9B-22B707B9A010_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/C065E4EA-2D15-41FF-B172-390666CE9192_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/CB898026-A6A3-494B-9649-19B4E026A9F9_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/E4A8C164-391D-4507-9E7B-8EADCEEB0960_1_105_c.webp', alt: 'Gallery image' },
  { src: '/images/gallery/F0A8AE83-BCCA-418F-8A4F-9CD1E44B8B6F_1_105_c.webp', alt: 'Gallery image' },
];

export default function About() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-warm-cream">
      {/* Photo Montage Background - Full Section */}
      <PhotoMontage images={montageImages} className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-[600px] flex items-end justify-end pb-12 pr-8">
        {/* Content - With background - ~200px tall, wide enough for text */}
        <ScrollReveal delay={200}>
        <div className="backdrop-blur-md px-8 py-8 rounded-xl shadow-lg border border-white/30 max-w-2xl" style={{ backgroundColor: 'rgba(250, 248, 245, 0.4)' }}>
          <div className="relative mb-3">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-14 bg-gradient-to-b rounded-full" style={{ backgroundImage: 'linear-gradient(to bottom, #8bc785, transparent)' }}></div>
            <h2 className="text-4xl font-extralight tracking-tight" style={{ color: '#0a729f' }}>
              Marie
            </h2>
          </div>

          <div className="space-y-3 text-base text-neutral-800 leading-relaxed font-light">
            <p>
              I am a hunter gatherer of wisdoms, anchoring ways of thriving with Pachamama and the realms of existence.
            </p>
            <p>
              I curate online and in-person gatherings for sharing meaningful ritual according to ancient calendars. We promote healing music, sacred language acquisition, herbal remedies, fungal potentiators, plant medicines, and wholistic cooking.
            </p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
