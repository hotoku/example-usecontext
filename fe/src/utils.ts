export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function base64UrlDecode(input: string): string {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const normalizedBase64 =
    base64 + "==".substring(0, (4 - (base64.length % 4)) % 4);
  const decoded = atob(normalizedBase64);

  return decoded;
}
