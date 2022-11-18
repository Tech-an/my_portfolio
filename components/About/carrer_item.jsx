import styles from "../../styles/carrer_item.module.css";

export default function Carrer_item({ date, title, description }) {
  return (
    <div className={styles.body}>
      <div>
        <div>
          <span className={styles.circle}>　</span>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
