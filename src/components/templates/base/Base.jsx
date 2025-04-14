import Home from "./Home";
import Header from "./Header";

export default function Base() {
	return (
		<>
			<Header />
			<main className="max-w-6xl mx-auto">
				<Home />
			</main>
		</>
	);
}
