/** @format */
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
        <Sidebar />
      </section>
      <section id='About'>
        <Parallax type='about' />
      </section>
      <section>
        <About />
      </section>
      <section id='Project'>
        <Parallax type='project' />
      </section>
      <Portofolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
