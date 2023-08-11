import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = ({ darkMode }) => {
    useEffect(() => {
        AOS.init();
    })
    return (
    <div className={`${darkMode ? "bg-dark text-white" : "bg-base-300"} about px-5 md:px-0 text-center flex flex-col justify-center min-h-screen`} id="about">
        <div className="container mx-auto mt-8 md:grid md:grid-cols-3">
            <div className="w-3/5 md:w-80 mx-auto" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                <img src="/assets/developer.png" />
            </div>
            <div className="col-span-2 text-left flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h1 className="text-5xl font-bold py-3">About Me</h1>
                <span className="w-full h-1 rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
                <p className="mt-4 text-xl text-justify">Hi, I'm Adnan Rohmat Kurniansah, a Software Engineer with expertise in web development. Currently, I can work as a Back-end Developer or Front-End Developer. I am a creative problem solver with a passion for building intuitive, user-friendly products that enhance the user experience.</p>
            </div>
        </div>
    </div>

    )
} 
export default About