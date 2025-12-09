import EducationCard from './educationCard';

export default function Education() {
	return (
		<div
			id="education"
			className="flex w-full flex-col items-center justify-center gap-4 px-8 pt-24"
		>
			<h2>Education</h2>
			<div className="grid w-full max-w-[80rem] grid-cols-1 place-items-center gap-8 lg:w-[65vw] lg:grid-cols-2">
				<EducationCard title="Diploma of Software Development" provider="South Metro TAFE">
					<ul className="resumeInfoList">
						<li>
							Completed a Certificate IV in Programming, which sparked my interest in
							software development, so I went on to complete this Diploma to further
							my programming abilities with the goal of kicking off my career in tech.
						</li>
						<li>
							My areas of focus included Web & Mobile Application Development,
							Object-oriented programming and Software Engineering Principles.
						</li>
					</ul>
				</EducationCard>
				<EducationCard
					title="Microsoft Azure Fundamentals"
					provider="Microsoft Learn"
					dateCompleted="May 2022"
				>
					<ul className="resumeInfoList">
						<li>
							Explored the range of services provided by{' '}
							<b className="capitalised">Microsoft Azure</b>, including compute,
							storage, networking, and databases
						</li>
						<li>
							Gained an understanding of the fundamentals of cloud computing concepts
							and core services offered by{' '}
							<b className="capitalised">Microsoft Azure</b> and how they can be
							utilised to solve business challenges
						</li>
					</ul>
				</EducationCard>
			</div>
		</div>
	);
}
