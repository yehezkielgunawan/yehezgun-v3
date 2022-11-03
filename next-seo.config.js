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
        url: "https://og-v2.yehezgun.com/api/og?title=Yehezkiel%20Gunawan&desc=A%20personal%20website%20by%20Yehezkiel%20Gunawan.%20A%20showcase%20about%20my%20projects,%20thoughts,%20and%20experiences%20as%20a%20frontend%20engineer.&siteName=yehezgun.com",
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
