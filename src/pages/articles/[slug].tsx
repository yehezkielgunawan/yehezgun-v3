/* eslint-disable react/no-children-prop */
import Giscus, { GiscusProps } from "@giscus/react";
import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { FaCheck, FaCopy, FaTwitter } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
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
import FundingModal from "@/components/ui/FundingModal";
import { EVENT_TYPE_BLOG, EVENT_TYPE_FUNDING } from "@/constants/track";
import useLoaded from "@/hooks/useLoaded";
import { categoryColorList } from "@/lib/helpers/categoryColor";
import clsxm from "@/lib/helpers/clsxm";
import { formatDate } from "@/lib/helpers/formatDate";
import { trackEvent } from "@/lib/helpers/trackEvent";
import { getArticleData, getArticles } from "@/lib/services/fetcher";
import { urlFor } from "@/lib/services/sanity-config";
import { Article } from "@/lib/services/types";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await getArticleData(slug).then((res: Article[]) => res[0]);

  return {
    props: {
      postData,
    },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  const table = await getArticles().then((res: Article[]) => res);
  return {
    paths: table.map((row: Article) => ({
      params: {
        id: row._id,
        slug: row.slug,
      },
    })),
    fallback: "blocking",
  };
}

export default function Post({ postData }: { postData: Article }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { theme } = useTheme();
  const handleCopyLink = () => {
    setIsCopied(true);
    trackCopyLinkTwitter("Copy");
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  const [giscusTheme, setGiscusTheme] =
    useState<GiscusProps["theme"]>("dark_dimmed");
  const isLoaded = useLoaded();
  const twitterCaption = `${postData.title} by @YehezGun`;
  const twitterUrl = typeof window !== "undefined" ? window.location.href : "";

  const trackClickFunding = useCallback(() => {
    trackEvent({
      eventName: "Open funding dialog modal",
      eventData: { type: EVENT_TYPE_FUNDING, slug: postData.slug },
      url: postData.slug,
    });
  }, [postData.slug]);

  const trackCopyLinkTwitter = useCallback(
    (shareTo: "Twitter" | "Copy") => {
      trackEvent({
        eventName:
          shareTo === "Twitter" ? "Share to Twitter" : "Copy article link",
        eventData: { type: EVENT_TYPE_BLOG, slug: postData.slug },
        url: postData.slug,
      });
    },
    [postData.slug]
  );

  const handleFundingClick = () => {
    setIsModalOpen(true);
    trackClickFunding();
  };

  useEffect(() => {
    if (theme === "light") {
      return setGiscusTheme("light_high_contrast");
    }
    return setGiscusTheme("dark_dimmed");
  }, [theme]);

  return (
    <Layout>
      <MetaHead
        pageTitle={postData.title}
        pageDesc="Yehezkiel Gunawan's Article Post"
        route={`articles/${postData.slug}`}
        isArticle={true}
      />
      <FundingModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="space-y-2" data-fade="0">
          <figure className="flex w-full justify-center">
            <BaseImage
              alt="post-image"
              src={urlFor(postData.cover).url()}
              className="w-full rounded-sm object-cover"
            />
          </figure>
          <div className="flex flex-wrap items-center justify-between gap-2 md:flex-nowrap md:items-end">
            <div className="max-w-xl space-y-1">
              <h3>{postData.title}</h3>
              <div className="flex items-center gap-3 pb-4">
                <p className="text-sm italic">
                  {formatDate(
                    postData._createdAt,
                    false,
                    postData.lang === "english" ? "en-EN" : "in-IN"
                  )}
                </p>
                <p
                  className={clsxm(
                    "rounded-md px-2 py-0.5 text-sm",
                    categoryColorList[postData.category]
                  )}
                >
                  {postData.category}
                </p>
              </div>
              <div className="flex gap-2">
                {postData.translated_url && (
                  <ButtonLink href={postData.translated_url} variant="light">
                    <BsTranslate size={20} className="mr-1" /> Read in{" "}
                    {postData.lang === "english" ? "Bahasa" : "English"}
                  </ButtonLink>
                )}
                <Button variant="dark" onClickCapture={handleFundingClick}>
                  <MdOutlineAttachMoney size={24} /> Support Me
                </Button>
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
                onClickCapture={() => trackCopyLinkTwitter("Twitter")}
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
            children={postData.content}
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
