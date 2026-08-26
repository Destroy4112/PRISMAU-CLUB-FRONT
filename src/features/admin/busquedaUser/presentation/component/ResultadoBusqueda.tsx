import imagen from "@/shared/assets/img/imagen";
import { URL_BACK } from "@core/constants/endpoints";
import NoData from "@shared/components/helpers/NoData";
import LoadingComponent from "@shared/components/loading/LoadingComponent";
import { getColorStatus, traslateStatus } from "@shared/utilities/convertidores/converters";
import { FaCode, FaEnvelope, FaIdCard, FaKeyboard, FaMercury, FaPhoneAlt, FaUserCog } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import type { FieldProps, ResultadoBusquedaProps } from "../types/busquedaUser";

export default function ResultadoBusqueda({ data, loading, activo, recargar }: ResultadoBusquedaProps) {
   if (loading) return <LoadingComponent />;

   const user = data?.principal;
   const relacionado = data?.relacionado;

   const foto = user?.imagen ? `${URL_BACK}${user.imagen}` : user?.sexo === "Femenino" ? imagen.femenino : imagen.masculino;

   const estadoTraducido = user ? traslateStatus(user.estado) : "";
   const statusClasses = getColorStatus(user?.estado ?? -1);

   if (!user || !activo) {
      return <NoData mensaje="Ingrese la identificación para realizar la busqueda" />;
   }

   return (
      <div className="min-h-screen w-full">
         <div className="mx-auto flex min-h-screen w-full flex-col py-6">
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
               <div className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 lg:px-10">
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                     <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="relative shrink-0">
                           <div className="relative rounded-full bg-white p-1.5 shadow-lg">
                              <img src={foto} className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32" alt="Perfil" />
                           </div>
                           <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow" />
                        </div>

                        <div>
                           <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-700">
                              <HiSparkles className="text-sm" />
                              {data.tipo}
                           </div>

                           <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">{user.nombreCompleto}</h1>

                           <p className="mt-2 text-sm text-slate-500">
                              Código: <span className="font-semibold text-emerald-600">{user.codigo ?? "Sin Código"}</span>
                           </p>
                        </div>
                     </div>

                     <div className="flex">
                        <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] ${statusClasses}`}>
                           <span className="h-2 w-2 rounded-full bg-current" />
                           {estadoTraducido}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8 px-6 py-8 sm:px-8 lg:px-10">
                  <section>
                     <div className="mb-4 flex items-center gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Identidad</p>
                        <div className="h-px flex-1 bg-slate-200" />
                     </div>

                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <Field label="Tipo Documento" value={user.tipoDocumento} icon={FaIdCard} />
                        <Field label="Documento" value={user.documento} icon={FaIdCard} />
                        <Field label="Género" value={user.sexo} icon={FaMercury} />
                        <Field label="Rol" value={data.tipo} icon={FaUserCog} />
                     </div>
                  </section>

                  <section>
                     <div className="mb-4 flex items-center gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Contacto</p>
                        <div className="h-px flex-1 bg-slate-200" />
                     </div>

                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        <Field label="Correo Electrónico" value={user.correo} icon={FaEnvelope} full />
                        <Field label="Teléfono" value={user.telefono} icon={FaPhoneAlt} />
                        <Field label="Código Interno" value={user.codigo} icon={FaCode} />
                     </div>
                  </section>

                  {data.tipo === "FAMILIAR" && relacionado && (
                     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80">
                        <div className="border-b border-slate-200 bg-white/70 px-6 py-4">
                           <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                 <FaUserCog />
                              </div>
                              <div>
                                 <h3 className="text-sm font-bold text-slate-800">Socio vinculado</h3>
                                 <p className="text-xs text-slate-500">Relación familiar registrada en el sistema</p>
                              </div>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
                           <Field label="Nombre del Socio" value={relacionado.nombreCompleto} icon={FaKeyboard} />
                           <Field label="Documento" value={relacionado.documento} icon={FaIdCard} />
                        </div>
                     </section>
                  )}

                  <div className="flex justify-end pt-2">
                     <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-slate-900 hover:shadow-md" onClick={recargar} type="button">
                        <span>↺</span>
                        <span>Limpiar búsqueda</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function Field({ label, value, icon: Icon, full = false }: FieldProps) {
   return (
      <div className={`group rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md ${full ? "md:col-span-2 xl:col-span-3" : ""}`}>
         <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            {Icon && <Icon className="text-amber-500" />}
            <span>{label}</span>
         </div>
         <div className="truncate text-sm font-semibold text-slate-800" title={value ?? "—"}>
            {value ?? "—"}
         </div>
      </div>
   );
}
