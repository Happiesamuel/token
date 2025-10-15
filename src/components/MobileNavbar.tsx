// import { FaBars } from "react-icons/fa6";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetTrigger,
// } from "../components/ui/sheet";
// import { Button } from "./ui/button";

// export default function MobileNav() {
//   const links = [
//     {
//       name: "About",
//       route: "#about",
//     },
//     {
//       name: "Roadmap",
//       route: "#roadmap",
//     },
//     {
//       name: "Tokenomics",
//       route: "#tokenomics",
//     },
//     {
//       name: "Whitepaper",
//       route: "#whitepaper",
//     },
//   ];

//   return (
//     <div className="flex justify-between fixed w-full z-[99] bg-white/50 items-center  px-4 py-5 backdrop-blur-md lg:hidden">
//       <a href="#home" className="flex items-center gap-1">
//         <img src="nav.png" className="object-contain object-center w-[100px]" />
//       </a>
//       <div className="flex items-center gap-4">
//         <Sheet>
//           <SheetTrigger>
//             <FaBars className={`cursor-pointer text-[20px] `} />
//           </SheetTrigger>
//           <SheetContent
//             side="left"
//             className="lg:hidden w-56 flex flex-col gap-8 z-[99]"
//           >
//             <div className="flex flex-col gap-8 mt-10">
//               {links.map((link) => (
//                 <SheetClose key={link.name} asChild>
//                   <a
//                     className="text-sm font-normal text-white-to-black"
//                     href={link.route}
//                   >
//                     {link.name}
//                   </a>
//                 </SheetClose>
//               ))}
//             </div>
//             <a href="#">
//               <Button className="px-6 py-4 bg-[#003DEF] shadow-lg hover:bg-[#003DEF]/90 w-[180px] sm:w-auto">
//                 Purchase $CPT
//               </Button>
//             </a>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }
