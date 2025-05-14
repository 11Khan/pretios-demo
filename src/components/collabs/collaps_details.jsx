import React, { useState } from "react";
import { plus } from "../../assets/icons";

const sections = [
  {
    label: "Product info",
    desc: "Made from premium cotton, the jacket features an all ...",
    content: (
      <div className="mx-auto  max-w-[551px] w-full">
        <p className="text-[16px] md:text-[24px]  font-extralight mb-10">
          Made from premium cotton, the jacket features an all-over seasonal
          artwork in black. The green jacket has a relaxed fit, finished with a
          concealed button closure, two chest pockets and two side pockets.
          Complete the look with the matching Heart Printed pants.
        </p>
        <p className="text-[16px] md:text-[24px]  font-extralight">
          The Spring/Summer 2025 collection is a visual exploration of everyday
          scenery of Sub-Saharan African cultures. Captured entirely in Angola,
          the native country of Arte’s founder, the campaign reflects the rich,
          graphic elements like hand-painted walls and characteristic street
          typography. Featuring street-cast local youth alongside artists T-rex
          and Dada 2, it embodies the vibrant and creative spirit of Luanda’s
          street culture.
        </p>
      </div>
    ),
  },
  {
    label: "Materials",
    desc: "Made of 100% Cotton and is produced in Portugal.",
    content: (
      <div className="mx-auto max-w-[551px] w-full">
        <p className="text-[16px] md:text-[24px] font-extralight mb-0">
          Model is 6'1 and wears size 32. Slim fit, tapered leg.
        </p>
      </div>
    ),
  },
  {
    label: "Shipping",
    desc: "Belgium, The Netherlands, Luxembourg, France,",
    content: (
      <div className="mx-auto max-w-[551px] w-full flex flex-col gap-10">
        <div className="relative">
          <p className="text-[16px] md:text-[24px] font-extralight mb-6">
            Belgium, The Netherlands, Luxembourg, France, Germany — Free
            shipping
          </p>
          <p className="text-[16px] md:text-[24px] font-extralight">
            Delivery time: 1 - 3 business days
          </p>
        </div>
        <div className="relative">
          <p className="text-[16px] md:text-[24px] font-extralight mb-6">
            Austria, Czechia, Denmark, Estonia, Hungary, Italy, Switzerland,
            Norway, Sweden & Portugal Free shipping
          </p>
          <p className="text-[16px] md:text-[24px] font-extralight">
            Delivery time: 1 - 3 business days
          </p>
        </div>
        <div className="relative">
          <p className="text-[16px] md:text-[24px] font-extralight mb-6">
            Rest of Europe
          </p>
          <div className="">
            <p className="text-[16px] md:text-[24px] font-extralight">
              Free shipping from €100{" "}
            </p>
            <p className="text-[16px] md:text-[24px] font-extralight">
              Delivery time: 1 - 3 business days
            </p>
          </div>
        </div>
        <div className="relative">
          <p className="text-[16px] md:text-[24px] font-extralight mb-6">
            Rest of Europe
          </p>
          <div className="">
            <p className="text-[16px] md:text-[24px] font-extralight">
              Delivery time: 1 - 3 business days
            </p>
            <p className="text-[16px] md:text-[24px] font-extralight">
              Free shipping from €100{" "}
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function CollapsibleList() {
  const [openStates, setOpenStates] = useState(
    Array(sections.length).fill(false)
  );

  const toggle = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
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
                  className={`text-[24px] md:w-[551px] mt-[-8px] line-clamp-1 font-extralight hidden md:block`}
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
  );
}
