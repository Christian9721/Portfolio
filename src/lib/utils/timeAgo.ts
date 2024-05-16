export const toTimeAgo = (dueDate: Date) => {
  const date = new Date(dueDate);
  const currentDate = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  /*const dayDiff = Math.floor((currentDate - date) / dayMs);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  return rtf.format(-dayDiff, "days");*/
  const yearMs = 365 * dayMs;
  const monthMs = 30 * dayMs;
  const timeDiff = currentDate - date;

  if (timeDiff >= yearMs) {
    const yearDiff = Math.floor(timeDiff / yearMs);
    const plural = yearDiff > 1 ? "s" : "";
    return `${yearDiff} year${plural} ago`;
  } else if (timeDiff >= monthMs) {
    const monthDiff = Math.floor(timeDiff / monthMs);
    const plural = monthDiff > 1 ? "s" : "";
    return `${monthDiff} month${plural} ago`;
  } else {
    const dayDiff = Math.floor(timeDiff / dayMs);
    const plural = dayDiff > 1 ? "s" : "";
    return `${dayDiff} day${plural} ago`;
  }
};
