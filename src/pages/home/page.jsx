import React, { useState } from "react";
import {
  football,
  mani_bg,
  mob_football,
  tree_logo,
} from "../../../public/assets/banners";
import {
  cen_logo,
  cloths,
  excsuccess,
  g1,
  g10,
  g11,
  g12,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  gg7,
  g8,
  g9,
  gg2,
  img_1,
  img_2,
  img_3,
  logo,
  g13,
  inspiredtext,
  football_text,
  sub_des_desk,
  right_arrow,
  chevron,
  card_tree,
  top_title,
  top_title2,
  follow_1,
  follow_2,
  follow_3,
} from "../../../public/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
const imagesSecOne = [img_1, img_2, img_3, img_1, img_2, img_3];
const imagesSecgrid = [
  {
    desc: "@ford_t • 128.6M followers",
    name: "Tom Ford",
    src: g1,
    titleImage: follow_1,
  },
  {
    desc: "@rob • CEO, Audi WV",
    name: "Robert Thompson",
    src: gg2,
    titleImage: follow_2,
  },
  { desc: "", name: "", src: g2 },
  { desc: "", name: "", src: g3 },
  { desc: "", name: "", src: g4 },
  { desc: "", name: "", src: g5 },
  { desc: "", name: "", src: g6 },
  { desc: "", name: "", src: g7 },
  {
    desc: "@edwaaaard • CTO, Apple",
    name: "Edward Smith",
    src: g8,
    titleImage: follow_3,
  },
  { desc: "", name: "", src: g10 },
  { desc: "", name: "", src: g9 },
  { desc: "", name: "", src: g11 },
  { desc: "", name: "", src: gg7 },
  {
    desc: "@edwaaaard • CTO, Apple",
    name: "Edward Smith",
    src: g12,
    titleImage: follow_3,
  },
  { desc: "", name: "", src: g13 },
];
export default function Home() {
  const [openSection, setOpenSection] = useState(true);

  const toggleSection = () => {
    setOpenSection(!openSection);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-[1576px] mx-auto">
      <div className="absolute z-10 left-0 top-3 md:top-6 right-0 flex justify-between items-center md:items-start max-w-[90%] md:max-w-[97%] mx-auto">
        <img
          src={logo}
          alt="logo"
          className="max-w-[134px] mt-[-16px] md:mt-0 max-h-[26px] md:max-h-[60px] md:max-w-[311px]"
        />
        <div className="flex justify-between  md:items-center flex-col md:flex-row max-w-[122px] md:max-w-auto  md:hidden">
          <img
            src={cen_logo}
            alt="logo"
            className="max-w-[122px] md:max-w-[167px] h-[19px] md:max-h-[26px]"
          />
          <p className="mb-0 text-end md:w-[311px]">Access</p>
        </div>
        <div className="lg:min-w-[313px] hidden md:block">
          <img
            src={cen_logo}
            alt="logo"
            className="max-w-[167px] md:mx-auto  max-h-[26px]  "
          />
        </div>
        <p className="mb-0 text-end text-[22px] md:min-w-[311px] hidden md:block">
          Access
        </p>
      </div>
      {/* <img
        src={mani_bg}
        alt="bg"
        className="w-[97%] rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[550px] object-cover md:h-auto "
      /> */}
      <div className="w-[97%] relative rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[550px] md:h-auto">
        <img
          src={mani_bg}
          alt="bg"
          className="w-full min-h-[550px] md:h-full object-cover rounded-[6px]"
        />
        <p
          onClick={scrollToBottom}
          className="mb-0 absolute bottom-3 md:bottom-5 cursor-pointer right-3 md:right-5 text-end text-[16px] md:text-[22px] md:min-w-[311px] "
        >
          Scroll
        </p>
      </div>
      {/* sec one */}
      <div className="py-[60px] md:py-[140px] flex flex-col justify-center  mx-auto items-center">
        <img
          src={tree_logo}
          alt="tree"
          className="max-w-[41px] max-h-[34px] md:max-w-[110px] md:max-h-[92px] mb-7"
        />
        <img
          src={excsuccess}
          alt="logo"
          className="max-w-[161px] md:max-w-[193px] max-h-[24px] md:max-h-[29px] mb-[6px]"
        />
        <p className="mb-0 text-[16px] md:text-[24px] text-white">
          A tribute to professionals around the globe
        </p>
      </div>
      {/* slider */}
      <div className="w-full">
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          className="mySwiper"
        >
          {imagesSecOne.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[70%] sm:!w-[50%]  md:max-w-[calc(33.333%-8px)] flex justify-center items-center"
            >
              <img
                src={item}
                alt={`img-${index}`}
                className="w-full h-auto min-h-[300px] rounded-[4px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-between gap-2 py-[60px] md:py-[140px] flex-col xl:flex-row">
        <img
          src={cloths}
          alt="tree"
          className="w-[97%] mx-auto md:w-full md:w-1/2  max-h-[491px] rounded-[6px]"
        />
        <div className="w-[97%] mx-auto md:w-full md:w-1/2 flex flex-col gap-2 items-center">
          <div className="bg-[#846747] text-white px-4 py-5 md:px-14 md:py-10 relative overflow-hidden w-full rounded-[4px] min-h-[491px]">
            <div className="border-t-1 border-b-1 py-5 border-[#E0BD8F]">
              <div className="flex justify-between">
                <div className="relative">
                  <p className="mb-0 text-[20px] text-white">Reserved Access</p>
                  <p className="mb-0 text-[12px] top-[25px] text-white absolute right-0">
                    Buy $29.99
                  </p>
                </div>
                <img
                  onClick={() => toggleSection()}
                  src={chevron}
                  alt="arrow"
                  className={`${openSection ? "rotate-180" : ""}`}
                />
              </div>
              {openSection && (
                <div className="mt-10">
                  <div className="w-full max-w-[554px]">
                    <h3 className="text-[20px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </h3>
                    <h3 className="text-[20px] mt-8">
                      Reserve your place in line with a $20 prepayment. Each
                      reservation secures one piece, with the $20 credited
                      toward your purchase.
                    </h3>
                  </div>
                </div>
              )}
              <div className="flex justify-start items-center gap-2 pt-7">
                <h3 className="text-[22px] ">Buy access $29.99</h3>
                <img src={right_arrow} className="h-6 w-6" alt="arr" />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <div className="relative">
                <p className="mb-0 text-[20px] text-white">Public Access</p>
              </div>
              <img
                // onClick={() => toggleSection()}
                src={chevron}
                alt="arrow"
                className={`${openSection ? "rotate-180" : ""}`}
              />
            </div>
            {/* Exclusive Access */}

            {/* Bottom background image (tree pattern) */}
            <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] opacity-70 pointer-events-none">
              <img
                src={card_tree} // replace with your actual tree image path
                alt="tree bg"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto pt-0 md:pt-[120px] relative">
        <img
          src={football_text}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/20 max-w-[291px] md:max-w-[700px] "
          alt="overlay"
        />{" "}
        <img
          src={football}
          alt="img"
          className="w-full md:h-auto hidden md:block"
        />
        <img
          src={mob_football}
          alt="img"
          className="w-[97%] mx-auto md:w-full md:h-auto block md:hidden rounded-[6px]"
        />
      </div>
      <div className="w-[97%] mx-auto  block md:hidden pt-[60px]">
        <img src={inspiredtext} alt="bg" className="w-[164px]" />
      </div>
      {/* grid images */}
      <img
        src={inspiredtext}
        alt="bg"
        className="max-w-[306px] h-auto py-5 hidden md:block"
      />
      {/* bottom tree desktop */}
      <div className="relative py-[160px]  justify-end items-center hidden md:flex">
        <div className="relative  mr-[150px]">
          <div className="w-full lg:w-[840px] relative flex flex-col gap-7">
            <img
              src={sub_des_desk}
              alt="bg"
              className="max-w-[600px] max-h-[51px] "
            />
            <div className="relative">
              <img
                src={right_arrow}
                alt="arrow"
                className="absolute right-0 h-5 w-5 top-5"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full text-[20px] border-b-2 outline-none border-white py-3"
              />
            </div>
          </div>
          <img
            src={tree_logo}
            alt="bg"
            className="absolute bottom-[-70px] left-[-380px] w-[214px] h-[176px]"
          />
        </div>
      </div>{" "}
      <div className="w-[97%] mx-auto md:w-full columns-3 sm:columns-2 md:columns-3 lg:columns-5 gap-1 md:gap-4 pt-5 md:pt-[180px]">
        {imagesSecgrid.map((src, index) => (
          <div key={index} className="relative mb-1 md:mb-4 break-inside-avoid">
            {src.titleImage && (
              <div className="absolute top-[6px] md:top-[20px] left-[6px] md:left-[10px]  flex flex-col items-start md:flex-row md:justify-start gap-[6px] md:items-center">
                <img
                  src={src.titleImage}
                  alt="titl"
                  className="md:w-[36px] md:h-[36px] w-[24px] h-[24px]"
                />
                <div className="flex flex-col md:max-w-[193px]">
                  <p className="text-[12px] md:text-[14px] font-bold leading-[15px] text-white mb-0">
                    {src.name}
                  </p>
                  <p className="text-[1] md:text-[16px] font-normal leading-[15px] text-white mb-0">
                    {src.desc}
                  </p>
                </div>
              </div>
            )}

            {/* If this image is meant to always show, move it outside the condition */}
            <img
              src={src.src}
              alt={`img-${index}`}
              className="w-full h-[188px] md:h-auto rounded-none md:rounded-[6px] object-cover"
            />
          </div>
        ))}
      </div>
      {/* bottom tree mob */}
      <div className="bg-[#121216] w-[97%] mx-auto rounded-[6px] px-3 py-4 my-[60px] flex flex-col gap-5 md:hidden">
        <p className="text-[20px] text-white mb-0">
          Subscribe now and get a discount.
        </p>
        <div className="relative">
          <img
            src={right_arrow}
            alt="arrow"
            className="absolute right-0 h-4 w-4 top-5"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-b-2 outline-none border-white py-3"
          />
        </div>
      </div>
      {/* footer */}
      <div className="w-[98%] mx-auto bg-[#1B1B20] p-5 rounded-[8px]">
        <img src={logo} alt="logo" className="max-w-[303px] max-h-[48.8px]" />
        <div className="my-6 md:my-10 bg-[#46464C] w-full h-[1px]" />
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex justify-start md:justify-between  gap-2 md:gap-[80px]">
            <div className="w-full max-w-[126px] md:w-auto">
              <h3 className="text-white font-semibold mb-3 text-[20px]">
                Home
              </h3>
              <ul className="space-y-1 text-[#BFBFBF]">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
                <li>
                  <a href="#">Column</a>
                </li>
                <li>
                  <a href="#">Recipes</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-[20px]">
                Socials
              </h3>
              <ul className="space-y-1 text-[#BFBFBF]">
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-[16px] md:text-[20px] mt-5 md:mt-0 text-white ">
            Copyright ©2025 Prieto’s, Inc
          </p>
        </div>
      </div>
    </div>
  );
}
