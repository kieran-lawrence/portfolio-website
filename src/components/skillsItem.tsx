import { PropsWithChildren } from 'react';

type SkillsItemProps = { headerText: string; skillItems: string[]; kind: 'tools' | 'frameworks' };

export default function SkillsItem({
	headerText,
	skillItems,
	children,
	kind = 'tools',
}: PropsWithChildren<SkillsItemProps>) {
	return (
		<div className="border-text-light dark:border-text-dark col-span-2 row-start-2 box-border flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border-2 p-4 last:row-start-3">
			<div className="fill:aws-icon flex items-center justify-center gap-4">
				{children}
				<h4 className="tracking-tightest text-2xl font-bold">{headerText}</h4>
			</div>
			<div className="flex flex-wrap justify-center gap-2">
				{skillItems.map((item) => (
					<p
						className={
							kind === 'tools'
								? 'bg-aws-icon skillsCard text-bg-dark-alt'
								: 'bg-react-icon skillsCard text-bg-dark-alt'
						}
						key={item}
					>
						{item}
					</p>
				))}
			</div>
		</div>
	);
}
