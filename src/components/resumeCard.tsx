import { PropsWithChildren } from 'react';

type Props = { jobTitle: string; jobCompany: string; jobDates: string };

export default function ResumeCard({
	jobTitle,
	jobCompany,
	jobDates,
	children,
}: PropsWithChildren<Props>) {
	return (
		<div className="border-text-light dark:border-text-dark box-border h-full w-full rounded-lg border-2 p-4 nth-of-type-[1]:col-span-4 nth-of-type-[1]:row-start-1 nth-of-type-[2]:col-span-2 nth-of-type-[2]:col-start-3 nth-of-type-[3]:col-span-2 nth-of-type-[3]:col-start-3">
			<div className="flex flex-col items-center justify-stretch">
				<h4 className="text-center text-xl font-bold md:text-2xl">{jobTitle}</h4>
				<div className="flex flex-col flex-wrap items-center justify-center pb-4 md:flex-row md:gap-2">
					<h5 className="w-max font-semibold md:text-lg">{jobCompany}</h5>
					<p className="hidden md:block">•</p>
					<h5 className="w-max font-semibold md:text-lg">{jobDates}</h5>
				</div>
				{children}
			</div>
		</div>
	);
}
