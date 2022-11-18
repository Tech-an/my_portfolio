import styles from "../../styles/contents_item.module.css";
import Link from "next/link";

export default function Contents_item({ title, description, link = "/" }) {
  let name = undefined;
  if (title === "ABOUT") {
    name = styles.about;
  } else if (title === "ACTIVITY") {
    name = styles.activity;
  } else if (title === "SKILL") {
    name = styles.skill;
  } else if (title === "BLOG") {
    name = styles.blog;
  } else if (title === "BUCKET-LIST") {
    name = styles.bucket;
  } else {
    name = styles.none;
  }

  return (
    <Link href={link}>
      <div className={name}>
        <div className={styles.content_summary}>
          <h2>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
