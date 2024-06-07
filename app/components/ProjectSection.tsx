import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Markdown from "react-markdown";

interface DescriptionCard {
  title: string;
  content: string;
}

interface SpotifyProfileProps {
  label: string;
  title: string;
  description: string;
  descriptionCards: string[];
  image: string;
}

const CoolCard: React.FC<SpotifyProfileProps> = ({
  label,
  title,
  description,
  descriptionCards,
  image,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-90, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        opacity: scrollYProgress,
        translateY,
        perspective: 1000,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="mb-32 lg:h-[300px]
      "
    >
      <div
        className="
      lg:absolute inset-0 flex justify-center items-center"
      >
        <img
          src={image}
          alt={title}
          className="
          lg:ml-auto lg:w-7/12 w-full h-full object-cover rounded-lg lg:shadow-lg mb-5 object-top border-2 border-black border-opacity-50 bg-zinc-500"
        />
        <div className="group">
          <div className="absolute inset-0 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="ml-auto mb-auto mr-8 mt-5 size-6 stroke-zinc-900 
            group-hover:stroke-primary-400 group-hover:-translate-y-3 group-hover:translate-x-3 transition duration-300 transform
            "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="!lg:my-10 mt-5 min-h-40 mx-auto">
        <p
          className="text-md text-primary-300 font-mono mb-1 tracking-tight
        transform transition duration-100
        hover:text-primary-400
        "
        >
          {label}
        </p>
        <p className="text-2xl w-fit text-zinc-200 font-bold  hover:text-primary-400 duration-200 transform transition">
          {title}
        </p>
        <Markdown
          className="lg:bg-zinc-800/[.75] lg:p-6 my-5 text-sm lg:rounded-lg shadow-2xl shadow-black/[.5] lg:w-1/2
          lg:backdrop-blur
          
          lg:hover:bg-zinc-800/[.85] lg:hover:backdrop-blur-lg lg:border lg:border-zinc-700/[.5]
          transform transition duration-100 
          lg:min-h-32
          leading-relaxed
          text-zinc-300
        "
        >
          {description}
        </Markdown>
        <div className="flex mt-4">
          {descriptionCards.map((card, index) => (
            <span
              className="font-mono italic text-sm
             bg-primary-400/[.5] border-primary-400/[.25] hover:border-primary-300/[.5] border hover:bg-primary-400/[.75] 
             
             hover:text-primary-50 duration-100 transition transform rounded text-primary-200 px-3 py-0.5 mb-2 block mr-3"
            >
              {card}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CoolCard;
