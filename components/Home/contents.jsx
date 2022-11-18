import Section from "../section";
import Contents_item from "./contents_item";
import styles from "../../styles/content.module.css";

export default function Contents() {
  return (
    <Section title="CONTENTS" section_name="contents">
      <div className={styles.contents}>
        <Contents_item
          title="ABOUT"
          description="自己紹介・経歴"
          link="/about"
        />
        <Contents_item
          title="ACTIVITY"
          description="活動内容"
          link="/activity"
        />
        <Contents_item
          title="SKILL"
          description="資格・スキルセット"
          link="/skill"
        />
        <Contents_item title="BLOG" description="学びの備忘録" link="/blog" />
        <Contents_item
          title="BUCKET-LIST"
          description="夢・目標"
          link="/bucket"
        />
        <Contents_item title="???" description="???" />
      </div>
    </Section>
  );
}
