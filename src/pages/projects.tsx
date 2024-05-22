/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import ProjectCard from "@/components/ui/ProjectCard";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
import { getProjectList } from "@/lib/services/fetcher";
import { urlFor } from "@/lib/services/sanity-config";
import { SingleProjectItem } from "@/lib/services/types";

export async function getStaticProps() {
  const projectList = await getProjectList();

  return {
    props: {
      projectList,
    },
    revalidate: 120,
  };
}

export default function Projects({
  projectList,
}: {
  projectList: SingleProjectItem[];
}) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <MetaHead
        pageTitle="Projects"
        pageDesc="Here are my project list that I have done before."
        route="projects"
        isArticle={false}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <section className="space-y-2" data-fade="0">
          <h1>Projects</h1>
          <p className="my-2">
            This is my previous works, personal (experiments), and freelance (if
            it&apos;s public) project list.
          </p>
        </section>
        <section className="mt-8" data-fade="1">
          <h3>Featured Projects</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {projectList
              .filter((project) => project.is_featured === true)
              .map((project) => (
                <ProjectCard
                  key={project._id}
                  projectTitle={project.project_name}
                  projectDesc={project.project_desc}
                  projectImg={urlFor(project.project_logo).url()}
                  madeUsing={project.tech_stacks}
                  url={project.project_url}
                />
              ))}
          </div>
        </section>
        <section className="mt-16" data-fade="2">
          <h3>Other Projects</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {projectList
              .filter((project) => !project.is_featured)
              .map((singleProject) => (
                <ProjectCard
                  key={singleProject._id}
                  projectTitle={singleProject.project_name}
                  projectDesc={singleProject.project_desc}
                  projectImg={urlFor(singleProject.project_logo).url()}
                  madeUsing={singleProject.tech_stacks}
                  url={singleProject.project_url}
                />
              ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
