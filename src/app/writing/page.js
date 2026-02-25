import WritingList from '@/components/sections/WritingList';
import { getAllPosts } from '@/lib/sanity';

export const revalidate = 0;

export const metadata = {
  title: 'Writing - Pachamama Convivium',
  description: 'Reflections, teachings, and insights from Marie.',
};

export default async function WritingPage() {
  let posts = [];

  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return empty array so page still renders
  }

  return (
    <main>
      <WritingList posts={posts} />
    </main>
  );
}
