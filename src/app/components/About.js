import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="bg-base-300 text-black text-center flex flex-col justify-center min-h-screen">
    <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="w-3/5 mx-auto" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
            <img src="/assets/developer.png" style={{ width: '100%' }} />
        </div>
        <div className="about w-4/5 text-left flex flex-col justify-center" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="mt-4 text-xl">Hello, my name is Adnan Rohmat Kurniansah. I'm a Full Stack Web Developer Enthusiast. I'm currently studying software engineering. I like technologies that's why I'm choosing software engineering as my major. Web technologies is my favorite subject, espicially at back-end, but i would like to create front-end too.</p>
        </div>
    </div>
    <i className="text-black text-4xl mt-20 fa-sharp fa-solid fa-arrow-down fa-fade"></i>
</div>

    )
} 
export default About