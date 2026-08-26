import { formatearMoneda } from '@shared/utilities/convertidores/normalizeText';
import { AlertTriangle, CheckCircle2, FileCheck2, ReceiptText, Wallet, X } from 'lucide-react';
import type { InfoPagoMensualidadProps } from '../types/mensualidad';

export default function InfoPagoMensualidad({ pago, closeModal }: InfoPagoMensualidadProps) {
   const tieneMontoRestante = pago.montoRestante > 0;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
         <div className="relative w-full max-w-5xl overflow-hidden rounded-4xl bg-white shadow-2xl">

            {/* Header */}
            <div className="relative overflow-hidden bg-linear-to-r from-emerald-600 via-green-600 to-teal-600 px-7 py-6 text-white">
               <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-white/10" />
               <div className="absolute bottom-0 left-16 h-20 w-20 translate-y-10 rounded-full bg-white/10" />

               <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-5 top-5 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25"
                  aria-label="Cerrar modal"
               >
                  <X size={20} />
               </button>

               <div className="relative flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 shadow-lg">
                     <CheckCircle2 size={34} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold tracking-tight">
                        Pago procesado correctamente
                     </h2>
                     <p className="mt-1 max-w-2xl text-sm text-green-50">
                        El pago fue registrado y aplicado a las mensualidades correspondientes.
                     </p>
                  </div>
               </div>
            </div>

            <div className="max-h-[80vh] overflow-y-auto px-7 py-6">

               {/* Resumen */}
               <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                     <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                           <Wallet size={22} />
                        </div>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                           Recibido
                        </span>
                     </div>

                     <p className="text-sm font-medium text-slate-500">Monto pagado</p>
                     <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {formatearMoneda(pago.montoPagado)}
                     </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                     <div className="mb-3 flex items-center justify-between">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tieneMontoRestante
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-slate-200 text-slate-700'
                           }`}>
                           <AlertTriangle size={22} />
                        </div>

                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tieneMontoRestante
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-slate-200 text-slate-600'
                           }`}>
                           {tieneMontoRestante ? 'Pendiente de aplicar' : 'Sin restante'}
                        </span>
                     </div>

                     <p className="text-sm font-medium text-slate-500">Monto restante</p>
                     <p className={`mt-1 text-2xl font-extrabold ${tieneMontoRestante ? 'text-yellow-700' : 'text-slate-900'
                        }`}>
                        {formatearMoneda(pago.montoRestante)}
                     </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                     <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                           <FileCheck2 size={22} />
                        </div>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                           Aplicadas
                        </span>
                     </div>

                     <p className="text-sm font-medium text-slate-500">Facturas afectadas</p>
                     <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {pago.pagos.length}
                     </p>
                  </div>
               </div>

               {/* Alerta monto restante */}
               {tieneMontoRestante && (
                  <div className="mb-6 flex gap-3 rounded-3xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                     <div className="mt-0.5">
                        <AlertTriangle size={20} />
                     </div>
                     <div>
                        <p className="font-semibold">
                           Hay un monto sin aplicar
                        </p>
                        <p className="mt-1">
                           El pago tiene un monto restante de{' '}
                           <strong>{formatearMoneda(pago.montoRestante)}</strong>.
                           Este valor no fue aplicado porque no había más mensualidades pendientes.
                        </p>
                     </div>
                  </div>
               )}

               {/* Detalle */}
               <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                     <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                           <ReceiptText size={21} />
                        </div>

                        <div>
                           <h3 className="font-bold text-slate-900">
                              Detalle de aplicación del pago
                           </h3>
                           <p className="text-xs text-slate-500">
                              Mensualidades afectadas por el pago registrado.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="overflow-x-auto">
                     <table className="w-full min-w-[850px] text-sm">
                        <thead>
                           <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                              <th className="px-5 py-4 text-left font-bold">Factura</th>
                              <th className="px-5 py-4 text-left font-bold">Periodo</th>
                              <th className="px-5 py-4 text-right font-bold">Saldo anterior</th>
                              <th className="px-5 py-4 text-right font-bold">Valor aplicado</th>
                              <th className="px-5 py-4 text-right font-bold">Saldo nuevo</th>
                              <th className="px-5 py-4 text-center font-bold">Estado</th>
                           </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                           {pago.pagos.map((item) => (
                              <tr
                                 key={item.mensualidadId}
                                 className="transition hover:bg-slate-50"
                              >
                                 <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                       <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                                          #
                                       </div>
                                       <span className="font-semibold text-slate-800">
                                          {item.mensualidadId}
                                       </span>
                                    </div>
                                 </td>

                                 <td className="px-5 py-4 text-slate-600">
                                    {item.fecha}
                                 </td>

                                 <td className="px-5 py-4 text-right font-medium text-slate-700">
                                    {formatearMoneda(item.saldoAnterior)}
                                 </td>

                                 <td className="px-5 py-4 text-right font-bold text-emerald-700">
                                    {formatearMoneda(item.valorAplicado)}
                                 </td>

                                 <td className="px-5 py-4 text-right font-medium text-slate-700">
                                    {formatearMoneda(item.saldoNuevo)}
                                 </td>

                                 <td className="px-5 py-4 text-center">
                                    {item.pagada ? (
                                       <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                                          <CheckCircle2 size={14} />
                                          Pagada
                                       </span>
                                    ) : (
                                       <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-bold text-yellow-700">
                                          <AlertTriangle size={14} />
                                          Abono
                                       </span>
                                    )}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>

               {/* Footer */}
               <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                     Verifica que los valores aplicados correspondan con el soporte de pago registrado.
                  </p>

                  <button
                     type="button"
                     onClick={closeModal}
                     className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
                  >
                     Aceptar y continuar
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}