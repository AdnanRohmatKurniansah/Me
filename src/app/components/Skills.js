const Skills = ({ darkMode }) => {
    return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : ""} text-center flex flex-col justify-center min-h-screen`} id="experience" style={{ backgroundColor: darkMode ? '' : '#f5f5f5' }}>
    <div className="container mx-auto mt-8 md:grid md:grid-cols-3">
        <div className="mx-5 md:mx-0 col-span-2 text-left flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h1 className="text-5xl font-bold py-3">My Skills</h1>
            <span className="w-full h-1 rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
            <p className="mt-4 text-xl text-justify">I have a deep understanding of HTML and CSS. For styling I usually use Bootstrap or Tailwind. To make frontend part I usually use ReactJs with Vite or the ReactJs framework such as NextJs. Experienced in using php framework such as Laravel, and NodeJs for backend. Familiar with SQL database such as MySQL. Can integrate payment gateway such as Midtrans. Can work individually or team.</p>
        </div>
        <div className="w-4/5 md:w-full mt-10 md:mt-0 mx-auto mb-10 md:mb-0" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
            <img src="/assets/experience.png" style={{ width: '100%' }} />
        </div>
    </div>
</div>
    )
}
export default Skills