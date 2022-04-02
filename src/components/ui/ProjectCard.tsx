/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import UnstyledLink from "../links/UnstyledLink";
import NextImage from "../NextImage";

import clsxm from "@/lib/helpers/clsxm";
import { SingleProjectImg } from "@/lib/services/types";

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
          <NextImage
            alt="image-project"
            src={projectImg}
            width={32}
            height={32}
            className={clsxm(
              "w-32 min-w-[6rem] max-w-[6rem] md:w-40",
              "md:min-w-[8rem] md:max-w-[8rem]"
            )}
            objectFit="contain"
          />
        </div>
        <div className="flex gap-3">
          {madeUsing.map((tool, index) => (
            <NextImage
              alt="icon-tool"
              key={index}
              src={tool.url}
              width={24}
              height={24}
              className="w-10 md:w-12"
              objectFit="contain"
              imgClassName="rounded-sm"
            />
          ))}
        </div>
      </div>
    </UnstyledLink>
  );
};

export default ProjectCard;
