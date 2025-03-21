'use client'

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowTrendDown } from "react-icons/fa6";
import Image from "next/image";
// import useWindowSize from "./utils";
import { sendEmail } from "@/lib/resend";
import { toast } from "react-hot-toast";
import Magnet from "./Magnet";
import LineUnder from "./LineUnder";
import useWindowSize from "./utils";

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

  const { width, height } = useWindowSize();
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormData]) {
      setErrors({ ...errors, [id]: undefined });
    }
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const result = await sendEmail(formData);
        
        if (result && result.success) {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast.error(result?.error || 'Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Failed to send message:', error);
        toast.error('An unexpected error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error('Please fix the errors in the form before submitting.');
    }
  };

  const initialPath = `M0 300  Q${width / 2} 0 ${width} 300 L${width} 300 L0 ${height + 301 }  M${width} ${height + 301} L${width} 300 L0 ${height + 301}  Q${width / 2} ${height + 301 + 200} ${width} ${height + 301} `
    
  const middlePath = `M0 200  Q${width / 2} 200 ${width} 200 L${width} 200 L0 ${height + 301 }  M${width} ${height + 301} L${width} 200 L0 ${height + 301}  Q${width / 2} ${height + 301} ${width} ${height + 301} `
      
  const curve = {
      initial: {
          d: initialPath
      },
      enter: {},
      exit: {
          d: [initialPath, middlePath],
          transition: {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          }
      }
  }

  return (
    <>
    <motion.div
      id="contact"
      ref={container}
      style={{ y }}
      className='h-auto relative w-full z-0 t-[100px] font-[tommy2] text-white b-black'
    >
      <div className='bg-[#1d1d1d] pb-[10px] h-auto w-full flex justify-center items-center'>
        <div className='b-red-700 md:flex-row  flex md:pt-0 md:pb-0 pt-[150px] pb-[50px] flex-col items-center md:justify-center md:items-center b-[#454444] w-full max-w-[1240px] h-auto '>
          <div className="flex flex-col gap-4 md:pb-[0] h-full w-[90%] items-center md:w-[50%] b-teal-500">
            <div className="flex flex-col items-start b-slate-700 w-full 500:w-[90%] 600:w-[80%] h-full md:pl-[50px] pt-[100px]">
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
                    <a href="https://x.com/take_it__easy" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </LineUnder>
                </Magnet>
                <Magnet>
                  <LineUnder>
                    <a href="https://github.com/otmane222" target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </LineUnder>
                </Magnet>
                <Magnet>
                  <LineUnder>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=otmaneaboulghit@gmail.com&su=Subject&body=Hello" target="_blank" rel="noreferrer">
                      Gmail
                    </a>
                  </LineUnder>
                </Magnet>
              </div>
              <div className="h-[1px] w-[90%] bg-[#fff] mt-[30px]"></div>
              <h1 className="text-[14px] pt-2 pb-2 font-[tommy2]">There is no greatness where there is no simplicity - <span className="font-[tommy]">Leo Tolstoy</span></h1>
            </div>
          </div>
          <div className="flex flex-col md:pt-[0] items-center gap-4 h-auto b-emerald-400 w-[90%] md:w-[50%]">
            <div className="flex flex-col pt-[00px] md:items-star b-blue-400 rounded-xl w-full 500:w-[90%] 600:w-[80%] md:mx-auto">
              <h1 className="text-4xl font-bold pb-6 pt-[40px] text-white">Send me a message</h1>
              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col gap-6 b-yellow-300 ">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white text-sm font-semibold">Your Name*</label>
                    <input
                      className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-none transition"
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white text-sm font-semibold">Your Email*</label>
                    <input
                      className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-lime-500 transition"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-white text-sm font-semibold">Your Message*</label>
                    <textarea
                      className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-lime-500 transition"
                      name="message"
                      id="message"
                      cols={10}
                      rows={6}
                      maxLength={10000} // Adding a reasonable max length
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      style={{ resize: 'vertical' }} // Allow vertical resizing
                    ></textarea>
                    {formData.message && (
                      <p className="text-xs text-gray-300">
                        {formData.message.length} / 10000 characters
                      </p>
                    )}
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`${isSubmitting ? 'bg-slate-600 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-600'} text-white p-3 rounded-md transition w-full font-semibold shadow-md flex justify-center items-center`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[12px] bg-[#1d1d1d] border-t-[0.5px] pb-[100px] md:pb-5 border-[#808080] text-center w-full p-4 b-slate-700">
        Made by Otmane Aboulghit © 2025
      </h1>
    </motion.div>
    <motion.svg
        initial={{ y: "200vh" }}
        exit={{ y: ["100vh", "0vh"]  }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[-300px] z-50   w-full flex justify-center items-center text-white h-[10000px] fill-[#393939] stroke-0`}
      >
        <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
            />
      </motion.svg>
    </>
  );
}