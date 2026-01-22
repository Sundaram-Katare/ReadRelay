import { Heart } from "lucide-react";
import AnimatedCards from "./AnimateCards";

export default function Hero() {
    return (
        <>
            <div className="min-h-80 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 mx-24 mt-16 font-baloo text-white flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-white text-center font-baloo text-6xl font-semibold">Discover, <span className="text-pink-300 px-2 py-1 rounded">Exchange</span>
                        <br />
                        <span className="text-center">&</span>
                        <br />
                       <div className="flex items-center space-x-2"> Fall in <Heart size={48} color="pink" className="mx-2" /> with Reading</div>
                    </h1>
                </div>

                {/* <div>
                    <p>
                        Read Relay is a community-driven platform where readers discover great books, exchange the ones they love, and get personalized recommendations.
                    </p>
                </div> */}

                <div className="flex flex-row justify-between items-center gap-20">
                    <button className="flex text-2xl mt-6 font-baloo text-black bg-white border-2 rounded-xl px-2 py-1 cursor-pointer hover:scale-[1.05] transition-all duration-200 ">
                     Get Started
                  </button>

                  <button className="flex text-2xl mt-6 font-baloo text-white bg-transparent border-black border-2 rounded-xl px-2 py-1 cursor-pointer hover:scale-[1.05] transition-all duration-200 ">
                     Explore
                  </button>
                </div>

                <div>
                   <AnimatedCards />
                </div>
            </div>
        </>
    )
}