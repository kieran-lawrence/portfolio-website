import Image from 'next/image';
import Link from 'next/link';

const nonAccessibleTitles = ['coming-soon', 'on-budget'];
type PortfolioCardProps = { cardTitle: string; cardDescription: string; skills: string[] };
export default function PortfolioCard({ cardTitle, cardDescription, skills }: PortfolioCardProps) {
	const formattedTitle = cardTitle.replaceAll('-', ' ');
	return (
		<li className="portfolioItem">
			<Link
				className={
					formattedTitle.includes('bulletin')
						? 'portfolioItemLink horizontal'
						: 'portfolioItemLink'
				}
				href={
					nonAccessibleTitles.includes(cardTitle)
						? '#portfolio'
						: `/portfolio/${cardTitle}`
				}
			>
				<div
					className={
						formattedTitle.includes('bulletin')
							? 'border-text-light dark:border-text-dark relative h-[50%] w-full border-r-2 md:h-[100%]'
							: 'border-text-light dark:border-text-dark relative h-[50%] w-full border-b-2'
					}
				>
					<Image
						className={
							formattedTitle.includes('bulletin')
								? 'rounded-l-mlg object-cover'
								: 'rounded-t-mlg object-cover'
						}
						src={`/${cardTitle}.png`}
						alt={formattedTitle}
						fill={true}
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
				<div className="flex h-[50%] flex-col items-center justify-center gap-4 px-4 text-justify">
					<h4 className="text-2xl font-bold capitalize">{formattedTitle}</h4>
					<p className="break-keep">{cardDescription}</p>
					<div className="w-full">
						<ul className="flex flex-wrap justify-center gap-2 font-[500]">
							{skills.map((skill) => (
								<li
									className="bg-bg-light-alt dark:bg-clouds-two-dark-dark text-text-light rounded-2xl px-4 py-2 capitalize"
									key={skill}
								>
									{skill.replaceAll('-', ' ')}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Link>
		</li>
	);
}
