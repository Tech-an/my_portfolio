import Link from "next/link";

export default function News_item({ date, description, link = "/about" }) {
  return (
    <Link href={link}>
      <p
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          margin: "50px 20%",
          padding: "30px 0",
        }}
      >
        <div
          style={{
            // display: "flex",
            fontWeight: "700",
            padding: "5px 20px",
          }}
        >
          <div
            style={
              {
                // padding: "0 var(--space-sm) 0 50px",
              }
            }
          >
            {date}
          </div>
          <div>{description}</div>
        </div>
      </p>
    </Link>
  );
}
