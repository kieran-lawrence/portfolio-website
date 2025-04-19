import type { Metadata } from 'next';
import { Coiny } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/header';
import Head from 'next/head';

const coinyFont = Coiny({ variable: '--font-primary', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Kieran Lawrence | Software Developer',
	description: 'Developer portfolio for Kieran Lawrence | Perth WA | Software Developer',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="og:image" content="/social-image.png" />
			</Head>
			<body className={`${coinyFont.variable} antialiased`}>
				<SiteHeader />
				{children}
			</body>
		</html>
	);
}
