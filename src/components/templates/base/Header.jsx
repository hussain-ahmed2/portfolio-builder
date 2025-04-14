"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "Templates", href: "#templates" },
	{ name: "About Us", href: "#about-us" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(prev => !prev);
    }

    function handleClose() {
        setIsMenuOpen(false);
    }

	return (
		<header className="bg-emerald-950">
			<nav className="flex items-center justify-between max-w-6xl mx-auto min-h-16">
				<Link className="logo" href="/">
					<span className="text-emerald-500">Portfolio</span>
					&nbsp;
					<span className="text-neutral-500">Builder</span>
				</Link>

				<div
					className={`flex gap-8 md:mx-5 max-md:absolute top-16 right-0 max-md:bg-emerald-900 max-md:flex-col max-md:gap-0 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-md:w-full" : "max-md:w-0"}`}
				>
					{navLinks.map((link) => (
						<Link
							className="text-nowrap hover:underline decoration-1 text-neutral-400 hover:text-emerald-400 active:text-emerald-400 max-md:px-5 max-md:py-3 max-md:hover:bg-emerald-800 max-md:active:bg-emerald-800"
							key={link.name}
							href={link.href}
                            onClick={handleClose}
						>
							{link.name}
						</Link>
					))}
				</div>

				<button
					onClick={toggleMenu}
					className="border border-emerald-900 p-2 rounded-md hover:bg-emerald-900 active:bg-emerald-900 me-5 transition-colors md:hidden"
				>
					<Menu className="text-neutral-300" size={32} />
				</button>
			</nav>
		</header>
	);
}
