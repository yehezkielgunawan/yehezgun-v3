export default function yehezOgImage(
  text: string,
  isArticle: boolean,
  desc: string
): string {
  if (isArticle) {
    return `https://og.yehezgun.com/api/article?logoWidth=124&templateTitle=${encodeURIComponent(
      text
    )}&theme=dark`;
  }
  return `https://og.yehezgun.com/api/base?description=${encodeURIComponent(
    desc
  )}&siteName=yehezgun.com&templateTitle=${encodeURIComponent(
    text
  )}&theme=dark&logoWidth=150`;
}
