import pb from '~/lib/pocketbase';
import type { BlogPost } from '~/types/blog';

export type { BlogPost };

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  try {
    const record = await pb.collection('posts').getFirstListItem<BlogPost>(`slug="${slug}"`);
    return record;
  } catch {
    return undefined;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const records = await pb.collection('posts').getFullList<BlogPost>({
      sort: '-date',
    });
    return records;
  } catch {
    return [];
  }
}
