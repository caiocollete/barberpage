"use client"

import { ArrowLeft } from "@deemlol/next-icons";
import { ArrowRight } from "@deemlol/next-icons";

import { useState } from "react";

export default function Carrousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <img 
                src={images[currentIndex]} 
                alt={`Imagem ${currentIndex + 1}`} 
                className="w-full h-auto object-cover rounded-lg"
            />

            {/* Botões de navegação */}
            <button 
                onClick={prevImage} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full"
            >
                <ArrowLeft size={24} color="#FFFFFF" />
            </button>

            <button 
                onClick={nextImage} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full"
            >
                <ArrowRight size={24} color="#FFFFFF" />
            </button>
        </div>
    );
}
