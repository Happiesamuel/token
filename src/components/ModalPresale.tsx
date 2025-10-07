import { Dispatch, SetStateAction } from "react";

export default function ModalPresale({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="font-sora fixed inset-0 h-screen z-[999] bg-[#555555]/40 w-full flex justify-center items-center"
    >
      <div className="py-11 px-6 gap-2 flex flex-col items-center rounded-3xl bg-[#ffffff] w-11/12 max-w-md  ">
        <img src="/tick.png" className="w-[48px]" />
        <div className="flex items-start gap-0.5">
          <img src="/cpt-coin.png" className="w-[25px] pt-1" />
          <p className="text-black font-normal text-xl text-center">
            20,000CPT has been successfully deposited to
          </p>
        </div>
        <div className="bg-transparent hover:bg-transparent border-[0.1px] border-ui-blue py-1 px-2 rounded-md  flex gap-3 text-black">
          <img src="/wallet.png" className="w-[30px] " />
          <p className="text black font-normal text-xl">0x182...735A</p>
        </div>
      </div>
    </div>
  );
}
