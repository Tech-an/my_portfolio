import styles from "../../styles/carrer.module.css";
import Carrer_item from "./carrer_item";

export default function Carrer() {
  return (
    <>
      <div className={styles.carrer}>
        <div className={styles.carrer_block}>
          <Carrer_item
            date="2015.4 - 2019.3"
            title="秋田県立大学"
            description="「システム科学技術学部 - 電子情報システム学科」を卒業。卒業論文では神経科学の分野を専攻し「マインドワンダリング検出デバイスの開発」に関する研究を実施。"
          />
          <Carrer_item
            date="2019.4 - 2019.10"
            title="名古屋工業大学 (研究生)"
            description="「情報工学部 (研究生)」を卒業。研究では「後頭葉の電気信号から視力推定」に関する研究を実施。"
          />
          <Carrer_item
            date="2019.11 - 2020.3"
            title="バイト戦士"
            description="次年度の大学院生活に備えて猛バイト。"
          />
          <Carrer_item
            date="2020.4 - 2021.3"
            title="名古屋大学大学院 (修士1年生)"
            description="「情報学研究科 - 複雑系科学専攻」に入学。研究では「ベイジアンネットワークによる株価予測」に関する研究を実施。"
          />
          <Carrer_item
            date="2021.4 - 2022.3"
            title="(株)AKコンサルティング (インターン)"
            description="大学院を1年休学し、ITコンサルティングのベンチャー企業でインターンとして業務経験を積む。「GoogleAppsScriptsによる業務システムのプロトタイプ開発」や「PythonによるDBシステムの開発」などを1人で担当。"
          />
          <Carrer_item
            date="2022.4 - 2022.11(現在)"
            title="名古屋大学大学院 (修士2年生)"
            description="大学院に復学して研究活動を再開。研究内容を変更し「PSOによる深層モデルアーキテクチャの最適化」に関する研究を実施。"
          />
          <Carrer_item
            date="2023.3 - "
            title="卒業および就職予定"
            description="「名古屋大学を卒業」して、インターン先であった「AKコンサルティング株式会社に入社予定」"
          />
        </div>
      </div>
    </>
  );
}
