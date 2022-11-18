import Hero from "../components/Home/hero";
import News from "../components/Home/news";
// import Contents from "../components/Home/contents";

export default function Home() {
  return (
    <>
      <Hero
        title="Tetsuya Sato."
        description="ようこそ！佐藤哲也のポートフォリオサイトへ！"
      ></Hero>
      <News />
      {/* <Contents /> */}
    </>
  );
}
