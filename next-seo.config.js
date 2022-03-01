/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "Yehezkiel Gunawan | YehezGun",
  description:
    "Yehezkiel Gunawan's personal site, made using Next.js + Tailwind CSS",
  canonical: "https://yehezgun.com",
  openGraph: {
    url: "https://yehezgun.com",
    title: "YehezGun",
    description:
      "Yehezkiel Gunawan's personal site, made using Next.js + Tailwind CSS",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=A%20personal%20website%20by%20Yehezkiel%20Gunawan.%20Showcase%20about%20my%20projects%2C%20thoughts%2C%20and%20experience%20as%20Frontend%20Engineer&siteName=yehezgun.com&templateTitle=Yehezkiel%20Gunawan&theme=dark",
        alt: "yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehezgun.com",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/peep_yehez.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/peep_yehez.svg",
      sizes: "76x76",
    },
  ],
};

export default defaultSEOConfig;
