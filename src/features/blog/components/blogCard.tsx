import { BlogPost } from "@/types/blog";
import styles from "./blogCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{post.category}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.meta}>
          <div className={styles.author}>
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={24}
              height={24}
              className={styles.authorImage}
            />
            <span className={styles.authorName}>{post.author.name}</span>
          </div>
          <span className={styles.date}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className={styles.readTime}>{post.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}