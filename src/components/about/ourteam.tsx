import { ScrollAnimation } from "../scrollanimation/ScrollAnimation"
import CardBarber from "./cardBarber";

export default function OurTeam() {
    return (
        <section className="bg-[url('/assets/bgOurTeam.jpg')] bg-cover bg-center min-h-screen py-20 px-8 flex justify-center items-center">
            <div className="max-w-6xl mx-auto">
                <ScrollAnimation direction="down">
                    <h2 className="text-4xl font-bold text-center mb-12">Nossos Barbeiros</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center text-center">
                    <CardBarber name="John Doe" image="/assets/card-top.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <CardBarber name="John Doe" image="/assets/card-top.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                    <CardBarber name="John Doe" image="/assets/card-top.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
                </div>
            </div>
        </section>
    );
}
