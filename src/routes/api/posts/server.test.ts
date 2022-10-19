import { describe, expect, it } from 'vitest';
import { isPlatform, getTime } from './+server';

describe.each([
  ['qiita', 'https://qiita.com/mouse_484/items/394a4984f749cc201422'],
  [
    'zenn',
    'https://zenn.dev/mouse_484/articles/semantic-release-githubactions-npm',
  ],
])('is platform', (platform, url) => {
  it(platform, () => {
    const result = isPlatform(url);
    expect(result).toBe(platform);
  });
});

describe('isoData to getTime', () => {
  it('2022-09-23T08:48:30.000Z', () => {
    const result = getTime('2022-09-23T08:48:30.000Z');
    expect(result).toBe(1663922910000);
  });
});
