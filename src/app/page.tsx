import Education from '@/components/education';
import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';
import Portfolio from '@/components/portfolio';
import Portrait from '@/components/portrait';
import Resume from '@/components/resume';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center transition duration-250">
			<div
				id="intro"
				className="mt-32 flex w-screen flex-col items-center justify-center gap-4 md:mt-40 md:gap-8"
			>
				<h1 className="text-6xl md:text-8xl">Hi, I&apos;m Kieran.</h1>
				<h3 className="w-3/4 text-center text-lg md:w-1/2 md:text-xl 2xl:w-1/4">
					an Australian-based software developer driven by a passion for creating cool and
					meaningful technology
				</h3>
				<Portrait />
			</div>
			<div className="relative h-[6rem] w-screen md:h-[20rem] 2xl:h-[40rem]">
				<CloudsBackgroundTop />
			</div>
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col gap-16 py-8 transition duration-250">
				<Resume />
				<Education />
				<Portfolio />
			</div>
			<div className="relative h-[8.5rem] w-screen 2xl:h-[17rem]">
				<CloudsBackgroundBottom />
			</div>
		</main>
	);
}
