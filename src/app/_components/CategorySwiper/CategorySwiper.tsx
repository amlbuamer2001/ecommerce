"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function CategorySwiper({ data }: any) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={8}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((category: any) => (
          <SwiperSlide key={category._id}>
            <div>
              <Image
                width={100}
                height={100}
                src={category.image}
                alt={category.name}
                className="w-full h-[150px] object-cover"
              />
              <h2 className="text-center font-bold">{category.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
