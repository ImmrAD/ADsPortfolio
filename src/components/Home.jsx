import { Link } from "react-scroll";
import WavyText from "./WavyText";
import PolaroidFrame from "./PolaroidFrame";

export default function Home() {
    return (
        // The main container for the entire hero section
        <div 
            id="home" 
            className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-red-800 via-black to-rose-950 text-white"
        >
            {/* Inner container for content, handles responsive layout and padding */}
            <div 
                className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-10 lg:gap-16 w-full max-w-7xl mx-auto px-6 pt-4 pb-16 md:px-10 md:py-15"
            >
                {/* Left Side: Polaroid Image */}
                <div className="flex justify-center md:w-1/3">
                    <PolaroidFrame 
                        imageUrl="/ADFinalPic.png" 
                        caption=" "
                        alt="A polaroid of Anand Dane"
                        rotation={-5}
                        height="270px"
                        width="180px"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex flex-col md:w-2/3 text-center md:text-left space-y-4">
                    
                    {/* --- MODIFICATION START --- */}
                    {/* This block handles the responsive heading text */}
                    <div>
                        {/* Visible only on MOBILE */}
                        <div className="md:hidden flex flex-col items-left ">
                            <WavyText text="Hello, This " />
                            <WavyText text="is Anand Dane" />
                        </div>

                        {/* Visible only on DESKTOP (md screens and up) */}
                        <div className="hidden md:block">
                            <WavyText text="Hello, This is Anand Dane" />
                        </div>
                    </div>
                    {/* --- MODIFICATION END --- */}

                    <h2 className="text-2xl text-left md:text-3xl lg:text-4xl  tracking-wide">
                        MERN Stack Developer.
                    </h2>
                    
                    <p className="text-base text-justify md:text-lg text-gray-300  leading-relaxed">
                        I'm a self-taught MERN stack developer with 3+ months of hands-on experience in building responsive, user-friendly web applications. I prioritize writing clean, maintainable code and crafting intuitive designs that deliver smooth user experiences. My work is driven by a strong focus on aligning functionality with real-world user needs and business goals.
                    </p>
                    
                    {/* Contact Button with responsive alignment */}
                    <div className="pt-4 flex justify-center md:justify-start">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer"
                        >
                            <button className="bg-red-500 hover:bg-red-600 transition-colors py-2.5 px-8 rounded-full text-white font-semibold shadow-lg hover:shadow-red-500/50">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}