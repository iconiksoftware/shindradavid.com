export type Frontmatter = {
	title: string;
	description: string;
	thumbnailUrl: string;
	publishedOn: string;
	tags: string[];
};

export interface Post extends Frontmatter {
	slug: string;
}

export type Theme = 'dark' | 'light' | 'system';

export interface ProjectFrontmatter {
	id: number;
	title: string;
	description: string;
	category: 'software' | 'design';
	technologies: string[];
	image: string;
	link: string;
	client: string;
	thumbnailUrl: string;
	liveUrl: string | undefined;
	publishedOn: string;
}

export interface Project extends ProjectFrontmatter {
	slug: string;
}
