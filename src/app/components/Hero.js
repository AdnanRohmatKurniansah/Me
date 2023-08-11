import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Hero = ({ darkMode }) => {
    return (
    <div className={`hero bg-transparent flex flex-col justify-center  min-h-screen ${darkMode ? "text-white" : ""}`}>
    <div className="container mx-auto md:grid md:grid-cols-2">
      <div className="w-2/5 mt-10 md:mt-0 md:w-56 image-full mb-5 mx-auto flex justify-center items-center">
        <img className='rounded-full bg-gray-900' src="/assets/pp.jpg" width="100%"/>
      </div>
      <div className="intro my-auto text-center md:text-left">
        <h1 className="text-5xl font-bold">
          Hello there, I'm
          <span className={`${darkMode ? "text-blue-300" : "text-blue-700"}`}>
            <Typewriter
              options={{
                strings: ["Adnan", "WebDev", "Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="mt-7 text-xl">
          My expertise lies in web development and I have a understanding
          of both front-end and back-end technologies. I have a deep interest in
          technology and it drives me to constantly seeking opportunities to
          expand my knowledge and improve my skills.
        </p>
        <div className="icons flex flex-grow gap-3 text-4xl mt-3 mx-auto">
          <a href='https://www.linkedin.com/in/adnan-rohmat-kurniansah-41576827a/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/AdnanRohmatKurniansah' target='_blank'><i className="fa-brands fa-square-github"></i></a>
          <a href='https://www.instagram.com/adn.rk_/' target='_blank'><i className="fa-brands fa-square-instagram"></i></a>
        </div>
      </div>
    </div>
    <Link
      to="about"
      spy={true}
      smooth={true}
      duration={1000}
    >
      <i className="text-4xl mt-20 fa-sharp fa-solid fa-arrow-down fa-fade"></i>
    </Link>
    </div>
    )
}
export default Hero