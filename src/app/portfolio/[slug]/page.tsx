import { getRepositoryByName, GitHubResponseWithExtras } from '@/app/actions';
import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import ChevronButton from '@/components/chevronButton';

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
	const imageFilenames = await fs.readdir(imageDirectory);

	return (
		<main className="mt-32 flex h-full flex-col items-center justify-center md:mt-48">
			<CloudsBackgroundTop />
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col items-center justify-center gap-4 py-4">
				<h1 className="mt-0 py-4 text-6xl capitalize md:mt-32 md:text-8xl">
					{formattedName}
				</h1>
				<ul className="flex flex-col items-center justify-center gap-2 px-8 py-4 text-lg md:text-xl">
					{portfolioData.descriptionBlocks.map((block, index) => (
						<li key={index} className="w-full text-justify text-lg md:w-2/3 md:text-xl">
							{block}
						</li>
					))}
				</ul>
				<h2>Gallery</h2>
				{/* Carousel */}
				<div className="relative grid w-full grid-cols-[0.5fr_4fr_4fr_0.5fr] items-center justify-center px-5 md:w-2/3 2xl:w-1/2">
					<ChevronButton direction="forward" images={imageFilenames} />
					{/* Image Container */}
					<div className="col-span-4 aspect-[4/3] overflow-hidden md:col-span-2 md:col-start-2">
						{imageFilenames.map((filename, i) => (
							<div
								id={`image-${filename.split('.')[0]}`}
								key={`image-${filename}`}
								className={`${i === 0 ? 'visible' : ''} carouselImageContainer transition duration-700 ease-in-out`}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									key={filename}
									src={`/${projectName}/${filename}`}
									alt={filename}
									className="h-full w-full object-fill"
									loading="eager"
								/>
							</div>
						))}
					</div>
					<ChevronButton direction="backward" images={imageFilenames} />
				</div>
			</div>
			<CloudsBackgroundBottom />
		</main>
	);
}
