import Image from "next/image";
import styles from "../../styles/activity_item.module.css";
import ImgSwiper from "./img_swiper";

export default function Activity_item({
  title,
  description,
  imgs,
  isImgRight = false,
}) {
  const textBlock = (
    <div className={styles.text}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  const itemBlock = (isImgRight) => {
    if (isImgRight) {
      return (
        <>
          {textBlock}
          <ImgSwiper imgs={imgs} />
        </>
      );
    } else {
      return (
        <>
          <ImgSwiper imgs={imgs} />
          {textBlock}
        </>
      );
    }
  };
  return <div className={styles.item}>{itemBlock(isImgRight)}</div>;
}
