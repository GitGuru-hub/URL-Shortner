export function timeAgoFromLocaleString(localString) {
  const date = new Date(localString);
  const timestamp = date.getTime();

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diff = timestamp - Date.now();

  const seconds = Math.round(diff / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  if (Math.abs(seconds) < 60) {
    return rtf.format(seconds, "second");
  }
  if (Math.abs(minutes) < 60) {
    return rtf.format(minutes, "minute");
  }
  if (Math.abs(hours) < 24) {
    return rtf.format(hours, "hour");
  }
  return rtf.format(days, "day");
}