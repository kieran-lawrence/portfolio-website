'use client';

import Link from 'next/link';
import ThemeToggle from './themeToggle';
import Hamburger from './hamburger';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

export default function SiteHeader() {
	const [isOpen, setIsOpen] = useState(false);
	const hamburgerRef = useRef<HTMLDivElement>(null);
	const mobileNavRef = useRef<HTMLDivElement>(null);

	// Hide hamburger menu when clicking outside (mobile only)
	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (
				hamburgerRef.current &&
				!hamburgerRef.current.contains(target) &&
				mobileNavRef.current &&
				!mobileNavRef.current.contains(target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const handleLinkClick = () => {
		setIsOpen(false);
		const hamburgerMenuBar = document.querySelectorAll('.hamburgerMenuBar');
		const mobileNav = document.querySelector('.mobileNav');
		hamburgerMenuBar.forEach((bar) => {
			bar.classList.remove('open');
		});
		mobileNav?.classList.remove('open');
	};
	return (
		<header className="fixed top-0 z-10 w-full print:hidden">
			<div className="bg-bg-light-gradient-from dark:bg-bg-dark-gradient-from z-10 flex items-center justify-center md:top-8 md:m-8 md:border-none md:bg-transparent dark:md:bg-transparent">
				<div className="animatedHeader hidden w-[100vw] justify-between rounded-2xl p-4 md:flex md:w-[80vw] md:px-8 md:py-4">
					<nav className="flex items-center">
						<ul className="flex gap-4 text-xl md:gap-8">
							<NavItems onClick={handleLinkClick} />
						</ul>
					</nav>
					<ThemeToggle />
				</div>
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} ref={hamburgerRef}>
					<ThemeToggle />
				</Hamburger>
			</div>
			<div className="mobileNav md:hidden" ref={mobileNavRef}>
				<nav className="flex items-center p-4">
					<ul className="flex w-full flex-col gap-6 text-2xl md:gap-8">
						<NavItems onClick={handleLinkClick} />
					</ul>
				</nav>
			</div>
		</header>
	);
}

const NavItems = ({ onClick }: { onClick?: MouseEventHandler<HTMLAnchorElement> | undefined }) => {
	return (
		<>
			<li className="headNavItem">
				<Link
					href="/#intro"
					className="active:text-bg-dark dark:active:text-bg-light flex h-full outline-0"
					onClick={onClick}
				>
					Home
				</Link>
			</li>
			<li className="headNavItem">
				<Link
					href="/#resume"
					className="active:text-bg-dark dark:active:text-bg-light flex h-full outline-0"
					onClick={onClick}
				>
					Resume
				</Link>
			</li>
			<li className="headNavItem">
				<Link
					href="/#education"
					className="active:text-bg-dark dark:active:text-bg-light flex h-full outline-0"
					onClick={onClick}
				>
					Education
				</Link>
			</li>
			<li className="headNavItem">
				<Link
					href="/#portfolio"
					className="active:text-bg-dark dark:active:text-bg-light flex h-full outline-0"
					onClick={onClick}
				>
					Portfolio
				</Link>
			</li>
		</>
	);
};
