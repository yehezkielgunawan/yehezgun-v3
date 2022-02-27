/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import clsxm from "@/lib/helpers/clsxm";
import { SingleProjectImg } from "@/lib/services/types";

import UnstyledLink from "../links/UnstyledLink";

type ProjectCardProps = {
  url: string;
  projectTitle: string;
  projectDesc: string;
  projectImg: string;
  madeUsing: Array<SingleProjectImg>;
};

const ProjectCard = ({
  url,
  projectTitle,
  projectDesc,
  projectImg,
  madeUsing,
}: ProjectCardProps) => {
  return (
    <UnstyledLink href={url} className="group">
      <div
        className={clsxm(
          "my-4 rounded-lg border-2 border-primary-200 py-4 px-6 dark:border-primary-400",
          "duration-300 ease-in group-hover:-translate-y-1",
          "group-hover:border-zinc-300",
          "group-hover:ring group-hover:ring-zinc-300"
        )}
      >
        <div className="flex items-center justify-between group-hover:underline">
          <h3>{projectTitle}</h3>
          <FaExternalLinkAlt size={16} />
        </div>
        <div className="flex items-center justify-between">
          <p className="pr-4 group-hover:underline">{projectDesc}</p>
          <img
            src={projectImg}
            alt="image-project"
            className="h-24 w-32 rounded-md object-contain md:h-32 md:w-40"
          />
        </div>
        <div className="flex gap-3">
          {madeUsing.map((tool, index) => (
            <img
              key={index}
              src={tool.url}
              alt="icon-tool"
              className="h-10 rounded-lg md:h-12"
            />
          ))}
        </div>
      </div>
    </UnstyledLink>
  );
};

export default ProjectCard;
