/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "Yehezkiel Gunawan | YehezGun",
  description:
    "Yehezkiel Gunawan's personal site, made using Next.js + Tailwind CSS",
  canonical: "https://v3.yehezgun.com",
  openGraph: {
    url: "https://v3.yehezgun.com",
    title: "yehezgun",
    description:
      "Yehezkiel Gunawan's personal site, made using Next.js + Tailwind CSS",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=An%20online%20portfolio%20and%20article%20site%20by%20Yehezkiel%20Gunawan.%20Showcase%20about%20my%20projects%20and%20thoughts%20about%20my%20experience%20as%20a%20Frontend%20Engineer&siteName=yehezgun.com&templateTitle=Yehezkiel%20Gunawan&theme=dark",
        alt: "v4.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehezgun",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg",
    },
  ],
};

export default defaultSEOConfig;
