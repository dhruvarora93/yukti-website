import { Title } from "@solidjs/meta";
import { A, createAsync, query } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { getAllBlogPosts } from "~/data/blog-posts";
import "../blog.css";

const getPosts = query(async () => {
  "use server";
  return getAllBlogPosts();
}, "blog-posts");

export const route = {
  load: () => getPosts(),
};

export default function Blog() {
  const posts = createAsync(() => getPosts());

  return (
    <div class="blog-container">
      <Title>Blog - Yukti</Title>

      <header class="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, tutorials, and insights on web development</p>
      </header>

      <Suspense fallback={<div class="loading">Loading posts...</div>}>
        <div class="blog-grid">
          <For each={posts()}>
            {(post) => (
              <article class="blog-card">
                <div class="blog-card-content">
                  <time class="blog-date">{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>

                  <h2 class="blog-card-title">
                    <A href={`/blog/${post.slug}`}>{post.title}</A>
                  </h2>

                  <p class="blog-excerpt">{post.excerpt}</p>

                  <div class="blog-meta">
                    <div class="blog-tags">
                      <For each={post.tags}>
                        {(tag) => <span class="blog-tag">{tag}</span>}
                      </For>
                    </div>
                  </div>

                  <A href={`/blog/${post.slug}`} class="blog-read-more">
                    Read more →
                  </A>
                </div>
              </article>
            )}
          </For>
        </div>
      </Suspense>
    </div>
  );
}
