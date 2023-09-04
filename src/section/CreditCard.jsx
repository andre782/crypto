import React from "react";
import CardCredit from "../images/illustrations/credit-card.png";
import Verified from "../images/partners/verif.png";
import PrimaryButton from "../components/button/PrimaryButton"

export default function CreditCard() {
  return (
    <div className="container mx-auto h-screen flex items-center">
      <div className="grid grid-cols-2 gap-16">
        {/* image */}
        <div>
          <img src={CardCredit} alt="" />
        </div>

        <div className="">
          <h2 class="font-bold text-3xl mb-6 leading-normal ">
            Memperkenalkan <span className="text-cyan-400">NEFA</span>
            <br />
            <span className="mt-2">Credit Card</span>{" "}
          </h2>
          <p className="text-gray text-base">
            Subject to placeholder and rewards terms which will be availaable at
            application
          </p>

          <div class="mt-6">
          <p class="mb-4 flex items-center text-lg">
              <span class="mr-2">
                <img class="w-4 h-4" src={Verified} alt="" />
              </span>
              up to 3% back on purchase
            </p>
            <p class="mb-4 flex items-center text-lg">
              <span class="mr-2">
                <img class="w-4 h-4" src={Verified} alt="" />
              </span>
              Earn rewards in bitcoin or ny crypto on NEFA
            </p>
            <p class="mb-4 flex items-center text-lg">
              <span class="mr-2">
                <img class="w-4 h-4" src={Verified} alt="" />
              </span>
                No annual fee
            </p>

              <div className="mt-9">
            <PrimaryButton >
              <span className="flex justify-center cursor-pointer">join the waitlist</span>
            </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
