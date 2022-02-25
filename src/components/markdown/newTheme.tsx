/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaCheckCircle, FaCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import clsxm from "@/lib/helpers/clsxm";

import Button from "../buttons/Button";
import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

export const newTheme = {
  h1: (props: React.ComponentPropsWithRef<"h1">) => {
    return (
      <h1 id={props.id} className="mt-8 mb-4 scroll-mt-16 hover:underline">
        <UnstyledLink href={`#${props.id}`}>{props.children}</UnstyledLink>
      </h1>
    );
  },
  h2: (props: React.ComponentPropsWithRef<"h2">) => {
    return (
      <h2 id={props.id} className="mt-12 mb-4 scroll-mt-16 hover:underline">
        <UnstyledLink href={`#${props.id}`}>{props.children}</UnstyledLink>
      </h2>
    );
  },
  h3: (props: React.ComponentPropsWithRef<"h3">) => {
    return (
      <h3 id={props.id} className="mt-12 mb-4 scroll-mt-16">
        <UnstyledLink href={`#${props.id}`}>{props.children}</UnstyledLink>
      </h3>
    );
  },
  h4: (props: React.ComponentPropsWithRef<"h4">) => {
    return (
      <h4 id={props.id} className="mt-12 mb-4 scroll-mt-16">
        <UnstyledLink href={`#${props.id}`}>
          <h4>{props.children}</h4>
        </UnstyledLink>
      </h4>
    );
  },
  h5: (props: React.ComponentPropsWithRef<"h5">) => {
    return (
      <h5 id={props.id} className="mt-12 mb-4 scroll-mt-16">
        <UnstyledLink href={`${props.id}`}>
          <h5>{props.children}</h5>
        </UnstyledLink>
      </h5>
    );
  },
  a: (props: React.ComponentPropsWithRef<"a">) => {
    return (
      <UnderlineLink href={String(props.href)}>{props.children}</UnderlineLink>
    );
  },
  img: (props: React.ComponentPropsWithRef<"img">) => (
    <img
      alt="article-image"
      loading="lazy"
      className="my-2 w-full"
      {...props}
    />
  ),
  li: (props: React.ComponentPropsWithRef<"li">) => {
    return <li className="my-2 ml-4 list-disc">{props.children}</li>;
  },
  blockquote: (props: React.ComponentPropsWithRef<"blockquote">) => {
    return (
      <blockquote
        className={clsxm(
          "rounded-md bg-cyan-200 py-1 px-2 dark:bg-cyan-500",
          "text-black dark:text-white",
          "border-l-8 border-blue-500 dark:border-blue-600",
          "shadow-md dark:shadow-gray-300"
        )}
      >
        {props.children}
      </blockquote>
    );
  },
  p: (props: React.ComponentPropsWithRef<"p">) => {
    return <p className="my-4">{props.children}</p>;
  },
  code: (props: React.ComponentPropsWithRef<"code">) => {
    const childrenValue = String(props.children).replace(/\n$/, "");
    const language = props.className?.replace(/language-/, "");
    const [isCopied, setIsCopied] = useState<boolean>(false);

    if (!language) {
      return (
        <code className="rounded bg-slate-200 p-0.5 dark:bg-slate-600">
          {props.children}
        </code>
      );
    }
    return (
      <>
        <SyntaxHighlighter
          language={language}
          style={nightOwl}
          showLineNumbers={false}
        >
          {childrenValue}
        </SyntaxHighlighter>
        <Button
          className={clsxm(
            "absolute top-0 right-0 -translate-y-1/2",
            "border-none bg-teal-500 hover:bg-teal-400 active:bg-teal-600"
          )}
          onClick={() => {
            navigator.clipboard.writeText(childrenValue);
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 3000);
          }}
        >
          {!isCopied ? (
            <FaCopy size={20} className="mr-2" />
          ) : (
            <FaCheckCircle size={20} className="mr-2" />
          )}{" "}
          Copy
        </Button>
        {language && (
          <p
            className={clsxm(
              "absolute top-0 -translate-y-1/2",
              "bg-slate-200 p-0.5 dark:bg-slate-600",
              "rounded-md"
            )}
          >
            {language}
          </p>
        )}
      </>
    );
  },
  pre: (props: React.ComponentPropsWithRef<"pre">) => {
    return <pre className="relative my-8 pt-5">{props.children}</pre>;
  },
};
