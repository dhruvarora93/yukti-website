import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { For } from "solid-js";
import { getAllBlogPosts } from "~/data/blog-posts";
import "../blog.css";

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div class="blog-container">
      <Title>Blog - Yukti</Title>

      <header class="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, tutorials, and insights on web development</p>
      </header>

      <div class="blog-grid">
        <For each={posts}>
          {(post) => (
            <article class="blog-card">
              <div class="blog-card-content">
                <time class="blog-date">{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>

                <h2 class="blog-card-title">
                  <A href={`/blog/${post.id}`}>{post.title}</A>
                </h2>

                <p class="blog-excerpt">{post.excerpt}</p>

                <div class="blog-meta">
                  <span class="blog-author">{post.author}</span>
                  <div class="blog-tags">
                    <For each={post.tags}>
                      {(tag) => <span class="blog-tag">{tag}</span>}
                    </For>
                  </div>
                </div>

                <A href={`/blog/${post.id}`} class="blog-read-more">
                  Read more →
                </A>
              </div>
            </article>
          )}
        </For>
      </div>
    </div>
  );
}
