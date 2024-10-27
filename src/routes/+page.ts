/* eslint-disable no-fallthrough */
import { error as svelteErrorHandler } from '@sveltejs/kit';
export const ssr = false;
import { loading } from '$lib';
import type { PageLoad } from './$types';
const GITHUB_API_URL = 'https://api.github.com/users/kieran-lawrence/repos';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(GITHUB_API_URL, { signal: AbortSignal.timeout(2000) })
		.then((data) => {
			loading.setLoading(false);
			return data;
		})
		.catch((error) => {
			loading.setLoading(false);
			svelteErrorHandler(404, {
				message: error,
				code: 404
			});
		});
	switch (res.status) {
		case 200: {
			return {
				repositories: await res.json()
			};
		}
		case 403:
			svelteErrorHandler(403, {
				message:
					'Access to this resource is temporarily unavailable. Please try again later. ',
				code: 403
			});
		case 401:
			svelteErrorHandler(401, {
				message: 'Unauthorized',
				code: 401
			});
		default:
			svelteErrorHandler(500, {
				message: 'An unusual error has occurred :(',
				code: 500
			});
	}
};

export interface GitHubResponseType {
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
}
