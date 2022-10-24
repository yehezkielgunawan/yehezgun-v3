export type SingleRes<ResType> = {
  id: string;
  fields: ResType;
};

export type SingleProjectImg = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    small: {
      height: number;
      url: string;
      width: number;
    };
  };
  type: string;
  url: string;
  width: number;
};

export type SingleArticle = {
  title: string;
  slug: string;
  date: string;
  article_image: Array<SingleProjectImg>;
  lang: string;
  content: string;
  translated_link?: string;
  category: string;
};

export type SingleArticleInList = Pick<
  SingleArticle,
  "title" | "slug" | "article_image" | "date" | "lang" | "category"
>;

export type Articles = Array<SingleRes<SingleArticleInList>>;

export enum ExperienceField {
  _createdAt,
  _id,
  _rev,
  _type,
  _updatedAt,
  company,
  end_date,
  experience_name,
  start_date,
}

export type ExperienceType = Record<keyof typeof ExperienceField, "string"> & {
  is_currently_here: boolean;
};

export type SingleProjectItem = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  is_featured: boolean;
  project_desc: string;
  project_logo: SanityImage;
  project_name: string;
  project_screenshot: SanityImage;
  project_url: string;
  tech_stacks: string[];
};

export type SanityImage = {
  _type: string;
  asset: AssetType;
};

export type AssetType = {
  _ref: string;
  _type: string;
};

export type Article = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  category: string;
  content: string;
  cover: SanityImage;
  lang: string;
  slug: string;
  title: string;
  translated_url: string;
};
