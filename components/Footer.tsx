'use client'

import React, { useContext } from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaSquareTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { ApearanceContext } from "@/app/context/Themecontext";

export const RevealBento = () => {
  return (
    <div className="min-h-screen b-zinc-900 px-4 py-12 ">
      {/* <Logo /> */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <div className="col-span-12 p-[30px] rounded-[10px] bg-[#979797] row-span-2 md:col-span-6">
    {/* <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    /> */}
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Otmane.{" "}
      <span className="">
        I build cool websites like this one.
      </span>
    </h1>
    {/* <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a> */}
  </div>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#000] md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaGithub/>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiGithub /> */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        {/* <SiTiktok /> */}
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaSquareTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <div className="col-span-12 p-[30px] rounded-[20px] bg-[#9c9c9c] text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-800">
        I build primarily with React, Tailwind CSS, and Framer Motion.
      </span>
    </p>
  </div>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Morocco</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Contact me</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col  items-center gap-2"
    >
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <input
        type="text"
        placeholder="Enter your message"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Send Message
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          Otmane Aboulghit
        </a>
      </p>
    </footer>
  );
};



function Footer2() {

    const { theme } = useContext(ApearanceContext) || {};

    return (
        <footer className={`h-auto bg-[#696969] text-center ${theme == 'dark' ? "text-white" : "text-black"} p-4`}>            
            <div className=" ">
                {/* top container with tagline and backgroundImage  */}
                <div className="relative">
                    {/* image section  */}
                    <section className="w-full h-auto lg:h-[55vh] bg-cover  bg-center brightness-50">
                    </section>

                    {/* tagline division  */}
                    <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 text-white">
                        
                        <h1 className="text-3xl md:text-5xl font-bold">Get In Touch</h1>
                        <p className="text-sm md:text-lg">
                            The Ultimate Guide To Ace SDE Interviews.
                        </p>
                    </div>
                </div>

                {/* bottom relative container  */}
                <div className="w-full h-auto  md:h-auto lg:h-[600px] bg-blue-300 relative">

                    {/* division with floating form  */}
                    <div
                        className="absolute -top-[3%] md:-top-[10%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded  overflow-hidden text-white">
                        {/* form / left div  */}
                        <div className="p-2 md:p-4 h-full b-gray-800 col-span-2">
                            <form>
                                {/* form top part containing mail icon and heading  */}
                                <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
                                    {/* heading  */}
                                    <h2 className="text-2xl md:text-3xl font-semibold">Send Us A Message</h2>

                                    {/* mail svg icon  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward"
                                        width="33" height="33" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                                        <path d="M3 6l9 6l9 -6" />
                                        <path d="M15 18h6" />
                                        <path d="M18 15l3 3l-3 3" />
                                    </svg>
                                </div>

                                {/* bottom form with input fields  */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
                                    {/* name input  */}
                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold">
                                Name <span className="text-red-500">&#42;</span>
                                </label>
                                        <input
                                className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                                placeholder="Enter Your Name"
                                required
                                name="name"
                                type="text"
                                />
                            </div>

                                        {/* email input  */}
                                        <div className="flex flex-col gap-1">
                                            <label className="font-semibold">
                                Email <span className="text-red-500">&#42;</span>
                                </label>
                                            <input
                                className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                                placeholder="Enter Your Email"
                                required
                                name="email"
                                type="email"
                                />
                            </div>

                                            {/* phone number input  */}
                                            <div className="flex flex-col gap-1">
                                                <label className="font-semibold">
                                Phone <span className="text-red-500">&#42;</span>
                                </label>
                                                <input
                                className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                                placeholder="Enter Your Phone Number"
                                required
                                name="phone"
                                type="tel"
                                />
                            </div>

                                                {/* subject input  */}
                                                <div className="flex flex-col gap-1">
                                                    <label className="font-semibold">
                                Subject <span className="text-red-500">&#42;</span>
                                </label>
                                                    <input
                                className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                                placeholder="Enter Your Subject"
                                required
                                name="subject"
                                type="text"
                                />
                            </div>

                                                    {/* message input  */}
                                                    <div className="flex flex-col gap-1 md:col-span-2">
                                                        <label className="font-semibold">
                                Message <span className="text-red-500">&#42;</span>
                                </label>
                                                        <input
                                className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                                placeholder="Enter Your Message"
                                required
                                name="subject"
                                type="text"
                                />
                            </div>
                                                    </div>
                            </form>

                            {/* submit button div  */}
                            <div className="flex items-center justify-center md:justify-end py-4 px-8">
                                {/* submit button  */}
                                <button className="py-2 px-4 md:py-4 md:px-6 bg-gray-800 rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all">
                            <span className="text-xl">Submit</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-telegram"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#fff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                            </svg>
                            </button>
                            </div>
                        </div>

                        {/* right div  */}
                        <div className="py-6 px-4 h-[500px] md:h-full bg-blue-800 grid grid-cols-1 grid-rows-5">
                            {/* heading tag  */}
                            <h2 className="text-xl lg:text-2xl text-center md:text-start font-semibold">Contact Information</h2>

                            {/* email and icon  */}
                            <div className="row-span-4 flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-share" width="35"
                                    height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
                                    <path d="M3 7l9 6l9 -6" />
                                    <path d="M16 22l5 -5" />
                                    <path d="M21 21.5v-4.5h-4.5" />
                                </svg>
                                <span>yourmail@support.com</span>
                            </div>

                            {/* social icons div  */}
                            <div className="flex justify-center md:justify-start items-center gap-4">
                                <a title="youtube" href="#">
                                    <img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/521936/youtube.svg" /></a>
                                    <a title="linkedin" href="#">
                                        <img className="h-12 w-12 invert" src="https://www.svgrepo.com/show/520815/linkedin.svg" /></a>
                                        <a title="instagram" href="#">
                                            <img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/521711/instagram.svg" /></a>
                                            <a title="github" href="#">
                                                <img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/512317/github-142.svg" /></a>
                            </div>
                            <h1 className="text-center"> Follow me on github <a href="https://github.com/Darkstar69" >Darkstar69</a> </h1>
                        </div>
                    </div>
                    
                </div>
            </div>

        </footer>
  );
} 
export { Footer2 };

//  format the code its messy 









