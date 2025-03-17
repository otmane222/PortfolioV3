'use client'

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaArrowTrendDown } from "react-icons/fa6";
import Image from "next/image";
// import { ApearanceContext } from "@/app/context/Themecontext";
// import useWindowSize from "./utils";
import { sendEmail } from "@/lib/resend";
import { toast } from "react-hot-toast";
import Magnet from "./Magnet";
import LineUnder from "./LineUnder";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // const { width } = useWindowSize();
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const y = useTransform(scrollYProgress, [0, 1], [width < 768 ? -300 : -400, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      sendEmail(formData);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!');
    }
  };

  return (
    <motion.div
      id="contact"
      ref={container}
      // style={{ y }}
      className='h-auto relative w-full z-0  font-[tommy2] text-white b-black'
    >
      <div className='bg-[#1d1d1d] h-auto w-full flex justify-center items-center'>
        <div className='md:flex-row flex md:pt-0 md:pb-0 pt-[150px] pb-[140px] flex-col items-center md:justify-center md:items-center b-[#454444] w-full max-w-[1240px] h-full'>
          <div className="flex flex-col gap-4 md:pb-[0] h-full w-auto md:w-[50%] b-teal-500">
            <div className="flex flex-col items-start b-slate-700 h-full w-auto pl-[50px] pt-[100px]">
              <div className="w-[100px] h-[100px] rounded-full bg-slate-500 relative">
                <Image src="/me/arz.jpg" alt="Otmane Aboulghit" layout="fill" className="rounded-full" />
              </div>
              <div className="flex gap-2 h-[90px] items-center b-black">
                <motion.div style={{ rotate, scale: 1.5, x }} className="flex items-center justify-center b-slate-500 w-[40px] h-[40px] rounded-full">
                  <FaArrowTrendDown className="text-3xl text-white" />
                </motion.div>
              </div>
              <motion.h1 className='text-[12px] opacity-70 font-bold pb-[10px]'>
                Contact Details
              </motion.h1>
              <div className="flex flex-col gap-1">
                <span className="flex flex-col gap-2">
                  <h1>+212 6 55 12 11 49</h1>
                </span>
                <span className="flex flex-col gap-2">
                  <h1>otmaneaboulghit@gmail.com</h1>
                </span>
              </div>
              <h1 className='text-[12px] opacity-70 font-bold pt-[30px] pb-[10px]'>Social</h1>
              <div className="flex flex-col gap-2">
                <Magnet>
                  <LineUnder>
                    <a className="b-emerald-600" href="https://www.linkedin.com/in/otmane-aboulghit-46493a1b4/" target="_blank" rel="noreferrer">
                      Linkedin
                    </a>
                  </LineUnder>
                </Magnet>
                <Magnet>
                  <LineUnder>
                    <a href="https://www.linkedin.com/in/otmane-aboulghit-9b4a8b1b7/" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </LineUnder>
                </Magnet>
                <Magnet>
                  <LineUnder>
                    <a href="https://www.linkedin.com/in/otmane-aboulghit-9b4a8b1b7/" target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </LineUnder>
                </Magnet>
                <Magnet>
                  <LineUnder>
                    <a href="https://www.linkedin.com/in/otmane-aboulghit-9b4a8b1b7/" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </LineUnder>
                </Magnet>
              </div>
              <div className="h-[1px] w-[90%] bg-[#fff] mt-[30px]"></div>
              <h1 className="text-[14px] pt-2 pb-2 font-[tommy2]">There is no greatness where there is no simplicity - <span className="font-[tommy]">Leo Tolstoy</span></h1>
            </div>
          </div>
          <div className="flex flex-col md:pt-[0] gap-4 h-full w-[90%] md:w-[50%]">
            <div className="flex flex-col pt-[00px] rounded-xl max-w-md md:mx-auto">
              <h1 className="text-4xl font-bold pb-6 pt-[40px] text-white">Send me a message</h1>
              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white text-sm font-semibold">Your Name*</label>
                    <input
                      className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-none transition"
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white text-sm font-semibold">Your Email*</label>
                    <input
                      className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-lime-500 transition"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-white text-sm font-semibold">Your Message*</label>
                    <textarea
                      className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-lime-500 transition"
                      name="message"
                      id="message"
                      cols={10}
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                  </div>
                  <button className="bg-slate-800 text-white p-3 rounded-md hover:bg-slate-600 transition w-full font-semibold shadow-md">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[12px] bg-[#1d1d1d] border-t-[0.5px] pb-[100px] md:pb-5 border-[#808080] text-center w-full p-4 b-slate-700">
        Made with Love by Otmane Aboulghit © 2025
      </h1>
    </motion.div>
  );
}