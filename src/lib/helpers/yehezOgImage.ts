export default function yehezOgImage(text: string, isArticle: boolean): string {
  if (isArticle) {
    return `https://og.yehezgun.com/api/article?logoWidth=124&templateTitle=${encodeURIComponent(
      text
    )}&theme=dark`;
  }
  return `https://og.yehezgun.com/api/simple?siteName=yehezgun.com&templateTitle=${encodeURIComponent(
    text
  )}%20%7C%20YehezGun&theme=dark`;
}
