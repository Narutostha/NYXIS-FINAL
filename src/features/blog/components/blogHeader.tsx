import Link from 'next/link';
import styles from './blogHeader.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Design', href: '/design' },
  { name: 'Creative', href: '/creative' },
];

export function BlogHeader() {
  const router = useRouter();
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/NYXIS.png"
            alt="NYXIS"
            width={40}
            height={40}
            className={styles.image}
          />
          <span className={styles.text}>NYXIS</span>
        </Link>

        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                styles.link,
                router.pathname === item.href && styles.active
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}