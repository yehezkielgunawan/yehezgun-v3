import { FaNodeJs, FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

import UnderlineLink from "@/components/links/UnderlineLink";

type SingleTechStack = {
  name: string;
  description: React.ReactNode;
  icon: IconType;
};

export const techStackList: Array<SingleTechStack> = [
  {
    name: "React",
    description: (
      <p>
        <UnderlineLink href="https://reactjs.org" className="font-bold">
          React.js
        </UnderlineLink>
        , currently this is my current favorite frontend library. I use it at my
        current workplace and personal projects.
      </p>
    ),
    icon: FaReact,
  },
  {
    name: "Typescript",
    description: (
      <p>
        <UnderlineLink
          href="https://typescriptlang.org/docs"
          className="font-bold"
        >
          Typescript
        </UnderlineLink>{" "}
        is my current favorite programming language. Its syntax is like
        Javascript, but with the explicit declaration of data type and improved
        readibility
      </p>
    ),

    icon: SiTypescript,
  },
  {
    name: "Next JS",
    description: (
      <p>
        <UnderlineLink href="https://nextjs.org" className="font-bold">
          Next.js,
        </UnderlineLink>{" "}
        this is my go-to framework because of the static generation, dynamic
        paths, and built-in api.
      </p>
    ),
    icon: SiNextdotjs,
  },
  {
    name: "Node JS",
    description: (
      <p>
        <UnderlineLink href="https://nodejs.org/en" className="font-bold">
          Node.js
        </UnderlineLink>{" "}
        simple backend language with Javascript based. I just used it as a
        package manager with NPM
      </p>
    ),

    icon: FaNodeJs,
  },
];
