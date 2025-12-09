'use client';

type ChevronButtonProps = {
	direction: 'forward' | 'backward';
	images: string[];
	imgIndex: number;
	setImgIndex: (idx: number) => void;
};

export default function ChevronButton({
	direction,
	images,
	imgIndex,
	setImgIndex,
}: ChevronButtonProps) {
	const handleClick = () => {
		let newIndex;
		if (direction === 'forward') {
			newIndex = (imgIndex - 1 + images.length) % images.length;
		} else {
			newIndex = (imgIndex + 1) % images.length;
		}
		setImgIndex(newIndex);
	};

	return (
		<button
			type="button"
			className={`${direction === 'forward' ? 'col-span-2 col-start-1 row-2 md:col-span-1 md:row-1' : 'col-span-2 col-start-3 row-2 md:col-span-1 md:col-start-3 md:row-1'} group flex h-full cursor-pointer items-center justify-center focus:outline-none`}
			onClick={handleClick}
		>
			<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
				<svg
					className={`${direction === 'forward' ? '' : 'rotate-180'} h-4 w-4 rtl:rotate-180`}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M5 1 1 5l4 4"
					/>
				</svg>
				<span className="sr-only">{direction === 'forward' ? 'Next' : 'Previous'}</span>
			</span>
		</button>
	);
}
