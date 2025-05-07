import ErrorPage from '@/components/errorPage';

export default function NotFound() {
	return <ErrorPage errorCode={404} errorMessage="Page not found" />;
}
