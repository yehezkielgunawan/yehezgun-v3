export default function yehezOgImage(
  text: string,
  isArticle: boolean,
  pageDesc?: string
): string {
  if (isArticle) {
    return `https://og-v2.yehezgun.com/api/og?title=${encodeURIComponent(
      text
    )}&desc=An%20article%20post%20by%20Yehezkiel%20Gunawan.&siteName=yehezgun.com`;
  }
  return `https://og-v2.yehezgun.com/api/og?title=${encodeURIComponent(
    text
  )}&desc=${encodeURIComponent(pageDesc as string)}&siteName=yehezgun.com`;
}
