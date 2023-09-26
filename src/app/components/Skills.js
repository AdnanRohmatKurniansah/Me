const Skills = ({ darkMode }) => {

    const tech = ['html', 'css', 'bootstrap', 'javascript', 'php', 'mysql', 'react', 'nodejs', 'express', 'nextjs', 'mongodb',  'tailwind', 'laravel', 'git']

    return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : ""} text-center flex flex-col justify-center min-h-screen`} id="skills" style={{ backgroundColor: darkMode ? '' : '#f5f5f5' }}>
        <div className="container px-5 md:mx-auto my-8 ">
        <div className="mx-5 md:mx-auto  text-center">
            <h1 className="text-5xl font-bold">Tech Stacks</h1>
            <span className="mx-auto my-5 mb-3 w-2/5 h-1 flex justify-center rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
            <p className={`text-2xl mt-3 ${darkMode ? "text-gray-200" : "text-gray-500"}`}>Here is the technology that I often use and understand</p>
        </div>
        <div className="w-full md:w-1/2 my-0 md:my-10 md:mt-0 md:mx-auto md:mb-0 p-5 grid-cols-5 md:grid-cols-7 flex flex-wrap justify-center items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" style={{ justifyItems: 'center', alignItems: 'center' }}>
        {
            tech.map((th, i) => {
                return (
                    <div key={i} className={`icon border border-base-300 ${darkMode ? "bg-gray-200" : ""} rounded-lg p-1 m-2`}>
                        <img className="w-full" src={`/assets/tech/${th}.png`} />
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
