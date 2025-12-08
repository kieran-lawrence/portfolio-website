'use server';

export async function getRepositories(): Promise<GitHubResponseType[] | undefined> {
	const ignoreList = [
		'github-readme-stats',
		'kieran-lawrence',
		'portfolio-website',
		'klipit',
		'my-kanban-app',
	];

	const res = await fetch('https://api.github.com/users/kieran-lawrence/repos');
	try {
		switch (res.status) {
			case 200:
				const portfolioData: GitHubResponseType[] = await res.json();
				return portfolioData.filter((repo) => !ignoreList.includes(repo.name));
			case 403:
				console.error('Rate limit exceeded. Please try again later.');
				return;
			case 401:
				console.error('Unauthorized. Please check your credentials.');
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
				console.error('Unauthorized. Please check your credentials.');
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
		'Bulletin News is a full-stack news website project developed to enhance my skills and knowledge while working in a media organization. The application is built using modern web technologies, including Next.js for the frontend and NestJS for the backend, with PostgreSQL as the database.',
		'Key features of the project include user authentication, article creation and management, and comment moderation. Users can register, create publishers, and submit articles through structured JSON payloads. The application also supports various article sections like text, headings, quotes, and images, allowing for rich content formatting.',
		'The project utilizes the Nx monorepo architecture, organizing the codebase into distinct applications and libraries. It employs TypeScript throughout, enhancing type safety and developer experience. Testing is handled using Jest, and code quality is maintained with ESLint and Prettier.',
		'While the project is still under development, it showcases a solid architectural foundation and a clear roadmap for future enhancements, such as implementing a frontend interface for article creation.',
	],
	'improved-obsidian': [
		'Improved Obsidian is a Minecraft mod I developed to enhance the utility of Obsidian within the game. In vanilla Minecraft, Obsidian has limited applications, primarily for crafting Nether Portals and Ender Chests.',
		'I aimed to expand its functionality, providing players with more reasons to mine and utilize this robust material.',
		"The mod is crafted to maintain the vanilla Minecraft experience while introducing these enriched features. It's currently a work in progress, with ongoing efforts to ensure compatibility with Minecraft version 1.21 and support for both Forge and Fabric modding platforms.",
	],
	quill: [
		"Quill is a full-stack real-time chat application I've been building to explore and implement modern, scalable web architecture. It’s inspired by platforms like Discord and Slack, aiming to support rich, responsive group and private messaging experiences.",
		'One of my key goals with Quill is to implement real-time messaging using WebSockets — this is currently a work in progress, and will be the core of how messages are delivered instantly across clients.',
		'So far, the backend supports features like user registration, authentication, and basic messaging logic. The groundwork is also laid for file uploads and session management via cookies. I’ve included a robust setup using environment variables to make deployment and local development flexible.',
	],
	comments: [
		'This project is an AWS-based serverless API designed to manage comments for my news application, Bulletin. The API is built in a docker container hosted in ECS and deployed to Cloudfront to provide a scalable and efficient solution for handling user comments.',
		'It features a fully functional admin dashboard that allows for easy moderation and management of comments. The dashboard is secured with authentication via Auth0 to ensure that only authorised users can access it.',
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
