export function extractJwtFromCookieString(
  cookieStr: string | undefined
): string | null {
  const match = cookieStr?.match(/(?:^|;\s*)jwt=([^;]+)/);
  return match ? match[1] : null;
}

//format date
export function getGalleryCardDate(item: any): string {
  const rawDate = item.release_date || item.first_air_date;
  if (!rawDate) return "Unknown";
  const [year, month] = rawDate.split("-");
  return `${month} - ${year}`;
}

import { moviesResultsProps, tvResultsProps } from "../lib/definitions";

export function getGalleryCardTitle(
  item: moviesResultsProps | tvResultsProps
): string {
  return "title" in item ? item.title : item.name;
}

//Image loader 
const IMG_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE;
export const imageLoader = (imgPath: string) => {
  return `${IMG_BASE_URL}${imgPath}}`;
};
