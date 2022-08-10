/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "Yehezkiel Gunawan",
  description:
    "An online portfolio & personal site, made using Next.js + Tailwind CSS",
  canonical: "https://yehezgun.com",
  openGraph: {
    url: "https://yehezgun.com",
    title: "Yehezkiel Gunawan",
    description:
      "An online portfolio & personal site, made using Next.js + Tailwind CSS",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=A%20personal%20website%20by%20Yehezkiel%20Gunawan.%20A%20showcase%20about%20my%20projects%2C%20thoughts%2C%20and%20experiences%20as%20a%20Frontend%20Engineer.&logoWidth=150&siteName=yehezgun.com&templateTitle=Yehezkiel%20Gunawan&theme=dark",
        alt: "yehezgun.com og-image",
        width: 1200,
        height: 630,
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
      href: "/yehez_avatar.svg",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default defaultSEOConfig;
