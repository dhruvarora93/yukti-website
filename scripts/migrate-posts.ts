import PocketBase from 'pocketbase';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const pb = new PocketBase('http://127.0.0.1:8090');

// Your existing blog posts data
const existingPosts = [
  {
    slug: "getting-started-with-solidjs",
    title: "Getting Started with SolidJS",
    excerpt: "Learn the basics of SolidJS and why it's a great choice for building modern web applications.",
    content: `# Getting Started with SolidJS

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

The reactivity is built-in and efficient, making SolidJS an excellent choice for any project size.`,
    date: "2026-01-15",

    tags: ["SolidJS", "Tutorial", "Getting Started"]
  },
  {
    slug: "modern-web-development",
    title: "Modern Web Development in 2026",
    excerpt: "Exploring the latest trends and best practices in web development.",
    content: `# Modern Web Development in 2026

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

Staying current with web development means continuously learning and adapting to new tools and techniques while maintaining focus on user experience.`,
    date: "2026-01-12",

    tags: ["Web Development", "Best Practices", "Trends"]
  },
  {
    slug: "building-elegant-uis",
    title: "Building Elegant User Interfaces",
    excerpt: "Principles and techniques for creating beautiful, intuitive user interfaces.",
    content: `# Building Elegant User Interfaces

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

Elegant UI design is achieved through careful attention to detail and consistent application of fundamental principles.`,
    date: "2026-01-10",

    tags: ["UI Design", "UX", "Design Principles"]
  }
];

async function migrate() {
  // Get admin credentials from environment or prompt
  const adminEmail = process.env.PB_ADMIN_EMAIL;
  const adminPassword = process.env.PB_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error('Please set PB_ADMIN_EMAIL and PB_ADMIN_PASSWORD environment variables');
    console.log('\nRun with:');
    console.log('PB_ADMIN_EMAIL=your@email.com PB_ADMIN_PASSWORD=yourpassword npx tsx scripts/migrate-posts.ts');
    process.exit(1);
  }

  console.log('Authenticating as admin...');
  await pb.admins.authWithPassword(adminEmail, adminPassword);
  console.log('Authenticated!\n');

  console.log('Starting migration...\n');

  for (const post of existingPosts) {
    try {
      await pb.collection('posts').create(post);
      console.log(`✓ Created: ${post.title}`);
    } catch (error) {
      console.error(`✗ Failed to create "${post.title}":`, error);
    }
  }

  console.log('\nMigration complete!');
}

migrate();
