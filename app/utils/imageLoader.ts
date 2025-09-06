const IMG_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE;
export const imageLoader = (imgPath: string) => {
  return `${IMG_BASE_URL}${imgPath}}`;
};
