'use client';

import Link from 'next/link';
import ThemeToggle from './themeToggle';
import Hamburger from './hamburger';
import { useState } from 'react';

export default function SiteHeader() {
	const [isOpen, setIsOpen] = useState(false);

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
		<header className="fixed top-0 z-10 w-full">
			<div className="bg-bg-light-gradient-from dark:bg-bg-dark-gradient-from z-10 flex items-center justify-center md:top-8 md:m-8 md:border-none md:bg-transparent dark:md:bg-transparent">
				<div className="animatedHeader hidden w-[100vw] justify-between rounded-2xl p-4 md:flex md:w-[80vw] md:px-8 md:py-4">
					<nav className="flex items-center">
						<ul className="flex gap-4 text-xl md:gap-8">
							<li className="headNavItem">
								<Link href="/" className="outline-0">
									Home
								</Link>
							</li>
							<li className="headNavItem">
								<Link href="#resume" className="outline-0">
									Resume
								</Link>
							</li>
							<li className="headNavItem">
								<Link href="#portfolio" className="outline-0">
									Portfolio
								</Link>
							</li>
						</ul>
					</nav>
					<ThemeToggle />
				</div>
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen}>
					<ThemeToggle />
				</Hamburger>
			</div>
			<div className="mobileNav md:hidden">
				<nav className="flex items-center p-4">
					<ul className="flex w-full flex-col gap-6 text-2xl md:gap-8">
						<li className="headNavItem">
							<Link
								href="#intro"
								className="active:text-bg-dark dark:active:text-bg-light outline-0"
								onClick={handleLinkClick}
							>
								Home
							</Link>
						</li>
						<li className="headNavItem">
							<Link
								href="#resume"
								className="active:text-bg-dark dark:active:text-bg-light outline-0"
								onClick={handleLinkClick}
							>
								Resume
							</Link>
						</li>
						<li className="headNavItem">
							<Link
								href="#portfolio"
								className="active:text-bg-dark dark:active:text-bg-light outline-0"
								onClick={handleLinkClick}
							>
								Portfolio
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
