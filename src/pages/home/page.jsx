import React, { useState } from "react";
import {
  football,
  main_bg,
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
} from "../../../public/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
const imagesSecOne = [img_1, img_2, img_3];
// const imagesSecgrid = [
//   g1,
//   gg2,
//   g2,
//   g3,
//   g4,
//   g5,
//   g6,
//   g7,
//   g8,
//   g10,
//   g9,
//   g11,
//   gg7,
//   g12,
//   g13,
// ];
const imagesSecgrid = [
  { src: g1, titleImage: top_title },
  { src: gg2, titleImage: top_title2 },
  { src: g2 },
  { src: g3 },
  { src: g4 },
  { src: g5 },
  { src: g6 },
  { src: g7 },
  { src: g8, titleImage: top_title },
  { src: g10 },
  { src: g9 },
  { src: g11 },
  { src: gg7 },
  { src: g12 },
  { src: g13 },
];
export default function Home() {
  const [openSection, setOpenSection] = useState(true);

  const toggleSection = () => {
    setOpenSection(!openSection);
  };
  return (
    <div className="relative w-full max-w-[1576px] mx-auto">
      <div className="absolute left-0 top-3 md:top-6 right-0 flex justify-between items-center md:items-start max-w-[90%] md:max-w-[97%] mx-auto">
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
        <img
          src={cen_logo}
          alt="logo"
          className="max-w-[167px]  max-h-[26px]  hidden md:block"
        />
        <p className="mb-0 text-end text-[22px] max-w-[311px] hidden md:block">
          Access
        </p>
      </div>
      <img
        src={main_bg}
        alt="bg"
        className="w-[97%] rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[550px] object-cover md:h-auto "
      />
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
            {/* <div
              className="border-b border-white/50 pb-6 mb-6 cursor-pointer border-[#DAA967]"
              onClick={() => toggleSection("exclusive")}
            >
              <div className="flex justify-between text-white items-center">
                <div>
                  <h3 className="text-lg font-semibold">Exclusive Access</h3>
                  <p className="text-sm text-white/80">Request only</p>
                </div>
                {openSection === "exclusive" ? "up" : "down"}
              </div>
            </div> */}

            {/* Reserved Access */}
            {/* <div className="border-b border-white/50 pb-6 mb-6 border-[#DAA967]">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleSection("reserved")}
              >
                <div>
                  <h3 className="text-lg font-semibold">Reserved Access</h3>
                  <p className="text-sm text-white/80">Buy $29.99</p>
                </div>
                {openSection === "reserved" ? "up" : "down"}
              </div>
              {openSection === "reserved" && (
                <div className="mt-4 space-y-4 text-sm">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Reserve your place in line with a $20 prepayment. Each
                    reservation secures one piece, with the $20 credited toward
                    your purchase.
                  </p>
                  <button className="text-white font-semibold flex items-center gap-2 hover:underline">
                    Buy access $29.99 →
                  </button>
                </div>
              )}
            </div> */}

            {/* Public Access */}
            {/* <div
              className="cursor-pointer"
              onClick={() => toggleSection("public")}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Public Access</h3>
                {openSection === "public" ? "up" : "down"}
              </div>
            </div> */}

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
      <div className="w-[97%] mx-auto md:w-full columns-3 sm:columns-2 md:columns-3 lg:columns-5 gap-1 md:gap-4 pt-5 md:pt-[180px]">
        {imagesSecgrid.map((src, index) => (
          <div key={index} className="relative mb-1 md:mb-4 break-inside-avoid">
            {src.titleImage && (
              <img
                src={src.titleImage}
                alt="titl"
                className="max-h-[36px] absolute top-[20px] left-[10px] hidden md:block"
              />
            )}
            <img
              src={src.src}
              alt={`img-${index}`}
              className="w-full rounded-none md:rounded-[6px] object-cover"
            />
          </div>
        ))}
      </div>
      {/*inspired logo  */}

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
      </div>

      {/* bottom tree mob */}
      <div className="bg-[#121216] w-[97%] mx-auto rounded-[6px] px-3 py-4 my-[60px] flex flex-col gap-5 md:hidden">
        <p className="text-[20px] text-white mb-0">
          Subscribe now and get a discount.
        </p>
        <div className="relative">
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
          <div className="flex justify-start md:justify-between  gap-2">
            <div className="w-full max-w-[166px] md:w-auto">
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
