import Link from 'next/link';
import ThemeToggle from './themeToggle';

export default function SiteHeader() {
	return (
		<header className="bg-clouds-two-dark sticky top-0 z-10 flex items-center justify-center border-b-2 border-b-[#ffffff24] md:top-8 md:m-8 md:border-none md:bg-transparent">
			<div className="md:animatedHeader flex w-[100vw] justify-between rounded-2xl p-4 md:w-[80vw] md:px-8 md:py-4">
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
		</header>
	);
}
