import styles from "../../styles/hero.module.css";

export default function Hero({ title, description, img }) {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
}
