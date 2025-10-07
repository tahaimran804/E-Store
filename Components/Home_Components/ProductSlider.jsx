"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import style from '@/app/Style/Hero.module.css'
import Image from "next/image";

const images = [
  "/images/slider1.webp",
  "/images/slider2.webp",
  "/images/slider3.webp",
  "/images/slider4.webp",
  "/images/slider5.webp",
];

const ProductSlider = () => {
  return (
    <div className={style.Slider}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={false}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
