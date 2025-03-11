import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";
import Carrousel from "../carrousel/carrousel";

export default function Products() {
  return (
    <section className="bg-[#0d0d0d] min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation direction="down">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Produtos de alta qualidade</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informação sobre a Don Alcides */}
          <div className="flex flex-col justify-center text-white">
            <ScrollAnimation direction="left">
              <h3 className="text-3xl font-bold mb-4">Don Alcides</h3>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.2}>
              <p className="mb-4">
                A Don Alcides é uma marca brasileira dedicada ao público masculino, oferecendo uma ampla gama de produtos de alta qualidade para cuidados pessoais. Seu portfólio inclui itens para barba, cabelo, corpo e aromaterapia, todos desenvolvidos com foco na excelência e na satisfação do cliente. 
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.4}>
              <p className="mb-4">
                Entre os produtos de destaque estão o Balm para Barba, Óleo para Barba, Shampoo Premium para Barba e Fator de Crescimento para Barba, que auxiliam no cuidado e manutenção dos pelos faciais. Além disso, a marca oferece uma linha completa de produtos para cabelo, como pomadas, shampoos e condicionadores, bem como itens para cuidados com o corpo e aromaterapia. 
              </p>
            </ScrollAnimation>
          </div>

          {/* Imagem do produto */}
          <div className="flex justify-center items-center">
            <ScrollAnimation direction="right" className="flex justify-center items-center">
                <Carrousel images={["/assets/donalcidesBeneficios.jpg", "/assets/donalcidesLemon.jpg"]} width={500} height={400}/>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
