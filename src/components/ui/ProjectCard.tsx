import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { EVENT_TYPE_LINK } from "@/constants/track";
import clsxm from "@/lib/helpers/clsxm";
import { trackEvent } from "@/lib/helpers/trackEvent";

import BaseImage from "../BaseImage";
import UnstyledLink from "../links/UnstyledLink";

type ProjectCardProps = {
  url: string;
  projectTitle: string;
  projectDesc: string;
  projectImg: string;
  madeUsing: Array<string>;
};

const ProjectCard = ({
  url,
  projectTitle,
  projectDesc,
  projectImg,
  madeUsing,
}: ProjectCardProps) => {
  const handleClickProject = () => {
    trackEvent({
      eventName: `Access the project: ${projectTitle}`,
      eventData: { type: EVENT_TYPE_LINK, projectName: projectTitle },
      url: "/projects",
    });
  };
  return (
    <UnstyledLink
      href={url}
      className="group"
      onClickCapture={handleClickProject}
    >
      <div
        className={clsxm(
          "my-4 rounded-lg border-2 border-lightsteel-300 py-4 px-6 dark:border-lightsteel-500",
          "duration-300 ease-in group-hover:-translate-y-1",
          "group-hover:border-lightsteel-300",
          "group-hover:ring group-hover:ring-lightsteel-300",
          "bg-gainsboro-100 dark:bg-charcoal-500",
          "h-full",
          "flex flex-col justify-between"
        )}
      >
        <div className="flex items-center justify-between group-hover:underline">
          <h3>{projectTitle}</h3>
          <FaExternalLinkAlt size={16} />
        </div>
        <div className="flex items-center justify-between">
          <p className="pr-4 group-hover:underline">{projectDesc}</p>
          <BaseImage alt="image-project" src={projectImg} className="w-24" />
        </div>
        <div className="flex gap-3">
          {madeUsing.map((tool, index) => (
            <figure key={index} className="flex w-10 items-center md:w-12">
              <BaseImage alt="icon-tool" src={tool} className="rounded-sm" />
            </figure>
          ))}
        </div>
      </div>
    </UnstyledLink>
  );
};

export default ProjectCard;
