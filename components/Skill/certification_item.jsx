import styles from "../../styles/certification_item.module.css";

export default function Certification_item({ title, description, className }) {
  let cardStyle = undefined;
  if (className === "ap") {
    cardStyle = styles.ap;
  } else if (className === "e") {
    cardStyle = styles.e;
  } else if (className === "toeic") {
    cardStyle = styles.toeic;
  } else if (className === "g") {
    cardStyle = styles.g;
  }
  return (
    <div className={cardStyle}>
      <div className={styles.card}>
        <div className={styles.sliderText}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
