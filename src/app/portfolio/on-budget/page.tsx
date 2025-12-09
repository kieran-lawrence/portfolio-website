import { Carousel } from '@/components/carousel';
import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';

const onBudgetInfo = {
	title: 'On Budget',
	description: [
		'On Budget is a personal finance management app I designed to help users track their income and expenses effectively. I built this for a real client (my fiancé 🤣), to their specific needs.',
		'It allows users to create budgets, categorise transactions, track expenses and visualise their spending habits through charts and reports.',
		'The application features user authentication, secure data storage, and real-time updates to ensure that users have access to their financial information whenever they need it. With On Budget, users can set financial goals, monitor their progress, and make informed decisions about their spending to achieve better financial health.',
	],
};

export default function OnBudgetPage() {
	const images = ['0.png', '1.png', '2.png', '3.png'];

	return (
		<main className="mt-32 flex h-full flex-col items-center justify-center md:mt-48">
			<CloudsBackgroundTop />
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col items-center justify-center gap-4 py-4">
				<h1
					className="mt-0 gap-8 pt-32 pb-4 text-6xl capitalize md:text-8xl"
					id="portfolio-title"
				>
					{onBudgetInfo.title}
				</h1>
				<ul className="flex flex-col items-center justify-center gap-2 px-8 py-4 text-lg md:text-xl">
					{onBudgetInfo.description.map((block, index) => (
						<li key={index} className="w-full text-justify text-lg md:w-2/3 md:text-xl">
							{block}
						</li>
					))}
				</ul>
				<h2>Gallery</h2>
				<Carousel projectName="on-budget" imageFilenames={images} />
			</div>
			<CloudsBackgroundBottom />
		</main>
	);
}
