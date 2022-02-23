/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import React from "react";

import { convertToIdLink } from "@/lib/helpers/convertToIdLink";

import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

export const newTheme = {
  h1: (props: React.ComponentPropsWithRef<"h1">) => {
    const router = useRouter();
    return (
      <UnstyledLink
        href={convertToIdLink(router.asPath, String(props.children))}
        className="mt-6 mb-3 hover:underline"
      >
        <h1>{props.children}</h1>
      </UnstyledLink>
    );
  },
  h2: (props: React.ComponentPropsWithRef<"h2">) => {
    const router = useRouter();
    return (
      <UnstyledLink
        href={convertToIdLink(router.asPath, String(props.children))}
        className="mt-6 mb-3 hover:underline"
      >
        <h2>{props.children}</h2>
      </UnstyledLink>
    );
  },
  h3: (props: React.ComponentPropsWithRef<"h3">) => {
    const router = useRouter();
    return (
      <UnstyledLink
        href={convertToIdLink(router.asPath, String(props.children))}
        className="mt-6 mb-3"
      >
        <h3>{props.children}</h3>
      </UnstyledLink>
    );
  },
  h4: (props: React.ComponentPropsWithRef<"h4">) => {
    const router = useRouter();
    return (
      <UnstyledLink
        href={convertToIdLink(router.asPath, String(props.children))}
        className="mt-6 mb-3"
      >
        <h4>{props.children}</h4>
      </UnstyledLink>
    );
  },
  h5: (props: React.ComponentPropsWithRef<"h5">) => {
    const router = useRouter();
    return (
      <UnstyledLink
        href={convertToIdLink(router.asPath, String(props.children))}
        className="mt-6 mb-3"
      >
        <h5>{props.children}</h5>
      </UnstyledLink>
    );
  },
  a: (props: any) => {
    const { href } = props;
    return <UnderlineLink href={String(href)}>{props.children}</UnderlineLink>;
  },
  img: (props: React.ComponentPropsWithRef<"img">) => (
    <img
      alt="article-image"
      loading="lazy"
      className="my-1 w-full"
      {...props}
    />
  ),
  pre: (props: React.ComponentPropsWithRef<"pre">) => (
    <pre className="bg-gray-200 p-2 text-xs" {...props}>
      {props.children}
    </pre>
  ),
};
