"use client";

import Image from "next/image";
import img1 from "./../../../../public/images/slider-image-1.jpeg";
import img2 from "./../../../../public/images/slider-image-2.jpeg";
import img3 from "./../../../../public/images/slider-image-3.jpeg";
import img4 from "./../../../../public/images/banner-4.jpeg";
import img5 from "./../../../../public/images/grocery-banner-2.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function MainSlider() {
  return (
    <div className="flex">
      <div className="w-3/4">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image
              src={img1}
              alt="slider image 1"
              className="w-full object-cover h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img4}
              alt="slider image 2"
              className="w-full object-cover h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img5}
              alt="slider image 3"
              className="w-full object-cover h-[400px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/4">
        <Image
          src={img2}
          alt="slider image 2"
          className="h-[200px] object-cover"
        />
        <Image
          src={img3}
          alt="slider image 3"
          className="h-[200px] object-cover"
        />
      </div>
    </div>
  );
}
