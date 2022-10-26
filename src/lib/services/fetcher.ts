import { getClient } from "./sanity-config";

export const getExperienceList = async () => {
  return await getClient(true).fetch(
    `*[_type == "experiences"] | order(start_date desc) | order(end_date desc)`
  );
};
export const getFeaturedProjectList = async () => {
  return await getClient(true).fetch(
    `*[_type == "projects" && is_featured == true] | order(_createdAt desc) | order(is_featured desc)`
  );
};

export const getProjectList = async () => {
  return await getClient(true).fetch(
    `*[_type == "projects"] | order(_createdAt desc) | order(is_featured desc)`
  );
};

export const getArticles = async () => {
  return await getClient(true).fetch(
    `*[_type == "articles"] | order(_createdAt desc)`
  );
};

export const getArticleData = async (slug: string) => {
  return await getClient(true).fetch(
    `*[_type == "articles" && slug=="${slug}"]`
  );
};
