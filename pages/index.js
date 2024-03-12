// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { useEffect, useState } from 'react';


// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  
// this area belongs to the random text effect ---------------------------------------------------------------------------------
  const [output, setOutput] = useState('');
  useEffect(() => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; // You can customize what letters it will cycle through
    const ctnt = "digital innovations."; // Your text goes here
    const speed = 20; // ms per frame
    const increment = 3; // frames per step. Must be >2

    let clen = ctnt.length;       
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

    // Call self x times, whole function wrapped in setTimeout
    (function rustle(i) {          
      setTimeout(function() {
        if (--i) rustle(i);
        nextFrame(i);
        si = si + 1;        
      }, speed);
    })(clen * increment + 1); 

    function nextFrame(pos) {
      for (let i = 0; i < clen - stri; i++) {
        // Random number
        const num = Math.floor(Math.random() * theLetters.length);
        // Get random letter
        const letter = theLetters.charAt(num);
        block = block + letter;
      }
      if (si == (increment - 1)) {
        stri++;
      }
      if (si == increment) {
        // Add a letter; 
        // every speed*10 ms
        fixed = fixed +  ctnt.charAt(stri - 1);
        si = 0;
      }
      setOutput(fixed + block);
      block = "";
    }
  }, []); // Empty dependency array ensures effect runs only once

// this area belongs to the random text effect ---------------------------------------------------------------------------------




  return (
    <div className="bg-primary/60 h-full flex justify-center hd:px-[3rem] fk:px-[15rem] xl:px-0">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">

        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          {/* title */}
          <motion.h1
            className="h2 fk:text-[7rem] inline"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"

          >
            {/* Converting Creative Concepts <br /> Into
            <span className="text-accent"><Animation className="inline" /></span> */}
            
            Converting Creative Concepts <br /> Into
            <span id="output" className="text-accent"> {output}</span>
            
            

          </motion.h1>

          {/* subtitle */}
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 fk:text-[1.5rem]"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            officiis repellendus earum similique iure rem. Corrupti aliquam
            temporibus quidem ut?
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn />
          </motion.div>

        </div>

      </div>

      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0 ">

        {/* bg image ------------------------------------------------------------------------------------------------------------------*/} 
        {/* <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full  h-full
        absolute mix-blend-color-dodge"
        ></div> */}

        {/* particles */}
        <ParticlesContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" fk:w-[1100px] lg:w-[600px] xl:w-[800px]  absolute -bottom-32 lg:bottom-0 
        lg:right-[8%]"
        >
          <Avatar />
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
