import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const songData = [
  {
    id: 1,
    title: 'Pachamama Pachakamaq',
    audioFile: '/songs/pachamama-pachakamaq.m4a',
    image: '/images/IMG_2380.webp',
    description: 'This is our Convivium Sangha\'s version of a revered song honoring the life-giving forces of Pachamama and Pachakamaq. This globally loved song comes from Kike Pinto, a renowned Peruvian teacher, composer, ethnomusicologist, and cultural guardian who has spent his life learning, preserving, and sharing the musical languages of the Andes and Amazon.',
    link: 'https://institutotaki.com/kike-pinto-cardenas/',
    linkText: 'Learn more about Kike Pinto',
  },
  {
    id: 2,
    title: 'Cuñaq, rendition by the Convivium Sangha',
    audioFile: '/songs/cunaq.m4a',
    image: '/images/IMG_6210.webp',
    description: 'A hualina is a song channeled from the joy that comes when the waters arrive from the sacred mountains, having navigated a long serpentine journey through arroyos and valleys, to bring the blessing of life to our villages, crops, and gardens. Traditionally in Peru, hualinas are sung at an annual celebration called Champería, the festival of new water. This hualina was composed by Miguel Molina, and has spread all over the world in singing circles, as a celebration of the supreme life-giver: water. May this song inspire you to sing to your waters, wherever you may be residing!',
  },
  {
    id: 3,
    title: 'Violin Medley-Maestro Moon (Uniéndo by the Convivium Sangha)',
    audioFile: '/songs/violin-don.m4a',
    image: '/images/IMG_8172.webp',
    description: 'An enchanting violin journey weaving sacred melodies.',
  },
  {
    id: 4,
    title: 'White Buffalo Home',
    audioFile: '/songs/white-buffalo-home.m4a',
    image: '/images/IMG_2380.webp',
    description: 'Original song by Emily Bloom, performed by Emily Bloom.',
  },
];

function SongCard({ song, index }) {
  const accentColors = ['border-pink-light', 'border-gold1', 'border-pink-dark'];
  const dotColors = ['bg-pink-light', 'bg-gold1', 'bg-pink-dark'];
  const accentColor = accentColors[index % accentColors.length];
  const dotColor = dotColors[index % dotColors.length];

  // Render card with audio player for local files
  if (song.audioFile) {
    return (
      <div className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
        {/* Circular thumbnail */}
        <div className={`relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-2 ${accentColor} shadow-md`}>
          <Image
            src={song.image}
            alt={song.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="text-xl font-light text-neutral-900 mb-2">
            {song.title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            {song.description}
          </p>

          {/* External Link */}
          {song.link && (
            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-700 text-sm mb-4 inline-block"
            >
              {song.linkText || song.link}
            </a>
          )}

          {/* Audio Player */}
          <audio
            controls
            className="w-full h-10"
            preload="metadata"
          >
            <source src={song.audioFile} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }

  // Render card with external link for platform songs
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

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-warm-cream">
      <div className="py-32 px-6 bg-warm-beige">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
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

          {/* Song Cards Stack */}
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {songData.map((song, index) => (
              <ScrollReveal key={song.id} delay={index * 150}>
                <SongCard song={song} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
