import { formatearMoneda, formatearNumero, formatearPorcentaje } from "@shared/utilities/convertidores/normalizeText";
import { AlertTriangle, Banknote, CircleDollarSign, Clock3, ReceiptText, WalletCards } from "lucide-react";
import type { EstadisticasFinanza } from "../types/finanza";

interface Props {
   isLoading: boolean;
   isError: boolean;
   estadisticas: EstadisticasFinanza | null;
   refetch: () => void;
}

export default function DashboardPagos({ isLoading, isError, estadisticas, refetch }: Props) {

   if (isLoading) return <FinanzaSkeleton />;

   if (isError || !estadisticas) {
      return (
         <div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border border-rose-200 bg-rose-50 p-8 text-center">
            <AlertTriangle className="mb-3 h-10 w-10 text-rose-600" />
            <h2 className="text-lg font-bold text-rose-950">No fue posible cargar las estadísticas</h2>
            <p className="mt-1 text-sm text-rose-700">Ocurrió un problema al consultar la información financiera.</p>
            <button type="button" onClick={() => refetch()} className="mt-5 rounded-xl bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-800">Intentar nuevamente</button>
         </div>
      );
   }

   const tarjetas = [
      {
         titulo: "Ingresos recibidos",
         valor: formatearMoneda(estadisticas.ingresos.total),
         descripcion: `${formatearPorcentaje(estadisticas.porcentajeRecaudo)} de recaudo`,
         icono: Banknote,
         clases: "bg-emerald-50 text-emerald-600",
      },
      {
         titulo: "Cartera pendiente",
         valor: formatearMoneda(estadisticas.totalPendiente),
         descripcion: `${formatearNumero(estadisticas.registrosPendientes)} registros`,
         icono: Clock3,
         clases: "bg-amber-50 text-amber-600",
      },
      {
         titulo: "Cartera consolidada",
         valor: formatearMoneda(estadisticas.carteraTotal),
         descripcion: "Valor total esperado",
         icono: CircleDollarSign,
         clases: "bg-blue-50 text-blue-600",
      },
   ];

   return (
      <section className="min-h-screen my-8">
         <div className="mx-auto max-w-7xl space-y-6">
            <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
               <div>
                  <div className="mb-3 flex items-center gap-3">
                     <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                        <WalletCards className="h-5 w-5" />
                     </span>
                     <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                        Rendimiento general
                     </span>
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                     Progreso de cartera
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                     Comparación entre los pagos recibidos y la cartera consolidada del sistema.
                  </p>
               </div>

               <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Nivel de recaudo</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{formatearPorcentaje(estadisticas.porcentajeRecaudo)}</p>
               </div>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {tarjetas.map(({ titulo, valor, descripcion, icono: Icono, clases }) => (
                  <article key={titulo} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                     <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${clases}`}>
                        <Icono className="h-5 w-5" />
                     </span>
                     <p className="mt-5 text-sm font-medium text-slate-500">{titulo}</p>
                     <p className="mt-1 wrap-break-word text-2xl font-bold tracking-tight text-slate-900">{valor}</p>
                     <p className="mt-2 text-xs text-slate-400">{descripcion}</p>
                  </article>
               ))}
            </div>

            <article className="overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
               <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                     <p className="text-sm font-medium text-slate-400">Progreso general</p>
                     <h2 className="mt-1 text-xl font-bold">Recaudo de cartera</h2>
                     <p className="mt-2 text-sm text-slate-400">Comparación entre los ingresos recibidos y el valor total esperado.</p>
                  </div>
                  <p className="text-4xl font-bold">{formatearPorcentaje(estadisticas.porcentajeRecaudo)}</p>
               </div>

               <div className="mt-7 h-4 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-emerald-400 transition-all duration-700" style={{ width: `${Math.min(estadisticas.porcentajeRecaudo, 100)}%` }} />
               </div>

               <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <ResumenOscuro titulo="Recaudado" valor={formatearMoneda(estadisticas.ingresos.total)} />
                  <ResumenOscuro titulo="Pendiente" valor={formatearMoneda(estadisticas.totalPendiente)} />
                  <ResumenOscuro titulo="Total esperado" valor={formatearMoneda(estadisticas.carteraTotal)} />
               </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-2">
               {estadisticas.conceptos.map((concepto) => (
                  <ConceptoPago key={concepto.id} {...concepto} />
               ))}
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center">
               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <AlertTriangle className="h-5 w-5" />
               </span>
               <div>
                  <h3 className="font-bold text-amber-950">Cartera pendiente por gestionar</h3>
                  <p className="mt-1 text-sm leading-6 text-amber-800">Existen <strong>{formatearNumero(estadisticas.registrosPendientes)} registros pendientes</strong>, por un valor total de <strong>{formatearMoneda(estadisticas.totalPendiente)}</strong>.</p>
               </div>
            </div>
         </div>
      </section>
   );
}

function ResumenOscuro({ titulo, valor }: { titulo: string; valor: string }) {
   return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
         <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{titulo}</p>
         <p className="mt-2 wrap-break-word text-lg font-semibold text-white">{valor}</p>
      </div>
   );
}

interface ConceptoPagoProps {
   nombre: string;
   descripcion: string;
   recaudado: number;
   pendiente: number;
   registros: number;
   promedioPendiente: number;
   porcentaje: number;
}

function ConceptoPago({ nombre, descripcion, recaudado, pendiente, registros, promedioPendiente, porcentaje }: ConceptoPagoProps) {
   return (
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
         <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                  <ReceiptText className="h-5 w-5" />
               </span>
               <div>
                  <h2 className="text-lg font-bold text-slate-900">{nombre}</h2>
                  <p className="mt-1 text-sm text-slate-500">{descripcion}</p>
               </div>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{formatearPorcentaje(porcentaje)}</span>
         </div>

         <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-emerald-500 transition-all duration-700" style={{ width: `${Math.min(porcentaje, 100)}%` }} />
         </div>

         <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <DatoConcepto titulo="Recaudado" valor={formatearMoneda(recaudado)} />
            <DatoConcepto titulo="Pendiente" valor={formatearMoneda(pendiente)} />
            <DatoConcepto titulo="Registros pendientes" valor={formatearNumero(registros)} />
            <DatoConcepto titulo="Promedio pendiente" valor={formatearMoneda(promedioPendiente)} />
         </div>
      </article>
   );
}

function DatoConcepto({ titulo, valor }: { titulo: string; valor: string }) {
   return (
      <div className="rounded-2xl bg-slate-50 p-4">
         <p className="text-xs font-medium text-slate-500">{titulo}</p>
         <p className="mt-2 wrap-break-word text-base font-bold text-slate-900">{valor}</p>
      </div>
   );
}

function FinanzaSkeleton() {
   return (
      <div className="min-h-screen animate-pulse bg-slate-50 p-4 sm:p-6 lg:p-8">
         <div className="mx-auto max-w-7xl space-y-6">
            <div className="h-40 rounded-3xl bg-slate-200" />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               <div className="h-44 rounded-3xl bg-slate-200" />
               <div className="h-44 rounded-3xl bg-slate-200" />
               <div className="h-44 rounded-3xl bg-slate-200" />
            </div>
            <div className="h-72 rounded-3xl bg-slate-300" />
         </div>
      </div>
   );
}