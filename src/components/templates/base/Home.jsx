export default function Home() {
	return (
		<section id="home" className="p-5 min-h-[calc(100vh-4rem)] grid place-content-center">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-10">Welcome to Portfolio Builder</h1>
				<a href="/templates" className="px-6 py-3 rounded-md bg-green-800 hover:bg-green-700 transition-colors active:bg-green-700">
					Explore Templates
				</a>
			</div>
		</section>
	);
}
