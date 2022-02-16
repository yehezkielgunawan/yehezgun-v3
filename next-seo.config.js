/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "yehez-nexttw-starter",
  description:
    "Yehezkiel Gunawan's personalized Next.js + Tailwind CSS + TypeScript starter template",
  canonical: "https://yehez-nexttailwind-starter.yehezgun.com",
  openGraph: {
    url: "https://yehez-nexttailwind-starter.yehezgun.com",
    title: "yehez-nexttailwind-starter",
    description: "Next.js + Tailwind CSS + TypeScript template",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=A%20personalized%20Next.js%20%2B%20TS%20%2B%20Tailwind%20CSS%20starter%20template%20by%20Yehezkiel%20Gunawan&siteName=nexttw-starter.yehezgun.com&templateTitle=Next.js%20%2B%20TS%20%2BTailwind%20Starter%20Template&theme=dark",
        alt: "yehez-nexttailwind-starter.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehez-nexttailwind-starter",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
