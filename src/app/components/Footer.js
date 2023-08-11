const Year = new Date()

const Footer = ({ darkMode }) => {
    return (
    <div className={`${darkMode ? "bg-dark text-white" : "bg-white"} text-center flex flex-col justify-center`} id="footer">
        <div className="container md:mx-auto md:grid md:grid-cols-1">
            <section className="relative">
                <div className="px-5 mx-auto py-5">
                    <p className="mx-auto leading-relaxed text-sm">Copyright © {Year.getFullYear()} All rights reserved by <a className="text-indigo-600" target="_blank" href="https://github.com/AdnanRohmatKurniansah">ARK</a>.</p>
                </div>
            </section>
        </div>
    </div>
    )
}
export default Footer