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

export const formatDateMonth = (date: string | Date) => {
  const convertedDate = new Date(date);
  const formattedDate: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return convertedDate.toLocaleDateString("en-EN", formattedDate);
};
