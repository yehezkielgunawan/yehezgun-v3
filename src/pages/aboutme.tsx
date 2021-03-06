/* eslint-disable @next/next/no-img-element */
import Tippy from "@tippyjs/react";
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import ExperienceCard from "@/components/ui/ExperienceCard";
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
      <MetaHead pageTitle="About Me" route="aboutme" isArticle={false} />
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="my-4" data-fade="0">
          <h1>Yo, hello there!</h1>
          <div className="my-4 flex flex-wrap-reverse items-center justify-between gap-4 md:flex-nowrap">
            <div className="w-full space-y-6 text-justify">
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
                stuff, playing games sometimes, and watching animes. Oh by the
                way, if you don&apos;t mind, you can support me through Ko-fi or
                Saweria to keep this site alive and maintained.
              </p>
              <p className="text-[10px] italic md:text-xs">
                Fun Fact: Actually, I&apos;m still struggling with native CSS
                even I&apos;m a frontend engineer, LOL.
              </p>
            </div>
            <NextImage
              alt="my-profile"
              src="/yehez-profile.png"
              className="w-full object-cover md:w-3/4"
              width={1600}
              height={1000}
              imgClassName="rounded-md"
            />
          </div>
          <div className="my-4 flex flex-wrap-reverse items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3">
              {contactList.map((contact, index) => (
                <Tippy
                  key={index}
                  interactive
                  delay={100}
                  content={contact.name}
                  arrow
                >
                  <UnstyledLink href={contact.link_route}>
                    <contact.icon
                      size={32}
                      className="hover:text-primary-500"
                    />
                  </UnstyledLink>
                </Tippy>
              ))}
            </div>
            <div className="inline-flex items-center gap-3">
              <ButtonLink
                className="gap-2"
                href="https://ko-fi.com/yehezgun"
                variant="outline"
              >
                <SiKofi size={20} /> Support me on Ko-fi
              </ButtonLink>
              <ButtonLink
                className="gap-2"
                href="https://saweria.co/yehezgun"
                variant="outline"
              >
                <GiPayMoney size={20} /> Support me on Saweria
              </ButtonLink>
            </div>
          </div>
          <hr className="my-4 border-t border-charcoal-200 dark:border-charcoal-100" />
        </section>
        <section className="my-6" data-fade="1">
          <div className="block">
            <h1 className="my-4">Work Experience</h1>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
              {experienceList.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experienceName={experience.fields.name}
                  companyName={experience.fields.company_name}
                  duration={experience.fields.duration}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
