import { AiFillHome } from "react-icons/ai";
import { FaPencilRuler, FaRocket } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

export const menuIcon = (name: string) => {
  switch (name) {
    case "Home":
      return <AiFillHome className="text-lg" />;
    case "Projects":
      return <FaRocket className="text-lg" />;
    case "Articles":
      return <FaPencilRuler className="text-lg" />;
    case "About Me":
      return <RiAccountCircleFill className="text-lg" />;
  }
};
