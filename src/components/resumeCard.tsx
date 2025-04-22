import { PropsWithChildren } from 'react';

type Props = { jobTitle: string; jobCompany: string; jobDates: string };

export default function ResumeCard({
	jobTitle,
	jobCompany,
	jobDates,
	children,
}: PropsWithChildren<Props>) {
	return (
		<div className="border-text-light dark:border-text-dark box-border h-full w-full rounded-lg border-2 p-4 transition duration-250 nth-of-type-[1]:col-span-4 nth-of-type-[1]:row-start-1 nth-of-type-[2]:col-span-2 nth-of-type-[2]:col-start-3 nth-of-type-[3]:col-span-2 nth-of-type-[3]:col-start-3">
			<div className="flex flex-col items-center justify-stretch">
				<h4 className="text-2xl font-bold">{jobTitle}</h4>
				<div className="flex flex-wrap justify-center gap-2 pb-4">
					<h5 className="w-max text-lg font-semibold">{jobCompany}</h5>
					<p>•</p>
					<h5 className="w-max text-lg font-semibold">{jobDates}</h5>
				</div>
				{children}
			</div>
		</div>
	);
}
