import React from "react";
import Faq from "../images/illustrations/faq.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

export default function Selanjutnya() {
  return (
    <div className="container mx-auto h-screen flex items-center">
      <div className="grid grid-cols-2 gap-16">
        <div className="mb-auto">
          <img src={Faq} alt="" />
        </div>
        {/* caption */}
        <div>
          <h2 class="font-bold text-3xl mb-3 leading-normal mt-36">
            <p className="text-primary text-sm mb-2 cursor-pointer">SUPPORT</p>
            Frequently asked questions
            <p className=" pb-4 mb-9 mt-9 py-3 flex items-center  text-base font-bold justify-between">
              why you should i choose NEFA?
              <FaAngleDoubleUp />
            </p>
          </h2>
          <p className="text-sm text-gray border-b border-lightgray py-6border-b  pb-4 mb-9 mt-9 py-3 flex items-center justify-between">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint earum
            aliquid odit quos perferendis pariatur nisi neque inventore deleniti
            reprehenderit,
          </p>

          <p className="border-b border-lightgray pb-4 mb-9 mt-9 py-3 flex items-center  text-base font-bold justify-between">
            How secure is NEFA
            <FaAngleDoubleDown />
          </p>

          <p className="border-b border-lightgray pb-4 mb-9 mt-9 py-3 flex items-center  text-base font-bold justify-between">
            Do i have to buy a whole Bitcoin?
            <FaAngleDoubleDown className="ml-96" />
          </p>

          <p className="border-b border-lightgray pb-4 mb-9 mt-9 py-3 flex items-center  text-base font-bold justify-between">
            How do i actually buy Bitcoin???
            <FaAngleDoubleDown className="ml-96" />
          </p>
        </div>
      </div>
    </div>
  );
}
