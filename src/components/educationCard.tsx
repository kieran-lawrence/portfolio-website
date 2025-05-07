import { PropsWithChildren } from 'react';

type Props = { title: string; provider: string; dateCompleted: string };

export default function EducationCard({
	title,
	provider,
	dateCompleted,
	children,
}: PropsWithChildren<Props>) {
	return (
		<div className="border-text-light dark:border-text-dark box-border h-full w-full rounded-lg border-2 p-4 transition duration-250">
			<div className="flex flex-col items-center justify-stretch">
				<h4 className="text-center text-xl font-bold md:text-2xl">{title}</h4>
				<div className="flex flex-wrap justify-center gap-2 pb-4">
					<h5 className="w-max font-semibold md:text-lg">{provider}</h5>
					<p>•</p>
					<h5 className="w-max font-semibold md:text-lg">{dateCompleted}</h5>
				</div>
				{children}
			</div>
		</div>
	);
}
