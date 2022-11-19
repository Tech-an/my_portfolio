// 各種ライブラリのインポート
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import styles from "../../styles/progra.module.css";

// 表示するデータを配列として定義

const frontend_skills = [
  { subject: "HTML", score: 4, fullMark: 5 },
  { subject: "CSS/ScSS", score: 2, fullMark: 5 },
  { subject: "JS/TS", score: 4, fullMark: 5 },
  { subject: "GAS", score: 4, fullMark: 5 },
  { subject: "NextJS", score: 2.5, fullMark: 5 },
  { subject: "ReactNative", score: 1.5, fullMark: 5 },
];

const backend_skills = [
  { subject: "Python", score: 3, fullMark: 5 },
  { subject: "Flask", score: 1.5, fullMark: 5 },
  { subject: "C", score: 4, fullMark: 5 },
  { subject: "C#/Unity", score: 1.5, fullMark: 5 },
  { subject: "Java", score: 3, fullMark: 5 },
  { subject: "PyTorch", score: 3, fullMark: 5 },
];

const develop_skills = [
  { subject: "AWS", score: 1.5, fullMark: 5 },
  { subject: "Docker", score: 1.5, fullMark: 5 },
  { subject: "Git/Github", score: 2, fullMark: 5 },
  { subject: "Linux/Vim", score: 1.5, fullMark: 5 },
  { subject: "Figma", score: 2, fullMark: 5 },
  { subject: "WebAPI", score: 1.5, fullMark: 5 },
];

const Charts = (data, name, color) => {
  return (
    <>
      <RadarChart
        cx={250}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />

        <PolarRadiusAxis angle={60} domain={[1, 5]} />
        <Radar
          name={name}
          dataKey="score"
          stroke={color}
          fill={color}
          fillOpacity={0.6}
        />

        <Legend />
      </RadarChart>
    </>
  );
};

export default function PrograSkill() {
  return (
    <div className={styles.progra}>
      {Charts(frontend_skills, "フロントエンド", "#82ca9d")}
      {Charts(backend_skills, "バックエンド", "#8884d8")}
      {Charts(develop_skills, "開発スキル", "#947")}
    </div>
  );
}
