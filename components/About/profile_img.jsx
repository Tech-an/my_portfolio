import Image from "next/image";

export default function Profile_img() {
  return (
    <figure
      style={{
        position: "relative",
        width: "300px",
        height: "550px",
        zIndex: "-100",
        flex: "1",
        margin: "10px",
      }}
    >
      <Image
        src="/profile_img.svg"
        alt="profile"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "10%" }}
      />
    </figure>
  );
}
