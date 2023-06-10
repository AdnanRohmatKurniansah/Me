import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
    <div className="hero bg-transparent text-white text-center flex flex-col justify-center min-h-screen">
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className='imgMobile w-32 image-full mx-auto' style={{ display: 'none' }}>
                <img src="/assets/meow.png" />
            </div>
            <div className="intro ">
            <h1 className="text-5xl font-bold">Hello there, I'm 
                <span className='text-gray-300'>
                <Typewriter
                options={{
                    strings: ['Adnan', 'WebDev', 'Student'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </span></h1>
            <p className="mt-3 text-lg">Iam a junior web developer. I can work in both backend and frontend</p>
            <ul className="list-none flex text-3xl mt-3">
                <li><i className="fa-brands fa-square-facebook mr-3"></i></li>
                <li><i className="fa-brands fa-square-instagram mr-3"></i></li>
                <li><i className="fa-brands fa-square-github mr-3"></i></li>
                <li><i className="fa-brands fa-square-twitter mr-3"></i></li>
            </ul>
            </div>
            <div className="w-80 image-full mx-auto">
                <img src="/assets/meow.png" />
            </div>
        </div>
        <i className="text-white text-4xl mt-20 fa-sharp fa-solid fa-arrow-down fa-fade"></i>
    </div>

    )
}
export default Hero