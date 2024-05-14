import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ProjectProps {
  image?: string;
  title: string;
  description: string;
  styles?: string;
}

const ProjectImage: React.FC<{ image?: string; title: string }> = ({
  image,
  title,
}) => (
  <img
    src={image}
    alt={title}
    className="w-2/3 shadow-2xl shadow-white absolute -bottom-20 right-4 group-hover:translate-y-5 duration-300 transform"
  />
);

const ProjectText: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="absolute top-0 right-0 text-right py-6 px-8 text-stone-700 group-hover:text-stone-950 duration-100 transform">
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  styles,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75, 1], [2, 1.5, 1]);

  return (
    <motion.div
      className={`my-20 group shadow-2xl lg:w-1/3 w-5/6 lg:mx-40 mx-auto h-96 hover:translate-y-3 duration-100 relative rounded-3xl overflow-hidden ${
        styles || ""
      }`}
      ref={ref}
      style={{
        rotateY,
        rotateX,
        opacity: scrollYProgress,
        translateY,
        translateX,
        scale,
        perspective: 1000,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {image && <ProjectImage image={image} title={title} />}
      <ProjectText title={title} description={description} />
    </motion.div>
  );
};

export default Project;
