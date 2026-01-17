export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-solidjs",
    title: "Getting Started with SolidJS",
    excerpt: "Learn the basics of SolidJS and why it's a great choice for building modern web applications.",
    content: `
# Getting Started with SolidJS

SolidJS is a declarative JavaScript library for building user interfaces. It emphasizes fine-grained reactivity and performance.

## Why SolidJS?

- **Performance**: No virtual DOM overhead
- **Simple**: Familiar JSX syntax
- **Reactive**: Fine-grained reactivity system
- **Small**: Minimal bundle size

## Getting Started

To create a new SolidJS project, you can use the starter templates available through the CLI:

\`\`\`bash
npm create solid@latest
\`\`\`

This will guide you through setting up a new project with your preferred configuration.

## Basic Component

Here's a simple example of a SolidJS component:

\`\`\`tsx
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);
  
  return (
    <button onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </button>
  );
}
\`\`\`

The reactivity is built-in and efficient, making SolidJS an excellent choice for any project size.
    `,
    date: "2026-01-15",
    author: "Yukti Team",
    tags: ["SolidJS", "Tutorial", "Getting Started"]
  },
  {
    id: "modern-web-development",
    title: "Modern Web Development in 2026",
    excerpt: "Exploring the latest trends and best practices in web development.",
    content: `
# Modern Web Development in 2026

The web development landscape continues to evolve rapidly. Let's explore what's shaping the industry today.

## Key Trends

### Performance First
Performance is no longer optional. Users expect instant load times and smooth interactions.

### Progressive Enhancement
Building applications that work everywhere and enhance based on capabilities.

### Type Safety
TypeScript and other type systems are becoming the standard for robust applications.

## Best Practices

1. **Optimize Assets**: Compress images, lazy load content
2. **Use Modern CSS**: Grid, Flexbox, Container Queries
3. **Accessibility**: WCAG compliance is essential
4. **Security**: Always validate input and use HTTPS

## Conclusion

Staying current with web development means continuously learning and adapting to new tools and techniques while maintaining focus on user experience.
    `,
    date: "2026-01-12",
    author: "Yukti Team",
    tags: ["Web Development", "Best Practices", "Trends"]
  },
  {
    id: "building-elegant-uis",
    title: "Building Elegant User Interfaces",
    excerpt: "Principles and techniques for creating beautiful, intuitive user interfaces.",
    content: `
# Building Elegant User Interfaces

Great UI design is about more than just aesthetics—it's about creating intuitive, delightful experiences.

## Core Principles

### Simplicity
Remove unnecessary elements. Every component should serve a purpose.

### Consistency
Use consistent spacing, colors, and typography throughout your application.

### Hierarchy
Guide users' attention with clear visual hierarchy using size, color, and spacing.

### Feedback
Always provide feedback for user actions—loading states, success messages, error handling.

## Typography

Good typography is the foundation of great design:

- Choose readable fonts
- Maintain consistent scale (1.2-1.5 ratio)
- Use proper line height (1.5-1.7 for body text)
- Limit line length (50-75 characters)

## Color

Use color purposefully:

- **Primary**: Brand identity and main actions
- **Secondary**: Supporting elements
- **Accent**: Highlights and calls-to-action
- **Neutral**: Backgrounds and text

## Spacing

Consistent spacing creates rhythm and balance. Use a spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px) for margins and padding.

## Conclusion

Elegant UI design is achieved through careful attention to detail and consistent application of fundamental principles.
    `,
    date: "2026-01-10",
    author: "Yukti Team",
    tags: ["UI Design", "UX", "Design Principles"]
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
