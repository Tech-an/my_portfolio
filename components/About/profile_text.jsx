import styles from "../../styles/profile_text.module.css";

export default function Profile_text() {
  return (
    <div className={styles.profile_text}>
      <h2 style={{ fontSize: "2.3rem" }}>自己紹介の文章を書きます</h2>
      <h3 style={{ fontSize: "1.5rem" }}>Frontend Developer based in kabul</h3>
      <br />
      <br />
      <p style={{ fontSize: "1.3rem" }}>
        Certifies that the project report is a record of work done by candidates
        themselves during the period of study under our guidelines and that to
        the best of our knowledge it has not previously formed the basis of the
        award of any degree or diploma in Goa University or elsewhere.
      </p>
      <br />
      <p style={{ fontSize: "1.3rem" }}>
        Certifies that the project report is a record of work done by candidates
        themselves during the period of study under our guidelines and that to
        the best of our knowledge it has elsewhere.
      </p>
      <br />
      <p style={{ fontSize: "1.3rem" }}>
        Certifies that the project report is a record of work done by candidates
        themselves during the period of study under our guidelines and that to
        the best of our knowledge it has
      </p>
    </div>
  );
}
