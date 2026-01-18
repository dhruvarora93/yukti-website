import { Title } from "@solidjs/meta";
import { A, useParams, createAsync, query } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { getBlogPost } from "~/data/blog-posts";
import "../blog.css";

const getPost = query(async (slug: string) => {
  "use server";
  return getBlogPost(slug);
}, "blog-post");

export const route = {
  load: ({ params }: { params: { slug: string } }) => getPost(params.slug),
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = createAsync(() => getPost(params.slug));

  return (
    <div class="blog-post-container">
      <Suspense fallback={<div class="loading">Loading post...</div>}>
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
                    <div class="blog-post-tags">
                      {p().tags.map((tag) => (
                        <span class="blog-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </header>

                <div
                  class="blog-post-content"
                  innerHTML={p().content}
                />
              </article>
            </>
          )}
        </Show>
      </Suspense>
    </div>
  );
}

