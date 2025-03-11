import HEADER from "../header";
import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";

export default function Hero() {
    return (
        <section className="bg-[url('/assets/herobg.jpg')] bg-cover bg-center h-screen w-screen bg-radial-gradient">
            <HEADER/>
            <div className="flex flex-col justify-start h-screen mx-10 my-30">
                <ScrollAnimation direction="down" delay={0.2}>
                    <h1 className="text-6xl"><strong>BarberShop</strong></h1>
                </ScrollAnimation>
                
                <ScrollAnimation direction="left" delay={0.4}>
                    <h2 className="text-3xl mt-4">Expert Barbers and haircuts</h2>
                </ScrollAnimation>
                
                <ScrollAnimation direction="up" delay={0.6}>
                    <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Suscipit voluptates non at enim minus animi, assumenda cupiditate fuga incidunt <br/>consectetur eveniet quos, ut nemo nesciunt quisquam porro illum magni voluptas.</p>
                </ScrollAnimation>
            </div>
        </section>
    );
}