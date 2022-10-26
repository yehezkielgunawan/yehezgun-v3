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
