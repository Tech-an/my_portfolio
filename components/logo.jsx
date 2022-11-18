import Link from "next/link";
import styles from "../styles/logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      Tetsuya Sato
    </Link>
  );
}
