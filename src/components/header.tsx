import Link from 'next/link';
import ThemeToggle from './themeToggle';

export default function SiteHeader() {
	return (
		<header>
			<ThemeToggle />
			<nav>
				<ul className="flex gap-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="#resume">Resume</Link>
					</li>
					<li>
						<Link href="#portfolio">Portfolio</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
