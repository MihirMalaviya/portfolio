"use client";
import { ReactTyped } from "react-typed";
import { Spotlight } from "./components/ui/Spotlight";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import image from "../public/vercel.svg";
import { Tooltip } from "@nextui-org/tooltip";

export default function Home() {
  interface BoldTextProps {
    children: React.ReactNode;
  }

  const Highlight: React.FC<BoldTextProps> = ({ children }) => (
    <span className="font-bold text-zinc-100">{children}</span>
  );

  const descriptionCards = ["bbabab", "bbaA"];

  return (
    <div
      className={`
w-screen max-w-[1400px] mx-auto lg:px-44 px-5
        antialiased leading-relaxed text-zinc-400 p-5`}
    >
      <Spotlight
        className="lg:-top-80 lg:-left-32 sm:-top-80 sm:-left-20 md:visible md:-top-96 md:-left-80 invisible "
        fill="skyblue"
      />
      <div className="mx-auto py-12 pt-8 font-sans md:py-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:top-0 lg:flex lg:max-h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl text-shadow-xl shadow-black/[.5]">
                <a href="/">Mihir Malaviya</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-primary-300 sm:text-xl w-fit text-shadow-sm shadow-primary-200/[.2] lg:hover:animate-pulse">
                <ReactTyped
                  strings={["Aspiring Software Engineer"]}
                  typeSpeed={60}
                  cursorChar="_"
                  showCursor={true}
                />
                {/* Aspiring Software Engineer 💻 */}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-shadow-lg shadow-black/[.5]">
                Hi, I like to play games and make code small projects in my free
                time.
              </p>
              <br />
              <br />
              <p className="text-xl text-zinc-200 sr-only lg:not-sr-only text-shadow-lg shadow-black/[.5]">
                Get in touch!{" "}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("mihirmalaviya1@gmail.com");
                  }}
                >
                  <Tooltip
                    content="Click to copy"
                    className="bg-black bg-opacity-50 px-2 py-1 rounded-lg text-secondary-50 text-sm"
                    delay={0}
                    closeDelay={100}
                  >
                    <u className="underline-offset-4 text-secondary-100 hover:text-secondary-300 bg-secondary-700/[.5] hover:bg-secondary-700/[.6] border border-secondary-100/[.05] p-1 rounded transition duration-200 transform">
                      mihirmalaviya1@gmail.com
                    </u>
                  </Tooltip>
                </button>
              </p>
            </div>
          </header>
          <div className="lg:top-0 lg:flex lg:max-h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24">
            <h2 className="mt-5 mb-8 text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only text-shadow-lg shadow-black/[.5]">
              About Me
            </h2>
            <p className="mb-4 text-shadow-lg shadow-black/[.5]">
              Ever since I was young I loved to code. I coded small online
              games, and discord bots that I hosted on my old laptop. I have a
              lot of experience in AI, webdev, and Python.
            </p>
          </div>
        </div>
      </div>

      <div className="text-shadow-xl shadow-black/[.5]">
        <h1
          className="text-4xl font-bold text-zinc-100 mt-32 mb-20"
          id="skills"
        >
          Skills
        </h1>
        <SkillsSection
          data={[
            [
              "Programming Languages",
              [
                "Python",
                "Java",
                "HTML/CSS",
                "JavaScript/TypeScript",
                "NodeJS",
                "C",
                "C++",
                "R",
                "GLSL",
                "Rust",
                "GDScript",
                "AHK",
              ],
            ],
            [
              "Frameworks & Platforms",
              [
                "Git",
                "React",
                "NextJS",
                "NodeJS",
                "WebSockets",
                "Tensorflow",
                "Numpy",
                "Scipy",
                "Godot",
              ],
            ],
          ]}
        />
        <h1
          className="text-4xl font-bold text-zinc-100 mt-32 mb-20"
          id="skills"
        >
          Projects
        </h1>

        <ProjectSection
          label="Featured Project"
          title="Audigen"
          description="A user-friendly AI audio transcription tool, precise down to the millisecond, that could be applied for audio
editing purposes, to solve the problem of having to listen to audio snippets over and over to know where to cut. **Won 1st place in HackMCST Hackathon.**"
          descriptionCards={[
            "Python",
            "Google Speech Recognition",
            "OpenAI API",
            "NumPy",
            "Pygame",
          ]}
          image={""}
        />

        <ProjectSection
          label="Featured Project"
          title="MCST GPA Calculator"
          description="A GPA calculator website tailored to fit the grading system of my highschool, the Morris County School of Technology."
          descriptionCards={["React", "Next", "Tailwind"]}
          image="MCSTGPA.png"
          href="https://mcst-gpa-calculator.vercel.app/"
        />
        <ProjectSection
          label="Featured Project"
          title="Chat YouTube"
          description="A desktop application that takes a link to a Youtube video and lets the user to chat with the video using AI."
          descriptionCards={[
            "Python",
            "Gemini API",
            "Youtube API",
            "PySimpleGUI",
          ]}
          image={""}
        />
        <ProjectSection
          label="Featured Project"
          title="Personality AI"
          description="An easy-to-use terminal application where the user can train their own AI chatbot. They can either choose to give the name of a famous character and have the AI auto train on it, or feed it a simulated conversation for it to replicate."
          descriptionCards={[
            "Python",
            "Gemini API",
            "Google Speech Recognition",
            "Text to Speech",
          ]}
          image={""}
        />
      </div>

      <div className="grid -z-50 !bg-transparent invisible lg:visible" />

      <footer className="w-100 pb-16 pt-16 text-md text-zinc-400 sm:pb-0 my-10 mx-10 text-center">
        Website built by Mihir Malaviya using React, Next, Tailwind, and Framer
        Motion.
      </footer>
    </div>
  );
}
