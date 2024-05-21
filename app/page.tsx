"use client";
// import Image from "next/image";

import Project from "./components/project";
import { ReactTyped } from "react-typed";
import { Spotlight } from "./components/ui/Spotlight";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import { useRef } from "react";
import CoolCard from "./components/CoolCard";

export default function Home() {
  interface BoldTextProps {
    children: React.ReactNode;
  }

  const Highlight: React.FC<BoldTextProps> = ({ children }) => (
    <span className="font-bold text-slate-100">{children}</span>
  );

  return (
    <body
      className={`bg-stone-950 antialiased leading-relaxed text-slate-400 selection:bg-amber-300 selection:text-amber-900 p-10`}
    >
      <Spotlight
        className="lg:-top-80 lg:-left-32 sm:-top-80 sm:-left-20 md:visible md:-top-96 md:-left-80 sm:invisible"
        fill="skyblue"
      />
      <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:top-0 lg:flex lg:max-h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl  ">
                <a href="/">Mihir Malaviya</a>
              </h1>
              <h2 className="mt-3 font-mono text-lg font-medium tracking-tight text-sky-300 sm:text-xl bg-blue-950 w-fit bg-opacity-10">
                <ReactTyped
                  strings={["Aspiring Software Engineer"]}
                  typeSpeed={60}
                  // loop
                  // backSpeed={20}
                  cursorChar="_"
                  showCursor={true}
                />
                {/* Aspiring Software Engineer 💻 */}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Please hire me. Please hire me. Please hire me. Please hire me.
              </p>
            </div>
          </header>
          <div className="lg:top-0 lg:flex lg:max-h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24">
            <h2 className="my-20 mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
            <p className="mb-4">
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40">
        {/* <Project
          // image="https://www.seanhalpin.xyz/hp/ai.png"
          title="My Square Card"
          description="This is a description of the square card."
          styles="bg-purple-400 hover:bg-purple-500 border border-purple-300 hover:border-purple-400 hover:border-opacity-75"
        />
        <Project
          // image="https://www.seanhalpin.xyz/hp/ai.png"
          title="My Square Card"
          description="This is a description of the square card."
          styles="bg-purple-400 hover:bg-purple-500 border border-purple-300 hover:border-purple-400 hover:border-opacity-75"
        />
        <Project
          // image="https://www.seanhalpin.xyz/hp/ai.png"
          title="My Square Card"
          description="This is a description of the square card."
          styles="bg-purple-400 hover:bg-purple-500 border border-purple-300 hover:border-purple-400 hover:border-opacity-75"
        /> */}
        <CoolCard />
        <CoolCard />
        <CoolCard />
        <CoolCard />
      </div>

      {/* <div className="absolute"> */}
      <div className="grid -z-50 !bg-transparent" />
      {/* </div> */}

      <footer className="w-100 pb-16 text-sm text-slate-500 sm:pb-0 my-10 mx-10 text-center">
        This is the footer. This is the footer. This is the footer. This is the
        footer. This is the footer. This is the footer. This is the footer.
      </footer>
    </body>
  );
}
