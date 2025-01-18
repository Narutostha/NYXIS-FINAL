import Link from 'next/link';
import styles from './blogFooter.module.scss';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '@/constants';

export function BlogFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
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
          <p className={styles.description}>
            Insights and stories from our team of designers and developers. 
            Stay updated with the latest trends in web design, development, 
            and creative technology.
          </p>
          <div className={styles.social}>
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li><Link href="/blog" className={styles.link}>Blog Home</Link></li>
            <li><Link href="/design" className={styles.link}>Design Services</Link></li>
            <li><Link href="/creative" className={styles.link}>Creative Services</Link></li>
            <li><Link href="/#contact" className={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3 className={styles.title}>Legal</h3>
          <ul className={styles.list}>
            <li><Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className={styles.link}>Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} NYXIS. All rights reserved.</p>
      </div>
    </footer>
  );
}