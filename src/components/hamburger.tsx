'use client';

import { PropsWithChildren, useCallback, useEffect } from 'react';

type HamburgerProps = {
	ref: React.RefObject<HTMLDivElement | null>;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};
export default function Hamburger({
	ref,
	children,
	isOpen,
	setIsOpen,
}: PropsWithChildren<HamburgerProps>) {
	useEffect(() => {
		const hamburgerMenuBar = document.querySelectorAll('.hamburgerMenuBar');
		const mobileNav = document.querySelector('.mobileNav');
		if (isOpen) {
			hamburgerMenuBar.forEach((bar) => {
				bar.classList.add('open');
			});
			mobileNav?.classList.add('open');
		} else {
			hamburgerMenuBar.forEach((bar) => {
				bar.classList.remove('open');
			});
			mobileNav?.classList.remove('open');
		}
	}, [isOpen]);

	const handleToggleClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen, setIsOpen]);

	return (
		<div
			className="relative flex w-full items-center justify-between px-4 py-2 md:hidden"
			ref={ref}
		>
			<button
				className="group relative block h-12 w-12 cursor-pointer rounded-full border-0 p-0"
				aria-label="Menu"
				onClick={handleToggleClick}
				aria-expanded={isOpen}
			>
				<span className="hamburgerMenuBar" />
				<span className="hamburgerMenuBar" />
				<span className="hamburgerMenuBar" />
			</button>
			{children}
		</div>
	);
}
