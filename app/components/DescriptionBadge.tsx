// DescriptionBadge.tsx
import React from "react";
import clsx from "clsx";

interface DescriptionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const DescriptionBadge: React.FC<DescriptionBadgeProps> = ({
  children,
  className,
}) => {
  // Check if children is empty or undefined
  if (!children) {
    return null;
  }

  return (
    <span
      // className={clsx(
      //   "font-mono italic text-sm shadow",
      //   "bg-primary-400 bg-opacity-30 border-primary-400/[.25] hover:border-primary-300/[.5] border hover:bg-opacity-50 ",
      //   "hover:text-primary-50 duration-100 transition transform rounded text-primary-100 px-3 py-0.5 mb-2 block mr-3",
      //   className
      // )}

      // className={clsx(
      //   "font-mono italic text-sm shadow",
      //   "bg-primary-400 bg-opacity-20 border-primary-400 border-opacity-40 hover:border-primary-300 hover:border-opacity-50 border hover:bg-opacity-30 ",
      //   "hover:text-white duration-100 transition transform rounded-full text-primary-50 px-2 py-0.5 mb-2 block mr-3",
      //   className
      // )}

      className={clsx(
        " text-sm shadow",
        "bg-transparent bg-opacity-20 border-primary-400 border-opacity-40 hover:border-primary-300 hover:border-opacity-50 border-2 hover:bg-opacity-30 ",
        "hover:text-white duration-100 transition transform rounded-full text-primary-50 px-2 py-0.5 mb-2 block mr-3 backdrop-blur-3xl",
        className
      )}
    >
      {children}
    </span>
  );
};

export default DescriptionBadge;
