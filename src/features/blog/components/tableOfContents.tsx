import { TableOfContents as TOC } from "@/types/blog";
import styles from "./tableOfContents.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { FaChevronDown } from 'react-icons/fa';

interface TableOfContentsProps {
  toc: TOC[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    toc.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop TOC */}
      <nav className={styles.toc} aria-label="Table of contents">
        <h2 className={styles.title}>Table of Contents</h2>
        <ul className={styles.list}>
          {toc.map((heading) => (
            <li key={heading.id}>
              <a
                onClick={() => handleClick(heading.id)}
                className={classNames(
                  styles.link,
                  styles[`level${heading.level}`],
                  activeId === heading.id && styles.active
                )}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile TOC */}
      <nav className={styles.mobileToc} aria-label="Table of contents">
        <h2 
          className={styles.mobileTitle}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          Table of Contents
          <FaChevronDown 
            className={classNames(
              styles.icon,
              isMobileOpen && styles.open
            )} 
          />
        </h2>
        <ul className={classNames(
          styles.mobileList,
          isMobileOpen && styles.open
        )}>
          {toc.map((heading) => (
            <li key={heading.id}>
              <a
                onClick={() => handleClick(heading.id)}
                className={classNames(
                  styles.mobileLink,
                  styles[`level${heading.level}`],
                  activeId === heading.id && styles.active
                )}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}