
'use client';
import { Typewriter } from 'react-simple-typewriter'

function Header() {
  return (
    <div className="w-full  text-white  h-[550px] bg-[#] flex items-center justify-">
      <div className="md:w-[60%] z-10 w-[80%] grow-1 h-[50%]  m-5">
        <div className="flex flex-col w-full xs:h-[105%] h-[133%]  ">
          <div className='flex flex-col  md:h-[63%] h-[100%] '>
            <h1 className='md:whitespace-nowrap'>
              <span className="text-4xl whitespace-nowrap">Hello,</span>
              <br />
              <span className="text-4xl whitespace-nowrap">I'm </span>
              <span className="text-6xl font-bold ">Otmane Aboulghit</span>
              <br />
            </h1>
            <h1 className='mt-5 md:whitespace-nowrap'>
              <span className="text-[30px] ">Full-stack Developer </span>
              <span className='text-[28px] text-[#76a3f5] font-bold' >

              <Typewriter
                
                words={[ 'TYPESCRIPT', 'Django Rest Framework']}//'Next js', 'TAILWINDCSS',, 'PostgresSql', 'Docker']}
                loop={0} cursor={true} cursorStyle='|'
                typeSpeed={100} deleteSpeed={100} delaySpeed={1000}
                />
                </span>
            </h1>
          </div>
          <div className='flex  items-start h-[35%] bg-'>
            <button className='bg-[#0d3b91] hover:bg-[#1363a5] transition-all duration-500 ease-in-out text-white p-[12px] rounded-md'>
            
              Contact Me
            </button>

            <button className='hover:bg-[#1363a5] text-white transition-all duration-500 ease-in-out  p-[12px] rounded-md ml-5'>
              Download CV
            </button>

          </div>
        </div>
      </div>
      {/* <div className=" w-[40%] z-0 h-[300px] bg-slate-300 md:flex hidden "></div> */}
      {/* <div className="absolute w-[300px] z-0 h-[1000px]  md:flex hidden ">
      <img src="/bg.svg" alt="otmane" className=" rounded-full w-full h-full " />
      <img src="/bg.svg" alt="otmane" className=" rounded-full w-full h-full " />
      </div> */}
    </div>
  );
}

export { Header };