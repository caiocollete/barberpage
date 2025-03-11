import { ScrollAnimation } from "../scrollanimation/ScrollAnimation";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto p-6">
      <ScrollAnimation direction="down">
        <h2 className="text-2xl font-semibold text-center mb-6">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Google Maps */}
          <div>
            <ScrollAnimation direction="right">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.1647170978017!2d-51.844179518408744!3d-21.871732043897016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9491654a73f4916d%3A0x585686521b68243f!2sBarbearia%20Guimar%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1741702444632!5m2!1spt-BR!2sbr"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation direction="left">
            <div className="flex flex-col gap-4">
                <a href="https://wa.me/5518991436385">+55 (18) 99143-6385</a>
                <a href="https://www.google.com/maps/place/Prudente+de+Moraes,+273+-+Centro,+Pres.+Venceslau+-+SP,+19400-000/@-21.871732, -51.8441795, 17z/data=!3m1!4b1!4m6!3m5!1s0x9491654a73f4916d:0x585686521b68243f!8m2!3d-21.871732!4d-51.8419908!16s%2Fg%2F11c50y_000">Prudente de Moraes, 273 - Sala 4 - Centro, Pres. Venceslau - SP, 19400-000</a>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </section>
  );
}
