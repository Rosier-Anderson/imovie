export default function getMediaDate(item: any): string {
  const rawDate = item.release_date || item.first_air_date;
  if (!rawDate) return "Unknown";
  const [year, month] = rawDate.split("-");
  return `${month}-${year}`;
}
