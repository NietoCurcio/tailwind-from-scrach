const testimonials = [
    {
        img: "img/avatar-anisha.png",
        name: "Anisha Li",
        text: "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
        img: "img/avatar-ali.png",
        name: "Ali Bravo",
        text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
        img: "img/avatar-richard.png",
        name: "Richard Watts",
        text: "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    What's Different About Manage?
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${
                                index === 0 ? "flex" : "hidden md:flex"
                            } flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3`}
                        >
                            <img
                                src={testimonial.img}
                                alt=""
                                className="w-16 -mt-14"
                            />
                            <h5 className="text-lg-font-bold">
                                {testimonial.name}
                            </h5>
                            <p className="text-sm text-darkGrayishBlue">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="my-16">
                    <a
                        href="#"
                        className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}
