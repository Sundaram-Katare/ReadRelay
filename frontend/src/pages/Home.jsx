import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-indigo-600">
                <Navbar />
                <Hero />
                <Recommend />
            </div>
        </>
    )
}