import React, { useState } from "react";
import {
  chair_bg,
  football,
  mani_bg,
  mob_football,
  tree_logo,
  vision_bg,
  vision_bg_mob,
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
  Quality,
  Design,
  Limited,
  vision_right,
  vision_left,
  black_tree,
} from "../../../public/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import Timeline from "../../components/timeline/timeline";
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

const cardsData = [
  {
    title: Quality,
    desc: "Each collection is crafted from the finest materials, blending diverse textures to deliver an unparalleled tactile and visual experience.",
  },
  {
    title: Design,
    desc: "Every piece is meticulously curated, not just within a collection but across seasons, ensuring timeless elegance and classic combinations.",
  },
  {
    title: Limited,
    desc: "Our dedication to exclusivity and unique materials means each collection is produced in strictly limited quantities, underlining Prieto’s uniqueness.",
  },
];
export default function Vision() {
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
      <div className="absolute z-10 left-0 top-3 md:top-6 right-0 flex justify-between  md:items-start max-w-[90%] md:max-w-[97%] mx-auto">
        <img
          src={logo}
          alt="logo"
          className="max-w-[134px]  md:mt-0 max-h-[26px] md:max-h-[60px] md:max-w-[311px]"
        />
        <div className="flex justify-between  md:items-center flex-col md:flex-row max-w-[122px] md:max-w-auto  md:hidden">
          <img
            src={cen_logo}
            alt="logo"
            className="max-w-[122px] md:max-w-[167px] h-[19px] md:max-h-[26px]"
          />
          <p className="mb-0 text-end md:w-[311px]">
            <div className="">
              <p className="mb-0">Cart (2)</p>
              <p className="mb-0">Wishlist (9)</p>
              <p className="mb-0">Create account</p>
            </div>
          </p>
        </div>
        <div className="lg:min-w-[313px] hidden md:block">
          <img
            src={cen_logo}
            alt="logo"
            className="max-w-[167px] md:mx-auto  max-h-[26px]  "
          />
        </div>
        <div className="mb-0 text-end text-[22px] md:min-w-[311px] hidden md:block">
          <p className="mb-0">Cart (2)</p>
          <p className="mb-0">Wishlist (9)</p>
          <p className="mb-0">Create account</p>
        </div>
      </div>
      {/* <img
        src={mani_bg}
        alt="bg"
        className="w-[97%] rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[550px] object-cover md:h-auto "
      /> */}
      <div className="w-[97%] relative rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[550px] md:h-auto">
        <img
          src={vision_bg}
          alt="bg"
          className="w-full min-h-[550px] md:h-full object-cover rounded-[6px] hidden md:block"
        />
        <img
          src={vision_bg_mob}
          alt="bg"
          className="w-full min-h-[550px] md:h-full object-cover rounded-[6px] block md:hidden"
        />
        <p
          onClick={scrollToBottom}
          className="mb-0 absolute bottom-3 md:bottom-5 cursor-pointer right-3 md:right-5 text-end text-[16px] md:text-[22px] md:min-w-[311px] "
        >
          Scroll
        </p>
      </div>
      {/* sec one */}
      <div className="relative pb-[80px] md:py-[120px] ">
        <p className="mb-0 font-light text-[16px] pt-15 md:pt-0 text-center md:text-left md:text-[24px] text-white">
          Our origin
        </p>
        <div className="relative pt-10 pb-0 md:py-10 flex flex-col max-w-[331px] md:max-w-[938px] justify-center gap-[48px]  mx-auto items-center">
          <p className="mb-0 font-light text-[16px] text-center md:text-[24px] text-white">
            Prieto’s love for fashion has always been rooted in elegance and
            class, inspired by the timeless artistry of women’s clothing. On a
            journey to his family roots in Andorra, Spain, he found himself
            captivated by the region’s breathtaking harmony of nature and
            culture.
          </p>
          <p className="mb-0 md:mb-15 text-[16px] text-center md:text-[22px] text-[#39393F]">
            It was there that Prieto realized that, in a world of abundance,
            true beauty lies in uniqueness. Just as Andorra’s distinct character
            sets it apart, Prieto envisioned fashion as a deeply personal
            expression—where every design is exclusive to the individual.
          </p>
        </div>
        <img
          src={black_tree}
          alt="black"
          className="absolute bottom-[-170px] right-0 w-[460px] h-[385px] hidden md:block"
        />
        <img
          src={tree_logo}
          alt="bg"
          className="absolute right-0 bottom-[-100px] w-[214px] h-[176px] mx-auto block md:hidden"
        />
      </div>
      {/* chair bg */}
      <div className="w-[97%] relative rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[250px] md:h-auto">
        <img
          src={chair_bg}
          alt="bg"
          className="w-full min-h-[250px] md:h-full object-cover rounded-[6px]"
        />
      </div>
      {/* sec 3 */}
      <div className="max-w-[97%] mx-auto py-[40px] md:py-[140px] flex flex-col  justify-center gap-[48px] items-center">
        <p className="mb-0 text-[16px] font-light md:text-[42px] text-[#D9D9D9] w-full max-w-[724px]">
          At the heart of Prieto’s lie.{" "}
        </p>
        <div className="flex justify-between gap-2 md:gap-6 flex-col w-full lg:flex-row">
          {cardsData?.map((card, index) => {
            return (
              <div
                key={index}
                className="flex justify-between gap-6 items-center bg-[#1A1A1C] rounded-[4px]"
              >
                <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-[26px]">
                  <img
                    src={card.title}
                    className={`h-[19px] md:h-[27px] ${
                      index <= 1
                        ? "max-w-[46px] md:max-w-[65px]"
                        : "max-w-[122px] md:max-w-[167px]"
                    } `}
                    alt="car"
                  />
                  <p className="mb-0 font-light text-[16px] md:text-[21px] leading-[26px] text-[#9B9B9B] max-w-[724px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between gap-2">
        <img src={vision_right} alt="s" className="w-[calc(50%-4px)]" />
        <img src={vision_left} alt="s" className="w-[calc(50%-4px)]" />
      </div>
      <Timeline />
      {/* bottom tree desktop */}
      <div className="w-[97%] mx-auto relative py-[160px]  justify-between items-center hidden md:flex">
        <div className="w-full max-w-[40%] mx-auto">
          <img
            src={tree_logo}
            alt="bg"
            className="w-[214px] h-[176px] mx-auto"
          />
        </div>

        <div className="relative w-full max-w-[60%]">
          <div className="w-full lg:max-w-[840px] relative flex flex-col gap-7">
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
        </div>
      </div>{" "}
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
