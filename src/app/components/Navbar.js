import { Link } from "react-scroll";

const Navbar = ({ darkMode, toggleMode }) => {
  return (
    <div className={`navbar ${darkMode ? "navBg-dark" : "bg-white"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${darkMode ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${darkMode ? "text-white bg-blue-950" : "text-black bg-base-100"} rounded-box w-52`}>
            <li><Link to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
            <li><Link to="projects" spy={true} smooth={true} duration={1000}>Projects</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
          </ul>
        </div>
        <a className={`btn btn-ghost normal-case ${darkMode ? "text-white" : "text-black"} text-3xl`}>
          ARK.
        </a>
      </div>
      <div className={`navbar-center hidden lg:flex ${darkMode ? "text-white navBg-dark" : "text-black bg-white"}`}>
        <ul className="menu menu-horizontal px-1">
          <li><Link to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
          <li><Link to="projects" spy={true} smooth={true} duration={1000}>Projects</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-circle btn-ghost">
          <label className="swap w-12 h-12">
            <img src="/assets/toggle/night.png" className="w-8 h-8 swap-off image-full rounded-full" />
            <input
              type="checkbox"
              onChange={toggleMode}
              checked={darkMode}
            />
            <img src="/assets/toggle/sun.png" className="w-8 h-8 swap-on image-full rounded-full" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;