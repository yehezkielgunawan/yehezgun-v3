import React from "react";

import { categoryColorList } from "@/lib/helpers/categoryColor";
import clsxm from "@/lib/helpers/clsxm";
import { formatDate } from "@/lib/helpers/formatDate";

import BaseImage from "../BaseImage";
import UnstyledLink from "../links/UnstyledLink";

type ArticleCardProps = {
  slug: string;
  imageUrl: string;
  title: string;
  category: string;
  publishedDate: string;
  lang: string;
};

const ArticleCard = ({
  slug,
  imageUrl,
  title,
  category,
  lang,
  publishedDate,
}: ArticleCardProps) => {
  return (
    <UnstyledLink className="group" href={`/articles/${slug}`}>
      <div
        className={clsxm(
          "rounded-lg border py-2 shadow-lg",
          "h-full w-full",
          "border-lightsteel-300 bg-gainsboro-100 dark:border-lightsteel-600 dark:bg-charcoal-500",
          "transition duration-100 ease-in hover:scale-105",
          "hover:shadow-errieblack-200 dark:hover:shadow-lightsteel-400"
        )}
      >
        <figure className="flex w-full items-center justify-center px-4">
          <BaseImage
            className="h-72 w-80 object-contain md:w-96"
            src={imageUrl}
            alt="article-image"
          />
        </figure>
        <div className="flex flex-col space-y-2 px-6 py-4">
          <p className="flex items-center gap-2 text-xs md:text-sm">
            {formatDate(
              publishedDate,
              false,
              lang === "english" ? "en-EN" : "in-IN"
            )}{" "}
            <span
              className={clsxm(
                "rounded-md py-1 px-2 text-xs md:text-sm",
                categoryColorList[category]
              )}
            >
              {category}
            </span>
          </p>
          <h3>{title}</h3>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default ArticleCard;
