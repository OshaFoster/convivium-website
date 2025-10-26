import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const songData = [
  {
    id: 1,
    title: 'Desert Meditation',
    platform: 'SoundCloud',
    url: '#',
    image: '/images/IMG_2380.png',
    description: 'A contemplative journey through vast desert landscapes, inviting stillness and reflection.',
  },
  {
    id: 2,
    title: 'Canyon Echoes',
    platform: 'Bandcamp',
    url: '#',
    image: '/images/IMG_6210.png',
    description: 'Resonant soundscapes inspired by the echoing walls of ancient canyon formations.',
  },
  {
    id: 3,
    title: 'Convivial Gathering',
    platform: 'SoundCloud',
    url: '#',
    image: '/images/IMG_8172.png',
    description: 'An invitation to communal experience through sound, where music becomes shared fellowship.',
  },
];

function SongCard({ song, index }) {
  const accentColors = ['border-pink-light', 'border-gold1', 'border-pink-dark'];
  const dotColors = ['bg-pink-light', 'bg-gold1', 'bg-pink-dark'];
  const accentColor = accentColors[index % accentColors.length];
  const dotColor = dotColors[index % dotColors.length];

  return (
    <Link
      href={song.url}
      className="group flex gap-6 items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Circular thumbnail */}
      <div className={`relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-2 ${accentColor} shadow-md`}>
        <Image
          src={song.image}
          alt={song.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-xl font-light text-neutral-900 group-hover:text-sky-600 transition-colors mb-2">
          {song.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-3">
          {song.description}
        </p>
        <div className="flex items-center gap-2 text-neutral-500 text-xs">
          <span className={`inline-block w-2 h-2 ${dotColor} rounded-full`}></span>
          Listen on {song.platform}
        </div>
      </div>
    </Link>
  );
}

export default function Music() {
  return (
    <section id="music" className="py-32 px-6 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-neutral-900 mb-4">
            Listen
          </h2>
          <p className="text-xl font-light text-neutral-600 max-w-2xl mx-auto">
            Explore soundscapes that invite reflection and connection
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>

        {/* Song Cards Stack */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {songData.map((song, index) => (
            <ScrollReveal key={song.id} delay={index * 150}>
              <SongCard song={song} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
