
'use client';
import { Typewriter } from 'react-simple-typewriter'

function Header() {
  return (
    <div className="w-full h-[550px] bg-[#] flex items-center justify-center">
      <div className="md:w-[60%] w-[80%] grow-1 h-[50%]  m-5">
        <div className="flex flex-col w-full xs:h-[80%] h-[112%]   bg-slate-400">
          <div className='flex flex-col  md:h-[63%] h-[100%] bg-slate-100'>
            <h1 className='md:whitespace-nowrap'>
              <span className="text-4xl whitespace-nowrap">Hello, I'm</span>
              <span className="text-6xl font-bold ">Otmane Aboulghit</span>
              <br />
            </h1>
            <h1 className='mt-5'>
              <span className="text-[30px] ">Full-stack Developer </span>
              <span className='text-[28px] text-[#0d3b91] font-bold' >

              <Typewriter
                
                words={[ 'TYPESCRIPT', 'Django Rest Framework']}//'Next js', 'TAILWINDCSS',, 'PostgresSql', 'Docker']}
                loop={0} cursor={true} cursorStyle='|'
                typeSpeed={100} deleteSpeed={100} delaySpeed={1000}
                />
                </span>
            </h1>
          </div>
          <div className='flex  items-start h-[35%] bg-slate-200'>
            <button className='hover:bg-[#1363a5] hover:text-white transition-all duration-500 ease-in-out text-black p-3 rounded-md mr-5'>
              Contact Me
            </button>

            <button className='bg-[#0d3b91] text-white p-3 rounded-md'>
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-[95%] bg-[#9c2596] m-5 md:flex hidden"></div>
    </div>
  );
}

export { Header };