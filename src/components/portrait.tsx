import Image from 'next/image';
import IconEmail from './icons/iconEmail';
import IconGithub from './icons/iconGithub';
import IconLinkedIn from './icons/iconLinkedIn';

export default function Portrait() {
	return (
		<div className="relative flex">
			<div className="relative h-64 w-64 p-4">
				<Image
					src="/smee.jpg"
					alt="A self portrait of Kieran Lawrence"
					className="rounded-[50%] grayscale-50"
					fill={true}
					sizes="(max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="z-2 flex flex-col items-center justify-center">
				<ul className="flex list-none flex-col items-center justify-center gap-4 px-4 py-2">
					<li className="resumeLinkIcons">
						<a href="https://github.com/kieran-lawrence" target="_blank">
							<IconGithub />
						</a>
					</li>
					<li className="resumeLinkIcons">
						<a href="https://linkedin.com/in/kieran-lawrence-892027202" target="_blank">
							<IconLinkedIn />
						</a>
					</li>
					<li className="resumeLinkIcons">
						<a href="mailto:kieranlawrence2@gmail.com" target="_blank">
							<IconEmail />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
