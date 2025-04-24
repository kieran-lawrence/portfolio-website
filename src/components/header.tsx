import Link from 'next/link';
import ThemeToggle from './themeToggle';

export default function SiteHeader() {
	return (
		<header className="sticky top-8 z-10 m-8 flex items-center justify-center">
			<div className="animatedHeader flex w-[80vw] justify-between rounded-2xl px-8 py-4">
				<nav>
					<ul className="flex gap-8 text-xl">
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
