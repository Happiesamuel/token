import { Dispatch, SetStateAction } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useWaitlist } from "@/hooks/useWaitlist";

export default function Modal({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { handleEmail, setEmail, email, emailSet, isLoading } = useWaitlist();
  return (
    <div
      // onClick={() => setShowModal(false)}
      className="font-sora fixed inset-0 h-screen z-[999] bg-[#555555]/40 w-full flex justify-center items-center"
    >
      <div className="px-8 pb-8 gap-2 flex flex-col rounded-3xl bg-[#ffffff] w-11/12 md:max-w-lg max-w-xl   ">
        <div className="flex justify-between">
          <div />
          <img src="/coming.png" className="w-[180px] lg:w-[200px]" />
          <img
            src="/x.png"
            onClick={() => setShowModal(false)}
            className="w-[17px] h-[17px] mt-8 cursor-pointer"
          />
        </div>
        <div className="space-y-4">
          <Label className="font-normal text-[#282336] text-lg lg:text-xl leading-[25px]">
            Subscribe for early access news, to stay ahead of everyone on Capita
          </Label>
          <Input
            type="text"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#F2F2F2] py-3 px-4 rounded-lg font-normal text-gray-600 text-xl focus:border-2 focus:border-blue-600"
            disabled={emailSet || isLoading}
          />
          <div className="text-end">
            <Button
              className="bg-ui-blue hover:bg-ui-blue/90 text-xl font-normal"
              onClick={handleEmail}
              disabled={emailSet || isLoading}
            >
              {isLoading
                ? "Submitting..."
                : emailSet
                ? "Submitted"
                : "Join waitlist"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
