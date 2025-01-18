export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  image: string;
}

export interface TableOfContents {
  id: string;
  title: string;
  level: number;
}