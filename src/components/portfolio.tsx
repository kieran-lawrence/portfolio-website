import PortfolioCard from './portfolioCard';

export default async function Portfolio() {
	const ignoreList = [
		'github-readme-stats',
		'kieran-lawrence',
		'portfolio-website',
		'klipit',
		'my-kanban-app',
	];

	const res = await fetch('https://api.github.com/users/kieran-lawrence/repos');
	let portfolioData: GitHubResponseType[] | undefined = undefined;
	try {
		switch (res.status) {
			case 200:
				portfolioData = await res.json();
				break;
			case 403:
				console.error('Rate limit exceeded. Please try again later.');
				break;
			case 401:
				console.error('Unauthorized. Please check your credentials.');
				break;
			default:
				console.error('An error occurred. Please try again later.');
				break;
		}
	} catch (error) {
		console.error('An error occurred while fetching the data:', error);
	}

	return (
		<div id="portfolio" className="flex w-full flex-col items-center justify-center gap-4">
			<h2>Portfolio</h2>
			<ul className="portfolioGrid">
				{portfolioData &&
					portfolioData.map(
						(repo: GitHubResponseType) =>
							!ignoreList.includes(repo.name) && (
								<PortfolioCard
									key={repo.id}
									cardDescription={repo.description}
									cardTitle={repo.name}
									skills={repo.topics}
								/>
							),
					)}
				<PortfolioCard
					cardDescription={
						'A React Native app for effortlessly tracking your personal book collection, discovering new reads, and celebrating your reading journey with meaningful milestones'
					}
					cardTitle={'coming-soon'}
					skills={['React Native', 'Fastlane', 'GitHub CI/CD']}
				/>
				<PortfolioCard
					cardDescription={'Coming Soon'}
					cardTitle={'coming-soon'}
					skills={['Coming Soon']}
				/>
			</ul>
		</div>
	);
}

type GitHubResponseType = {
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
