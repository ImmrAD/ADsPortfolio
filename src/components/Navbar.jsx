import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-red-800 via-black to-rose-950 w-full p-1">
      <div className="relative flex justify-between items-center px-10 py-3 text-white font-semibold tracking-wide">
        {/* Left Items */}
        <div className="flex flex-1 justify-evenly">
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-purple-300 transition"
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-purple-300 transition"
          >
            ABOUT
          </Link>
        </div>

        {/* Center Logo */}
        <img
          src="/logo_png_white.png"
          alt="Logo"
          className="left-1/2 top-full w-30 h-12 z-10"
        />

        {/* Right Items */}
        <div className="flex flex-1 justify-evenly">
          <Link
            to="work"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-purple-300 transition"
          >
            WORK
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-purple-300 transition"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
