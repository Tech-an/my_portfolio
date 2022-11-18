// 各種ライブラリのインポート
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// 表示するデータを配列として定義
const data = [
  { subject: "HTML", A: 4, B: 4, fullMark: 5 },
  { subject: "CSS", A: 4, B: 4, fullMark: 5 },
  { subject: "JavaScript", A: 4, B: 4, fullMark: 5 },
  { subject: "TypeScript", A: 4, B: 4, fullMark: 5 },
  { subject: "Vue", A: 4, B: 4, fullMark: 5 },
  { subject: "React", A: 4, B: 4, fullMark: 5 },
];

export default function Bucket() {
  return (
    <>
      <RadarChart // レーダーチャート全体の設定を記述
        cx={250} // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
        cy={250} // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
        outerRadius={150} // レーダーチャート全体の大きさ
        width={500} // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
        height={500} // レーダーチャートが記載される高さ
        data={data} // 表示対象のデータ
      >
        {/* レーダーチャートの蜘蛛の巣のような線 */}
        <PolarGrid />
        {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
        <PolarAngleAxis dataKey="subject" />

        {/* 目安となる数値が表示される線を指定  */}
        <PolarRadiusAxis
          angle={60} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
          domain={[1, 5]} // リストの１番目の要素が最小値、2番目の要素が最大値
        />
        {/* ２個目のレーダー */}
        <Radar
          name="フロントエンド"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />

        {/* グラフの下のAさんBさんの表記 */}
        <Legend />
      </RadarChart>
      <RadarChart // レーダーチャート全体の設定を記述
        cx={250} // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
        cy={250} // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
        outerRadius={150} // レーダーチャート全体の大きさ
        width={500} // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
        height={500} // レーダーチャートが記載される高さ
        data={data} // 表示対象のデータ
      >
        {/* レーダーチャートの蜘蛛の巣のような線 */}
        <PolarGrid />
        {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
        <PolarAngleAxis dataKey="subject" />

        {/* 目安となる数値が表示される線を指定  */}
        <PolarRadiusAxis
          angle={60} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
          domain={[1, 5]} // リストの１番目の要素が最小値、2番目の要素が最大値
        />

        {/* レーダーを表示 */}
        <Radar
          name="バックエンド" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
          dataKey="A" // 表示する値と対応するdata内のキー
          stroke="#8884d8" // レーダーの外枠の色
          fill="#8884d8" // レーダー内の色
          fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
        />

        {/* グラフの下のAさんBさんの表記 */}
        <Legend />
      </RadarChart>
    </>
  );
}
