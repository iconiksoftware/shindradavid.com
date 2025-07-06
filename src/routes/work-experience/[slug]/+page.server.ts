import type { PageServerLoad, EntryGenerator } from './$types';

import fs from 'fs-extra';

import { getWorkExperience, parseMarkdown } from '$lib/server/markdown/utils';

import { workExperienceDirPath } from '$lib/config';
import type { ExperienceFrontmatter } from '$lib/types';

export const load = (async ({ params }) => {
	const { slug } = params;
	const markdown = await fs.readFile(`${workExperienceDirPath}/${slug}.md`, 'utf-8');
	const { html, frontmatter } = await parseMarkdown<ExperienceFrontmatter>(markdown);

	return { html, frontmatter };
}) satisfies PageServerLoad;

export const entries = (async () => {
	const workExperience = await getWorkExperience();
	const slugs = workExperience.map((experience) => ({ slug: experience.slug }));
	return slugs;
}) satisfies EntryGenerator;
