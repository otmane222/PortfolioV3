
'use client';
import { Typewriter } from 'react-simple-typewriter'

function Header() {
  return (
    <div className="w-full h-[550px] bg-[#] flex items-center justify-center">
      <div className="md:w-[60%] w-[80%] grow-1 h-[50%]  m-5">
        <div className="flex flex-col w-full h-[80%]  justify-around">
          <h1>
            <span className="text-4xl">Hello, I'm</span>
            <span className="text-6xl font-bold">Otmane Aboulghit</span>
            <br />
          </h1>
          <h1>
            <span className='text-4xl text-[#da2626] font-bold' >

            <Typewriter
              
              words={['Front-end', 'Back-end', 'Full-stack']}
              loop={0} cursor={true} cursorStyle='|'
              typeSpeed={100} deleteSpeed={100} delaySpeed={1000}
              />
              </span>
            <span className="text-4xl ">Developer</span>
          </h1>
        </div>
      </div>
      <div className="w-[40%] h-[95%] bg-[#9c2596] m-5 md:flex hidden"></div>
    </div>
  );
}

export { Header };