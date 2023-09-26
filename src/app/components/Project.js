const Project = ({ darkMode }) => {

    const projects = [
        {
            name: 'Oasis Vila',
            image: '/assets/projects/villa.png',
            desc: 'Oasis Vila is a single web page specifically designed to promote a vila accommodations',
            site: 'https://villa.arkweb.my.id'
        },
        {
            name: 'Yuk Review',
            image: '/assets/projects/yukreview.png',
            desc: 'Web scrapping from imdb which will provides information about movies',
            site: 'https://yukreview.arkweb.my.id'
        },
        {
            name: 'Tic Tac toe',
            image: '/assets/projects/tictactoe.png',
            desc: 'Simple tic tac toe game that you can play with your friends',
            site: 'https://tic-tac-toe-gray-xi.vercel.app/'
        },
        {
            name: 'ImagineMate',
            image: '/assets/projects/imasite.png',
            desc: 'ImagineMate is a web generate image, you can imagine the image you want',
            site: 'https://imasite.vercel.app'
        },
        {
            name: 'Karma Store',
            image: '/assets/projects/karma.png',
            desc: 'Mini e-commerce website with integrated payment gateway midtrans and rajaongkir api',
            site: 'https://arksite.vaa.my.id'
        }
        
    ]

    return (
    <div className={`${darkMode ? "bg-dark text-white" : "bg-base-300"} projects flex flex-col justify-center`} id="projects">
        <div className="ml-5 md:ml-12 max-w-3xl">
            <h1 className="text-5xl font-bold mt-20 text-left">Projects</h1>
            <span className="my-5 mb-3 w-3/5 h-1 flex justify-center rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
            <p className={`text-2xl mt-3 ${darkMode ? "text-gray-200" : "text-gray-500"}`}>Projects I have done, Each project is briefly described with links to live demos in it</p>
        </div>
        <div className="container px-5 md:mx-auto mt-8 grid md:grid-cols-3 justify-center items-center gap-6">
          {projects.map((project, i) => {
              return (
              <div className="column text-black mt-5 md:mt-0" key={i} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                  <div className={`card p-3 text-center ${darkMode ? "bg-slate-800 text-white" : "bg-white"} shadow-lg rounded-xl`}>
                      <div className="content w-full h-full">
                          <img className="image" width="100%" src={project.image} style={{ height: '230px' }} />
                          <div className="text-left">
                            <h1 className="font-semibold my-2">{project.name}</h1>
                            <p className={`${darkMode ? "text-white" : "text-gray-500"}`}>{project.desc}</p>
                            <a className="btn my-2 btn-primary btn-sm" target="_blank" href={project.site}>Visit</a>
                          </div>
                      </div>
                  </div>
              </div>
              )
          })}
        </div>
        <div className="more mt-28 md:mt-28 mb-10 text-center">
            <h2 className="font-bold text-gray-500">Want to see more?</h2>
            <h2 className="font-bold">See on my <a className="underline decoration-solid" href="https://github.com/AdnanRohmatKurniansah?tab=repositories" target="_blank">github</a> for more</h2>
        </div>
    </div>
    )
}
export default Project