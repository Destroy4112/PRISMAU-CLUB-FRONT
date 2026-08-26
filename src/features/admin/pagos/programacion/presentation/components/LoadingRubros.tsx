import Spinner from "@shared/components/spinner/Spinner";

export default function LoadingRubros() {
   return (
      <div className="flex min-h-72 items-center justify-center rounded-[28px] border border-slate-200 bg-white shadow-sm">
         <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
               <Spinner />
            </div>

            <div className="text-center">
               <p className="font-bold text-slate-900">
                  Cargando configuración
               </p>

               <p className="mt-1 text-sm text-slate-500">
                  Estamos consultando los rubros disponibles.
               </p>
            </div>
         </div>
      </div>
   )
}