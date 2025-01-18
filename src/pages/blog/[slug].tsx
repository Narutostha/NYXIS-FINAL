import { BlogPost, TableOfContents } from "@/types/blog";
import { TableOfContents as TOC } from "@/features/blog/components/tableOfContents";
import { BlogHeader } from "@/features/blog/components/blogHeader";
import { BlogFooter } from "@/features/blog/components/blogFooter";
import styles from "./blogPost.module.scss";
import Image from "next/image";
import MetaData from "@/metadata";
import { metaData } from "@/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';

interface BlogPostPageProps {
  post: BlogPost;
  toc: TableOfContents[];
}

// Sample blog post data - In a real app, this would come from your CMS or API
const posts: BlogPost[] = [
  {
    id: "1",
    slug: "1",
    title: "Getting Started with Web Design: A Complete Guide",
    description: "Learn the fundamentals of web design and start creating beautiful websites today.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Web design is a crucial skill in today's digital world...</p>
      
      <h2 id="basics">The Basics</h2>
      <p>Before diving into web design, it's important to understand the fundamentals...</p>
      
      <h2 id="tools">Essential Tools</h2>
      <p>Having the right tools is essential for web design...</p>
      
      <h3 id="design-tools">Design Tools</h3>
      <p>Popular design tools include Figma, Adobe XD, and Sketch...</p>
      
      <h3 id="development-tools">Development Tools</h3>
      <p>For development, you'll need a good code editor and browser tools...</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Web design is an exciting field with endless possibilities...</p>
    `,
    author: {
      name: "Reyaham Shrestha",
      image: "/reyaham.jpg"
    },
    publishedAt: "2024-03-20",
    readingTime: "5 min read",
    category: "Web Design",
    image: "/NYXIS.png"
  },

  {
    id: "1",
    slug: "2",
    title: "Getting Started with Web Design: A Complete Guide",
    description: "Learn the fundamentals of web design and start creating beautiful websites today.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Web design is a crucial skill in today's digital world...</p>
      
      <h2 id="basics">The Basics</h2>
      <p>Before diving into web design, it's important to understand the fundamentals...</p>
      
      <h2 id="tools">Essential Tools</h2>
      <p>Having the right tools is essential for web design...</p>
      
      <h3 id="design-tools">Design Tools</h3>
      <p>Popular design tools include Figma, Adobe XD, and Sketch...</p>
      
      <h3 id="development-tools">Development Tools</h3>
      <p>For development, you'll need a good code editor and browser tools...</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Web design is an exciting field with endless possibilities...</p>
    `,
    author: {
      name: "Reyaham Shrestha",
      image: "/reyaham.jpg"
    },
    publishedAt: "2024-03-20",
    readingTime: "5 min read",
    category: "Web Design",
    image: "/NYXIS.png"
  },
];

export default function BlogPostPage({ post, toc }: BlogPostPageProps) {
  const router = useRouter();

  // Show loading state while page is being generated
  if (router.isFallback) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Handle 404 case
  if (!post) {
    return (
      <>
        <BlogHeader />
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <BlogFooter />
      </>
    );
  }

  return (
    <>
      <MetaData
        data={{
          ...metaData.home,
          title: `${post.title} | NYXIS Blog`,
          description: post.description,
          image: post.image,
        }}
      />
      <BlogHeader />
      <article className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <div className={styles.author}>
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className={styles.authorImage}
                />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{post.author.name}</span>
                  <time className={styles.date}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
              <span className={styles.readTime}>{post.readingTime}</span>
            </div>
          </header>

          <div className={styles.imageContainer}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.mainContent}>
            <div
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <aside className={styles.sidebar}>
          <TOC toc={toc} />
        </aside>
      </article>
      <BlogFooter />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { 
    paths,
    fallback: true // Enable fallback for new posts
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = posts.find((p) => p.slug === params?.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    // Generate table of contents from the content
    const toc: TableOfContents[] = [];
    const regex = /<h([2-3]) id="([^"]+)">([^<]+)<\/h[2-3]>/g;
    let match;

    while ((match = regex.exec(post.content)) !== null) {
      toc.push({
        level: parseInt(match[1]),
        id: match[2],
        title: match[3],
      });
    }

    return {
      props: {
        post,
        toc,
      },
      revalidate: 60 // Revalidate every minute
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}