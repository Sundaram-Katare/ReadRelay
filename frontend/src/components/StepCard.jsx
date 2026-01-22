
export default function StepCard({ title, image, styling}) {
    return (
        <>
         <div className="rounded-2xl p-2 flex flex-col bg-blur bg-red-400/50 justify-center items-center">
            <img src={image} alt=""
                 className="my-4 h-40 bg-red-300 rounded-full p-4 "
            />
            <div className="px-2 py-4 bg-white text-center">
                <h1 className="font-baloo text-2xl text-black">{title}</h1>
            </div>
         </div>
        </>
    )
}