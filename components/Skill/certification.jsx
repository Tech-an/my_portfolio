import Certification_item from "./certification_item";
import styles from "../../styles/certification.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
// swiper.js用のcssを_app.jsでimportしています。

export default function Certification() {
  return (
    <div className={styles.certification}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="custom-swiper"
      >
        <SwiperSlide className="custom-swiper-slide">
          <Certification_item
            title="応用情報技術者 - 合格"
            description="aaa"
            className="ap"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Certification_item
            title="TOEIC - 735点"
            description="aaa"
            className="toeic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Certification_item
            title="G検定 - 合格"
            description="aaa"
            className="g"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Certification_item
            title="E資格講座 - 修了"
            description="aaa"
            className="e"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Certification_item
            title="E資格(2月受験予定)"
            description="aaa"
            className="default"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
