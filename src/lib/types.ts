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
