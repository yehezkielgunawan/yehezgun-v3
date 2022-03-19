/* eslint-disable @next/next/no-img-element */

import { Tooltip } from "react-tippy";

import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
import { DEFAULT_IMG } from "@/constants/baseConstants";
import { techStackList } from "@/constants/techStacks";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
import { getFeaturedProjects } from "@/lib/services/fetcher";
import { Projects } from "@/lib/services/types";

export async function getStaticProps() {
  const featuredProjects = await getFeaturedProjects();

  return {
    props: {
      featuredProjects,
    },
    revalidate: 60,
  };
}

export default function Home({
  featuredProjects,
}: {
  featuredProjects: Projects;
}) {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="space-y-3">
          <div className="my-8 flex items-center justify-between" data-fade="0">
            <div className="block space-y-1">
              <h1 className="mb-3">Hi, I&apos;m Yehezkiel Gunawan.</h1>
              <p>Currently work as a frontend engineer.</p>
              <p>
                You&apos;ve found my personal slice of the internet. Take a look
                and enjoy.
              </p>
              <div className="flex gap-4 pt-6 font-primary">
                <ButtonLink
                  href="/articles"
                  variant="outline"
                  className={clsxm(
                    "border-4 border-double border-zinc-400",
                    "hover:dark:bg-primary-700"
                  )}
                >
                  Read The Articles
                </ButtonLink>

                <ButtonLink
                  href="/aboutme"
                  variant="outline"
                  className={clsxm(
                    "border-dashed",
                    "hover:ring-1 hover:ring-primary-500 hover:dark:bg-primary-700 hover:dark:ring-primary-200"
                  )}
                >
                  Learn About Me
                </ButtonLink>
              </div>
            </div>
            <NextImage
              src="/yehez_avatar_transparent.svg"
              alt="avatar_me"
              objectFit="contain"
              width={240}
              height={240}
              className="hidden rounded-full bg-primary-300 dark:bg-primary-500 sm:table-cell"
              priority={true}
            />
          </div>
          <div className="block space-y-3" data-fade="1">
            <h3>Current Favorite Tech Stacks</h3>
            <div className="flex flex-wrap items-center gap-4">
              {techStackList.map((techStack, index) => (
                <Tooltip
                  key={index}
                  interactive
                  trigger="mouseenter"
                  position="top"
                  html={<div>{techStack.description}</div>}
                >
                  <techStack.icon className="text-4xl" />
                </Tooltip>
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-3 pt-10" data-fade="2">
          <h3 className="py-2">Featured Projects</h3>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 md:flex-nowrap">
            {featuredProjects.map((project, index) => (
              <UnstyledLink
                href={project.fields.project_url}
                key={index}
                className={clsxm(
                  "flex w-full flex-col items-center justify-center",
                  "rounded-md border p-2",
                  "duration-200 ease-in hover:-translate-y-1",
                  "hover:border-zinc-300 hover:ring hover:ring-zinc-300"
                )}
              >
                <h4 className="w-full border-b p-2 text-center">
                  {project.fields.project_title}
                </h4>
                <img
                  src={
                    project.fields.image_url
                      ? project.fields.image_url[0].url
                      : DEFAULT_IMG
                  }
                  alt="project-image"
                  className="aspect-[4/2] object-cover p-1 brightness-90"
                  loading="lazy"
                />
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
