import Tippy from "@tippyjs/react/headless";
import { useTheme } from "next-themes";
import React, { useCallback, useState } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";

import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import ExperienceCard from "@/components/ui/ExperienceCard";
import FundingModal from "@/components/ui/FundingModal";
import { contactList } from "@/constants/contactList";
import { EVENT_TYPE_FUNDING, EVENT_TYPE_LINK } from "@/constants/track";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
import { formatDateMonth } from "@/lib/helpers/formatDate";
import { trackEvent } from "@/lib/helpers/trackEvent";
import { getExperienceList } from "@/lib/services/fetcher";
import { ExperienceType } from "@/lib/services/types";

export async function getStaticProps() {
  const experienceList = await getExperienceList();

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
  experienceList: ExperienceType[];
}) {
  const isLoaded = useLoaded();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleClickContact = (contactName: string) => {
    trackEvent({
      eventName: `Click profile icon: ${contactName}`,
      eventData: { type: EVENT_TYPE_LINK, contactName: contactName },
      url: "/aboutme",
    });
  };

  const trackClickFunding = useCallback(() => {
    trackEvent({
      eventName: "Open funding dialog modal",
      eventData: { type: EVENT_TYPE_FUNDING },
      url: "/aboutme",
    });
  }, []);

  const handleFundingClick = () => {
    setIsOpen(true);
    trackClickFunding();
  };

  return (
    <Layout>
      <MetaHead
        pageTitle="About Me"
        pageDesc="A little description about me."
        route="aboutme"
        isArticle={false}
      />
      <FundingModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
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
          <div className="my-4 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3">
              {contactList.map((contact) => (
                <Tippy
                  key={contact.name}
                  delay={100}
                  render={(attrs) => (
                    <div
                      className="max-w-xs rounded-lg bg-lightsteel-100 p-2 shadow-lg dark:bg-errieblack-500"
                      {...attrs}
                    >
                      <p>{contact.name}</p>
                    </div>
                  )}
                >
                  <UnstyledLink
                    href={contact.link_route}
                    onClickCapture={() => handleClickContact(contact.name)}
                  >
                    <contact.icon
                      size={32}
                      className="hover:text-primary-600"
                    />
                  </UnstyledLink>
                </Tippy>
              ))}
            </div>
            <Button
              variant={theme === "dark" ? "light" : "dark"}
              className="w-full justify-center gap-2 md:w-auto"
              onClickCapture={handleFundingClick}
            >
              <MdOutlineAttachMoney size={24} /> Support Me
            </Button>
          </div>
          <hr className="my-4 border-t border-charcoal-200 dark:border-charcoal-100" />
        </section>
        <section className="my-6" data-fade="1">
          <div className="block">
            <h1 className="my-4">Work Experience</h1>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
              {experienceList.map((experience) => (
                <ExperienceCard
                  key={experience._id}
                  experienceName={experience.experience_name}
                  companyName={experience.company}
                  duration={`${formatDateMonth(experience.start_date)} - ${
                    experience.is_currently_here
                      ? "Now"
                      : formatDateMonth(experience.end_date)
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
