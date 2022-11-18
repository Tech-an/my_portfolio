import Section from "../section";
import News_item from "./news_item";

export default function News() {
  return (
    <Section title="NEWS" section_name="news">
      <News_item
        date="2022.11.20"
        description="ポートフォリオサイトを公開しました。"
        link="/"
      />
      {/* <News_item
        date="2022.11.16"
        description="ここにニュースの内容が入ります。"
      />
      <News_item
        date="2022.11.17"
        description="ここにニュースの内容が入ります。"
      />
      <News_item
        date="2022.11.18"
        description="ここにニュースの内容が入ります。"
      /> */}
    </Section>
  );
}
