import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Create the Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01', // Use current date in YYYY-MM-DD format
  useCdn: false,
});

// Helper function to generate image URLs
const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// GROQ query helpers for blog posts
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    excerpt,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    videoUrl,
    mediaType
  }`;

  return await client.fetch(query);
}

export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    excerpt,
    content,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    videoUrl,
    mediaType
  }`;

  return await client.fetch(query, { slug });
}

// Get all slugs for static generation
export async function getAllPostSlugs() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  return await client.fetch(query);
}
