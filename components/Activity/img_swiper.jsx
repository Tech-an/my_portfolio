import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import styles from "../../styles/img_swiper.module.css";

import { EffectCube, Pagination, Autoplay } from "swiper";

export default function ImgSwiper({ imgs }) {
  const sliders = (imgs) => {
    const list = [];
    for (let i = 0; i < imgs.length; i++) {
      list.push(
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={imgs[i]["src"]}
            alt={imgs[i]["alt"]}
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      );
    }
    return list;
  };

  return (
    <Swiper
      className={styles.swiper}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 1.0,
      }}
      pagination={true}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCube, Pagination, Autoplay]}
    >
      {sliders(imgs)}
    </Swiper>
  );
}
