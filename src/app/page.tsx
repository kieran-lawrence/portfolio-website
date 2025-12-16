import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';
import Portfolio from '@/components/portfolio';
import Portrait from '@/components/portrait';

export default function Home() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Kieran Lawrence',
		jobTitle: 'Software Developer',
		url: 'https://codebykieran.com',
		sameAs: [
			'https://linkedin.com/in/kieran-lawrence-892027202',
			'https://github.com/kieran-lawrence',
		],
	};

	return (
		<main className="flex flex-col items-center justify-center">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
				}}
			/>
			<div
				id="intro"
				className="flex w-screen flex-col items-center justify-center gap-4 pt-32 md:mt-40 md:gap-8"
			>
				<h1 className="text-6xl md:text-8xl">Hi, I&apos;m Kieran.</h1>
				<p className="tracking-mono-tight w-3/4 text-center font-mono text-lg md:w-1/2 md:text-xl 2xl:w-1/4">
					an Australian-based software developer with a focus on building web and mobile
					applications
				</p>
				<Portrait />
			</div>
			<CloudsBackgroundTop />
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col gap-16 py-8">
				<Portfolio />
			</div>
			<CloudsBackgroundBottom />
		</main>
	);
}
