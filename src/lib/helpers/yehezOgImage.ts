export default function yehezOgImage(
  text: string,
  isArticle: boolean,
  desc: string
): string {
  if (isArticle) {
    return `https://og.yehezgun.com/api/article?logo=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg&templateTitle=${encodeURIComponent(
      text
    )}&theme=dark&logoWidth=124`;
  }
  return `https://og.yehezgun.com/api/base?description=${encodeURIComponent(
    desc
  )}&siteName=yehezgun.com&templateTitle=${encodeURIComponent(
    text
  )}&theme=dark&logoWidth=150`;
}
