import React, { useState } from "react";
import {
  buying_right_img,
  cen_logo,
  Exclussive,
  excsuccess,
  img_1,
  img_2,
  img_3,
  logo,
  redshirt_men,
  right_arrow,
  sec_five_img1,
  sec_five_img2,
  sec_five_img3,
  sec_five_img4,
  sec_four_img1,
  sec_four_img1_sec_2,
  sec_four_img2,
  sec_four_img2_sec_2,
  sec_four_img3,
  sec_three_img1,
  sec_three_img2,
  sec_three_img3,
  sub_des_desk,
  wheat,
} from "../../assets/images";
import {
  buying_banner,
  chair_bg,
  mani_bg,
  tree_logo,
} from "../../assets/banners";
import { Swiper, SwiperSlide } from "swiper/react";
import { plus } from "../../assets/icons";
import CollapsibleList from "../../components/collabs/collaps_details";
const imagesSecOne = [
  { img: img_1, label: "Heart Printed Jacket" },
  { img: img_2, label: "Gold Marked Jeans" },
  { img: img_3, label: "Blue Federed Hody" },
  { img: img_1, label: "Heart Printed Jacket" },
  { img: img_2, label: "Gold Marked Jeans" },
  { img: img_3, label: "Blue Federed Hody" },
];

