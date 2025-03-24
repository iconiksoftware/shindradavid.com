import path from 'path';

import type { Theme } from '$lib/types';

export const postDirPath = path.join(process.cwd(), '/content/posts');
export const siteUrl = 'https://shindradavid.vercel.app';
export const cookieExpirationTime = 60 * 60 * 24 * 14 * 1000;
export const defaultTheme: Theme = 'dark';
