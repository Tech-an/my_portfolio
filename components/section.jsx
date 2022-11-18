import styles from "../styles/section.module.css";

export default function Section({ title, section_name, children }) {
  let styleName = undefined;
  if (section_name === "news") {
    styleName = styles.news;
  } else if (section_name === "contents") {
    styleName = styles.contents;
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "50px auto",
          padding: "0 20px 10px",
          borderBottom: "5px black solid",
          display: "inline-block",
          fontSize: "calc(var(--heading2)*1.5)",
        }}
      >
        {title}
      </h1>
      <div className={styleName}>{children}</div>
    </div>
  );
}
