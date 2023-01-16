import type { RequestHandler } from './$types';
import Parser from 'rss-parser';

const feeds = [
  'https://zenn.dev/mouse_484/feed',
  'https://qiita.com/mouse_484/feed.atom',
];

const parser = new Parser();

const isPlatform = (link = '') => {
  return ['qiita', 'zenn'].find((value) => link.includes(value));
};

const getTime = (isoData = '') => {
  return new Date(isoData).getTime();
};

export const GET: RequestHandler = async () => {
  const allfeed: Parser.Item[] = (
    await Promise.all(
      feeds.map(async (url) => {
        const feed = await parser.parseURL(url);
        return feed.items;
      })
    )
  ).flat();

  const result = allfeed
    .sort((a, b) => getTime(b.isoDate) - getTime(a.isoDate))
    .map(({ title, link, isoDate }) => {
      return {
        title,
        link,
        isoDate,
        platform: isPlatform(link),
      } as const;
    });

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'text/json' },
  });
};
