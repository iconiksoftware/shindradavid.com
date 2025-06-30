import type { PageServerLoad, EntryGenerator } from './$types';

import fs from 'fs-extra';

import { getMyWork, parseMarkdown } from '$lib/server/markdown/utils';
import { myWorkDirPath } from '$lib/config';
import type { ProjectFrontmatter } from '$lib/types';

export const load = (async ({ params }) => {
	const { slug } = params;
	const markdown = await fs.readFile(`${myWorkDirPath}/${slug}.md`, 'utf-8');
	const { html, frontmatter } = await parseMarkdown<ProjectFrontmatter>(markdown);

	return { html, frontmatter };
}) satisfies PageServerLoad;

export const entries = (async () => {
	const projects = await getMyWork();
	const slugs = projects.map((project) => ({ slug: project.slug }));
	return slugs;
}) satisfies EntryGenerator;
