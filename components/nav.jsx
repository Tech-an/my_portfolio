import Link from "next/link";
import styles from "../styles/nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <>
      <div className={styles.fa}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/activity">ACTIVITY</Link>
          </li>
          <li>
            <Link href="/skill">SKILL</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/bucket">BUCKET-LIST</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
