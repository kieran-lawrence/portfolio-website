type RouteProps = { params: Promise<{ slug: string }> };

export default async function PortfolioItem({ params }: RouteProps) {
	const { slug: projectName } = await params;
	return <div>{projectName}</div>;
}
