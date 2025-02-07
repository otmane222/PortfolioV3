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


  return (
    <div className={`w-full   flex flex-col items-center justify-center font-[tommy] font-bold  bg-white  `}>
        
      <div className=" w-full bg-[url('/bg.jpg')] bg-cover bg-center h-screen text-white flex justify-center  min-h-[650px] max-h-[700px]" >
        <div className="w-[1000px] ">
          <Navigation />
          <Header />
        </div>
      </div>
      <div className="w-full flex justify-center bg-slate-950 min-h-[646px] max-h-[700px] ">

      </div>
        {/* <Bg/> */}
        {/* <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> */}
      {/* <Header /> */}
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