/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaCheckCircle, FaCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import clsxm from "@/lib/helpers/clsxm";

import BaseImage from "../BaseImage";
import Button from "../buttons/Button";
import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

export const newTheme = {
  h1: (props: React.ComponentPropsWithRef<"h1">) => {
    return (
      <h1 id={props.id} className="mt-16 mb-4 scroll-mt-16 hover:underline">
        <UnstyledLink href={`#${props.id}`}>{props.children}</UnstyledLink>
      </h1>
    );
  },
  h2: (props: React.ComponentPropsWithRef<"h2">) => {
    return (
      <h2 id={props.id} className="mb-4 mt-12 scroll-mt-16 hover:underline">
        <UnstyledLink href={`#${props.id}`}>{props.children}</UnstyledLink>
      </h2>
    );
  },
  h3: (props: React.ComponentPropsWithRef<"h3">) => {
    return (
      <h3 id={props.id} className="mt-12 mb-4 scroll-mt-16 hover:underline">
        <UnstyledLink href={`#${props.id}`}>{props.children}</UnstyledLink>
      </h3>
    );
  },
  h4: (props: React.ComponentPropsWithRef<"h4">) => {
    return (
      <h4 id={props.id} className="mt-12 mb-4 scroll-mt-16 hover:underline">
        <UnstyledLink href={`#${props.id}`}>
          <h4>{props.children}</h4>
        </UnstyledLink>
      </h4>
    );
  },
  h5: (props: React.ComponentPropsWithRef<"h5">) => {
    return (
      <h5 id={props.id} className="mt-12 mb-4 scroll-mt-16 hover:underline">
        <UnstyledLink href={`${props.id}`}>
          <h5>{props.children}</h5>
        </UnstyledLink>
      </h5>
    );
  },
  a: (props: React.ComponentPropsWithRef<"a">) => {
    return (
      <UnderlineLink
        href={String(props.href)}
        className={clsxm(
          props.href?.startsWith("/") || props.href?.startsWith("#")
            ? "text-errieblack-400 dark:text-errieblack-100"
            : "text-primary-700 dark:text-primary-300"
        )}
      >
        {props.children}
      </UnderlineLink>
    );
  },
  img: (props: React.ComponentPropsWithRef<"img">) => (
    <figure className="flex w-full items-center justify-center">
      <BaseImage
        alt="article-image"
        loading="lazy"
        decoding="async"
        className="my-4"
        {...props}
      />
    </figure>
  ),
  li: (props: React.ComponentPropsWithRef<"li">) => {
    return <li className="my-2 ml-4 list-disc">{props.children}</li>;
  },
  blockquote: (props: React.ComponentPropsWithRef<"blockquote">) => {
    return (
      <blockquote
        className={clsxm(
          "rounded-md bg-lightsteel-200 py-1 px-2 dark:bg-lightsteel-800",
          "text-black dark:text-white",
          "border-l-8 border-primary-400 dark:border-primary-300",
          "shadow-md dark:shadow-gray-500",
          "my-6"
        )}
      >
        {props.children}
      </blockquote>
    );
  },
  body: (props: React.ComponentPropsWithRef<"body">) => {
    return <body>{props.children}</body>;
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
        <code className="rounded bg-charcoal-100 p-0.5 dark:bg-errieblack-400">
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
          className="rounded-md"
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
            <>
              <FaCopy size={20} className="mr-2" />
              Copy
            </>
          ) : (
            <>
              <FaCheckCircle size={20} className="mr-2" />
              Copied
            </>
          )}
        </Button>
        {language && (
          <p
            className={clsxm(
              "absolute top-0 -translate-y-1/3",
              "bg-charcoal-100 p-0.5 dark:bg-errieblack-400",
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
