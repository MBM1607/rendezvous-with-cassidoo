export const getRSS = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();

  const titleRegex = /<title>(<!\[CDATA\[)?(.*?)(\]\]>)?<\/title>/;
  const linkRegex = /<link>(<!\[CDATA\[)?(.*?)(\]\]>)?<\/link>/;

  const title = titleRegex.exec(text)?.[2];
  const link = linkRegex.exec(text)?.[2];

  return `${title}, ${link}`;
};
