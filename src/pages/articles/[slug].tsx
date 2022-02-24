/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import { newTheme } from "@/components/markdown/newTheme";
import { DEFAULT_IMG_ARTICLE } from "@/constants/baseConstants";
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
    revalidate: 60,
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

const Post = ({ postData }: { postData: SingleRes<SingleArticle> }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopyLink = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <Layout>
      <div className="space-y-2">
        <img
          src={
            postData.fields.article_image
              ? postData.fields.article_image[0].url
              : DEFAULT_IMG_ARTICLE
          }
          alt="article-image"
          className="w-full"
        />
        <div className="flex flex-wrap items-center justify-between gap-2 md:flex-nowrap">
          <div className="space-y-1">
            <h3>{postData.fields.title}</h3>
            <p className="text-sm italic">{formatDate(postData.fields.date)}</p>
          </div>
          <Button
            variant="outline"
            className={clsxm(
              "rounded-lg border border-teal-600",
              "font-bold text-teal-600 dark:text-teal-300",
              "hover:bg-teal-100 dark:hover:bg-teal-700"
            )}
            onClick={() => handleCopyLink()}
          >
            {!isCopied ? (
              <FaCopy size={20} className="mr-2" />
            ) : (
              <FaCheck size={20} className="mr-2" />
            )}
            Copy Link
          </Button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="my-2 block">
        <ReactMarkdown
          components={newTheme}
          children={postData.fields.content}
          remarkPlugins={[remarkGfm, remarkHtml]}
          rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
        />
      </div>
      <ArrowLink
        as={ButtonLink}
        direction="left"
        href="/articles"
        className="my-6 flex items-start justify-center gap-4"
        variant="outline"
      >
        Back To Articles Page
      </ArrowLink>
    </Layout>
  );
};

export default Post;
