'use client';

import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';
import { IconPrinter } from '@/components/icons/iconPrinter';
import Head from 'next/head';
import Link from 'next/link';

export default function ResumePage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Kieran Lawrence',
		jobTitle: 'Software Developer',
		url: 'https://codebykieran.com/resume',
		sameAs: [
			'https://linkedin.com/in/kieran-lawrence-892027202',
			'https://github.com/kieran-lawrence',
		],
	};

	return (
		<>
			<Head>
				<title>Kieran Lawrence | Resume</title>
				<meta name="og:site_name" content="Kieran Lawrence | Resume" />
				<meta name="og:description" content="Resume of Kieran Lawrence" />
				<link rel="canonical" href="https://codebykieran.com/resume" />
				<meta
					name="description"
					content="The professional resume of Kieran Lawrence, a full-stack software developer specialising in React, infrastructure as code, and web development."
				/>
			</Head>
			<main className="box-border flex h-full flex-col items-center justify-center pt-12 md:pt-24 print:bg-white print:p-3">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
					}}
				/>
				<CloudsBackgroundTop />
				<div className="print:text-text-light bg-bg-light dark:bg-bg-dark flex w-full flex-col items-center justify-center gap-6 px-8 pb-4 md:px-16 print:gap-2 print:bg-white print:p-0">
					<h1
						id="resume"
						className="flex items-center gap-8 pt-32 text-6xl md:text-8xl print:pt-0 print:text-2xl"
					>
						Resume
						<button
							className="hidden h-12 w-12 cursor-pointer items-center justify-center md:flex print:hidden"
							onClick={() => window.print()}
							aria-label="Print Resume"
						>
							<IconPrinter />
						</button>
					</h1>
					<section className="flex w-full flex-col gap-1 pb-3 md:items-center lg:w-1/2 print:w-full print:items-baseline">
						<h2 className="print:text-xl">Kieran Lawrence</h2>
						<h3 className="text-xl font-semibold print:text-lg">
							Software Developer | Perth, WA
						</h3>
						<div className="flex flex-col gap-1 pt-2 md:items-center print:items-baseline">
							<p className="font-semibold">
								Email:&nbsp;
								<Link
									href="mailto:kieranlawrence2@gmail.com"
									className="font-normal hover:underline"
								>
									kieranlawrence2@gmail.com
								</Link>
							</p>
							<p className="font-semibold">
								Website:&nbsp;
								<Link
									href="https://codebykieran.com"
									target="_blank"
									className="font-normal hover:underline"
								>
									https://codebykieran.com
								</Link>
							</p>
							<p className="font-semibold">
								GitHub:&nbsp;
								<Link
									href="https://github.com/kieran-lawrence"
									target="_blank"
									className="font-normal hover:underline"
								>
									https://github.com/kieran-lawrence
								</Link>
							</p>
							<p className="font-semibold">
								LinkedIn:&nbsp;
								<Link
									href="https://linkedin.com/in/kieran-lawrence-892027202"
									target="_blank"
									className="font-normal hover:underline"
								>
									https://linkedin.com/in/kieran-lawrence-892027202
								</Link>
							</p>
						</div>
					</section>
					<section className="flex w-full flex-col lg:w-1/2 print:w-full">
						<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
							Professional Summary
						</h3>
						<p className="print:text-sm">
							I’m a Perth-based Full-Stack Software Developer with over 2 years of
							professional experience in a large media organisation that ships to
							production multiple times a day. I have a focus on building web and
							mobile applications predominantly using NodeJS, React and React Native
						</p>
					</section>
					<section className="flex w-full flex-col gap-1 lg:w-1/2 print:mb-24 print:w-full">
						<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
							Professional Experience
						</h3>
						<div className="flex flex-col gap-1 print:text-sm">
							<div>
								<h4 className="font-semibold">
									Software Developer - Seven West Media
								</h4>
								<p className="ml-1 italic">Oct 2023 - Present</p>
								<p className="mt-2">
									In this role I build and ship features and squash bugs daily
									across our various websites, apps and infrastructure services.
									Some of my key achievements include:
								</p>
								<ul className="ml-2 list-inside list-disc">
									<li>
										Built cross-platform apps using React Native and bridge
										native SDKs via Nitro Modules using Swift & Kotlin
									</li>
									<li>
										Built a native video player for our apps, integrating the
										Brightcove and GoogleIMA SDKs
									</li>
									<li>
										Took lead on our 2025 state and federal elections coverage,
										including developing a middleware API that fetched and
										aggregated data from our vendor to provide real-time
										election results to our front-end apps
									</li>
									<li>
										Volunteered to take lead on a huge digital transformation
										project which is on track for 2026 - a major upgrade of our
										editorial CMS tooling
									</li>
									<li>
										Contributed to the successful launch of The Nightly, which
										now has over 5 million monthly page views
									</li>
								</ul>
							</div>
							<div>
								<h4 className="mt-4 font-semibold">
									Associate Systems Engineer - Kinetic IT
								</h4>
								<p className="ml-1 italic">Jun 2022 - Oct 2023</p>
								<p className="mt-2">
									Once I left the Service Desk, I moved to an Operations Centre
									role where I managed our clients core infrastructure remotely
									and at our data centre, created scripts to automate tasks and
									was a central point for managing the physical access to our data
									centre.{' '}
								</p>
							</div>
							<div>
								<h4 className="mt-4 font-semibold">
									Service Desk Technician - Kinetic IT
								</h4>
								<p className="ml-1 italic">Feb 2020 - Jun 2022</p>
								<p className="mt-2">
									After 6 years in the automotive industry, I decided to
									transition to an IT role as I’ve always enjoyed working with
									computers and had a knack for solving problems with them. I
									started on the Service Desk where I provided end-user support
									for hardware, software, and network issues remotely and
									in-person to our clients.
								</p>
							</div>
						</div>
					</section>
					<section className="flex w-full flex-col gap-1 lg:w-1/2 print:w-full">
						<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
							Education
						</h3>
						<ul className="print:text-sm">
							<li>
								<strong>Diploma of Software Development</strong> - South Metro TAFE
								<p>
									I completed a Certificate IV in Programming, which sparked my
									interest in software development, so I went on to complete this
									Diploma to further my software development abilities with the
									goal of kicking off my career in tech. My areas of focus
									included Web & Mobile Application Development, Object-oriented
									programming and Software Engineering Principles.
								</p>
							</li>
							<li className="mt-2">
								<strong>Microsoft Azure Fundamentals</strong> - Microsoft Learn
								<p>
									Explored the range of services provided by Microsoft Azure,
									including compute, storage, networking, and databases. I also
									gained an understanding of the fundamentals of cloud computing
									concepts and core services offered by Microsoft Azure and how
									they can be utilised to solve business challenges.
								</p>
							</li>
						</ul>
					</section>
					<section className="flex w-full flex-col gap-1 lg:w-1/2 print:w-full">
						<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
							Technical Skills
						</h3>
						<ul className="ml-2 list-inside list-disc columns-1 md:columns-2 print:columns-1 print:text-sm">
							<li>Infrastructure as Code (IaC)</li>
							<li>Creating and extending CI/CD workflows via GitHub Actions</li>
							<li>
								Experienced with AWS services including RDS, Lambda, DynamoDB, ECS
								and S3
							</li>
							<li>
								Adept with a range of frameworks including Next.js, Expo and Svelte
							</li>
							<li>
								Proficient at creating responsive and performant web and mobile
								applications
							</li>
						</ul>
					</section>
				</div>
				<CloudsBackgroundBottom />
			</main>
		</>
	);
}
