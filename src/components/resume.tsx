import IconAwsLambda from './icons/iconAwsLambda';
import IconReact from './icons/iconReact';
import ResumeCard from './resumeCard';
import SkillsItem from './skillsItem';

export default function Resume() {
	return (
		<div id="resume" className="flex w-full flex-col items-center justify-center gap-4">
			<h2>Work History</h2>
			<div className="flex w-[90vw] max-w-[80rem] flex-col place-items-center gap-8 md:grid md:w-[65vw] md:grid-cols-4">
				<ResumeCard
					jobTitle="Associate Developer"
					jobCompany="Seven West Media"
					jobDates="Oct 2023 - Present"
				>
					<ul className="resumeInfoList">
						<li>
							Develop <b>front-end</b> features and functionality, including
							interactive elements and dynamic content
						</li>
						<li>
							Integrate <b>back-end</b> systems,&nbsp;
							<b>databases</b>, and&nbsp;
							<b className="capitalised">APIs</b> to support website functionality
						</li>
						<li>
							Utilise <b className="capitalised">AWS</b> technologies to build,
							manage, and deploy cloud-based solutions across various projects
						</li>
						<li>
							Conduct technical research&nbsp;<b>(spikes)</b> to assess new
							technologies and approaches
						</li>
						<li>
							Contributed to the successful launch of&nbsp;
							<b className="capitalised">The Nightly</b>, which now has over&nbsp;
							<b>5 million</b> monthly page views
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
							Continuously&nbsp;
							<b>
								monitored <b className="capitalised">IT</b> systems
							</b>
							, networks, and applications to ensure their health and performance
						</li>
						<li>
							Created and maintained <b>scripts</b> for automating system tasks, such
							as deployments, monitoring, and backups
						</li>
						<li>
							Assisted in the daily operations of the <b>data centre</b>, including
							managing physical access and routine hardware inspections
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
							Acted as a <b>mentor</b> for new employees, providing <b>training</b>{' '}
							and ongoing <b>support</b> to encourage growth and proficiency
						</li>
					</ul>
				</ResumeCard>
				<SkillsItem
					headerText="Tools"
					skillItems={[
						'TypeORM',
						'DynamoDB',
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
