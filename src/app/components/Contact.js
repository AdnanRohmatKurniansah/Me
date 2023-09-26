import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

const Contact = ({ darkMode }) => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            `${process.env.NEXT_PUBLIC_SERVICE_ID}`, 
            `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, 
            form.current, 
            `${process.env.NEXT_PUBLIC_USER_ID}`
            )
          .then((result) => {
              console.log(result.text);
              const Toast = Swal.mixin({
                toast: true,
                iconColor: 'white',
                position: 'top-end',
                customClass: {
                    popup: 'colored-toast'
                },
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
              })
              
              Toast.fire({
                  icon: 'success',
                  title: "E-mail successfully sent"
              });
              resetForm();
          }, (error) => {
              console.log(error.text);
          });
      };

    const resetForm = () => {
      form.current.reset();
    };

    return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : ""} contact text-center flex flex-col justify-center min-h-screen`} id="contact" style={{ backgroundColor: darkMode ? '' : '#f5f5f5' }}>
      <h1 className="text-5xl mx-5 md:mx-auto font-bold mt-10 text-center">Contact Me</h1>
      <span className="mx-auto mt-5 w-1/5 h-1 flex justify-center rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500"></span>
      <div className="container px-5 md:mx-auto mt-5 md:grid md:grid-cols-1">
        <section className="body-font relative">
        <div className="container px-5 pb-20 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <p className="mx-auto leading-relaxed text-xl">Interested working with me? Send me a mail.</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label for="name" className="leading-7 text-sm">Name</label>
                        <input type="text" required id="name" name="from_name" className="w-full bg-white bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    </div>
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label for="email" className="leading-7 text-sm">Email</label>
                        <input type="email" required id="email" name="from_email" className="w-full bg-white bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label for="message" className="leading-7 text-sm">Message</label>
                        <textarea id="message" required name="message" className="w-full bg-white bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <button type="submit" value="Send" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
        </section>
      </div>
    </div>
    )
}
export default Contact