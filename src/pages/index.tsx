import type { NextPage } from "next";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiVercel } from "react-icons/si";

import ButtonLink from "@/components/buttons/ButtonLink";
import ArrowLink from "@/components/links/ArrowLink";
import Layout from "@/layouts/Layout";
import clsxm from "@/lib/helpers/clsxm";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="flex flex-col gap-3">
        <h1 className="underline">Hello World!</h1>
        <p
          className={clsxm(
            "bg-gray-200",
            "dark:bg-gray-700",
            "rounded-lg px-1 text-sm md:text-lg"
          )}
        >
          This is just a starter template, made using Next.js + Typescript +
          Tailwind CSS.
        </p>
        <figure className="my-4 flex animate-spin content-center justify-center py-3">
          <Image
            src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
            alt="Next.jsLogo"
            width={120}
            height={120}
          />
        </figure>
        <div className="my-4 content-center justify-center text-center">
          <code
            className={clsxm(
              "bg-gray-200 dark:bg-gray-700",
              "rounded-lg text-sm md:text-lg"
            )}
          >
            npx degit yehezkielgunawan/yehez-nexttailwind-starter [APP_NAME]
          </code>
          <h3>OR</h3>
          <code
            className={clsxm(
              "bg-gray-200 dark:bg-gray-700",
              "rounded-lg text-sm md:text-lg"
            )}
          >
            npx create-next-app --example
            https://github.com/yehezkielgunawan/yehez-nexttailwind-starter
            [YOUR_APP_NAME]
          </code>
        </div>
        <ButtonLink
          href="https://github.com/yehezkielgunawan/yehez-nexttailwind-starter/generate"
          variant="outline"
          className={clsxm(
            "items-center justify-center rounded-md",
            "border-2 border-teal-700 dark:border-teal-400",
            "text-teal-800 dark:text-teal-300",
            "font-semibold hover:bg-teal-200 dark:hover:bg-teal-600"
          )}
        >
          Use This Template
        </ButtonLink>
        <ArrowLink
          as={ButtonLink}
          direction="right"
          href="/components"
          variant="outline"
          className={clsxm(
            "items-center justify-center rounded-md border-2 shadow-md",
            "border-gray-400 text-gray-500 dark:border-gray-300 dark:text-white",
            "hover:bg-gray-200 dark:hover:bg-gray-500"
          )}
        >
          See Components
        </ArrowLink>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonLink
            href="https://github.com/yehezkielgunawan/yehez-nexttailwind-starter"
            className={clsxm(
              "rounded-lg ",
              "bg-gray-700",
              "hover:bg-gray-400",
              "border-0"
            )}
          >
            <AiFillGithub size={20} className="mr-1" /> Open in Github
          </ButtonLink>
          <ButtonLink
            href="https://vercel.com/import/git?s=https://github.com/yehezkielgunawan/yehez-nexttailwind-starter"
            className={clsxm(
              "rounded-lg bg-blue-600 hover:bg-blue-400",
              "border-0"
            )}
          >
            <SiVercel size={20} className="mr-1" />
            Deploy To Vercel
          </ButtonLink>
          <ButtonLink
            href="https://app.netlify.com/start/deploy?repository=https://github.com/yehezkielgunawan/yehez-nexttailwind-starter"
            className={clsxm(
              "rounded-lg bg-sky-600 hover:bg-sky-400",
              "border-0"
            )}
          >
            <SiNetlify size={20} className="mr-1" />
            Deploy To Netlifly
          </ButtonLink>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
