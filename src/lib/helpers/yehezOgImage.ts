export const yehezOgImage = (
  text: string,
  isArticle: boolean,
  desc: string
) => {
  if (isArticle) {
    return `https://og.yehezgun.com/api/base?description=An%20article%20post%20by%20Yehezkiel%20Gunawan&logo=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg&logoHeight=150&logoWidth=150&siteName=yehezgun.com&templateTitle=${encodeURIComponent(
      text
    )}&theme=dark`;
  }
  return `https://og.yehezgun.com/api/base?description=${encodeURIComponent(
    desc
  )}&siteName=yehezgun.com&templateTitle=${encodeURIComponent(
    text
  )}&theme=dark`;
};
