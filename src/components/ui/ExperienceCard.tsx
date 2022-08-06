import React from "react";
import { BsBriefcase, BsBuilding } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";

import clsxm from "@/lib/helpers/clsxm";

type ExperienceCardProps = {
  experienceName: string;
  companyName: string;
  duration: string;
};

const ExperienceCard = ({
  experienceName,
  companyName,
  duration,
}: ExperienceCardProps) => {
  return (
    <div
      className={clsxm(
        "space-y-3 rounded-md",
        "border border-lightsteel-800 p-3 dark:border-lightsteel-300",
        "transition duration-300 hover:bg-errieblack-200 dark:hover:bg-gainsboro-800"
      )}
    >
      <p className="flex items-center gap-2 font-bold">
        <BsBriefcase size={20} /> {experienceName}
      </p>
      <p className="flex items-center gap-2 text-sm">
        <BsBuilding size={20} /> {companyName}
      </p>
      <p className="flex items-center gap-2 font-bold italic">
        <GiJourney size={20} /> {duration}
      </p>
    </div>
  );
};

export default ExperienceCard;
