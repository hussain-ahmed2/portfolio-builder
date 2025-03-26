import Image from "next/image";

export default function About({
	name = "John Doe",
	description = "",
}: {
	name?: string;
	description?: string;
}) {
	return (
		<section id="about" className="py-20 bg-neutral-50">
			<div className="container mx-auto px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center">
					{/* Left Column: Image */}
					<div className="lg:w-1/2 mb-12 lg:mb-0">
						<Image
							width={400}
							height={400}
							src="https://placehold.co/400/png?text=Image" // Replace with your image URL
							alt="Your Name"
							className="w-full h-auto rounded-full shadow-lg"
						/>
					</div>

					{/* Right Column: About Text */}
					<div className="lg:w-1/2 lg:pl-16">
						<h2 className="text-4xl font-semibold text-neutral-800 mb-6">
							About Me
						</h2>
						<p className="text-lg text-neutral-700 mb-4">
							Hi, I{"'"}m{" "}
							<strong className="text-emerald-600">{name}</strong>
							, a passionate and creative frontend developer based
							in{" "}
							<strong className="text-emerald-600">
								Your Location
							</strong>
							. I specialize in building modern, responsive web
							applications using{" "}
							<strong className="text-emerald-600">
								React.js
							</strong>
							, along with a solid understanding of HTML, CSS, and
							JavaScript.
						</p>
						<p className="text-lg text-neutral-700 mb-4">
							With a background in{" "}
							<strong className="text-emerald-600">
								Your Previous Background/Studies
							</strong>
							, I've always been intrigued by how the web works
							and its potential to connect people globally. After
							diving deep into JavaScript frameworks, I found
							React to be the perfect tool to bring my ideas to
							life with fast, interactive user interfaces.
						</p>
						<p className="text-lg text-neutral-700 mb-4">
							I{"'"}m constantly learning and improving my skills,
							always excited to take on new challenges. When I'm
							not coding, you{"'"}ll find me exploring{" "}
							<strong className="text-emerald-600">
								Hobbies/Interests
							</strong>{" "}
							or collaborating on open-source projects to
							contribute to the developer community.
						</p>
						<p className="text-lg text-neutral-700 mb-6">
							I love working with teams, sharing knowledge, and
							contributing to the growth of projects and products.
							If you{"'"}d like to collaborate, feel free to reach
							out to me via my contact page!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
