'use client';

import { useState } from 'react';
import ChevronButton from './chevronButton';

type CarouselProps = {
	projectName: string;
	imageFilenames: string[];
};
export const Carousel = ({ projectName, imageFilenames }: CarouselProps) => {
	const [imgIndex, setImgIndex] = useState(0);
	return (
		<div className="relative grid grid-cols-[auto_1fr_1fr_auto] items-center justify-center gap-2 px-8 md:grid-cols-[auto_auto_auto] md:gap-8 lg:w-2/3 2xl:w-1/2">
			<ChevronButton
				direction="forward"
				images={imageFilenames}
				imgIndex={imgIndex}
				setImgIndex={setImgIndex}
			/>
			{/* Image Container */}
			<div className="col-span-4 flex shrink-0 items-center justify-center overflow-hidden md:col-span-1 md:col-start-2">
				{imageFilenames.map((filename, i) => (
					<div
						id={`image-${filename.split('.')[0]}`}
						key={`image-${filename}`}
						className={`${i === imgIndex ? 'visible' : ''} carouselImageContainer w-max transition duration-700`}
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							key={filename}
							src={`/${projectName}/${filename}`}
							alt={filename}
							className="h-full max-h-[28rem] w-auto object-contain md:max-h-[40rem]"
							loading="eager"
						/>
					</div>
				))}
			</div>
			<ChevronButton
				direction="backward"
				images={imageFilenames}
				imgIndex={imgIndex}
				setImgIndex={setImgIndex}
			/>
		</div>
	);
};
