import Tippy from "@tippyjs/react/headless";
import { useCallback } from "react";

import BaseImage from "@/components/BaseImage";
import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import { techStackList } from "@/constants/techStacks";
import { EVENT_TYPE_LINK, EVENT_TYPE_RESUME } from "@/constants/track";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
import { trackEvent } from "@/lib/helpers/trackEvent";
import { getFeaturedProjectList } from "@/lib/services/fetcher";
import { urlFor } from "@/lib/services/sanity-config";
import { SingleProjectItem } from "@/lib/services/types";

export async function getStaticProps() {
  const featuredProjects = await getFeaturedProjectList();

  return {
    props: {
      featuredProjects,
    },
    revalidate: 120,
  };
}

export default function Home({
  featuredProjects,
}: {
  featuredProjects: SingleProjectItem[];
}) {
  const isLoaded = useLoaded();

  const handleClickResume = useCallback(() => {
    trackEvent({
      eventName: "Open the resume",
      eventData: { type: EVENT_TYPE_RESUME },
      url: "/resume",
    });
  }, []);

  const trackFeaturedProject = useCallback((projectName: string) => {
    trackEvent({
      eventName: `Access the featured project : ${projectName}`,
      eventData: { type: EVENT_TYPE_LINK, projectName: projectName },
      url: "/",
    });
  }, []);

  return (
    <Layout>
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="space-y-3">
          <div className="my-8 flex items-center justify-between" data-fade="0">
            <div className="block space-y-1">
              <h1 className="mb-3">
                Hi, I&apos;m{" "}
                <span
                  className={clsxm(
                    "rounded-md p-1",
                    "bg-gainsboro-600 dark:bg-lightsteel-700",
                    "transition-all duration-300 ease-in hover:p-2",
                    "bg-gradient-to-r hover:from-errieblack-200 hover:to-primary-500",
                    "dark:hover:from-lightsteel-800 dark:hover:to-errieblack-400"
                  )}
                >
                  Yehezkiel Gunawan
                </span>
              </h1>
              <p>Currently work as a frontend engineer.</p>
              <p>
                You&apos;ve found my personal slice of the internet. Take a look
                and enjoy.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <ButtonLink
                  href="/articles"
                  variant="outline"
                  className={clsxm("border-4 border-double")}
                >
                  Read The Articles
                </ButtonLink>

                <ButtonLink
                  href="/aboutme"
                  variant="outline"
                  className={clsxm("border-dashed", "hover:ring-1")}
                >
                  Learn About Me
                </ButtonLink>
                <ButtonLink
                  href="/resume"
                  openNewTab={true}
                  variant="outline"
                  className={clsxm("border-2 border-dotted", "hover:ring-1")}
                  onClick={handleClickResume}
                >
                  Resume
                </ButtonLink>
              </div>
            </div>
            <NextImage
              src="/yehez_avatar_transparent.svg"
              alt="avatar_me"
              width={240}
              height={240}
              className="hidden rounded-full bg-primary-200 dark:bg-primary-600 sm:table-cell"
              priority={true}
            />
          </div>
          <div className="block space-y-3" data-fade="1">
            <h3>Current Favorite Tech Stacks</h3>
            <div className="flex flex-wrap items-center gap-4">
              {techStackList.map((techStack) => (
                <Tippy
                  key={techStack.name}
                  interactive
                  delay={100}
                  arrow
                  render={(attrs) => (
                    <div
                      className="max-w-xs rounded-lg bg-lightsteel-100 p-2 shadow-lg dark:bg-errieblack-500"
                      {...attrs}
                    >
                      {techStack.description}
                    </div>
                  )}
                >
                  <button>
                    <techStack.icon className="text-4xl" />
                  </button>
                </Tippy>
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-3 pt-10" data-fade="2">
          <h3 className="py-2">Featured Projects</h3>
          <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <UnstyledLink
                key={project._id}
                href={project.project_url}
                className={clsxm(
                  "relative w-full overflow-hidden rounded-md",
                  "hover:border-zinc-400 hover:ring hover:ring-zinc-400",
                  "dark:hover:border-zinc-100 dark:hover:ring-zinc-100",
                  "duration-200 ease-in hover:-translate-y-1"
                )}
                onClickCapture={() =>
                  trackFeaturedProject(project.project_name)
                }
              >
                <BaseImage
                  alt="featured-project"
                  src={urlFor(project.project_screenshot).url()}
                  className={clsxm(
                    "w-full",
                    "duration-500 dark:brightness-75 dark:hover:brightness-95",
                    "brightness-90 hover:brightness-100"
                  )}
                />
                <h4
                  className={clsxm(
                    "absolute inset-x-0 bottom-0 w-full",
                    "bg-gainsboro-800 bg-opacity-75 py-2",
                    "text-center text-base text-white"
                  )}
                >
                  {project.project_name}
                </h4>
              </UnstyledLink>
            ))}
          </div>
          <ButtonLink
            variant="outline"
            href="/projects"
            className="mt-4 w-full justify-center font-primary"
          >
            See More Projects
          </ButtonLink>
        </section>
      </main>
    </Layout>
  );
}
