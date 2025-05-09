import Link from 'next/link';
import CloudsBackgroundBottom from './icons/cloudsBackgroundBottom';
import CloudsBackgroundTop from './icons/cloudsBackgroundTop';

type ErrorPageProps = {
	errorCode: number;
	errorMessage: string;
};
export default function ErrorPage({ errorCode, errorMessage }: ErrorPageProps) {
	return (
		<main className="flex h-[100vh] flex-col items-center justify-center">
			<CloudsBackgroundTop />
			<div className="bg-bg-light dark:bg-bg-dark flex w-full flex-col items-center justify-center gap-4 py-4">
				<h1 className="py-4 text-6xl md:text-8xl">Ruh Roh!</h1>
				<h2 className="w-3/4">
					Right now you&apos;re probably wondering, how did I end up here?
				</h2>
				<div className="flex w-3/4 flex-col items-center justify-center gap-2 py-8 text-xl">
					<p>Hopefully this clears things up!</p>
					<p className="errorCode font-bold">Error Code: {errorCode}</p>
					<p>{errorMessage}</p>
				</div>
				<button className="outline-bg-light rounded-xl border-0 px-8 py-4 text-xl outline-2">
					<Link href="/">Back to Home</Link>
				</button>
			</div>
			<CloudsBackgroundBottom />
		</main>
	);
}
