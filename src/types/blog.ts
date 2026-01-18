import type { RecordModel } from 'pocketbase';

export interface BlogPost extends RecordModel {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}
