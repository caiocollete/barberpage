import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";
import Carrousel from "../carrousel/carrousel";

export default function RelaxEnv() {
    return (
        <section className="bg-[url('/assets/bgOurTeam.jpg')] min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="down">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Ambiente relaxante</h2>
          </ScrollAnimation>
  
            {/* Imagem do ambiente da barbearia */}
            <div className="flex justify-center items-center">
              <ScrollAnimation direction="right" className="flex justify-center items-center">
                  <Carrousel images={["/assets/barbearia1.jpg", "/assets/barbearia2.jpg"]} width={1000} height={900}/>
              </ScrollAnimation>
            </div>
        </div>
      </section>
    )
}