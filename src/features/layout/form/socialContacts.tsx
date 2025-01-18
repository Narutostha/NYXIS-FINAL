import styles from "./form.module.scss";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface SocialContactsProps {
  color: "--ez-orange" | "--adobe-purple";
}

export default function SocialContacts({ color }: SocialContactsProps) {
  const socials = [
    { 
      Icon: FaEnvelope,
      link: "mailto:contact@nyxis.com",
      label: "Email",
      subtext: "Connect on Email"
    },
    {
      Icon: FaFacebookF,
      link: "https://www.facebook.com/profile.php?id=61572005905745", 
      label: "Facebook",
      subtext: "Connect on Facebook"
    },
    {
      Icon: FaWhatsapp,
      link: "https://wa.me/9804936669",
      label: "Whatsapp", 
      subtext: "Connect on Whatsapp"
    },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/nyxis.tech/",
      label: "Instagram",
      subtext: "Connect on Instagram"  
    }
  ];

  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialsVertical}>
        {socials.map(({ Icon, link, label, subtext }) => (
          <a key={label} href={link} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.iconWrapper} style={{ backgroundColor: `var(${color})` }}>
              <Icon size={24} />
            </div>
            <div className={styles.textContent}>
              <span className={styles.label}>{label}</span>
              <span className={styles.subtext}>{subtext}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}