/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsBriefcase, BsBuilding } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";
import { Tooltip } from "react-tippy";

import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import { contactList } from "@/constants/contactList";
import { usePreloadState } from "@/context/PreloadContext";
import clsxm from "@/lib/helpers/clsxm";
import { getAllExperiences } from "@/lib/services/fetcher";
import { Experiences } from "@/lib/services/types";

export async function getStaticProps() {
  const experienceList = await getAllExperiences();

  return {
    props: {
      experienceList,
    },
    revalidate: 60,
  };
}

const AboutMe = ({ experienceList }: { experienceList: Experiences }) => {
  const isLoaded = usePreloadState();
  return (
    <Layout>
      <MetaHead
        pageTitle="About Me"
        pageDesc="A little description about me."
        route="aboutme"
        isArticle={false}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <h1 className="my-4">Yo, hello there!</h1>
        <div className="flex flex-wrap-reverse items-center gap-4 md:flex-nowrap">
          <div className="block space-y-6 text-justify">
            <p>
              I&apos;m Yehezkiel Gunawan, a front-end engineer. You can call me
              Yehez. Recently, I&apos;m learning React and its libraries while
              working in its ecosystem. To sharpen my understanding of
              something, I usually push myself to craft some projects and
              publish them here. Sometimes, I write some blogs to share my
              experience, testimonies, or tips & tricks as a frontend developer.
            </p>
            <p>
              Besides of programming things, I like to explore some new tech
              stuff, playing games sometimes, and watching animes.
            </p>
            <p className="text-xs italic">
              Fun Fact: Actually, I&apos;m still struggling with native CSS even
              I&apos;m a frontend engineer, LOL.
            </p>
          </div>
          <NextImage
            useSkeleton
            alt="my-profile"
            src="/yehez-profile.png"
            width={1600}
            height={1000}
            priority={true}
            imgClassName="rounded-md"
          />
        </div>
        <div className="my-4 flex items-center gap-3">
          {contactList.map((contact, index) => (
            <Tooltip
              key={index}
              interactive
              trigger="mouseenter"
              position="bottom"
              title={contact.name}
            >
              <UnstyledLink href={contact.link_route}>
                <contact.icon size={32} className="hover:text-primary-500" />
              </UnstyledLink>
            </Tooltip>
          ))}
        </div>
        <div className="my-6 border-b-2"></div>
        <div className="block">
          <h1 className="my-4">Work Experience</h1>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {experienceList.map((experience, index) => (
              <div
                key={index}
                className={clsxm(
                  "space-y-3 rounded-md",
                  "border border-primary-500 p-3 dark:border-primary-300"
                )}
              >
                <p className="flex items-center gap-2 font-bold">
                  <BsBriefcase size={20} /> {experience.fields.name}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <BsBuilding size={20} /> {experience.fields.company_name}
                </p>
                <p className="flex items-center gap-2 font-bold italic">
                  <GiJourney size={20} /> {experience.fields.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutMe;
