export default function Hero({
    name = "John Doe",
    description = "I create amazing web applications with React, TypeScript, and TailwindCSS."
}: {
    name?: string
    description?: string
}) {
  return (
		<section id="home" className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
			<div className="px-5 space-y-10 max-sm:text-center">
				<h1 className="text-5xl font-bold leading-tight">
					Hi, I{"'"}m <span className="text-emerald-500">{name}</span>
				</h1>
				<p className="text-xl">{description}</p>
				<div className="">
					<a
						href="#about"
						className="inline-block px-7 py-3 rounded-lg bg-emerald-500 text-white font-medium text-lg hover:bg-emerald-600 transition duration-300 active:scale-95"
					>
						Learn More About Me
					</a>
				</div>
			</div>
		</section>
  );
}
