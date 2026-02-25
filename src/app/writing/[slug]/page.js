import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getPostBySlug, getAllPostSlugs } from '@/lib/sanity';

export const revalidate = 0;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Pachamama Convivium',
    };
  }

  return {
    title: `${post.title} - Pachamama Convivium`,
    description: post.excerpt,
  };
}

// Custom components for Portable Text rendering
const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 font-light text-lg leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-light mt-12 mb-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-light mt-10 mb-5">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="text-sky-600 hover:text-sky-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen py-32 px-6 bg-warm-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-8">Post Not Found</h1>
          <Link href="/writing" className="text-sky-600 hover:text-sky-700">
            ← Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-warm-cream">
      {/* Hero Media (Image or Video) */}
      {post.mediaType === 'video' && post.videoUrl ? (
        <div className="relative h-96 md:h-[500px] bg-black">
          <video
            src={post.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-cream"></div>
        </div>
      ) : null}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-16 pt-0">
        {/* Hero Image */}
        {post.image && !(post.mediaType === 'video' && post.videoUrl) && (
          <div className="relative h-96 md:h-[480px] mb-10">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-warm-cream"></div>
          </div>
        )}

        {/* Back Link */}
        <Link
          href="/writing"
          className="inline-flex items-center text-neutral-600 hover:text-sky-600 transition-colors mb-8 font-light"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Writing
        </Link>

        {/* Date */}
        <time className="block text-sm text-neutral-500 font-light mb-2">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        {/* Title */}
        <h1
          className="text-5xl md:text-6xl font-extralight tracking-tight mt-4 mb-12"
          style={{ fontFamily: 'var(--font-smooch-sans)', color: '#0a729f' }}
        >
          {post.title}
        </h1>

        {/* Content - Render Portable Text */}
        <div className="blog-content prose prose-lg max-w-none text-neutral-700">
          <PortableText value={post.content} components={portableTextComponents} />
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 flex items-center justify-center gap-3">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold max-w-md"></div>
          <div className="w-2 h-2 rounded-full bg-gold"></div>
          <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold max-w-md"></div>
        </div>

        {/* Back to Writing Link */}
        <div className="text-center mt-12">
          <Link
            href="/writing"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-light transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            View all writing
          </Link>
        </div>
      </div>
    </article>
  );
}
