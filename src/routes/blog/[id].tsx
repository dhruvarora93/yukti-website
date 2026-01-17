import { Title } from "@solidjs/meta";
import { A, useParams } from "@solidjs/router";
import { Show, createMemo } from "solid-js";
import { getBlogPost } from "~/data/blog-posts";
import "../blog.css";

export default function BlogPost() {
  const params = useParams();
  const post = createMemo(() => params.id ? getBlogPost(params.id) : undefined);

  return (
    <div class="blog-post-container">
      <Show
        when={post()}
        fallback={
          <div class="blog-not-found">
            <Title>Post Not Found</Title>
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <A href="/blog" class="back-to-blog">← Back to Blog</A>
          </div>
        }
      >
        {(p) => (
          <>
            <Title>{p().title} - Yukti Blog</Title>

            <A href="/blog" class="back-to-blog">← Back to Blog</A>

            <article class="blog-post">
              <header class="blog-post-header">
                <time class="blog-post-date">
                  {new Date(p().date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>

                <h1>{p().title}</h1>

                <div class="blog-post-meta">
                  <span class="blog-post-author">By {p().author}</span>
                  <div class="blog-post-tags">
                    {p().tags.map((tag) => (
                      <span class="blog-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </header>

              <div
                class="blog-post-content"
                innerHTML={formatMarkdown(p().content)}
              />
            </article>
          </>
        )}
      </Show>
    </div>
  );
}

// Simple markdown-to-HTML converter for basic formatting
function formatMarkdown(markdown: string): string {
  let html = markdown;

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Lists
  html = html.replace(/^\- (.*)$/gim, '<li>$1</li>');
  html = html.replace(/^\d+\. (.*)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p>\s*<(h[1-6]|pre|ul)>/g, '<$1>');
  html = html.replace(/<\/(h[1-6]|pre|ul)>\s*<\/p>/g, '</$1>');

  return html;
}
