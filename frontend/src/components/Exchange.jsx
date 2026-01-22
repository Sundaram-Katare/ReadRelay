import { motion } from "framer-motion";
import StepCard from "./StepCard";

export default function Exchange() {
    return (
        <>
         <div className="bg-transparent mx-24 mt-16 font-baloo flex flex-col items-center justify-center">
             
             <h1 className="text-4xl text-white font-semibold text-center mb-8">Exchnage Books, Not Just <span className="text-pink-300">Opinions</span></h1>

             <p className="font-light text-xl text-center text-white">
                Finished reading a book? Pass it on.<br />
                List your books for exchange and connect with readers who are genuinely interested.
             </p>

             <div className="grid grid-cols-3 gap-10 my-8"> 
                <StepCard title={"List a book you own"} image={"https://www.pngmart.com/files/23/Cartoon-Books-PNG-Isolated-HD.png"} styling={""} />
                <StepCard title={"List a book you own"} image={"https://www.pngmart.com/files/23/Cartoon-Books-PNG-Isolated-HD.png"} styling={""} />
                <StepCard title={"List a book you own"} image={"https://www.pngmart.com/files/23/Cartoon-Books-PNG-Isolated-HD.png"} styling={""} />            
            </div> 
         </div>
        </>
    )
}