const sections = [
  {
    label: "Pieces",
    desc: "Heart Printed Jacket",
    content: (
      <div className="mx-auto  max-w-[551px] w-full">
        <p className="text-[16px] md:text-[24px]  font-extralight mb-10">
          Heart Printed Jacket
        </p>
        <div className="w-full md:max-w-[580px] flex flex-col gap-10">
          <p className="text-[16px] md:text-[24px] text-[#EAB875]  font-extralight">
            Pre-paid
          </p>
          <div className="flex justify-between items-center">
            <p className="mb-0 text-[21px] text-white  ">Select size</p>
            <p className="mb-0 text-[21px] text-[#6A6A70]  ">Select </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="mb-0 text-[21px] text-white  ">Access</p>
            <img
              src={Exclussive}
              alt="logo"
              className="w-full max-w-[89px]  max-h-[25px]  "
            />{" "}
          </div>
          <button className="rounded-[4px] mb-2 md:mb-0 py-2 md:py-3 text-[#0B0B0D] bg-[#F1B564] max-w-[380px] w-full text-[16px] md:text-[21px] font-medium ">
            Add to Cart
          </button>
        </div>
      </div>
    ),
  },
];
export default function Building() {
  const [open, setOpen] = useState(false);
  const [openStates, setOpenStates] = useState(
    Array(sections.length).fill(false)
  );

  const toggle = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="relative w-full max-w-[1576px] mx-auto ">
      {/* top */}
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
      {/* header */}
      <div className=" relative rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[550px] md:h-auto">
        <img
          src={buying_banner}
          alt="bg"
          className="w-full min-h-[550px] md:h-full object-cover rounded-[6px]"
        />

        <div className="mb-0 absolute flex justify-center md:justify-end items-center gap-2 bottom-3 md:bottom-5 cursor-divointer font-extralight left-0 right-0 md:right-5 text-[#EAB875] text-end text-[60px] md:min-w-[311px] ">
          <img src={wheat} alt="wheat" className="w-[43px] h-[51px]" />{" "}
          <span>Sold Out</span>
        </div>
      </div>
      <div className="w-[97%] lg:w-full mx-auto">
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
            // centeredSlides={true}
            loop={true}
            grabCursor={true}
            className="mySwiper"
          >
            {imagesSecOne.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!w-[360px] sm:!w-[50%]  md:max-w-[calc(33.333%-8px)] flex justify-center items-center"
              >
                <div className="relative flex flex-col gap-5">
                  <div className="absolute bg-[#0B0B0D] top-3 left-3 h-[32px] gap-3 px-2 flex justify-between items-center rounded-[4px]">
                    <img src={wheat} alt="s" className="w-[17px] h-[20px]" />
                    <p className="text-[14px] text-[#EAB875] font-extralight mb-0 uppercase">
                      Sold Out
                    </p>
                  </div>
                  <img
                    src={item.img}
                    alt={`img-${index}`}
                    className="w-full h-auto min-h-[300px] max-h-[500px] rounded-[4px] object-cover"
                  />
                  <p className="mb-0 text-[24px] text-white font-light fonr-Inter text-center">
                    {item.label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* gold mark jeans details collaps */}
        <div className="border-t border-b border-white my-[160px] divide-y divide-white">
          {sections.map((section, i) => (
            <div key={i}>
              {/* Header */}
              <div
                className="flex justify-between  py-10 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <p className="text-[16px] md:text-[22px] md:w-[113px]  md:leading-[22px] font-extralight">
                  {section.label}
                </p>
                <div
                  className={`relative max-w-[551px] hidden md:block mx-auto transition-all duration-500  ${
                    openStates[i] ? "max-h-[620px] overflow-hidden" : "max-h-0"
                  }`}
                >
                  {!openStates[i] ? (
                    <p
                      className={`text-[24px] md:w-[551px] line-clamp-1 font-extralight hidden md:block`}
                    >
                      {section.desc}
                    </p>
                  ) : (
                    <div className=" md:w-[551px] ">{section.content}</div>
                  )}
                </div>
                <img
                  src={plus}
                  className={`h-6 min-w-6 transform transition-transform duration-300 ${
                    openStates[i] ? "rotate-45" : ""
                  }`}
                  alt="toggle"
                />
              </div>
              <div
                className={`relative max-w-[551px] md:hidden  mx-auto transition-all duration-500  ${
                  openStates[i] ? "max-h-[620px] overflow-hidden" : "max-h-0"
                }`}
              >
                {!openStates[i] ? (
                  <p
                    className={`text-[16px] md:text-[24px] md:w-[551px] line-clamp-1  font-extralight hidden md:block`}
                  >
                    {section.desc}
                  </p>
                ) : (
                  <div className=" md:w-[551px] ">{section.content}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* two cat images  */}
        <div className="w-full flex justify-between gap-2 flex-col md:flex-row">
          <div className="w-full h-[200px] md:h-auto md:w-[calc(50%-4px)] flex justify-center items-center">
            <p className="max-w-[339px] md:max-w-[450px] text-center md:text-left mb-0 text-[20px] md:text-[24px] font-extralight">
              A sumptuous blend of the{" "}
              <span className="text-[#F3F3F3] font-normal">
                {" "}
                finest silk and cashmere,
              </span>{" "}
              this fabric drapes like liquid gold, whispering luxury with every
              movement.
            </p>
          </div>
          <img
            src={buying_right_img}
            alt="s"
            className="w-full md:w-[calc(50%-4px)]"
          />
        </div>
        {/* three cat images  */}
        <div className="w-full flex justify-between flex-col md:flex-row gap-2 my-10 md:my-[160px]">
          <img
            src={sec_three_img1}
            alt="s"
            className="h-[150px] object-cover w-full md:h-auto md:w-[calc(38%-4px)]"
          />
          <img
            src={sec_three_img2}
            alt="s"
            className="h-[150px] object-cover w-full md:h-auto md:w-[calc(23.5%-4px)] max-h-[334px]"
          />
          <img
            src={sec_three_img3}
            alt="s"
            className="h-[150px] object-cover w-full md:h-auto md:w-[38%] self-end"
          />
        </div>
        {/* chair bg */}
        <div className="relative rounded-[6px] pt-[6px] mx-auto md:w-full min-h-[250px] md:h-auto">
          <img
            src={chair_bg}
            alt="bg"
            className="w-full min-h-[250px] md:h-full object-cover rounded-[6px]"
          />
        </div>
        <div className="w-full my-10 md:my-[160px]">
          {/* three cat images  */}
          <div className="w-full flex gap-2 max-h-[620px] mb-3">
            <div className="flex-1">
              <img src={sec_four_img1} alt="s" className="w-full md:h-auto " />
            </div>
            <div className="flex-1">
              <img src={sec_four_img2} alt="s" className="w-full md:h-auto " />
            </div>
            <div className="flex-1">
              <img src={sec_four_img3} alt="s" className="w-full md:h-auto " />
            </div>
          </div>
          {/* two of grid */}
          <div className="w-full flex justify-between gap-2">
            <img
              src={sec_four_img1_sec_2}
              alt="s"
              className="w-[calc(50%-4px)] md:w-[calc(31%-4px)] h-[250px] md:h-auto  md:max-h-[584px]"
            />
            <img
              src={sec_four_img2_sec_2}
              alt="s"
              className="w-[calc(50%-4px)] md:w-[calc(69%-4px)] object-cover md:object-contain h-[390px]  md:h-auto"
            />
          </div>
        </div>
        {/* one of grid and centre */}
        <div className="w-full flex justify-center gap-2 mb-10 md:mb-[160px]">
          <div className="max-w-[850px]">
            <img
              src={redshirt_men}
              alt="s"
              className="w-full mb-8 max-w-[580px] mx-auto"
            />
            <p className="mb-0 max-w-[309px] mx-auto md:w-full md:max-w-[850px] text-[16px] md:text-[24px] font-extralight text-center">
              A sumptuous blend of the finest silk and cashmere, this fabric
              drapes like liquid gold, whispering luxury with every movement.
            </p>
          </div>
        </div>
        {/* four of grid cat images  */}
        <div className="w-full flex justify-between md:gap-2">
          <img
            src={sec_five_img1}
            alt="s"
            className="h-[180px] object-cover md:object-contain md:h-auto w-[calc(25%-4px)]"
          />
          <img
            src={sec_five_img2}
            alt="s"
            className="h-[180px] object-cover md:object-contain md:h-auto w-[calc(25%-4px)]"
          />
          <img
            src={sec_five_img3}
            alt="s"
            className="h-[180px] object-cover md:object-contain md:h-auto w-[calc(25%-4px)]"
          />
          <img
            src={sec_five_img4}
            alt="s"
            className="h-[180px] object-cover md:object-contain md:h-auto w-[calc(25%-4px)]"
          />
        </div>
        <CollapsibleList />
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
    </div>
  );
}
