import Logo from "./logo";
// import Nav from "./nav";
import styles from "../styles/header.module.css";

export default function Header() {
  /**headerコンポーネントの仕様
   * 〇 position: fixedは共通している。(ページによって初期状態の背景色が異なる)
   * ・HOMEなら、背景透過でスクロールすると、背景色がaccentカラーに変更(こっちはposition:stcity?)
   * ・HOME以外なら、最初から背景色がaccentカラー(こっちはposition:fixed?)
   */
  return (
    <header className={styles.header}>
      <Logo />
      {/* <Nav /> */}
    </header>
  );
}
