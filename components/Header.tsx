
'use client';
import { Typewriter } from 'react-simple-typewriter'

function Header() {


  
  return (
    <div>

      <div className="w-full  text-white b-slate-500  h-[450px] bg-[#] flex items-center justify-">
        
        <div className="z-10 m-5 flex flex-col justify-center w-full b-[#ee9494] h-full">
          
          <div className="flex flex-col justify-center w-full b-[#995b5b] h-full">
            
            <div className='flex flex-col  justify-center h-full b-[#44cf83] '>
              
              <div>
                <h1 className='md:whitespace-nowrap'>
                  <span className="text-4xl whitespace-nowrap">Hello,</span>
                  <br />
                  <span className="text-4xl whitespace-nowrap">I'm </span>
                  <span className="text-6xl font-bold ">Otmane Aboulghit</span>
                  <br />
                </h1>
              </div>
              <div className='mt-5 b-slate-400 0:h-[130px] hb1:h-[90px] hb2:h-[60px] h-[100px]'>
                <span className="text-[30px] ">Full-stack Developer </span>
                <span className='text-[28px] text-[#76a3f5] font-bold ' >
                {/* Django Rest Framework */}
                <Typewriter
                  
                  words={[ 'TYPESCRIPT', 'Django Rest Framework', 'Next js', 'TAILWINDCSS', 'PostgresSql', 'Docker']}//'Next js', 'TAILWINDCSS',, 'PostgresSql', 'Docker']}
                  loop={0} cursor={true} cursorStyle='|'
                  typeSpeed={100} deleteSpeed={100} delaySpeed={1000}
                  />
                  </span>
              </div>
            <div className='flex  items-start ] b-slate-200 pt-[10px] '>
              <button className='bg-[#0d3b91] hover:bg-[#1363a5] transition-all duration-500 ease-in-out text-white p-[12px] rounded-md'>
              
                Contact Me
              </button>

              <button className='hover:bg-[#1363a5] text-white transition-all duration-500 ease-in-out  p-[12px] rounded-md ml-5'>
                Download CV
              </button>
            </div>
            </div>
            
          </div>
        </div>
        {/* <div className="absolute w-[300px] z-0 h-[1000px]  md:flex hidden ">
        <img src="/bg.svg" alt="otmane" className=" rounded-full w-full h-full " />
        <img src="/bg.svg" alt="otmane" className=" rounded-full w-full h-full " />
        </div> */}
      </div>
        <div className=" w-[100%] z-10 h-[100px] b-slate-700  ">
        </div>
    </div>
  );
}

export { Header };