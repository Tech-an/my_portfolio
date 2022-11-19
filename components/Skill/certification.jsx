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
          <Certification_item title="応用情報技術者 - 合格" className="ap">
            <h3>2020秋試験で合格</h3>
            <p>✔ 情報系の国家資格</p>
          </Certification_item>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item title="TOEIC - 735点" className="toeic">
            <h3>2020冬試験で獲得</h3>
            <p>✔ Listening: 345点</p>
            <p>✔ Reading : 390点</p>
          </Certification_item>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item title="G検定 - 合格" className="g">
            <h3>2020夏試験で合格</h3>
            <p>✔ JDLAの民間資格</p>
            <p>✔ 日本DeepLearning協会</p>
          </Certification_item>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item title="E資格講座 - 修了" className="e">
            <h3>2022夏試験で修了</h3>
            <p>✔ JDLA認定のE資格講座</p>
            <p>✔ (株)AVILEN提供プログラム</p>
          </Certification_item>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Certification_item title="E資格(2月受験予定)" className="e_test">
            <h3>2023春に試験予定</h3>
            <p>✔ JDLAの民間資格</p>
            <p>✔ 受験条件 : E資格講座修了</p>
          </Certification_item>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
