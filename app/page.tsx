import Image from "next/image";
import { AppProps } from 'next/app';
import { ThemeProvider } from "@/context/Themecontext";
// import '../styles/globals.css';

// import { Card } from "../components/Card";
// import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import  { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
// import { Bg } from "../components/icons/Bg";

export default function Home() {


  // <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
  return (
    // <div className={`w-full bg-[url('/st.png')]   flex flex-col items-center justify-center font-[tommy]  bg-white  `}>
      <div className=" h-full w-full">
        {/* <div className="absolute z-[- bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
        {/* <div className="absolute z-[- left-0 right-0 top-[-10%] h-[1000px] max-w-[1000px] w-full rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div> */}
        
      <div className=" w-full   bg-cover bg-center h-screen text-white flex justify-center  min-h-[650px] max-h-[700px]" >
        <div className="w-[1000px] ">
          {/* <Navigation /> */}
          <Header />
        </div>
      </div>

      {/* <div className="w-full flex bg-[#] text-white justify-center items-center min-h-[400px]  ">
        <div className="w-[1000px] h-full bg-[#] md:ml-[100px] ml-[0px]">
          <About />
        </div>

      </div> */}
      <div className="w-full flex bg-[#] text-white justify-center itme min:h-[460px]   ">
        <div className="w-full max-w-[1000px] bg-[#]">
          <Skills />
        </div>
      </div>
      
      <div className="w-full flex bg-[#] justify-center -950 min-h-[1450px] max-h-[1500px] ">

      </div>
        {/* <Bg/> */}
        {/* <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> */}
      {/* <Header /> */}
    {/* </div> */}
    </div>
  );
}



// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;

{/* <div class="px-10 py-0">
      <div class="container mx-auto max-w-7xl mt-2">
        <div class="py-[4.375rem]">
          <div class="flex flex-col gap-y-[13.75rem] relative">
            <div
              class="grid grid-cols-2 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-[3.75rem] overflow-hidden"
            >
              <div id="div1" class="max-w-[30rem]">
                <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  One
                </div>
              </div>
              <div id="div2">
                <div class="w-full h-[500px]"></div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-auto overflow-hidden z-20"
            >
                <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  Two
                </div>
            </div>
            <div
              class="grid grid-cols-2 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-[6.25rem] overflow-hidden z-30"
            >
               <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  Three
                </div>
            </div>
            <div
              class="grid grid-cols-2 bg-[#0a0b0d] border border-[#303133] rounded-3xl min-h-[37.5rem] sticky top-[7.5rem] overflow-hidden z-40"
            >
              <div class="w-full h-[500px] flex items-center justify-center font-semibold text-4xl text-white">
                  Four
                </div>
            </div>
            <div class="min-h-[300px]"></div>
          </div>
        </div>
      </div>
    </div> */}