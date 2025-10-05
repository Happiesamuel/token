import Image from "next/image";
export default function Token() {
  return (
    <div className="py-5 flex justify-center items-center flex-col">
      <span className="flex space-x-3 items-center">
        <Image
          src="/layout/section.png"
          alt="sectionIcon"
          width={32}
          height={32}
        />
        <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">TOKEN UTILITY</h1>
      </span>
      <div className="flex flex-col flex-wrap md:flex-row md:justify-between justify-center items-center pt-6 space-x-2">
        <Image src="/layout/1.png" alt="1" width={350} height={100} />
        <Image src="/layout/2.png" alt="1" width={350} height={100} />
        <Image src="/layout/3.png" alt="1" width={350} height={100} />
      </div>
    </div>
  );
}
