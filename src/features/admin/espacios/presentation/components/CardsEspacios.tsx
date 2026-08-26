import BadgeStatus from "@shared/components/badges/BadgeStatus";
import Pagination from "@shared/components/dataTable/components/Pagination";
import CardSkeleton from "@shared/components/skeletons/CardSkeleton";
import { Dropdown, DropdownItem } from "flowbite-react";
import { CalendarClock, Edit, EllipsisVertical, ImageOff, Trash2 } from "lucide-react";

import NoData from "@shared/components/helpers/NoData";
import type { CardsEspaciosProps } from "../types/espacio";

export default function CardsEspacios({ espacios, loading, limit, page, total, onPageChange, onRowsPerPageChange, cargar, handleDelete, disponibilidad }: CardsEspaciosProps) {
   if (loading) {
      return (
         <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
               <CardSkeleton key={index} />
            ))}
         </div>
      );
   }

   if (!loading && espacios.length === 0) return <NoData mensaje="No se encontraron espacios" />

   return (
      <section className="space-y-6">
         <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {espacios.map((espacio) => (
               <article key={espacio.id} className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                     {espacio.imagePreview ? (
                        <img src={espacio.imagePreview} alt={`Imagen de ${espacio.descripcion}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                     ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
                           <ImageOff className="h-9 w-9" />
                           <span className="text-sm font-medium">
                              Sin imagen disponible
                           </span>
                        </div>
                     )}

                     <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/55 via-slate-900/5 to-transparent" />

                     <div className="absolute left-4 top-4">
                        <BadgeStatus status={espacio.estado} />
                     </div>

                     <div className="absolute right-3 top-3">
                        <Dropdown inline arrowIcon={false} placement="bottom-end"
                           label={
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-slate-600 shadow-sm backdrop-blur-md transition hover:bg-white hover:text-slate-900" aria-label="Abrir acciones">
                                 <EllipsisVertical className="h-5 w-5" />
                              </span>
                           }
                        >
                           <DropdownItem icon={Edit} onClick={() => cargar(espacio)}>
                              Editar
                           </DropdownItem>
                           <DropdownItem icon={Trash2} onClick={() => handleDelete(espacio.id)} className="text-red-600 focus:bg-red-50 focus:text-red-700">
                              Eliminar
                           </DropdownItem>
                           <DropdownItem icon={CalendarClock} onClick={() => disponibilidad(espacio)} className="text-yellow-500 focus:bg-yellow-50 focus:text-yellow-600">
                              Disponibilidad
                           </DropdownItem>
                        </Dropdown>
                     </div>
                  </div>

                  <div className="p-5">
                     <div className="flex items-start gap-3">

                        <div className="min-w-0 flex-1">
                           <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                              Espacio institucional
                           </p>

                           <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-800" title={espacio.descripcion}>
                              {espacio.descripcion}
                           </h3>
                        </div>
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
               </article>
            ))}
         </div>
         {total > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
               <Pagination limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </div>
         )}
      </section>
   );
}