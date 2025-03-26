"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({
	logo = "Portfolio",
	navigation = [
		{
			name: "Home",
			href: "#home",
		},
		{
			name: "About",
			href: "#about",
		},
		{
			name: "Portfolio",
			href: "#portfolio",
		},
		{
			name: "Contact",
			href: "#contact",
		},
	],
}: {
	logo?: string;
	navigation?: {
		name: string;
		href: string;
	}[];
}) {
	const [activeLink, setActiveLink] = useState<string>("#home");
	const [open, setOpen] = useState<boolean>(false);

	function handleToggle() {
		setOpen((prev) => !prev);
	}

	function handleClose() {
		if (window.innerWidth < 768) {
			setOpen(false);
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveLink(`#${entry.target.id}`);
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		document.querySelectorAll("section").forEach((link) => {
			observer.observe(link);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<header className="border-b border-neutral-200 bg-white fixed w-full">
			<nav className="flex min-h-16 items-center justify-between max-w-7xl mx-auto">
				<Link
					onClick={handleClose}
					href="#"
					className="px-8 font-extrabold text-2xl text-emerald-500"
				>
					{logo}
				</Link>

				<div className="max-md:absolute top-16 right-0 left-0 h-fit max-md:max-w-screen overflow-hidden">
					<div
						className={`flex flex-col left-0 max-md:w-full max-md:bg-neutral-50 md:gap-8 md:pe-8 md:flex-row transition duration-300 max-md:border max-md:border-neutral-200 ${
							open
								? "max-md:translate-x-0"
								: "max-md:translate-x-full"
						}`}
					>
						{navigation.map((item, index) => (
							<Link
								onClick={handleClose}
								key={index}
								href={`/${item.href.toLowerCase()}`}
								className={`nav-link ${activeLink === item.href ? "text-emerald-500 decoration-emerald-500" : ""}`}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>

				<button
					onClick={handleToggle}
					className="md:hidden border h-12 w-12 border-neutral-200 rounded-md flex justify-center items-center me-2 hover:bg-neutral-100 group transition duration-300 active:scale-95"
				>
					<Menu
						className="group-hover:stroke-emerald-500 transition duration-300"
						size={32}
					/>
				</button>
			</nav>
		</header>
	);
}
