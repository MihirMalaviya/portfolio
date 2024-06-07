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
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import image from "../public/vercel.svg";
import MainNavbar from "./components/MainNavbar";
import { Glow } from "@codaworks/react-glow";

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
w-screen max-w-[1400px] mx-auto lg:px-44 px-20
        antialiased leading-relaxed text-zinc-400 selection:bg-amber-300 selection:text-amber-900 p-10`}
    >
      <Spotlight
        className="lg:-top-80 lg:-left-32 sm:-top-80 sm:-left-20 md:visible md:-top-96 md:-left-80 invisible "
        fill="skyblue"
      />
      <div className="mx-auto py-12 font-sans md:py-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:top-0 lg:flex lg:max-h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl text-shadow-xl shadow-black/[.5]">
                <a href="/">Mihir Malaviya</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-primary-300 sm:text-xl bg-blue-950 w-fit bg-opacity-10 text-shadow-lg shadow-black/[.5]">
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
              <p className="mt-4 max-w-xs leading-normal text-shadow shadow-black/[.5]">
                Please hire me. Please hire me. Please hire me. Please hire me.
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
                  <u className="underline-offset-4 text-yellow-100 hover:text-yellow-300 bg-yellow-700/[.5] hover:bg-yellow-700/[.6] border border-yellow-100/[.05] p-1 rounded transition duration-200 transform">
                    mihirmalaviya1@gmail.com
                  </u>
                </button>
              </p>
            </div>
          </header>
          <div className="lg:top-0 lg:flex lg:max-h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24">
            <h2 className="mt-5 mb-8 text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only text-shadow shadow-black/[.5]">
              About Me
            </h2>
            <p className="mb-4 text-shadow shadow-black/[.5]">
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
              Please hire me. Please hire me. Please hire me. Please hire me.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <SkillsSection />
      </div> */}

      <div className="text-shadow-xl shadow-black/[.5]">
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
        {/* <CoolCard />
        <CoolCard />
        <CoolCard />
        <CoolCard /> */}
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
          title="MCST GPA Calculator"
          description="A GPA calculator website tailored to fit the grading system of my highschool, the Morris County School of Technology."
          descriptionCards={["React", "Next", "Tailwind"]}
          image="MCSTGPA.png"
        />
        <ProjectSection
          label="Featured Project"
          title="Spotify Profile"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          descriptionCards={descriptionCards}
          // image={profileImage}
          image={
            "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/02/94_ui_design_tools_illustration_blog.jpg"
          }
        />
        <ProjectSection
          label="Featured Project"
          title="Spotify Profile"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          descriptionCards={descriptionCards}
          // image={profileImage}
          image={image}
        />
        <ProjectSection
          label="Featured Project"
          title="Spotify Profile"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          descriptionCards={descriptionCards}
          // image={profileImage}
          image={image}
        />
      </div>

      {/* <div className="absolute"> */}
      <div className="grid -z-50 !bg-transparent" />
      {/* </div> */}

      <footer className="w-100 pb-16 pt-16 text-md text-zinc-400 sm:pb-0 my-10 mx-10 text-center">
        Website built by Mihir Malaviya using React, Next, Tailwind, and Framer
        Motion.
      </footer>
    </div>
  );
}
