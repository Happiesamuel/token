import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useShowModal from "@/hooks/useShowModal";
import ModalPresale from "./ModalPresale";

export default function PresaleWidget() {
  const [pay, setPay] = useState(0);
  const [recieve, setRecieve] = useState(0);
  const { showModal, setShowModal } = useShowModal();
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="300"
        className=" border border-gray-600/40 w-[350px] bg-transparent  py-3 rounded-2xl mx-2 md:mx-0 px-4 flex flex-col items-center font-sora gap-4 text-stone-200"
      >
        <div className="gap-4 flex flex-col items-center">
          <div className="text-center gap-1">
            <h1 className="font-semibold  text-2xl">
              JOIN PRESALE
              <p className="text-base text-[#C0C0C0] font-normal">
                <span className="font-semibold">Presale period:</span> Coming Soon!
              </p>
            </h1>
          </div>
          <div className="text-base items-center gap-3 flex">
            <img src="/cpt-coin.png" className="w-[20px]" />
            <p className="text-sm text-stone-300">1 $CAPITA = $0.001</p>
          </div>
        </div>
        <div className="space-y-2 text-center w-full">
          <div className="rounded-[4px] bg-gray-700/40  p-1 px-2 flex flex-col items-start">
            <p className="text-xs text-[#DFDFDF]">You Pay</p>
            <div className="flex justify-between items-center w-full">
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPay(+e.target.value);
                  setRecieve(+e.target.value * 965);
                }}
                min={0}
                value={pay}
                type="number"
                className="focus:border-none w-[100%] px-0 text-xl lg:text-2xl shadow-none bg-transparent border-none"
              />
              <div className="flex gap-1 justify-end w-full">
                <div className="flex items-center gap-0.5">
                  <img src="/eth.png" className="w-[15px]" />
                  <p className="text-base  font-normal">ETH</p>
                </div>
                <div className="flex items-center gap-[2px]">
                  <img src="/base.png" className="w-[15px]" />
                  <p className="text-[#DFDFDF] text-base  font-normal">BASE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[4px] bg-gray-700/40 p-1 px-2 flex flex-col items-start">
            <p className="text-xs text-[#DFDFDF]">You Recieve</p>
            <div className="flex justify-between w-full items-center">
              <Input
                min={0}
                value={recieve}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setRecieve(+e.target.value);
                  setPay(+e.target.value / 965);
                }}
                type="number"
                className="focus:border-none w-[50%] px-0 text-white text-xl lg:text-2xl shadow-none bg-transparent border-none"
              />
              <div className="flex gap-1">
                <div className="flex  gap-[2px] items-center">
                  <img src="/cpt-coin.png" className="w-[15px] h-[15px]" />
                  <p className="text-[#DFDFDF] text-base  font-normal">CPT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full flex-col gap-4">
          {/* <Button
            onClick={() => setShowModal(true)}
            className="bg-transparent border border-white hover:bg-transparent w-full py-5 text-white"
          >
            Buy
          </Button> */}
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary bg-ui-blue border-none hover:bg-blue-900 w-full h-9 min-h-9"
          >
            Buy
          </button>
          <Button className="bg-ui-blue hover:bg-ui-blue/80 hover:scale-[1.06] transition-all duration-500  py-5 px-5 text-black">
            <img src="/wallet.png" className="w-[30%] " />
            <p className="text-white font-normal text-xl">Connect Wallet </p>
          </Button>
        </div>
      </div>
      {showModal && <ModalPresale setShowModal={setShowModal} />}
    </>
  );
}
