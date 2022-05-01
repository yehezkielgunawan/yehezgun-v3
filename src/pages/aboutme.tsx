/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsBriefcase, BsBuilding } from "react-icons/bs";
import { GiJourney, GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";
import { Tooltip } from "react-tippy";

import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import { contactList } from "@/constants/contactList";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
import { getAllExperiences } from "@/lib/services/fetcher";
import { Experiences } from "@/lib/services/types";

export async function getStaticProps() {
  const experienceList = await getAllExperiences();

  return {
    props: {
      experienceList,
    },
    revalidate: 120,
  };
}

export default function AboutMe({
  experienceList,
}: {
  experienceList: Experiences;
}) {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <MetaHead
        pageTitle="About Me"
        pageDesc="A little description about me."
        route="aboutme"
        isArticle={false}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="my-4" data-fade="0">
          <h1>Yo, hello there!</h1>
          <div className="flex flex-wrap-reverse items-center gap-4 md:flex-nowrap">
            <div className="block space-y-6 text-justify">
              <p className="text-xs md:text-sm">
                I&apos;m Yehezkiel Gunawan, a front-end engineer. You can call
                me Yehez. Recently, I&apos;m learning React and its libraries
                while working in its ecosystem. To sharpen my understanding of
                something, I usually push myself to craft some projects and
                publish them here. Sometimes, I write some blogs to share my
                experience, testimonies, or tips & tricks as a frontend
                developer.
              </p>
              <p className="text-xs md:text-sm">
                Besides of programming things, I like to explore some new tech
                stuff, playing games sometimes, and watching animes.
              </p>
              <p className="text-[10px] italic md:text-xs">
                Fun Fact: Actually, I&apos;m still struggling with native CSS
                even I&apos;m a frontend engineer, LOL.
              </p>
            </div>
            <NextImage
              useSkeleton
              alt="my-profile"
              src="/yehez-profile.png"
              width={1600}
              height={1000}
              priority
              imgClassName="rounded-md"
            />
          </div>
          <div className="my-4 flex items-center gap-3">
            {contactList.map((contact, index) => (
              <Tooltip
                key={index}
                interactive
                trigger="mouseenter"
                position="top"
                arrow={true}
                title={contact.name}
              >
                <UnstyledLink href={contact.link_route}>
                  <contact.icon size={32} className="hover:text-primary-500" />
                </UnstyledLink>
              </Tooltip>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ButtonLink href="https://ko-fi.com/yehezgun" variant="outline">
              <SiKofi size={20} className="mr-2" /> Support me on Ko-fi
            </ButtonLink>
            <ButtonLink href="https://saweria.co/yehezgun" variant="outline">
              <GiPayMoney size={20} className="mr-2" /> Support me on Saweria
            </ButtonLink>
          </div>
          <hr className="my-4" />
        </section>
        <section className="my-6" data-fade="1">
          <div className="block">
            <h1 className="my-4">Work Experience</h1>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
              {experienceList.map((experience, index) => (
                <div
                  key={index}
                  className={clsxm(
                    "space-y-3 rounded-md",
                    "border border-lightsteel-800 p-3 dark:border-lightsteel-300"
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
        </section>
      </main>
    </Layout>
  );
}
