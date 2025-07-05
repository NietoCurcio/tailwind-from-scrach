import { useState } from "react";

const navItems = [
    { text: "Pricing", href: "#" },
    { text: "Product", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Community", href: "#" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <img src="/img/logo.svg" alt="" />
                </div>
                {/* Desktop Navigation */}
                <div className="hidden space-x-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.text}
                            href={item.href}
                            className="hover:text-darkGrayishBlue"
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
                <a
                    href="#"
                    className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight md:block"
                >
                    Get Started
                </a>

                {/* Hamburger Icon */}
                <button
                    id="menu-btn"
                    className={`block hamburger md:hidden focus:outline-none ${
                        isMenuOpen ? "open" : ""
                    }`}
                    onClick={toggleMenu}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu - positioned relative to the nav */}
            {isMenuOpen && (
                <div
                    className="absolute left-6 right-6 flex flex-col items-center py-8 mt-10 space-y-6 font-bold bg-white drop-shadow-md md:hidden"
                    style={{ top: "4.5rem", zIndex: 999 }}
                >
                    {navItems.map((item) => (
                        <a key={item.text} href={item.href}>
                            {item.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
