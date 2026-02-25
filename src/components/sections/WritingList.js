'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';

export default function WritingList({ posts = [] }) {
  return (
    <section className="py-32 px-6 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extralight tracking-tight mb-4" style={{ fontFamily: 'var(--font-smooch-sans)', color: '#0a729f' }}>
            Writing
          </h1>
          <p className="text-lg font-light text-neutral-600 max-w-2xl mx-auto">
            Reflections, teachings, and insights on living in reciprocity with the earth and each other.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-neutral-600 font-light">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <ScrollReveal key={post._id} delay={index * 150}>
              <article className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Featured Media (Image or Video) */}
                {post.mediaType === 'video' && post.videoUrl ? (
                  <div className="relative h-64 overflow-hidden bg-black">
                    <video
                      src={post.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                  </div>
                ) : post.image ? (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : null}

                {/* Content */}
                <div className="p-8">
                  {/* Date */}
                  <time className="text-sm text-neutral-500 font-light">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  {/* Title */}
                  <h2 className="text-2xl font-light text-neutral-900 mt-3 mb-4 group-hover:text-sky-600 transition-colors">
                    <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/writing/${post.slug}`}
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-light transition-colors group"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
