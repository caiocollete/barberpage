import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";

export default function About() {
    return (
        <section id="about" className="bg-[#0d0d0d] min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <ScrollAnimation direction="down">
                    <h2 className="text-4xl font-bold text-center mb-12">Sobre nossa Barbearia</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimation direction="right" delay={0.2}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Deixando homens mais confiantes desde 2000</h3>
                            <p className="text-gray-300">
                            Temos orgulho em fornecer serviços de corte de cabelo da mais alta qualidade em um ambiente confortável
                            e acolhedor. Nossos barbeiros qualificados são dedicados a ajudar você a ter uma aparência e
                            se sentir melhor.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Barbeiros experientes
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Produtos de alta qualidade
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Ambiente relaxante
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