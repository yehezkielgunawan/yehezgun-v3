/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import UnstyledSelect, {
  SingleOptionList,
} from "@/components/forms/UnstyledSelect";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import { DEFAULT_IMG_ARTICLE } from "@/constants/baseConstants";
import { categoryList } from "@/constants/categoryList";
import useLoaded from "@/hooks/useLoaded";
import { categoryColorList } from "@/lib/helpers/categoryColor";
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

export default function Articles({
  articleList,
}: {
  articleList: ArticlesType;
}) {
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
  const [categoryState, setCategoryState] = useState<string>("All");

  const isLoaded = useLoaded();

  const handleCategory = (categoryName: string) => {
    return setCategoryState(categoryName);
  };

  const filteredArticles = (
    categoryState === "All"
      ? articleList
      : articleList.filter(
          (article: SingleRes<SingleArticleInList>) =>
            article.fields.category === categoryState
        )
  ).filter(
    (article: SingleRes<SingleArticleInList>) =>
      article.fields.lang === language
  );

  return (
    <Layout>
      <MetaHead
        pageTitle="Articles"
        pageDesc="Just some random thoughts."
        route="articles"
        isArticle={false}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="space-y-3" data-fade="0">
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
            className="w-6/12 rounded-lg md:w-36"
            onChange={filterByLanguage}
          />
          <div className="my-4 flex flex-wrap items-center gap-3">
            {categoryList.map((category, index) => (
              <p
                key={index}
                className={clsxm(
                  "rounded-md border border-primary-400 py-1 px-2",
                  "cursor-pointer",
                  "hover:bg-primary-200 dark:hover:bg-primary-500",
                  categoryState === category && "bg-slate-200 dark:bg-slate-500"
                )}
                onClick={() => handleCategory(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </section>
        <section className="mt-4" data-fade="1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <UnstyledLink
                  key={index}
                  className="group"
                  href={`/articles/${article.fields.slug}`}
                >
                  <div
                    className={clsxm(
                      "h-auto rounded-lg border py-2 shadow-lg sm:h-80 md:h-96",
                      "dark:border-primary-600 dark:bg-slate-800",
                      "duration-100 ease-in group-hover:scale-105",
                      "group-hover:shadow-primary-200 dark:group-hover:shadow-primary-600"
                    )}
                  >
                    <NextImage
                      useSkeleton
                      width={16}
                      height={9}
                      className="w-full px-4"
                      objectFit="contain"
                      src={
                        article.fields.article_image
                          ? article.fields.article_image[0].url
                          : DEFAULT_IMG_ARTICLE
                      }
                      alt="article-image"
                    />
                    <div className="flex flex-col space-y-2 px-6 py-4">
                      <p className="flex items-center gap-2 text-xs md:text-sm">
                        {formatDate(
                          article.fields.date,
                          false,
                          language === "en" ? "en-EN" : "in-IN"
                        )}{" "}
                        <span
                          className={clsxm(
                            "rounded-md py-1 px-2 text-xs md:text-sm",
                            categoryColorList[article.fields.category]
                          )}
                        >
                          {article.fields.category}
                        </span>
                      </p>
                      <h3>{article.fields.title}</h3>
                    </div>
                  </div>
                </UnstyledLink>
              ))
            ) : (
              <p>Oops no article list in this category.</p>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
