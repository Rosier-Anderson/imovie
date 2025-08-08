import { moviesResultsProps, tvResultsProps } from "../lib/definitions";

export default function getGalleryCardTitle(
  item: moviesResultsProps | tvResultsProps
): string {
  return "title" in item ? item.title : item.name;
}
