// icons
import {} from "react-icons/rx";

//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 mt-[1rem] flex items-center hd:px-[6rem]">
      {/* circle */}
      <Circles />

      <div className="container mx-auto md:pt-[10rem]">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          {/* text */}
          <div className="text-center mx-auto flex xl:w-[30vw] flex-col items-center xl:items-start lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[2rem] xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 md:text-[15px] text-center xl:text-left"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, iure aliquid itaque ex corporis error libero velit
              ipsum.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full md:max-w-[60%] mx-auto fk:w-[1000px]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      {/* bulb */}
      <Bulb />
    </div>
  );
};

export default Work;
