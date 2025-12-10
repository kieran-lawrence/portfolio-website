import IconAwsLambda from './icons/iconAwsLambda';
import IconReact from './icons/iconReact';
import ResumeCard from './resumeCard';
import SkillsItem from './skillsItem';

export default function Resume() {
	return (
		<div
			id="resume"
			className="flex w-full flex-col items-center justify-center gap-4 px-8 pt-24 md:px-16"
		>
			<h2>Work History</h2>
			<div className="flex w-full max-w-[80rem] flex-col place-items-center gap-8 lg:grid lg:w-[80vw] lg:grid-cols-4">
				<ResumeCard
					jobTitle="Software Developer"
					jobCompany="Seven West Media"
					jobDates="Oct 2023 - Present"
				>
					<ul className="resumeInfoList">
						<li>
							in this role I build and ship features and squash bugs on a daily basis
							across our various websites, apps and infrastructure services
						</li>
						<li>
							i&apos;ve built cross-platform apps using{' '}
							<b className="capitalised">React Native</b> and bridge native SDKs via{' '}
							<b className="capitalised">Nitro Modules</b> using{' '}
							<b className="capitalised">Swift & Kotlin</b>
						</li>
						<li>
							Recently I was involved in building a native video player for our apps,
							integrating the{' '}
							<b className="capitalised">Brightcove and GoogleIMA SDKs</b>
						</li>
						<li>
							architected and built <b>back-end</b> systems,{' '}
							<b className="capitalised">APIs</b>, and services using{' '}
							<b className="capitalised">AWS</b> via{' '}
							<b className="capitalised">infrastructure as code (IaC)</b>
						</li>
						<li>
							I volunteered to take lead on a huge digital transformation project
							which is on track for 2026 - a major upgrade of our editorial CMS
							tooling
						</li>
						<li>
							Contributed to the successful launch of&nbsp;
							<b className="capitalised">The Nightly</b>, which now has over&nbsp;
							<b>5 million</b> monthly page views
						</li>

						<li>
							Took <b>lead</b> on our 2025 state and federal elections coverage,
							including <b>developing a middleware API</b> that fetched and aggregated
							data from our vendor to provide <b>real-time election results</b> to our
							front-end applications
						</li>
					</ul>
				</ResumeCard>
				<ResumeCard
					jobTitle="Associate Systems Engineer"
					jobCompany="Kinetic IT"
					jobDates="Jun 2022 - Oct 2023"
				>
					<ul className="resumeInfoList">
						<li>
							<b>
								monitored <b className="capitalised">IT</b> systems
							</b>
							, networks, and applications to ensure their ongoing health and
							performance
						</li>
						<li>
							Created and maintained <b>scripts</b> for automating routine and ad-hoc
							tasks, such as deployments, monitoring, and backups
						</li>
						<li>
							Assisted in the daily operations of the <b>data centre</b>, including
							managing physical access and scheduled hardware inspections
						</li>
					</ul>
				</ResumeCard>
				<ResumeCard
					jobTitle="Service Desk Technician"
					jobCompany="Kinetic IT"
					jobDates="Feb 2020 - Jun 2022"
				>
					<ul className="resumeInfoList">
						<li>
							Provided <b>end-user support</b> for hardware, software, and network
							issues remotely and in-person
						</li>
						<li>
							resolved complex <b>computer hardware & software faults</b>, liaising
							with vendors as required
						</li>
						<li>
							Identified and assisted in the resolution of&nbsp;
							<b>high priority incidents</b>
						</li>
						<li>
							<b>mentored and trained</b> new employees to develop their technical
							abilities and confidence
						</li>
					</ul>
				</ResumeCard>
				<SkillsItem
					headerText="Tools"
					skillItems={[
						'Amazon RDS',
						'Docker',
						'DynamoDB',
						'ECS',
						'Firebase',
						'GitHub CI/CD',
						'Jest',
						'Lambda',
						'PostgreSQL',
						'Pulumi',
						'S3',
					]}
					kind="tools"
				>
					<IconAwsLambda />
				</SkillsItem>
				<SkillsItem
					headerText="Frameworks"
					skillItems={[
						'Express',
						'Expo',
						'NestJS',
						'Next.js',
						'React',
						'React Native',
						'Svelte',
						'Tailwind CSS',
					]}
					kind="frameworks"
				>
					<IconReact />
				</SkillsItem>
			</div>
		</div>
	);
}
