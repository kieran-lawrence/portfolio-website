import CloudsBackgroundBottom from '@/components/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/cloudsBackgroundTop';
import Resume from '@/components/resume';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center transition duration-250">
			<div
				id="intro"
				className="flex h-[25vh] w-full flex-col items-center justify-center gap-8"
			>
				<h1 className="text-8xl">Hi, I&apos;m Kieran.</h1>
				<h3 className="w-1/2 text-xl">
					an Australian-based software developer driven by a passion for creating cool and
					meaningful technology
				</h3>
			</div>
			<div className="relative h-[376px] w-full">
				<CloudsBackgroundTop />
			</div>
			<div
				id="resume"
				className="bg-bg-light dark:bg-bg-dark h-screen w-full transition duration-250"
			>
				<Resume />
			</div>
			<div
				id="portfolio"
				className="bg-bg-light dark:bg-bg-dark h-screen w-full transition duration-250"
			></div>
			<div className="relative w-full">
				<CloudsBackgroundBottom />
			</div>
		</main>
	);
}
