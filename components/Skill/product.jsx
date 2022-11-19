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
            title="None"
            description="None"
            className="default"
          />
        </SwiperSlide>
        <SwiperSlide className="custom-swiper-slide">
          <Certification_item
            title="None"
            description="None"
            className="default"
          />
        </SwiperSlide>
        <SwiperSlide className="custom-swiper-slide">
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
