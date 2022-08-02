export default function yehezOgImage(text: string, isArticle: boolean): string {
  if (isArticle) {
    return `https://og.yehezgun.com/api/article?logoWidth=124&templateTitle=${encodeURIComponent(
      text
    )}&theme=dark`;
  }
  return `https://og.yehezgun.com/api/simple?logoWidth=240&siteName=yehezgun.com&templateTitle=${encodeURIComponent(
    text
  )}`;
}
