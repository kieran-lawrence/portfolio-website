'use server';

export async function getRepositories(): Promise<GitHubResponseType[] | undefined> {
	const ignoreList = [
		'github-readme-stats',
		'kieran-lawrence',
		'portfolio-website',
		'klipit',
		'my-kanban-app',
		'on-budget',
	];

	// Sort repositories in a curated order
	const curatedOrder = ['comments', 'bulletin-news', 'quill', 'improved-obsidian'];

	const res = await fetch('https://api.github.com/users/kieran-lawrence/repos');
	try {
		switch (res.status) {
			case 200:
				const portfolioData: GitHubResponseType[] = await res.json();
				// Filter out ignored repositories
				const filtered = portfolioData.filter((repo) => !ignoreList.includes(repo.name));
				// Sort according to curatedOrder
				const sorted = filtered.sort((a, b) => {
					const aIdx = curatedOrder.indexOf(a.name);
					const bIdx = curatedOrder.indexOf(b.name);
					if (aIdx === -1 && bIdx === -1) return a.name.localeCompare(b.name);
					if (aIdx === -1) return 1;
					if (bIdx === -1) return -1;
					return aIdx - bIdx;
				});
				return sorted;
			case 403:
				console.error('Rate limit exceeded. Please try again later.');
				return;
			case 401:
				console.error('Unauthorised. Please check your credentials.');
				return;
			default:
				console.error('An error occurred. Please try again later.');
				return;
		}
	} catch (error) {
		console.error('An error occurred while fetching the data:', error);
		return;
	}
}

export type GitHubResponseWithExtras = GitHubResponseType & { descriptionBlocks: string[] };
export async function getRepositoryByName(
	name: string,
): Promise<GitHubResponseWithExtras | undefined> {
	const res = await fetch(`https://api.github.com/repos/kieran-lawrence/${name}`);

	try {
		switch (res.status) {
			case 200:
				const repo: GitHubResponseType = await res.json();
				if (repo) {
					const descriptionBlocks = projectDescriptions[repo.name] ?? repo.description;
					return { ...repo, descriptionBlocks };
				}
			case 403:
				console.error('Rate limit exceeded. Please try again later.');
				return;
			case 401:
				console.error('Unauthorised. Please check your credentials.');
				return;
			default:
				console.error('An error occurred. Please try again later.');
				return;
		}
	} catch (error) {
		console.error('An error occurred while fetching the data:', error);
		return;
	}
}

const projectDescriptions: Record<string, string[]> = {
	'bulletin-news': [
		'Bulletin News is a full-stack news website project built to further my skills and knowledge while working in a media organisation. The front-end is built in Next.js and the backend using NestJS, with PostgreSQL as the database.',
		'Key features of Bulletin include user authentication, article creation and management, and comment moderation. Users can register, create publishers, and submit articles through JSON payloads, I have started adding an admin panel to allow for these kinds of actions.',
		'It also supports various article sections like text, headings, quotes, and images, allowing for rich content formatting like you would see on a news website.',
		'Bulletin is built as a monorepo via Turborepo, organising the codebase into distinct applications and libraries. Testing is handled using Jest, and I set up ESLint and Prettier to maintain code quality.',
		'While this project is still under development, it showcases a solid architectural foundation and a clear roadmap for future improvements, such as implementing a frontend interface for article creation.',
	],
	'improved-obsidian': [
		'Improved Obsidian is a Minecraft mod I developed to expand the uses for Obsidian within the game. In vanilla Minecraft, Obsidian has limited applications, primarily for crafting Nether Portals and Ender Chests.',
		'I aimed to expand its functionality, providing players with more reasons to actually use this block in game.',
		'This mod has been completed in its current form; however, I am actively working to ensure compatibility with the most recent Minecraft versions, additional features and, most importantly, support for both Forge and Fabric modding platforms - which has been requested by several users.',
	],
	quill: [
		"Quill is a full-stack real-time chat application I've been building to explore and implement modern, scalable web architecture. It’s inspired by platforms like Discord and Slack, aiming to support immersive group and private messaging experiences.",
		'One of my goals with Quill was to implement WebSockets which is the primary way in which messages are delivered instantly across multiple clients.',
		'So far, the backend supports features like user registration, authentication, and messaging logic with support for images as well as plain text messages. I’ve included an in-depth setup guide in the README to make deployment and local development as seamless as possible.',
	],
	comments: [
		'This project is an AWS-based serverless API, designed to manage comments for my news application, Bulletin. The API is built in a docker container hosted in ECS and deployed to Cloudfront to provide a scalable and efficient solution for handling user comments.',
		'It features a fully functional admin dashboard that allows for easy moderation and management of comments. The dashboard is secured with authentication via Auth0 to ensure that only authorised users can access it.',
		'It has a dedicated component library serving the frontend and any other future consumers, and a docs site built using Starlight to provide clear and comprehensive documentation for potential developers.',
	],
};

export type GitHubResponseType = {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: {
		login: string;
		id: number;
		node_id: string;
		avatar_url: string;
		gravatar_id: string;
		url: string;
		html_url: string;
		followers_url: string;
		following_url: string;
		gists_url: string;
		starred_url: string;
		subscriptions_url: string;
		organizations_url: string;
		repos_url: string;
		events_url: string;
		received_events_url: string;
		type: string;
		site_admin: boolean;
	};
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string | null;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
	has_issues: true;
	has_projects: true;
	has_downloads: true;
	has_wiki: true;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: string | null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: null;
	allow_forking: true;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: [];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
};
