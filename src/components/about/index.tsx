import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";

export default function About() {
    return (
        <section id="about" className="bg-[#0d0d0d] min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <ScrollAnimation direction="down">
                    <h2 className="text-4xl font-bold text-center mb-12">About Our Barbershop</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimation direction="right" delay={0.2}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Professional Service Since 2000</h3>
                            <p className="text-gray-300">
                                We pride ourselves on providing the highest quality grooming services in a comfortable
                                and welcoming environment. Our skilled barbers are dedicated to helping you look and
                                feel your best.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Expert Barbers
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Premium Products
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Relaxing Environment
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="left" delay={0.4}>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <img
                                src="/assets/herobg.jpg"
                                alt="Barbershop Interior"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}