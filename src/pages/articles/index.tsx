/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import UnstyledSelect, {
  SingleOptionList,
} from "@/components/forms/UnstyledSelect";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import UnstyledLink from "@/components/links/UnstyledLink";
import { DEFAULT_IMG_ARTICLE } from "@/constants/baseConstants";
import { usePreloadState } from "@/context/PreloadContext";
import clsxm from "@/lib/helpers/clsxm";
import { formatDate } from "@/lib/helpers/formatDate";
import { getArticleList } from "@/lib/services/fetcher";
import {
  Articles as ArticlesType,
  SingleArticleInList,
  SingleRes,
} from "@/lib/services/types";

export async function getStaticProps() {
  const articleList = await getArticleList();

  return {
    props: {
      articleList,
    },
    revalidate: 60,
  };
}

const Articles = ({ articleList }: { articleList: ArticlesType }) => {
  const languageOptions: Array<SingleOptionList> = [
    {
      labelName: "English",
      value: "en",
    },
    {
      labelName: "Indonesian",
      value: "idn",
    },
  ];

  const [language, setLanguage] = useState<string>("en");

  const filterByLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    return setLanguage(e.target.value);
  };

  const isLoaded = usePreloadState();

  return (
    <Layout>
      <MetaHead
        pageTitle="Articles"
        pageDesc="Just some random thoughts."
        route="articles"
        isArticle={false}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <h1>Articles</h1>
        <p className="my-2">
          Just some random thoughts. For me, writting can sharpen my
          understanding of something.
        </p>

        <UnstyledSelect
          optionList={languageOptions}
          wrapperClassName="flex items-center gap-3 my-4"
          labelName="Choose Language"
          defaultValue={language}
          className="w-6/12 rounded-lg md:w-32"
          onChange={filterByLanguage}
        />

        <div className="flex flex-col gap-3">
          {articleList
            .filter(
              (article: SingleRes<SingleArticleInList>) =>
                article.fields.lang === language
            )
            .map((article, index) => (
              <UnstyledLink
                key={index}
                className="group"
                href={`/articles/${article.fields.slug}`}
              >
                <div
                  className={clsxm(
                    "h-42 flex items-center gap-3 p-4 md:h-48",
                    "rounded-md border-2 border-primary-200 dark:border-primary-500",
                    "duration-200 ease-in group-hover:-translate-y-1",
                    "group-hover:ring group-hover:ring-zinc-400"
                  )}
                >
                  <img
                    alt="article-images"
                    src={
                      article.fields.article_image
                        ? article.fields.article_image[0].url
                        : DEFAULT_IMG_ARTICLE
                    }
                    className="w-32 rounded-sm md:w-44"
                    loading="lazy"
                  />
                  <div className="block space-y-4 group-hover:underline">
                    <h3>{article.fields.title}</h3>
                    <p>
                      {formatDate(
                        article.fields.date,
                        false,
                        language === "en" ? "en-EN" : "in-IN"
                      )}
                    </p>
                  </div>
                </div>
              </UnstyledLink>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default Articles;
