import { getRepositoryByName, GitHubResponseWithExtras } from '@/app/actions';
import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import IconGithub from '@/components/icons/iconGithub';
import { Carousel } from '@/components/carousel';

type RouteProps = { params: Promise<{ slug: string }> };

export default async function PortfolioItem({ params }: RouteProps) {
	const { slug: projectName } = await params;
	const formattedName = projectName.replaceAll('-', ' ');
	const portfolioData: GitHubResponseWithExtras | undefined =
		await getRepositoryByName(projectName);
	if (!portfolioData) {
		notFound();
	}
	const imageDirectory = path.join(process.cwd(), `/public/${projectName}`);
	let imageFilenames = await fs.readdir(imageDirectory);
	// Filter out non-image files
	imageFilenames = imageFilenames.filter((filename) =>
		/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(filename),
	);

	return (
		<main className="mt-32 flex h-full flex-col items-center justify-center md:mt-48">
			<CloudsBackgroundTop />
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col items-center justify-center gap-4 py-4">
				<h1
					className="mt-0 gap-8 pt-32 pb-4 text-6xl capitalize md:text-8xl"
					id="portfolio-title"
				>
					{formattedName}
				</h1>
				<ul className="flex flex-col items-center justify-center gap-2 px-8 py-4 text-lg md:text-xl">
					{portfolioData.descriptionBlocks.map((block, index) => (
						<li key={index} className="w-full text-justify text-lg md:text-xl lg:w-2/3">
							{block}
						</li>
					))}
				</ul>
				<h2>Gallery</h2>
				<Carousel projectName={projectName} imageFilenames={imageFilenames} />
				<div className="group flex w-full justify-center text-lg md:text-xl">
					<a
						className="flex items-center justify-center gap-2"
						href={`https://github.com/kieran-lawrence/${projectName}`}
						target="_blank"
					>
						<span className="group-hover:text-bg-dark dark:group-hover:text-bg-light">
							View the project on GitHub
						</span>
						<span className="h-6 w-6">
							<IconGithub />
						</span>
					</a>
				</div>
			</div>
			<CloudsBackgroundBottom />
		</main>
	);
}
