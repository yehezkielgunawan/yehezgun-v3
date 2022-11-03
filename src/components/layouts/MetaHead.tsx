import { NextSeo } from "next-seo";

import yehezgunOgImage from "@/lib/helpers/yehezOgImage";

type MetaHeadProps = {
  pageTitle: string;
  pageDesc?: string;
  route?: string;
  isArticle: boolean;
};

const MetaHead = ({ pageTitle, pageDesc, route, isArticle }: MetaHeadProps) => {
  const ogImage = yehezgunOgImage(pageTitle, isArticle, pageDesc);
  return (
    <NextSeo
      title={`${pageTitle} | YehezGun`}
      description={pageDesc}
      canonical={`https://yehezgun.com/${route ? route : ""}`}
      openGraph={{
        url: `https://yehezgun.com/${route ? route : ""}`,
        title: `${pageTitle} | YehezGun`,
        description: pageDesc,
        type: "website",
        images: [
          {
            url: `${ogImage}`,
          },
        ],
        site_name: "yehezgun.com",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/yehez_avatar.png",
        },
      ]}
    />
  );
};

export default MetaHead;
