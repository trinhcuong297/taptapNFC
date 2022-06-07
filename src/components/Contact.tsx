import { FC } from "react";
import { socialLinks } from "../shared/contants";
const Contact: FC = () => {
  return (
    <div className="pb-20" id="contact">
      
      <h1 className="text-center text-4xl mt-1 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-2 flex-col md:flex-row-reverse">
          <div className="flex-1 flex justifi-center flex-wrap">
            {/* <h1 className="text-xl mb-3">Social</h1> */}
            {socialLinks.map((item,index) => (
              <button type="button" key={index} className="flex flex-1 gap-3 items-center p-2 transition duration-300 min-w-[12rem] justify-center text-white shadow-md m-2 shadow-blue-500/50 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  className="w-[30px] h-[30px] mx-2 rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
              </button>
            ))}
          </div>
        </div>
        {/* <div className="flex-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Just a fake form. I'm too busy to contact you using email."
              );
            }}
            className="flex flex-col gap-2"
          >
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" placeholder="John Doe" />
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" placeholder="johndoe@gmail.com" />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="I want to talk to you"
            />
            <button className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]">
              Send
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
