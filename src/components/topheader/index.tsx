import { MapPin, Phone } from "@deemlol/next-icons";

export default function TopHeader() {
  return (
    <div style={{ backgroundColor: "#0d0d0d" }} className="flex justify-between items-center text-white p-4 ">
      <div className="mx-6">
        <p className="text-xs">
          <strong style={{ color: "#977656" }}>ESTAMOS ABERTOS</strong> 7 DIAS NA SEMANA
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://www.google.com/maps/place/Prudente+de+Moraes,+273+-+Centro,+Pres.+Venceslau+-+SP,+19400-000/@-21.871732, -51.8441795, 17z/data=!3m1!4b1!4m6!3m5!1s0x9491654a73f4916d:0x585686521b68243f!8m2!3d-21.871732!4d-51.8419908!16s%2Fg%2F11c50y_000" className="flex items-center gap-2">
          <MapPin size={16} color="#977656" />
          <p className="text-xs">Prudente de Moraes, 273</p>
        </a>
        <a href="https://wa.me/5518991436385" className="flex items-center gap-2">
          <Phone size={16} color="#977656" />
          <p className="text-xs">+55 (18) 99143-6385</p>
        </a>
      </div>
    </div>
  );
}
