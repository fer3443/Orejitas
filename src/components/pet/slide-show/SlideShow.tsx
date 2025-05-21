"use client";

import React from "react";

import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./SlideShow.css";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
  className?: string;
}

export const SlideShow = ({ images, name, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        autoplay={{
          delay:3000
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
            src={`${image}`}
            alt={name}
            width={780}
            height={500}
            className="object-fill rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
            src={`${image}`}
            alt={name}
            width={300}
            height={300}
            className="object-fill rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
