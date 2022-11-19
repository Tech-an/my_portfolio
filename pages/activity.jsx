import Activity_item from "components/Activity/activity_item";
import Section from "components/section";
import styles from "../styles/activity.module.css";

export default function Activity() {
  return (
    <div className={styles.activity}>
      <Section title="My Activities">
        <Activity_item
          title="チャリティーサンタ名古屋 - 副代表"
          description="aaa"
          imgs={[
            { src: "/santa/santa_top.png", alt: "" },
            { src: "/santa/santa_3.jpg", alt: "" },
            { src: "/santa/santa_1.jpg", alt: "" },
            { src: "/santa/santa_2.jpg", alt: "" },
            { src: "/santa/santa_4.jpg", alt: "" },
            { src: "/santa/CSN.jpg", alt: "" },
          ]}
          isImgRight={false}
        />
        <Activity_item
          title="ワンチャレ - 主催メンバー"
          description="bbb"
          imgs={[
            { src: "/ワンチャレ/ワンチャレ_top.png", alt: "" },
            // { src: "/ワンチャレ/wanchare_8.jpg", alt: "" },
            // { src: "/ワンチャレ/wanchare_9.jpg", alt: "" },
            // { src: "/ワンチャレ/wanchare_10.jpg", alt: "" },
            { src: "/ワンチャレ/wanchare_7.jpg", alt: "" },
            { src: "/ワンチャレ/wanchare_5.jpg", alt: "" },
            { src: "/ワンチャレ/wanchare_6.jpg", alt: "" },
            { src: "/ワンチャレ/wanchare_4.jpg", alt: "" },
            { src: "/ワンチャレ/wanchare_3.jpg", alt: "" },
          ]}
          isImgRight={true}
        />
        <Activity_item
          title="大同大学 - TA"
          description="aaa"
          imgs={[
            { src: "/daido/daido_top.png", alt: "" },
            { src: "/daido/C言語.png", alt: "" },
            { src: "/daido/React.png", alt: "" },
            { src: "/daido/frontend.png", alt: "" },
          ]}
          isImgRight={false}
        />
        <Activity_item
          title="個人事業 - 学習支援事業"
          description="aaa"
          imgs={[
            { src: "/business/business.png", alt: "" },
            { src: "/business/html_css_js.png", alt: "" },
            { src: "/business/react.webp", alt: "" },
            { src: "/business/nextJs.jfif", alt: "" },
          ]}
          isImgRight={true}
        />
      </Section>
    </div>
  );
}
