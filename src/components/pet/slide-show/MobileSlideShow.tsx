"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SlideShow.css";

interface Props {
  images: string[];
  name: string;
  className?: string;
}

export const MobileSlideShow = ({ images, name, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
      style={{
        width:"100vw",
        height:"500px"
      }}
        autoplay={{
          delay:3000
        }}
        pagination={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
            src={`${image}`}
            alt={name}
            width={600}
            height={500}
            className="object-fill object-center w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
