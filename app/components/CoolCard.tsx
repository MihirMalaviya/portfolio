import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CoolCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        // rotateY,
        // rotateX,
        opacity: scrollYProgress,
        translateY,
        // translateX,
        // scale,
        // perspective: 1000,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <CardContainer
        className="
          w-1/3
          inter-var
          ml-40
          "
      >
        <CardBody className="relative group hover:shadow-2xl hover:shadow-purple-500/[.5] !transform !ease-out !duration-500 bg-zinc-700 hover:bg-purple-400/[.5] border-zinc-500/[0.5] !w-full sm:w-[30rem] h-auto rounded-2xl p-6 border">
          <CardItem
            translateZ="60"
            className="text-xl font-bold text-zinc-200 group-hover:text-zinc-50"
          >
            Title
          </CardItem>
          <CardItem
            as="p"
            translateZ="70"
            className="text-sm max-w-sm mt-2 text-zinc-300 group-hover:text-zinc-100"
          >
            description. description. description. description. description.
            description. description. description. description.
          </CardItem>
          <CardItem
            translateZ="100"
            className="w-full mt-4
          
          bg-stone-200
          w-100
          h-60
          rounded-lg
          "
          >
            <img
              //   src="https://www.seanhalpin.xyz/hp/ai.png"
              className="h-60 rounded-xl shadow-xl duration-200 group-hover:!shadow-black/[.1]"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem translateZ={20} as="button" className="invisible">
              Try now →
            </CardItem>
            <CardItem
              translateZ={50}
              as="button"
              className="
                  group-hover:text-yellow-50 border-yellow-500/[.5]
                  group-hover:bg-yellow-400/[.7] group-hover:border-yellow-500/[.5] border 
                  px-4 py-2 rounded-lg text-xs text-amber-800 bg-yellow-300 
                  hover:!bg-yellow-300 hover:!text-amber-900 font-bold
                  "
            >
              Try now →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default CoolCard;
