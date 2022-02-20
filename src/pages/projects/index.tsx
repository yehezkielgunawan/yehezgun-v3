/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import Layout from "@/components/layouts/Layout";
import UnstyledLink from "@/components/links/UnstyledLink";
import { DEFAULT_IMG } from "@/constants/baseConstants";
import clsxm from "@/lib/helpers/clsxm";
import { getAllProjectsTable } from "@/lib/services/fetcher";
import { Projects } from "@/lib/services/types";

export async function getStaticProps() {
  const projectList = await getAllProjectsTable();

  return {
    props: {
      projectList,
    },
    revalidate: 60,
  };
}

const Projects = ({ projectList }: { projectList: Projects }) => {
  return (
    <Layout>
      <h1>Projects</h1>
      <p className="my-2">
        This is my previous works, personal (experiments), and freelance (if
        it&apos;s public) project list.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projectList.map((project, index) => (
          <UnstyledLink
            key={index}
            href={project.fields.project_url}
            className="group"
          >
            <div
              className={clsxm(
                "my-4 rounded-lg border-2 border-primary-200 py-4 px-6 dark:border-primary-400",
                "duration-300 ease-in group-hover:-translate-y-1",
                "group-hover:border-zinc-300",
                "group-hover:ring group-hover:ring-zinc-300"
              )}
            >
              <div className="flex items-center justify-between group-hover:underline">
                <h3>{project.fields.project_title}</h3>
                <FaExternalLinkAlt size={16} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4 pr-2">
                  <p className="group-hover:underline">
                    {project.fields.description}
                  </p>
                  <div className="flex gap-3">
                    {project.fields.made_using.map((tool, index) => (
                      <img
                        key={index}
                        src={tool.url}
                        alt="icon-tool"
                        className="h-10 rounded-lg md:h-12"
                      />
                    ))}
                  </div>
                </div>
                <img
                  src={
                    project.fields.image_url
                      ? project.fields.image_url[1].url
                      : DEFAULT_IMG
                  }
                  alt="image-project"
                  className="md:w-42 h-32 w-32 rounded-md object-contain md:h-40"
                />
              </div>
            </div>
          </UnstyledLink>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
