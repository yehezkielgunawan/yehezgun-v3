import Airtable, { FieldSet, Record, Records } from "airtable";

import { AIRTABLE_BASE, API_KEY } from "constants/baseConstants";

import { getClient } from "./sanity-config";

const base = new Airtable({ apiKey: API_KEY }).base(String(AIRTABLE_BASE));

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<FieldSet>) => {
  return records.map((record: Record<FieldSet>) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record: Record<FieldSet>) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export const getAllProjectsTable = async () => {
  const records = await base("Projects")
    .select({
      sort: [{ field: "date_added", direction: "desc" }],
    })
    .all();
  return getMinifiedRecords(records);
};

export const getFeaturedProjects = async () => {
  const records = await base("Projects")
    .select({
      fields: ["project_title", "image_url", "project_url"],
      filterByFormula: `{is_featured} = '1'`,
    })
    .all();
  return getMinifiedRecords(records);
};

export const getArticleList = async () => {
  const records = await base("Blog")
    .select({
      sort: [{ field: "date", direction: "desc" }],
      fields: ["title", "slug", "date", "article_image", "lang", "category"],
    })
    .all();
  return getMinifiedRecords(records);
};

export const getArticlePost = async (slug: string) => {
  const records = await base("Blog")
    .select({
      maxRecords: 1,
      filterByFormula: `{slug} = "${slug}"`,
    })
    .all();

  return getMinifiedRecords(records);
};

export const getExperienceList = async () => {
  return await getClient(true).fetch(
    `*[_type == "experiences"] | order(start_date desc) | order(end_date desc)`
  );
};
