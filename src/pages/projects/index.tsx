/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "@/components/layouts/Layout";
import MetaHead from "@/components/layouts/MetaHead";
import ProjectCard from "@/components/ui/ProjectCard";
import { DEFAULT_IMG } from "@/constants/baseConstants";
import { usePreloadState } from "@/context/PreloadContext";
import clsxm from "@/lib/helpers/clsxm";
import { getAllProjectsTable } from "@/lib/services/fetcher";
import { Projects, SingleProject, SingleRes } from "@/lib/services/types";

export async function getStaticProps() {
  const projectList = await getAllProjectsTable();

  return {
    props: {
      projectList,
    },
    revalidate: 60,
  };
}

export default function Projects({ projectList }: { projectList: Projects }) {
  const isLoaded = usePreloadState();

  return (
    <Layout>
      <MetaHead
        pageTitle="Projects"
        pageDesc="This is my personal and public projects that I've done before."
        route="projects"
        isArticle={false}
      />
      <main className={clsxm(isLoaded && "fade-start")}>
        <h1>Projects</h1>
        <p className="my-2">
          This is my previous works, personal (experiments), and freelance (if
          it&apos;s public) project list.
        </p>
        <h3 className="mt-8">Featured Projects</h3>
        <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-2">
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
                projectImg={
                  project.fields.image_url
                    ? project.fields.image_url[1].url
                    : DEFAULT_IMG
                }
                madeUsing={project.fields.made_using}
                url={project.fields.project_url}
              />
            ))}
        </div>
        <h3 className="mt-8">Other Projects</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-2">
          {projectList
            .filter(
              (project: SingleRes<SingleProject>) => !project.fields.is_featured
            )
            .map((project, index) => (
              <ProjectCard
                key={index}
                url={project.fields.project_url}
                projectTitle={project.fields.project_title}
                projectDesc={project.fields.description}
                projectImg={
                  project.fields.image_url
                    ? project.fields.image_url[1].url
                    : DEFAULT_IMG
                }
                madeUsing={project.fields.made_using}
              />
            ))}
        </div>
      </main>
    </Layout>
  );
}
