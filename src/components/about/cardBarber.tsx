import Image from "next/image";
import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";

interface CardBarberProps {
    name: string;
    image: string;
    description: string;
}

export default function CardBarber({ name, image, description }: CardBarberProps) {
    return (
        <ScrollAnimation direction="right" delay={0.2}>
            <div style={{ backgroundColor: "#0d0d0d" }} className="max-w-70 rounded-xl overflow-hidden shadow-lg">
                <Image className="w-full rounded-xl" src={image} alt={name} width={300} height={200} layout="responsive" />
                <div className="p-5">
                    <div className="font-bold text-white text-xl mb-2">{name}</div>
                    <p className="text-gray-300 text-base">
                        &quot;{description}&quot;
                    </p>
                </div>
            </div>
        </ScrollAnimation>
    );
}