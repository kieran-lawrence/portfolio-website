import CloudsBackgroundBottom from '@/components/icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from '@/components/icons/cloudsBackgroundTop';
import Link from 'next/link';

export default async function ResumePage() {
	return (
		<main className="box-border flex h-full flex-col items-center justify-center pt-12 md:pt-24 print:bg-white print:p-3">
			<CloudsBackgroundTop />
			<div className="print:text-text-light bg-bg-light dark:bg-bg-dark flex w-full flex-col items-center justify-center gap-6 px-8 pb-4 print:gap-2 print:bg-white print:p-0">
				<h1 className="text-6xl md:text-8xl print:text-2xl">Resume</h1>
				<section className="flex w-full flex-col gap-1 pb-3 md:w-1/2 md:items-center print:w-full print:items-baseline">
					<h2 className="print:text-xl">Kieran Lawrence</h2>
					<p className="text-xl font-semibold print:text-lg">
						Software Developer | Perth, WA
					</p>
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
				<section className="flex w-full flex-col md:w-1/2 print:w-full">
					<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
						Professional Summary
					</h3>
					<p className="print:text-sm">
						Innovative and results-driven software developer with a strong foundation in
						full-stack development, cloud infrastructure, and system engineering.
						Proficient in modern frameworks like React, Next.js, and NestJS, with
						hands-on experience deploying scalable solutions on AWS.
					</p>
				</section>
				<section className="flex w-full flex-col gap-1 md:w-1/2 print:w-full">
					<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
						Technical Skills
					</h3>
					<ul className="ml-2 list-inside list-disc columns-1 md:columns-2 print:columns-1 print:text-sm">
						<li>TypeScript, JavaScript, Java, C#, Swift</li>
						<li>React, Next.js, NestJS, Svelte, Tailwind CSS</li>
						<li>AWS (Lambda, S3, DynamoDB, API Gateway), Pulumi</li>
						<li>PostgreSQL, DynamoDB, TypeORM</li>
						<li>CI/CD, GitHub Actions, Fastlane</li>
					</ul>
				</section>
				<section className="flex w-full flex-col gap-1 md:w-1/2 print:w-full">
					<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
						Professional Experience
					</h3>
					<div className="flex flex-col gap-1 print:text-sm">
						<div>
							<h4 className="font-semibold">
								Associate Developer - Seven West Media
							</h4>
							<p className="ml-1 italic">Oct 2023 - Present</p>
							<ul className="ml-2 list-inside list-disc">
								<li>
									Developed and enhanced front-end features for interactive user
									experiences.
								</li>
								<li>Integrated backend systems and AWS cloud services.</li>
								<li>
									Contributed to the successful launch of The Nightly with over 5M
									monthly views.
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold">
								Associate Systems Engineer - Kinetic IT
							</h4>
							<p className="ml-1 italic">Jun 2022 - Oct 2023</p>
							<ul className="ml-2 list-inside list-disc">
								<li>Monitored IT systems and automated deployments.</li>
								<li>Managed data center operations and security access.</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold">Service Desk Technician - Kinetic IT</h4>
							<p className="ml-1 italic">Feb 2020 - Jun 2022</p>
							<ul className="ml-2 list-inside list-disc">
								<li>
									Provided remote and on-site technical support for end-users.
								</li>
								<li>
									Mentored new hires and coordinated with vendors for escalations.
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col gap-1 md:w-1/2 print:w-full">
					<h3 className="mb-1 border-t border-b py-1 text-xl font-semibold print:text-lg">
						Education
					</h3>
					<ul className="print:text-sm">
						<li>
							<strong>Bachelor of Information Technology</strong> - Murdoch University
							(2025 - Present)
						</li>
						<li>
							<strong>AWS Certified Developer - Associate</strong> - A Cloud Guru
							(Expected Dec 2025)
						</li>
					</ul>
				</section>
			</div>
			<CloudsBackgroundBottom />
		</main>
	);
}
