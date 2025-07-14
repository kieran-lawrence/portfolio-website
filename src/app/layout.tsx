import type { Metadata, Viewport } from 'next';
import { Coiny } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/header';

const coinyFont = Coiny({ variable: '--font-primary', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Kieran Lawrence | Software Developer',
	description: 'Developer portfolio for Kieran Lawrence | Perth WA | Software Developer',
	openGraph: {
		siteName: 'Code By Kieran',
		title: 'Code By Kieran',
		description:
			'Welcome to Code by Kieran. The Developer Portfolio for Kieran Lawrence showcasing my resume and projects.',
	},
};
export const viewport: Viewport = { themeColor: '#6BA6E6', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${coinyFont.variable} text-text-light dark:text-text-dark from-bg-light-gradient-from to-bg-light-gradient-to dark:from-bg-dark-gradient-from dark:to-bg-dark-gradient-to scroll-smooth bg-gradient-to-b font-sans antialiased transition duration-250`}
			>
				<SiteHeader />
				{children}
			</body>
		</html>
	);
}
