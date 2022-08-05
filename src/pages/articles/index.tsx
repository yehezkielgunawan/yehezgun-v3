import React, { useState } from "react";

import UnstyledSelect, {
  SingleOptionList,
} from "@/components/forms/UnstyledSelect";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import ArticleCard from "@/components/ui/ArticleCard";
import { categoryList } from "@/constants/categoryList";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
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
    revalidate: 120,
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
      <MetaHead pageTitle="Articles" route="articles" isArticle={false} />
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
            className="w-6/12 rounded-lg bg-lightsteel-200 dark:bg-gainsboro-800 md:w-36"
            onChange={filterByLanguage}
          />
          <div className="my-4 flex flex-wrap items-center gap-3">
            {categoryList.map((category, index) => (
              <p
                key={index}
                className={clsxm(
                  "rounded-md border border-lightsteel-400 py-1 px-2",
                  "cursor-pointer bg-gainsboro-300 dark:bg-gainsboro-800",
                  "hover:bg-lightsteel-300 dark:hover:bg-lightsteel-600",
                  categoryState === category &&
                    "bg-lightsteel-300 dark:bg-lightsteel-700"
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
                <ArticleCard
                  key={index}
                  slug={article.fields.slug}
                  imageUrl={article.fields.article_image[0].url}
                  title={article.fields.title}
                  category={article.fields.category}
                  publishedDate={article.fields.date}
                  lang={article.fields.lang}
                />
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
