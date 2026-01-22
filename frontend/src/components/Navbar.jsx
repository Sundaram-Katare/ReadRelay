
export default function Navbar() {
    return (
        <>
            <nav className="flex mx-24 bg-transparent justify-between items-center font-baloo">
                <h1 className="text-3xl font-bold text-white ">
                    Read Relay
                </h1>

                <div className="flex gap-10 justify-between text-2xl font-light text-white">
                    <h3>Home</h3>
                    <h3>Explore</h3>
                    <h3>Contact Us</h3>
                </div>

                <div>
                    <button>Get Started</button>
                </div>
            </nav>
        </>
    )
}