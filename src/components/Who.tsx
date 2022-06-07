import { FC, Fragment } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../shared/contants";
import { m } from "framer-motion";
import Contact from "./Contact";
const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-col"
    >
       <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="text-3xl text-center z-[1] overflow-hidden"
      >
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[20rem] h-[20rem] rounded-full shadow-lg shadow-indigo-500/50 m-8"
          src="/avatar.jpg"
          alt=""
        />
      </m.p>
            <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl text-center z-[1] overflow-hidden"
      >
        {`I'm a frontend developer`}
      </m.p>
        {/* <p data-scroll data-scroll-speed="0.5" className="text-xl text-gray-200">
          My name is Trinh Cao Cuong. I&apos;m a frontend developer living in Hanoi, Vietnam.
        </p> */}

        {/* Hide my age :v */}
        {/* <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Nguyen Anh Phong. I&apos;m a
          {false ? ` ${new Date().getFullYear() - 2007} years old` : ""}{" "}
          frontend developer living in Hanoi, Vietnam. I started learning web
          development when I was 13. Since then, I have made a lot of projects,
          from basic HTML pages to complex projects like a React library. I hope
          to be a great developer and get my dream job in the future. Besides
          coding, I also like{" "}
          <a
            className="underline underline-offset-2"
            href="https://blog.napthedev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            writing blog posts
          </a>
          , listening to music and playing video games
        </p> */}
      
    </div>
  );
};

export default Who;
