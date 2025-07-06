import path from 'path';

import type { Theme } from '$lib/types';

export const postDirPath = path.join(process.cwd(), '/content/posts');
export const myWorkDirPath = path.join(process.cwd(), '/content/my-work');
export const workExperienceDirPath = path.join(process.cwd(), '/content/work-experience');
export const siteUrl = 'https://shindradavid.com';
export const cookieExpirationTime = 60 * 60 * 24 * 14 * 1000;
export const defaultTheme: Theme = 'dark';
