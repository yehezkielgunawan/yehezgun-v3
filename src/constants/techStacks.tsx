import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

type SingleTechStack = {
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
};

export const techStackList: Array<SingleTechStack> = [
  {
    name: "React",
    description:
      "Currently this is my current favorite frontend library. I use it at my current workplace and personal projects.",
    icon: <FaReact className="text-4xl" />,
    url: "https://reactjs.org",
  },
  {
    name: "Typescript",
    description:
      "Typescript is my current favorite programming language. Its syntax is like Javascript, but with the explicit declaration of data type and improved readibility",
    icon: <SiTypescript className="text-4xl" />,
    url: "https://typescriptlang.org/docs",
  },
  {
    name: "Next JS",
    description:
      "Next.js, this is my go-to framework because of the static generation, dynamic paths, and built-in api.",
    icon: <SiNextdotjs className="text-4xl" />,
    url: "https://nextjs.org",
  },
  {
    name: "Node JS",
    description:
      "Node.js, simple backend language with Javascript based. I just used it as a package manager with NPM",
    icon: <FaNodeJs className="text-4xl" />,
    url: "https://nodejs.org/en",
  },
];
