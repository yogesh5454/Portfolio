// import { IoIosSend } from "react-icons/io";


// const Contact = () => {
//   return (
//     <>
//       <div>
//         <div>
//         <h4 className="">Lets connect</h4>
//         <h1>Get In Touch</h1>
//         <p>
//           Have a project in mind or want to discuss potential opportunities? I'd
//           love to hear from you!
//         </p>
//         </div>
//         <div>
//           <h1>Send a Message</h1>
//           <p>
//             Fill out the form below and I'll get back to you as soon as
//             possible.
//           </p>

//           <div>
//             Name <br /> <input type="text" placeholder="Yourname" /> <br />
//             Email <br />
//             <input type="email" placeholder="Enter your Email" />
//           </div>
//           <div>
//             subject <input type="text" placeholder="subject of your message" />
//             message <input type="text" placeholder="Your message" />
//           </div>
//         </div>
//         <div>
//             <button className="flex">Send Message <IoIosSend /></button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div>
          <h4 className="mb-4">
            <span className="rounded-full border-amber-200 bg-amber-100 text-navy-700 text-sm font-medium px-4 py-2 animate-pulse">
              Let’s Connect
            </span>
          </h4>
          <h1 className="text-3xl font-bold text-navy-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-navy-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? I'd
            love to hear from you!
          </p>
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-navy-800 mb-2">
            Send a Message
          </h1>
          <p className="text-navy-600 mb-6">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-navy-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition duration-300 bg-amber-50"
              />
            </div>
            <div>
              <label className="block text-navy-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition duration-300 bg-amber-50"
              />
            </div>
            <div>
              <label className="block text-navy-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject of your message"
                className="w-full p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition duration-300 mb-4 bg-amber-50"
              />
              <label className="block text-navy-700 font-medium mb-1">Message</label>
              <input
                type="text"
                placeholder="Your message"
                className="w-full p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition duration-300 bg-amber-50"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="flex items-center mx-auto bg-navy-600  rounded-md px-6 py-3 hover:bg-navy-700 hover:to-black transition duration-300 shadow-md hover:shadow-lg">
            Send Message <IoIosSend className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;