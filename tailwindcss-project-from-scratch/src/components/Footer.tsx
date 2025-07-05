const socialLinks = [
    { href: "#", src: "img/icon-facebook.svg", alt: "Facebook" },
    { href: "#", src: "img/icon-youtube.svg", alt: "YouTube" },
    { href: "#", src: "img/icon-twitter.svg", alt: "Twitter" },
    { href: "#", src: "img/icon-pinterest.svg", alt: "Pinterest" },
    { href: "#", src: "img/icon-instagram.svg", alt: "Instagram" },
];

export function Footer() {
    return (
        <footer className="bg-veryDarkBlue">
            {/* Flex Container */}
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* Logo and Social Links container */}
                <div className="flex flex-col-reverse items-center justify-between space-y-12 space-y-reverse md:flex-col md:space-y-0 md:items-start">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    {/* Logo */}
                    <div>
                        <img src="img/logo-white.svg" alt="" className="h-8" />
                    </div>
                    {/* Social Links Container */}
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((link) => (
                            <a href={link.href} key={link.src}>
                                <img
                                    src={link.src}
                                    alt={link.alt}
                                    className="h-8"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                {/* List Container */}

                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">
                            Home
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Pricing
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Products
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            About
                        </a>
                    </div>

                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">
                            Careers
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Community
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input
                                type="text"
                                className="bg-white flex-1 px-4 rounded-full focus:outline-none"
                                placeholder="Updated in your inbox"
                            />
                            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2025. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
