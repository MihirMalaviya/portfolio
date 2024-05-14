"use client";
// import Image from "next/image";

import Project from "./components/project";
import { ReactTyped } from "react-typed";
import { Spotlight } from "./components/ui/Spotlight";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";

export default function Home() {
  interface BoldTextProps {
    children: React.ReactNode;
  }

  const Highlight: React.FC<BoldTextProps> = ({ children }) => (
    <span className="font-bold text-slate-100">{children}</span>
  );

  return (
    <div className="grid -z-50">
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
                <h2 className="mt-3 font-mono text-lg font-medium tracking-tight text-sky-300 sm:text-xl">
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
                  Please hire me. Please hire me. Please hire me. Please hire
                  me.
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
            styles="bg-purple-400 hover:bg-purple-500 border-2 border-purple-300 hover:border-purple-400 hover:border-opacity-75"
          />
          <Project
            // image="https://www.seanhalpin.xyz/hp/ai.png"
            title="My Square Card"
            description="This is a description of the square card."
            styles="bg-purple-400 hover:bg-purple-500 border-2 border-purple-300 hover:border-purple-400 hover:border-opacity-75"
          />
          <Project
            // image="https://www.seanhalpin.xyz/hp/ai.png"
            title="My Square Card"
            description="This is a description of the square card."
            styles="bg-purple-400 hover:bg-purple-500 border-2 border-purple-300 hover:border-purple-400 hover:border-opacity-75"
          /> */}

          <CardContainer
            className="
          w-1/3
          inter-var"
          >
            <CardBody className="relative group hover:shadow-2xl hover:shadow-sky-500/[.5] !transform !ease-out !duration-500 bg-sky-400 hover:bg-sky-500/[.5] border-sky-500/[0.5] !w-full sm:w-[30rem] h-auto rounded-2xl p-6 border">
              <CardItem
                translateZ="60"
                className="text-xl font-bold text-stone-900 group-hover:text-sky-50"
              >
                Wire World
              </CardItem>
              <CardItem
                as="p"
                translateZ="70"
                className="text-sm max-w-sm mt-2 text-stone-800 group-hover:text-sky-100"
              >
                A Cellular automata used to teach logic gates to freshmen.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://www.seanhalpin.xyz/hp/ai.png"
                  className="h-60 rounded-xl shadow-xl duration-200 group-hover:!shadow-black/[.1]"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20} as="button" className="invisible">
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={50}
                  as="button"
                  className="
                  group-hover:text-yellow-100
                  group-hover:bg-yellow-500/[.5] group-hover:border-yellow-500/[.5] border 
                  px-4 py-2 rounded-lg text-xs text-amber-800 bg-yellow-300 
                  hover:!bg-yellow-200 hover:!text-amber-900 font-bold
                  "
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </body>
    </div>
  );
}
