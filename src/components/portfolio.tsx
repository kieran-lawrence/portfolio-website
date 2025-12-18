import { getRepositories, GitHubResponseType } from '@/app/actions';
import PortfolioCard from './portfolioCard';

export default async function Portfolio() {
	const portfolioData: GitHubResponseType[] | undefined = await getRepositories();

	return (
		<div
			id="portfolio"
			className="flex w-full flex-col items-center justify-center gap-4 pt-24 md:pt-32"
		>
			<h2>Portfolio</h2>
			<ul className="portfolioGrid">
				<PortfolioCard
					cardDescription={
						'A React Native app for managing your personal finances and budgeting needs on the go. \nI plan to release this to the app stores in early 2027.'
					}
					cardTitle={'on-budget'}
					skills={['React Native', 'Expo', 'Fastlane', 'GitHub CI/CD']}
				/>
				{portfolioData &&
					portfolioData.map((repo: GitHubResponseType) => (
						<PortfolioCard
							key={repo.id}
							cardDescription={repo.description}
							cardTitle={repo.name}
							skills={repo.topics}
						/>
					))}
			</ul>
		</div>
	);
}
