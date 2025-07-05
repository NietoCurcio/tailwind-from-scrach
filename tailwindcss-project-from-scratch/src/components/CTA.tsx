export function CTA() {
    return (
        <section id="cta" className="bg-brightRed">
            {/* Flex Container */}
            <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                {/* Heading */}
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                    Simplify how your teams works today
                </h2>
                {/* Button */}
                <div>
                    <a
                        href="#"
                        className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full align-middle hover:bg-gray-800"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}
