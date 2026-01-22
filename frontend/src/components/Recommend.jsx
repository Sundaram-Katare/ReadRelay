import { motion } from "framer-motion";
import { ArrowBigDownIcon, ArrowLeftSquare } from "lucide-react";

export default function Recommend() {
    return (
        <>
            <div className="min-h-80 flex justify-center items-center mx-24 mt-16 bg-white font-baloo p-4 rounded-2xl">
                <div className="grid grid-cols-2 gap-20 p-6">

                    <div className="relative">
                        <h1 className="font-baloo text-indigo-600 text-6xl font-semibold">
                            Books Recommended
                            <br />
                            <span className="text-black mt-1">Just for you!</span>
                        </h1>

                        <p className="font-baloo text-2xl font-light">
                            Answer a few simple questions and let our <br />
                            <span className="bg-yellow-300 px-1 rounded-xl">AI (Mrs. Perigin) </span> understand your reading preferences.
                            Get personalized book recommendations that actually make sense.
                        </p>

                        <div className="top-80 absolute">
                          <motion.button className="flex bg-black text-xl items-center gap-5 text-white px-2 py-1 rounded-2xl ">
                            Meet Mrs. Perigin <ArrowLeftSquare />
                          </motion.button>
                        </div>
                    </div>

                    <div>
                      {/* <div className="bg-yellow-500 h-40 w-40 rounded-full z-0" />   */}
                      <img src="https://png.pngtree.com/png-clipart/20241007/original/pngtree-3d-cartoon-character-of-a-smart-librarian-with-stack-books-png-image_16233131.png" 
                           className="bg-pink-300 rounded-full"
                      alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}