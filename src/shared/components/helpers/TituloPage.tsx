import { colorStyles } from '@shared/utilities/convertidores/converters';
import { Plus } from 'lucide-react';
import type { ReactNode } from 'react';
import ExportExcel from '../excel/ExportExcel';

interface BaseProps {
   icono: ReactNode;
   color: "green" | "purple" | "pink" | "red" | "yellow";
   titulo: string;
   subtitulo?: string;
   canCreate?: boolean;
   label?: string;
   accion?: () => void;
};

type PropsWithExport<T extends object> = BaseProps & {
   canExport: true;
   data: T[];
};

type PropsWithoutExport = BaseProps & {
   canExport?: false;
   data?: never;
};

type Props<T extends object> = PropsWithExport<T> | PropsWithoutExport;

export default function TituloPage<T extends object>(props: Props<T>) {

   const { icono, color, titulo, subtitulo, canCreate, label, canExport, data, accion } = props;

   return (
      <header className="sticky top-15 z-20 mb-6 border-b border-slate-200 px-1 py-4 bg-white">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
               <div className={`flex ${colorStyles[color]} h-11 w-11 shrink-0 items-center justify-center rounded-xl`}>
                  {icono}
               </div>

               <div className="min-w-0">
                  <h1 className="truncate text-lg font-semibold tracking-tight text-slate-900">
                     {titulo}
                  </h1>

                  {subtitulo && (
                     <p className="max-w-2xl text-sm text-slate-500">
                        {subtitulo}
                     </p>
                  )}
               </div>
            </div>

            {canCreate ? (
               <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button onClick={accion} type="button"
                     className={`inline-flex items-center px-4 py-1 text-sm font-medium text-white bg-blue-600 border border-blue-600 
                                ${canExport ? 'rounded-s-lg' : 'rounded-lg'} hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:z-10 focus:ring-2`}
                  >
                     <Plus className="me-2 w-4" />
                     {label}
                  </button>
                  {canExport && (
                     <ExportExcel<T> data={data} fileName={titulo} canCreate={canCreate} />
                  )}
               </div>
            ) : (
               <div />
            )}
         </div>
      </header>
   );
}
