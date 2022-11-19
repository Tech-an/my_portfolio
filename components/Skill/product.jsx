import Certification_item from "./certification_item";
import styles from "../../styles/product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function Product() {
  return (
    <div className={styles.product}>
      <Swiper
        className={styles.swiper}
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
          rotate: 30,
          stretch: -10,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item
            title="None"
            description="None"
            className="default"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item
            title="None"
            description="None"
            className="default"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item
            title="None"
            description="None"
            className="default"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
