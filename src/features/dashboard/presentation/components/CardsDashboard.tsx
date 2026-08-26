import LoadingComponent from "@shared/components/loading/LoadingComponent";
import type { CardsDashboardProps } from "../types/dashboard";

export default function CardsDashboard({ cards, loading }: CardsDashboardProps) {

   if (loading) return <LoadingComponent />;

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
         {cards?.map((card) => {

            return (
               <div key={card.texto} className="group relative overflow-hidden bg-slate-50 border border-slate-200 rounded-md shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:shadow-[0_6px_18px_rgba(15,23,42,0.10)] hover:-translate-y-px transition-all duration-200">

                  <div className="p-4">
                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center justify-center" aria-hidden="true">
                           {card.icono}
                        </div>

                        <div className="min-w-0 text-right">
                           <div className={["text-2xl font-semibold leading-none", `text-${card.color}`].join(" ")}>
                              {card.cantidad}
                           </div>
                           <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-500 truncate">
                              {card.texto}
                           </div>
                        </div>
                     </div>

                     <div className="mt-4 h-2 w-full bg-slate-100">
                        <div className={["h-1 w-1/2", `bg-${card.color}`].join(" ")} />
                     </div>

                  </div>
               </div>
            );
         })}
      </div>
   );
}
