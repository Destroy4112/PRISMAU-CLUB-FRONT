import { CalendarDays, Clock3 } from "lucide-react";
import type { DisponibilidadForm } from "../types/disponibilidad";

interface Props {
   disponibilidades: DisponibilidadForm[];
   disabled?: boolean;
   onToggleDia: (dia: DisponibilidadForm["dia"], activo: boolean,) => void;
   onChangeHora: (dia: DisponibilidadForm["dia"], campo: "inicio" | "fin", valor: string,) => void;
}

export default function FormDisponibilidad({ disponibilidades, disabled = false, onToggleDia, onChangeHora, }: Props) {
   return (
      <div className="space-y-3">
         {disponibilidades.map((disponibilidad) => {
            const horarioInvalido = Boolean(disponibilidad.activo && disponibilidad.inicio && disponibilidad.fin && disponibilidad.inicio >= disponibilidad.fin);

            return (
               <article key={disponibilidad.dia} className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${disponibilidad.activo ? "border-slate-200 shadow-sm" : "border-slate-200/70"}`}>
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                     <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${disponibilidad.activo ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400"}`}>
                           <CalendarDays className="h-4 w-4" />
                        </div>

                        <div>
                           <h3 className="font-semibold text-slate-800">
                              {disponibilidad.dia}
                           </h3>

                           <p className="mt-0.5 text-xs text-slate-400">
                              {disponibilidad.activo ? "Disponible" : "No disponible"}
                           </p>
                        </div>
                     </div>

                     <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={disponibilidad.activo} disabled={disabled} className="peer sr-only"
                           onChange={(event) => onToggleDia(disponibilidad.dia, event.target.checked)} />

                        <div className="h-6 w-11 rounded-full bg-slate-200 transition-colors peer-checked:bg-slate-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-60 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform after:content-[''] peer-checked:after:translate-x-5" />
                     </label>
                  </div>

                  {disponibilidad.activo && (
                     <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4">
                        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
                           <TimeField label="Desde" value={disponibilidad.inicio} disabled={disabled} error={horarioInvalido}
                              onChange={(valor) => onChangeHora(disponibilidad.dia, "inicio", valor,)} />

                           <span className="hidden pb-3 text-sm text-slate-400 sm:block">
                              hasta
                           </span>

                           <TimeField label="Hasta" value={disponibilidad.fin} disabled={disabled} error={horarioInvalido}
                              onChange={(valor) => onChangeHora(disponibilidad.dia, "fin", valor,)} />
                        </div>

                        {horarioInvalido && (
                           <p className="mt-3 text-xs font-medium text-red-500">
                              La hora final debe ser posterior a la
                              hora inicial.
                           </p>
                        )}
                     </div>
                  )}
               </article>
            );
         })}
      </div>
   );
}

interface TimeFieldProps {
   label: string;
   value: string;
   disabled?: boolean;
   error: boolean;
   onChange: (valor: string) => void;
}

function TimeField({ label, value, disabled = false, error = false, onChange, }: TimeFieldProps) {
   return (
      <div>
         <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {label}
         </label>

         <div className="relative">
            <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input type="time" value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)}
               className={`
                        w-full rounded-xl border bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100
                        ${error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-slate-400 focus:ring-slate-100"}
                    `}
            />
         </div>
      </div>
   );
}