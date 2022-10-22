/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

import { Project } from "./types";

export const sanityConfig = {
  dataset: "production",
  projectId: "xyi8gzmb",
  useCdn: true,
  apiVersion: "2022-10-19",
};

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const sanityClient = createClient(sanityConfig);

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: Project) => {
  return builder.image(source);
};
