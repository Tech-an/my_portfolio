import Link from "next/link";

export default function NewsItem({ date, description, link = "/about" }) {
  return (
    <Link href={link}>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          margin: "50px 20%",
          padding: "30px 20px",
          fontWeight: "700",
        }}
      >
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
}
