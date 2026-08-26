import { FaBasketballBall, FaDumbbell, FaFutbol, FaPaintBrush } from "react-icons/fa";
import { GiDiceSixFacesFive, GiGolfFlag, GiHotSpices, GiMusicalNotes, GiSwimfins, GiTennisRacket } from "react-icons/gi";
import { MdSportsBaseball, MdSportsVolleyball } from "react-icons/md";

function Hobbies() {

   const hobbies = [
      { id: 1, descripcion: "Fútbol", icon: FaFutbol, color: "bg-emerald-100 hover:bg-emerald-200", textColor: "text-emerald-700" },
      { id: 2, descripcion: "Básquetbol", icon: FaBasketballBall, color: "bg-orange-100 hover:bg-orange-200", textColor: "text-orange-700" },
      { id: 3, descripcion: "Gimnasio", icon: FaDumbbell, color: "bg-red-100 hover:bg-red-200", textColor: "text-red-700" },
      { id: 4, descripcion: "Golf", icon: GiGolfFlag, color: "bg-green-100 hover:bg-green-200", textColor: "text-green-700" },
      { id: 5, descripcion: "Danzas", icon: GiMusicalNotes, color: "bg-purple-100 hover:bg-purple-200", textColor: "text-purple-700" },
      { id: 6, descripcion: "Vóleibol", icon: MdSportsVolleyball, color: "bg-blue-100 hover:bg-blue-200", textColor: "text-blue-700" },
      { id: 7, descripcion: "Pintura", icon: FaPaintBrush, color: "bg-pink-100 hover:bg-pink-200", textColor: "text-pink-700" },
      { id: 8, descripcion: "Juegos de mesa", icon: GiDiceSixFacesFive, color: "bg-amber-100 hover:bg-amber-200", textColor: "text-amber-700" },
      { id: 9, descripcion: "Sauna", icon: GiHotSpices, color: "bg-rose-100 hover:bg-rose-200", textColor: "text-rose-700" },
      { id: 10, descripcion: "Natación", icon: GiSwimfins, color: "bg-cyan-100 hover:bg-cyan-200", textColor: "text-cyan-700" },
      { id: 11, descripcion: "Tenis", icon: GiTennisRacket, color: "bg-yellow-100 hover:bg-yellow-200", textColor: "text-yellow-700" },
      { id: 12, descripcion: "Softbol", icon: MdSportsBaseball, color: "bg-lime-100 hover:bg-lime-200", textColor: "text-lime-700" },
   ];

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         {hobbies.map((hobby) => {
            const Icon = hobby.icon
            return (
               <div key={hobby.id} className={`rounded-xl p-4 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 ${hobby.color}`}>
                  <div className={`p-2 rounded-lg ${hobby.textColor} bg-white/80`}>
                     <Icon className="h-5 w-5" />
                  </div>
                  <span className={`font-medium ${hobby.textColor}`}>{hobby.descripcion}</span>
               </div>
            )
         })}
      </div>
   );
}

export default Hobbies;
