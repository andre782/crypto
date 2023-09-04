import React from "react";
import emoji from "react-easy-emoji";
import TopGainers from "./TopGainers";
import RecenlyUpdate from "./RecentlyUpdate"
import { BsChevronDoubleRight } from "react-icons/bs";
// coin
import coinBitcoin from "../../images/crypto/Bitcoin.png";
import Ethereum from "../../images/crypto/ethereum.png"
import Doge from "../../images/crypto/doge.png"
import Tether from "../../images/crypto/tether.png"

import upCharts from "../../images/charts/up.svg"
import downCharts from "../../images/charts/down.svg"



export default function CryptocurenncySection() {
  return (
    <section className="-mt-10">
      <div className="container mx-auto rounded-3xl bg-white p-8 shadow">
        <div className="grid grid-cols-3">
        <div className="border-r border-gray border-opacity-10 h-29">
          <div className="flex flex-col px-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">
                {emoji("🔥 trending", {
                  props: { className: "inline mr-2 text-normal" },
                })}
              </span>
              <a href="/" className="text-primary text-sm">
                More
                <BsChevronDoubleRight className="inline ml-0" />
              </a>
            </div>
            <div className="grid grid-cols-3 mt-3">

              <div className="text-gray text-sm">Name
              <div className="flex items-end mt-2">
              <img className="w-7 mr-2 -mb-1" src={coinBitcoin} />
              <span className="text-sm">Bitcoin</span>
            </div>

            <div className="flex items-end mt-3">
              <img className="w-7 mr-2 -mb-1" src={Ethereum} />
              <span className="text-sm">Ethereum</span>
            </div>

            <div className="flex items-end mt-3">
              <img className="w-7 mr-2 -mb-1" src={Doge} />
              <span className="text-sm">Doge</span>
            </div>

            <div className="flex items-end mt-3">
              <img className="w-7 mr-2 -mb-1" src={Tether} />
              <span className="text-sm">Tether</span>
            </div>

              </div>


              <div className="text-gray text-sm">
                Price
                <div className="mt-3 text-green">
                  <span>$43,103.13</span>
                </div>

                <div className="mt-4 text-green">
                  <span>$43,103.13</span>
                </div>

                <div className="mt-4 text-green">
                  <span>$43,103.13</span>
                </div>

                <div className="mt-4 text-green">
                  <span>$43,103.13</span>
                </div>
              </div>



              <div className="text-gray text-sm">Chart
                <div className="mt-1">
                  <img className="w-20" src={upCharts} alt="" />
                </div>

                <div className="mt-2">
                  <img className="w-20" src={downCharts} alt="" />
                </div>

                <div className="mt-2">
                  <img className="w-20" src={upCharts} alt="" />
                </div>

                <div className="mt-2">
                  <img className="w-20" src={upCharts} alt="" />
                </div>

               
              </div>
            </div>
            </div>

           

            <div></div>
          </div>
          
   
                {/* gainers */}
                <div className="border-r border-gray border-opacity-10  h-29">
                  <TopGainers />
                </div>
                {/* end gainers */}
              
              {/* Recenly */}
                <RecenlyUpdate/>
              {/* recenlt end */}
        </div>
      </div>
    </section>
  );
}
