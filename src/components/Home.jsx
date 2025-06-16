import { Link } from "react-scroll";
import WavyText from "./WavyText";
export default function(){
    return(
        <div id="home" className="relative bg-gradient-to-r from-sky-900 via-purple-400 to-purple-900  w-full">
            <div className="relative flex justify-between items-center px-10 py-3 text-white tracking-wide">
                <div className="flex flex-1 justify-evenly -mb-3">
                    <img src="/ADFinalPic.png" alt="Anand Dane" />
                </div>
                <div className="flex flex-1 justify-evenly">
                    <div>
                     <WavyText text="Hello, This is Anand" />
                    <h2 className="text-2xl p-2">MERN Stack Developer.</h2>
                    <p className="text-lg p-2">I'm a self-taught MERN stack developer with 3+ months of hands-on experience in building responsive, user-friendly web applications. I prioritize writing clean, maintainable code and crafting intuitive designs that deliver smooth user experiences. My work is driven by a strong focus on aligning functionality with real-world user needs and business goals.</p>
                       {/* Contact Button with Smooth Scroll */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-60} // optional: offset for fixed headers
          >
            <button className="bg-red-500 hover:bg-red-600 transition-colors py-2 px-6 mt-6 rounded-2xl text-white font-medium">
              Contact
            </button>
          </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}