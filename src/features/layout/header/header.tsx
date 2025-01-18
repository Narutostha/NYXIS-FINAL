import Image from "next/image";
import styles from "./header.module.scss";
import { Switch } from "@/features/ui";
import Link from "next/link";

interface HeaderProps {
  page: "design" | "creative";
  color: "--ez-orange" | "--adobe-purple";
}

export function Header({ page, color }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/NYXIS.png"
          alt="Eltezza"
          width={200}
          height={200}
          className={styles.headerLogo}
        />
      </Link>
      <Switch page={page} color={color} />
    </header>
  );
}
