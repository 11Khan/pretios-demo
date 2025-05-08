import React from "react";
import { start } from "../../../public/assets/images";

export default function Timeline() {
  return (
    <div className="md:py-[120px]">
      <div className="relative hidden md:block">
        <p className="text-[42px] text-center text-[#D9D9D9] font-extralight mb-[120px]">
          Historia
        </p>
        <div className="flex gap-5 justify-center ">
          <div className="w-full max-w-[400px]  ">
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[18px] text-[#898A8B] font-light text-end">
                January 1946
              </p>
            </div>
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[21px] text-white font-light mb-2">Genesis</p>
              <p className="text-[18px] text-[#898A8B] font-light">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[18px] text-[#898A8B] font-light text-end">
                Aug 1946
              </p>
            </div>
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[21px] text-white font-light mb-2">Soon</p>
              <p className="text-[18px] text-[#898A8B] font-light">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system.
              </p>
            </div>
          </div>
          <div className="relative h-[1400px] w-[4px] bg-[#2D2D30]">
            {/* Circle 1 - Top */}
            <div className="absolute left-1/2 top-[11px] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full">
              <img src={start} className="h-[26px] min-w-[26px]" alt="s" />
            </div>

            {/* Circle 2 */}
            <div className="absolute left-1/2 top-[26%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F1B564] bg-black" />

            {/* Circle 3 */}
            <div className="absolute left-1/2 top-[51%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#2D2D30] bg-black" />

            {/* Circle 4 */}
            <div className="absolute left-1/2 top-[76%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F1B564] bg-black" />

            {/* Circle 5 - Bottom */}
            <div className="absolute left-1/2 bottom-0 h-[26px] w-[26px] -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#2D2D30] bg-[#2D2D30]" />
          </div>

          <div className="w-full max-w-[400px] ">
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[21px] text-white font-light mb-2">Genesis</p>
              <p className="text-[18px] text-[#898A8B] font-light">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[18px] text-[#898A8B] font-light">
                April 1946
              </p>
            </div>
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[21px] text-white font-light mb-2">
                Exclusive Success.
              </p>
              <p className="text-[18px] text-[#898A8B] font-light">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur ...
              </p>
            </div>
            <div className="w-full max-w-[400px] min-h-[350px]">
              <p className="text-[18px] text-[#898A8B] font-light">Oct 2046</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block md:hidden px-3">
        <p className="text-[20px] pt-15 pb-20 text-center text-[#fff] font-light mb-2 leading-[20px] ">
          Roadmap
        </p>
        <div className="flex justify-start gap-5">
          <div className="min-w-[26px]">
            <div className="relative mx-auto  h-[800px] w-[4px] bg-[#2D2D30]">
              {/* Circle 1 - Top */}
              <div className="absolute left-1/2 top-[13px] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full">
                <img src={start} className="h-[26px] min-w-[25px]" alt="s" />
              </div>

              {/* Circle 2 */}
              <div className="absolute left-1/2 top-[26.5%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F1B564] bg-black" />

              {/* Circle 3 */}
              <div className="absolute left-1/2 top-[51.5%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#2D2D30] bg-black" />

              {/* Circle 4 */}
              <div className="absolute left-1/2 top-[76.5%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F1B564] bg-black" />

              {/* Circle 5 - Bottom */}
              <div className="absolute left-1/2 bottom-0 h-[26px] w-[26px] -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#2D2D30] bg-[#2D2D30]" />
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full min-h-[200px]">
              <p className="text-[19px] text-[#898A8B] font-light mb-2 leading-[19px] ">
                January 2025
              </p>
              <p className="text-[21px] text-white font-light mb-2 leading-[21px]">
                Genesis
              </p>
              <p className="text-[14px] text-[#898A8B] font-light ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="w-full min-h-[200px]">
              <p className="text-[19px] text-[#898A8B] font-light mb-2 leading-[19px] ">
                April 2025
              </p>
              <p className="text-[21px] text-white font-light mb-2 leading-[21px]">
                Exclusive Success.
              </p>
              <p className="text-[14px] text-[#898A8B] font-light ">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur ...
              </p>
            </div>
            <div className="w-full min-h-[200px]">
              <p className="text-[19px] text-[#898A8B] font-light mb-2 leading-[19px] ">
                May 2025
              </p>
              <p className="text-[21px] text-white font-light mb-2 leading-[21px]">
                Genesis
              </p>
              <p className="text-[14px] text-[#898A8B] font-light ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="w-full min-h-[200px]">
              <p className="text-[19px] text-[#898A8B] font-light mb-2 leading-[19px] ">
                Oct 2025
              </p>
              <p className="text-[21px] text-white font-light mb-2 leading-[21px]">
                Exclusive Success.
              </p>
              <p className="text-[14px] text-[#898A8B] font-light ">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
