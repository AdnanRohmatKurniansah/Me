const Skills = ({ darkMode }) => {

    const tech = ['html', 'css', 'bootstrap', 'javascript', 'php', 'mysql', 'react', 'nodejs', 'nextjs', 'tailwind', 'laravel', 'git']

    return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : ""} text-center flex flex-col justify-center min-h-screen`} id="skills" style={{ backgroundColor: darkMode ? '' : '#f5f5f5' }}>
        <div className="container px-5 md:mx-auto mt-8 md:grid md:grid-cols-3 gap-5">
            <div className="col-span-2 text-left flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h1 className="text-5xl font-bold py-3">My Skills</h1>
                <span className="w-full h-1 rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
                <p className="mt-4 text-xl text-justify">I have a deep understanding of HTML and CSS. Understand about how to use Rest Api and the manufacture, usually build it with Laravel or NodeJs. Familiar with SQL database such as MySQL. Experienced integrate payment gateway such as Midtrans. Can work individually or team.</p>
            </div>
            <div className="w-full mt-10 md:mt-0 md:mx-auto mb-10 md:mb-0 p-5 shadow-lg shadow-cyan-500/50 grid grid-cols-4 md:grid-cols-4 border border-sky-500 rounded-xl" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                {
                    tech.map((th, i) => {
                        return (
                            <div key={i} className="flex justify-center items-center my-5">
                                <img src={`/assets/tech/${th}.png`} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}
export default Skills