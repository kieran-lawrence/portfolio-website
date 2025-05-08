import { getRepositories, GitHubResponseType } from '@/app/actions';
import PortfolioCard from './portfolioCard';

export default async function Portfolio() {
	const portfolioData: GitHubResponseType[] | undefined = await getRepositories();

	return (
		<div id="portfolio" className="flex w-full flex-col items-center justify-center gap-4">
			<h2>Portfolio</h2>
			<ul className="portfolioGrid">
				{portfolioData &&
					portfolioData.map((repo: GitHubResponseType) => (
						<PortfolioCard
							key={repo.id}
							cardDescription={repo.description}
							cardTitle={repo.name}
							skills={repo.topics}
						/>
					))}
				<PortfolioCard
					cardDescription={
						'A React Native app for effortlessly tracking your personal book collection, discovering new reads, and celebrating your reading journey with meaningful milestones'
					}
					cardTitle={'coming-soon'}
					skills={['React Native', 'Fastlane', 'GitHub CI/CD']}
				/>
				<PortfolioCard
					cardDescription={
						'An AWS based serverless API for the management of comments for my news app, Bulletin'
					}
					cardTitle={'coming-soon'}
					skills={['AWS', 'Pulumi']}
				/>
			</ul>
		</div>
	);
}
