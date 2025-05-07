import EducationCard from './educationCard';

export default function Education() {
	return (
		<div id="education" className="flex w-full flex-col items-center justify-center gap-4">
			<h2>Education</h2>
			<div className="grid w-[90vw] max-w-[80rem] grid-cols-1 place-items-center gap-8 md:w-[65vw] md:grid-cols-2">
				<EducationCard
					title="Bachelor of Information Technology"
					provider="Murdoch University"
					dateCompleted="2025 - Present"
				>
					<ul className="resumeInfoList w-full gap-0.5 p-0">
						<h6 className="text-[1.1rem] font-bold capitalize">Majors:</h6>
						<li className="capitalised ml-4">Computer Science</li>
						<li className="capitalised ml-4">Web & Mobile Application Development</li>
						<h6 className="mt-1 text-[1.1rem] font-bold capitalize">Minors:</h6>
						<li className="capitalised ml-4">
							Artificial Intelligence and Autonomous Systems
						</li>
					</ul>
				</EducationCard>
				<EducationCard
					title="AWS Certified Developer - Associate"
					provider="Cloud Guru"
					dateCompleted="Est. Dec 2025"
				>
					<ul className="resumeInfoList">
						<li>
							Furthering my expertise with <b className="capitalised">AWS</b> services{' '}
							such as <b className="capitalised">Lambda</b>,{' '}
							<b className="capitalised">DynamoDB</b>,{' '}
							<b className="capitalised">API Gateway</b>, and{' '}
							<b className="capitalised">S3</b>
						</li>
						<li>
							Using monthly Professional Development days to enhance my skills and{' '}
							stay current with industry practices
						</li>
						<li>
							Building knowledge in <b className="capitalised">monitoring</b>,{' '}
							<b className="capitalised">security</b>, and{' '}
							<b className="capitalised">application lifecycle management</b> within{' '}
							<b className="capitalised">AWS</b>
						</li>
					</ul>
				</EducationCard>
			</div>
		</div>
	);
}
