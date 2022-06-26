import Tippy from "@tippyjs/react";

import ButtonLink from "@/components/buttons/ButtonLink";
import Layout from "@/components/layouts/Layout";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
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
    revalidate: 120,
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
              <div className="flex flex-wrap gap-4 pt-6 font-primary">
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
                >
                  Resume
                </ButtonLink>
              </div>
            </div>
            <NextImage
              src="/yehez_avatar_transparent.svg"
              alt="avatar_me"
              objectFit="contain"
              width={240}
              height={240}
              className="hidden rounded-full bg-primary-200 dark:bg-primary-600 sm:table-cell"
              priority={true}
            />
          </div>
          <div className="block space-y-3" data-fade="1">
            <h3>Current Favorite Tech Stacks</h3>
            <div className="flex flex-wrap items-center gap-4">
              {techStackList.map((techStack, index) => (
                <Tippy
                  key={index}
                  interactive
                  delay={100}
                  content={<>{techStack.description}</>}
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
            {featuredProjects.map((project, index) => (
              <UnstyledLink
                key={index}
                href={project.fields.project_url}
                className={clsxm(
                  "relative w-full overflow-hidden rounded-md",
                  "hover:border-zinc-400 hover:ring hover:ring-zinc-400",
                  "dark:hover:border-zinc-100 dark:hover:ring-zinc-100",
                  "duration-200 ease-in hover:-translate-y-1"
                )}
              >
                <img
                  alt="featured-project"
                  src={project.fields.image_url[0].url}
                  className={clsxm(
                    "w-full",
                    "duration-500 dark:brightness-75 dark:hover:brightness-95",
                    "brightness-90 hover:brightness-100"
                  )}
                  loading="lazy"
                  decoding="async"
                />
                <h4
                  className={clsxm(
                    "absolute inset-x-0 bottom-0 w-full",
                    "bg-gainsboro-800 bg-opacity-75 py-2",
                    "text-center text-base text-white"
                  )}
                >
                  {project.fields.project_title}
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
