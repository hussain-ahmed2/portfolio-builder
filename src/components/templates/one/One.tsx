import About from "./About";
import Header from "./Header";
import Hero from "./Hero";

export default function One() {
	return (
		<div className="w-full bg-neutral-100 text-neutral-950">
			<Header />
			<div className="pt-16 max-w-7xl mx-auto">
				<Hero />
                <About />
			</div>
		</div>
	);
}
