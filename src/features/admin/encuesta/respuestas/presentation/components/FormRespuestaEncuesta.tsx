import { formatearFechaString } from "@shared/utilities/convertidores/normalizeText";
import { CalendarDays, ClipboardList, Mail, Phone, UserRound } from "lucide-react";
import { type ReactNode } from "react";
import type { FormRespuestaEncuestaProps } from "../types/respuesta-encuesta";

export default function FormRespuestaEncuesta({ data }: FormRespuestaEncuestaProps) {

   if (!data) return null;

   return (
      <section className="min-h-screen text-slate-900">
         <div className="mx-auto space-y-6">
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
               <div className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-sky-50 px-6 py-7 sm:px-8">
                  <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-indigo-200/50 blur-3xl" />
                  <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />

                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                     <div className="flex items-start gap-4">
                        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-linear-to-br from-indigo-600 to-sky-500 text-xl font-black text-white shadow-lg shadow-indigo-200">
                           {getInitials(data.nombre)}
                        </div>

                        <div>
                           <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
                                 {data.tipoPersona}
                              </span>
                              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                                 Respuestas registradas
                              </span>
                           </div>

                           <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                              {data.nombre}
                           </h1>
                           <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                              Detalle de respuestas asociadas a la encuesta{' '}
                           </p>
                        </div>
                     </div>

                     <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur lg:min-w-65">
                        <div className="flex items-center gap-3">
                           <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                              <ClipboardList className="h-5 w-5" />
                           </div>
                           <div>
                              <p className="text-xs font-medium text-slate-500">Total de respuestas</p>
                              <p className="text-2xl font-black text-slate-950">{data.respuestas.length}</p>
                           </div>
                        </div>
                        <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3">
                           <p className="text-xs font-medium text-slate-500">Fecha de registro</p>
                           <p className="mt-1 text-sm font-semibold text-slate-800">
                              {formatearFechaString(data.fechaRespuesta)}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="grid gap-4 border-t border-slate-200 bg-white px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                  <InfoItem icon={<UserRound className="h-4 w-4" />} label="Documento" value={data.documento} />
                  <InfoItem icon={<Phone className="h-4 w-4" />} label="Teléfono" value={data.telefono} />
                  <InfoItem icon={<Mail className="h-4 w-4" />} label="Correo" value={data.correo} />
                  <InfoItem icon={<CalendarDays className="h-4 w-4" />} label="Última respuesta" value={formatearFechaString(data.fechaRespuesta)} />
               </div>
            </div>

            <main className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

               <div className="space-y-3">
                  {data.respuestas.map((item, index) => {

                     return (
                        <article key={item.preguntaId}
                           className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-200 hover:shadow-md"
                        >
                           <div className="flex w-full items-start justify-between gap-4 p-5 text-left"                                    >
                              <div className="flex gap-4">
                                 <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-sm font-bold text-indigo-700">
                                    {index + 1}
                                 </div>
                                 <div>
                                    <h3 className="font-semibold leading-snug text-slate-950">{item.pregunta}</h3>
                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                                       {item.respuesta}
                                    </p>
                                 </div>
                              </div>
                           </div>

                        </article>
                     );
                  })}

               </div>
            </main>
         </div>
      </section>
   );
}

function InfoItem({ icon, label, value }: { icon: ReactNode, label: string, value: string }) {
   return (
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
         <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-indigo-600 shadow-sm">
            {icon}
         </div>
         <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500">{label}</p>
            <p className="truncate text-sm font-semibold text-slate-900">{value || "No registrado"}</p>
         </div>
      </div>
   );
}

function getInitials(name = "") {
   return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
}
