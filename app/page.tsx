import Image from "next/image";

// import { Card } from "../components/Card";
// import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import  { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

// import '@coreui/coreui/dist/css/coreui.min.css';


export default function Home() {
  return (
    <div className="w-full   flex justify-center ">
        
      <div className="w-[1000px]">
        <Navigation />
        <Header />
        {/* <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> */}
      </div>
      {/* <Header /> */}
    </div>
  );
}
