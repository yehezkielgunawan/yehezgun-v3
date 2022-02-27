export const formatDate = (
  date: string | Date,
  time: boolean = true,
  lang: string = "en-EN"
): string => {
  const convertedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return convertedDate.toLocaleDateString(
    lang,
    time ? options : optionsWithoutTime
  );
};
