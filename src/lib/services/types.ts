export type SingleRes<ResType> = {
  id: string;
  fields: ResType;
};

export type SingleProject = {
  project_title: string;
  image_url?: Array<SingleProjectImg>;
  project_url: string;
  made_using: Array<SingleProjectImg>;
  description: string;
  date_added: string;
  is_featured: boolean;
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

export type Projects = Array<SingleRes<SingleProject>>;

export type SingleExperience = {
  name: string;
  company_name: string;
  duration: string;
  date_added: string;
};

export type Experiences = Array<SingleRes<SingleExperience>>;

export type SingleArticle = {
  title: string;
  slug: string;
  date: string;
  article_image?: Array<SingleProjectImg>;
  lang: string;
  content: string;
  alternative_link?: string;
  translated_link?: string;
  category: string;
};

export type SingleArticleInList = Pick<
  SingleArticle,
  "title" | "slug" | "article_image" | "date" | "lang" | "category"
>;

export type Articles = Array<SingleRes<SingleArticleInList>>;
