/* eslint-disable react/no-children-prop */
import { Giscus, GiscusProps } from "@giscus/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { FaCheck, FaCopy, FaTwitter } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import BaseImage from "@/components/BaseImage";
import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import ArrowLink from "@/components/links/ArrowLink";
import { newTheme } from "@/components/markdown/newTheme";
import useLoaded from "@/hooks/useLoaded";
import { categoryColorList } from "@/lib/helpers/categoryColor";
import clsxm from "@/lib/helpers/clsxm";
import { formatDate } from "@/lib/helpers/formatDate";
import { getArticleList, getArticlePost } from "@/lib/services/fetcher";
import { SingleArticle, SingleRes } from "@/lib/services/types";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await getArticlePost(slug).then((res) => res[0]);

  return {
    props: {
      postData,
    },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  const table = await getArticleList();
  return {
    paths: table.map((row) => {
      return {
        params: {
          id: row.id,
          slug: row.fields.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}

export default function Post({
  postData,
}: {
  postData: SingleRes<SingleArticle>;
}) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { theme } = useTheme();
  const handleCopyLink = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  const [giscusTheme, setGiscusTheme] =
    useState<GiscusProps["theme"]>("dark_dimmed");
  const isLoaded = useLoaded();
  const twitterCaption = `${postData.fields.title} by @YehezGun`;
  const twitterUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (theme === "light") {
      return setGiscusTheme("light_high_contrast");
    }
    return setGiscusTheme("dark_dimmed");
  }, [theme]);

  return (
    <Layout>
      <MetaHead
        pageTitle={postData.fields.title}
        pageDesc="Yehezkiel Gunawan's Article Post"
        route={`articles/${postData.fields.slug}`}
        isArticle={true}
      />

      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="space-y-2" data-fade="0">
          <figure className="flex w-full justify-center">
            <BaseImage
              alt="post-image"
              src={postData.fields.article_image[0].url}
              className="w-full rounded-sm object-cover"
            />
          </figure>
          <div className="flex flex-wrap items-center justify-between gap-2 md:flex-nowrap">
            <div className="space-y-1">
              <h3>{postData.fields.title}</h3>
              <div className="flex items-center gap-3 pb-4">
                <p className="text-sm italic">
                  {formatDate(
                    postData.fields.date,
                    false,
                    postData.fields.lang === "en" ? "en-EN" : "in-IN"
                  )}
                </p>
                <p
                  className={clsxm(
                    "rounded-md px-2 py-0.5 text-sm",
                    categoryColorList[postData.fields.category]
                  )}
                >
                  {postData.fields.category}
                </p>
              </div>
              <div className="flex gap-2">
                {postData.fields.translated_link && (
                  <ButtonLink
                    href={postData.fields.translated_link}
                    variant="light"
                  >
                    <BsTranslate size={20} className="mr-1" /> Read in{" "}
                    {postData.fields.lang === "en" ? "Bahasa" : "English"}
                  </ButtonLink>
                )}
              </div>
            </div>
            <div className="flex gap-3 md:flex-col">
              <Button
                variant="outline"
                className={clsxm(
                  "rounded-lg border border-teal-600",
                  "font-bold text-teal-600 dark:text-teal-300",
                  "hover:bg-teal-100 dark:hover:bg-teal-700",
                  "gap-2"
                )}
                onClick={() => handleCopyLink()}
              >
                {!isCopied ? (
                  <>
                    <FaCopy size={20} /> Copy Article Link
                  </>
                ) : (
                  <>
                    <FaCheck size={20} /> Copied{" "}
                  </>
                )}
              </Button>
              <ButtonLink
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  twitterCaption
                )}&url=${encodeURIComponent(twitterUrl)}`}
                variant="outline"
                className={clsxm(
                  "rounded-lg border border-sky-600",
                  "font-bold text-sky-600 dark:text-sky-300",
                  "hover:bg-sky-100 dark:hover:bg-sky-700",
                  "gap-2"
                )}
              >
                <FaTwitter size={20} /> Share on Twitter
              </ButtonLink>
            </div>
          </div>
        </section>
        <hr className="my-4 border-t border-charcoal-200 dark:border-charcoal-100" />
        <article className="my-2 block" data-fade="1">
          <ReactMarkdown
            components={newTheme}
            children={postData.fields.content}
            remarkPlugins={[remarkGfm, remarkHtml]}
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
          />
        </article>
        <section data-fade="2" className="space-y-4">
          <ArrowLink
            as={ButtonLink}
            direction="left"
            href="/articles"
            className="my-6 flex items-center justify-center gap-4"
            variant="outline"
          >
            Back To Articles Page
          </ArrowLink>
          <div className="flex items-center justify-between gap-2">
            <ButtonLink
              href="https://ko-fi.com/yehezgun"
              variant="outline"
              className="border-2"
            >
              <SiKofi size={20} className="mr-2" /> Support me on Ko-fi
            </ButtonLink>
            <ButtonLink
              href="https://trakteer.id/yehezgun/tip"
              variant="outline"
              className="border-2"
            >
              <GiPayMoney size={20} className="mr-2" /> Support me on Trakteer
            </ButtonLink>
          </div>
          <Giscus
            repo="yehezkielgunawan/yehezgun-v3"
            repoId="R_kgDOG2uTxA"
            mapping="pathname"
            reactionsEnabled="0"
            theme={giscusTheme}
            category="Article Post"
            categoryId="DIC_kwDOG2uTxM4CBVyS"
            emitMetadata="0"
            lang="en"
          />
        </section>
      </main>
    </Layout>
  );
}
