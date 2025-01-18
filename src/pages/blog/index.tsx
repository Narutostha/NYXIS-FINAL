import { BlogPost } from "@/types/blog";
import { BlogCard } from "@/features/blog/components/blogCard";
import { BlogHeader } from "@/features/blog/components/blogHeader";
import { BlogFooter } from "@/features/blog/components/blogFooter";
import styles from "./blog.module.scss";
import MetaData from "@/metadata";
import { metaData } from "@/constants";

// This would normally come from your API or CMS
const posts: BlogPost[] = [
  {
    id: "1",
    slug: "1",
    title: "Getting Started with Web Design: A Complete Guide",
    description: "Learn the fundamentals of web design and start creating beautiful websites today.",
    content: "Full content here...",
    author: {
      name: "Reyaham Shrestha",
      image: "/reyaham.jpg"
    },
    publishedAt: "2024-03-20",
    readingTime: "5 min read",
    category: "Web Design",
    image: "/blog1.jpg"
  },
  {
    id: "2",
    slug: "2",
    title: "Check",
    description: "Learn the fundamentals of web design and start creating beautiful websites today.",
    content: "Full content here...",
    author: {
      name: "Reyaham Shrestha",
      image: "/reyaham.jpg"
    },
    publishedAt: "2024-03-20",
    readingTime: "5 min read",
    category: "Web Design",
    image: "/blog1.jpg"
  },
  // Add more blog posts...
];

export default function BlogPage() {
  return (
    <>
      <MetaData
        data={{
          ...metaData.home,
          title: "Blog | NYXIS",
          description: "Explore our latest articles about web design, development, and creative insights."
        }}
      />
      <BlogHeader />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Blog</h1>
          <p className={styles.description}>
            Insights and stories from our team of designers and developers
          </p>
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <BlogFooter />
    </>
  );
}