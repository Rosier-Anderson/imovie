export function extractJwtFromCookieString(
  cookieStr: string | undefined
): string | null {
  const match = cookieStr?.match(/(?:^|;\s*)jwt=([^;]+)/);
  return match ? match[1] : null;
}
