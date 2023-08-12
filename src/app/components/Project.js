const Project = ({ darkMode }) => {

    const projects = [
        {
            name: 'Oasis Vila',
            image: '/assets/projects/villa.png',
            desc: 'Oasis Vila is a single web page specifically designed to promote a vila accommodations',
            site: 'https://villa.arkweb.my.id'
        },
        {
            name: 'Tic Tac toe',
            image: '/assets/projects/tictactoe.png',
            desc: 'Simple tic tac toe game that you can play with your friends',
            site: 'https://tic-tac-toe-gray-xi.vercel.app/'
        },
        {
            name: 'YukReview',
            image: '/assets/projects/yukreview.png',
            desc: 'YukReview is a web scrapping from imdb which will provides information about movies',
            site: 'https://yukreview.arkweb.my.id'
        },
        {
            name: 'Karma Store',
            image: '/assets/projects/karma.png',
            desc: 'Mini e-commerce website with integrated payment gateway midtrans and rajaongkir api',
            site: 'https://arksite.vaa.my.id'
        }
        
    ]

    return (
    <div className={`${darkMode ? "bg-dark text-white" : "bg-base-300"} projects text-center flex flex-col justify-center`} id="projects">
      <h1 className="text-5xl mx-5 md:mx-auto font-bold mt-20 text-center">My Projects</h1>
      <span className="mx-auto mt-5 mb-3 w-2/5 h-1 flex justify-center rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
        <div className="px-5 md:container md:px-52 mt-8">
            {projects.map((project, i) => {
                return (
                    <div className="project md:grid md:grid-cols-4 mb-10" key={i} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div className="project-img col-span-2 flex justify-end">
                            <img className="w-full md:w-3/4 h-full md:h-48 rounded-xl" src={project.image} />
                        </div>
                        <div className="project-detail col-span-2 my-auto pl-0 md:pl-8">
                            <h1 className="text-left text-xl mt-2 font-bold">{project.name}</h1>
                            <div className="project-desc text-left pt-2">
                                <p className="text-lg">{project.desc}</p>
                            </div>
                            <div className="view flex mt-3 gap-2">
                                <a href={project.site} target="_blank" className="btn btn-sm btn-info text-white bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/50">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        <div className="more mt-16 md:mt-20 mb-10">
            <h2 className="font-bold text-gray-500">Want to see more?</h2>
            <h2 className="font-bold">See on my <a className="underline decoration-solid" href="https://github.com/AdnanRohmatKurniansah?tab=repositories" target="_blank">github</a> for more</h2>
        </div>
    </div>
    )
}
export default Project