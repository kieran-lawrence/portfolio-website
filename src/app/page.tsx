import CloudsBackgroundBottom from '@/components/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/cloudsBackgroundTop';
import Portfolio from '@/components/portfolio';
import Resume from '@/components/resume';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center transition duration-250">
			<div
				id="intro"
				className="flex h-[25vh] w-screen flex-col items-center justify-center gap-8"
			>
				<h1 className="text-8xl">Hi, I&apos;m Kieran.</h1>
				<h3 className="w-1/2 text-center text-xl 2xl:w-1/4">
					an Australian-based software developer driven by a passion for creating cool and
					meaningful technology
				</h3>
			</div>
			<div className="relative h-[23.5rem] w-screen 2xl:h-[40rem]">
				<CloudsBackgroundTop />
			</div>
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col gap-16 py-8 transition duration-250">
				<Resume />
				<Portfolio />
			</div>
			<div className="relative h-[8.5rem] w-screen 2xl:h-[17rem]">
				<CloudsBackgroundBottom />
			</div>
		</main>
	);
}
