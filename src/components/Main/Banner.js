import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Navigation, Autoplay } from "swiper/modules";
import icons from "../../assets";

const Banner = () => {
  const imagesBanner = ["banner1", "banner2", "banner3"];

  return (
    <Swiper
      speed={900}
      parallax={true}
      loop={true}
      navigation={true}
      modules={[Parallax, Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      className="h-[250px] md:h-[350px] md:w-full lg:h-[450px]"
    >
      {imagesBanner.map((img, index) => (
        <SwiperSlide key={index}>
          <div className={`${img} relative`}>
            <div
              className={`animate-slide-up absolute ${img === "banner3" ? "right-14 md:right-36" : "left-14 md:left-36"} flex flex-col gap-5 font-medium md:top-14 lg:top-1/4`}
            >
              <div
                className="flex gap-5 text-sm text-tGrayColor md:text-base lg:text-xl"
                data-swiper-parallax="-100"
              >
                <img
                  loading="lazy"
                  src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/icon/text-shape-icon.png"
                  alt="text-shape-icon"
                />
                <span>New Collection</span>
              </div>
              <div
                className="text-2xl md:text-3xl lg:text-5xl"
                data-swiper-parallax="-200"
              >
                The Great Fashion <br /> Collection 2022
              </div>
              <div className="text-tGrayColor " data-swiper-parallax="-100">
                <p>
                  Up To 40% Off Final Sale Items. <br /> Caught in the Moment!
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-sm bg-secondaryColor p-2 text-white md:w-4/5 md:text-lg lg:w-3/5">
                <span>Show Collection</span>
                <icons.ArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(Banner);
