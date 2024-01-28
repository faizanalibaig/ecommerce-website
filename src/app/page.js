import NavBar from "./components/NavBar";
import { Poppins } from "next/font/google";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export const poppins= Poppins({ 
  weight:['400', '700'],
subsets: ["latin"]
})

export default function Home() {
  return (
    <div className=""> 
       <main className={`flex flex-col sm:flex-col md:gap-16 max-w-7xl mx-auto ${poppins.className}`}>
       <NavBar />
       <div className="flex gap-10 flex-col pb-10 md:flex-row">
        {/* left */}
        <div className="">
          <LeftSide />
        </div>
        <div className="px-6">
        <RightSide/>
        </div>
        {/* right */}
       </div>
       </main>
    </div>
  );
}
