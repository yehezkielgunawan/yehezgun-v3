/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

import { SANITY_DATASET, SANITY_PROJECTID } from "@/constants/baseConstants";

import { SanityImage } from "./types";

export const sanityConfig = {
  dataset: SANITY_DATASET,
  projectId: SANITY_PROJECTID,
  useCdn: true,
  apiVersion: "2022-10-19",
};

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
});

export const sanityClient = createClient(sanityConfig);

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImage) => {
  return builder.image(source);
};
