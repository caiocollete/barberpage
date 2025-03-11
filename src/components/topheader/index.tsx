import { MapPin, Phone } from "@deemlol/next-icons";

export default function TopHeader() {
  return (
    <div style={{ backgroundColor: "#0d0d0d" }} className="flex justify-between items-center text-white p-4 ">
      <div className="mx-6">
        <p className="text-xs">
          <strong style={{ color: "#977656" }}>WE ARE OPEN</strong> 7 DAYS ON WEEK
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a href="./" className="flex items-center gap-2">
          <MapPin size={16} color="#977656" />
          <p className="text-xs">Adress</p>
        </a>
        <a href="./" className="flex items-center gap-2">
          <Phone size={16} color="#977656" />
          <p className="text-xs">Number</p>
        </a>
      </div>
    </div>
  );
}
