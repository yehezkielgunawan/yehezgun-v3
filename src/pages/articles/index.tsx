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
import { getArticles } from "@/lib/services/fetcher";
import { urlFor } from "@/lib/services/sanity-config";
import { Article } from "@/lib/services/types";

export async function getStaticProps() {
  const articleList = await getArticles();

  return {
    props: {
      articleList,
    },
    revalidate: 120,
  };
}

export default function Articles({ articleList }: { articleList: Article[] }) {
  const languageOptions: Array<SingleOptionList> = [
    {
      labelName: "English",
      value: "english",
    },
    {
      labelName: "Indonesian",
      value: "indonesia",
    },
  ];

  const [language, setLanguage] = useState<string>("english");

  const filterByLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    return setLanguage(e.target.value);
  };
  const [categoryState, setCategoryState] = useState<string>("All");
  const [keyword, setKeyword] = useState<string>("");

  const isLoaded = useLoaded();

  const handleCategory = (categoryName: string) => {
    return setCategoryState(categoryName);
  };

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setKeyword(e.target.value);
  };

  const filteredArticles = (
    categoryState === "All"
      ? articleList
      : articleList.filter((article) => article.category === categoryState)
  )
    .filter((article) => article.lang === language)
    .filter((article) =>
      article.title.toLowerCase().includes(keyword.toLowerCase())
    );

  return (
    <Layout>
      <MetaHead
        pageTitle="Articles"
        pageDesc="Here are my writings."
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
          <div
            className={clsxm(
              "flex flex-wrap items-center justify-between gap-2",
              "md:flex-nowrap"
            )}
          >
            <UnstyledSelect
              optionList={languageOptions}
              wrapperClassName="flex items-center gap-3 w-full md:w-1/2"
              labelName="Choose Language"
              defaultValue={language}
              className="w-6/12 rounded-lg bg-lightsteel-200 dark:bg-gainsboro-800 md:w-36"
              onChange={filterByLanguage}
            />
            <div className="flex flex-wrap items-center gap-3">
              {categoryList.map((category) => (
                <p
                  key={category}
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
          </div>
          <input
            type="text"
            className={clsxm(
              "w-full rounded-md",
              "bg-lightsteel-200 dark:bg-gainsboro-800 placeholder:dark:text-charcoal-200"
            )}
            placeholder="Search..."
            onChange={handleSearchKeyword}
          />
        </section>
        <section className="mt-8" data-fade="1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard
                  key={article._id}
                  slug={article.slug}
                  imageUrl={urlFor(article.cover).url()}
                  title={article.title}
                  category={article.category}
                  publishedDate={article._createdAt}
                  lang={article.lang}
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
