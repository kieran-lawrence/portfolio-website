'use client';

import { useState } from 'react';

type ChevronButtonProps = {
	direction: 'forward' | 'backward';
	images: string[];
};

export default function ChevronButton({ direction, images }: ChevronButtonProps) {
	const [imgIndex, setImgIndex] = useState(0);

	const handleClick = () => {
		// Update the image index based on the direction
		setImgIndex((prevIndex) => {
			if (direction === 'forward') {
				return (prevIndex - 1 + images.length) % images.length;
			} else {
				return (prevIndex + 1) % images.length;
			}
		});

		images.forEach((img) => {
			const currImage = parseInt(img.split('.')[0]);
			const imageElement = document.getElementById(`image-${currImage}`);

			// Cant find the image element, fail out
			if (!imageElement) return;

			// If the image index matches the current image, add the visible class
			if (imgIndex === currImage) {
				imageElement.classList.add('visible');
			} else {
				imageElement.classList.remove('visible');
			}
		});
	};
	return (
		<button
			type="button"
			className={`${direction === 'forward' ? 'start-0' : 'end-0'} group absolute top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`}
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
