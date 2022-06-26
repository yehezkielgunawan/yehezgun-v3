/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import ProjectCard from "@/components/ui/ProjectCard";
import useLoaded from "@/hooks/useLoaded";
import clsxm from "@/lib/helpers/clsxm";
import { getAllProjectsTable } from "@/lib/services/fetcher";
import {
  Projects as ProjectsType,
  SingleProject,
  SingleRes,
} from "@/lib/services/types";

export async function getStaticProps() {
  const projectList = await getAllProjectsTable();

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
  projectList: ProjectsType;
}) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <MetaHead
        pageTitle="Projects"
        pageDesc="This is my personal and public projects that I've done before."
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
              .filter(
                (project: SingleRes<SingleProject>) =>
                  project.fields.is_featured === true
              )
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  projectTitle={project.fields.project_title}
                  projectDesc={project.fields.description}
                  projectImg={project.fields.image_url[1].url}
                  madeUsing={project.fields.made_using}
                  url={project.fields.project_url}
                />
              ))}
          </div>
        </section>
        <section className="mt-16" data-fade="2">
          <h3>Other Projects</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {projectList
              .filter(
                (project: SingleRes<SingleProject>) =>
                  !project.fields.is_featured
              )
              .map((singleProject, index) => (
                <ProjectCard
                  key={index}
                  projectTitle={singleProject.fields.project_title}
                  projectDesc={singleProject.fields.description}
                  projectImg={singleProject.fields.image_url[1].url}
                  madeUsing={singleProject.fields.made_using}
                  url={singleProject.fields.project_url}
                />
              ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
