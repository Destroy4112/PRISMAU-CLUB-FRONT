import InputField from '@shared/components/form/InputField'
import SelectField from '@shared/components/form/SelectField'
import { METODOS_PAGO } from '@shared/constants/options/Options.model'
import { formatearMoneda } from '@shared/utilities/convertidores/normalizeText'
import { Checkbox, Label } from 'flowbite-react'
import { CheckCircle2, CreditCard, FilePlus, FileText, ReceiptText, WalletCards, X } from 'lucide-react'
import { FaMoneyBill } from 'react-icons/fa'
import type { FormCuotaBaileProps } from '../types/cuotaBaile'

export default function FormCuotaBaile({ form, archivoSeleccionado, handleChange, handleChangeFile, limpiar }: FormCuotaBaileProps) {
    if (!form.cuotaBaile) return null;

    const cuotaBaile = form.cuotaBaile;
    const valorFactura = Number(cuotaBaile.valor ?? 0);
    const totalAbonado = Number(cuotaBaile.abono ?? 0);
    const saldoPendiente = Number(cuotaBaile.restante ?? 0);
    const porcentajePagado = valorFactura > 0 ? Math.min((totalAbonado / valorFactura) * 100, 100) : 0;

    return (
        <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-100 bg-linear-to-br from-slate-50 to-white p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                                <FileText className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-wide text-slate-400">Factura pendiente</p>
                                <h3 className="mt-1 text-xl font-black text-slate-900">{cuotaBaile.descripcion}</h3>
                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                                        <FileText className="h-3.5 w-3.5" />
                                        Factura #{cuotaBaile.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-slate-950 px-5 py-3 text-right text-white shadow-sm">
                            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-300">Saldo a pagar</p>
                            <p className="mt-1 text-xl font-black">{formatearMoneda(saldoPendiente)}</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Valor factura</p>
                                    <p className="mt-1 text-lg font-black text-slate-900">{formatearMoneda(valorFactura)}</p>
                                </div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-200 text-slate-700">
                                    <ReceiptText className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-500">Total abonado</p>
                                    <p className="mt-1 text-lg font-black text-emerald-700">{totalAbonado > 0 ? formatearMoneda(totalAbonado) : "-"}</p>
                                </div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                                    <CreditCard className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-rose-400">Pendiente</p>
                                    <p className="mt-1 text-lg font-black text-rose-600">{formatearMoneda(saldoPendiente)}</p>
                                </div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                                    <WalletCards className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                            <span>Progreso abonado</span>
                            <span>{Math.round(porcentajePagado)}%</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${porcentajePagado}%` }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-5">
                <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField label="Metodo de pago" name='metodoPago' required id="metodoPago" items={METODOS_PAGO}
                        handleChange={handleChange} value={form.metodoPago} />
                    <InputField label="Referecia" name='referenciaPago' type='text' icon={FaMoneyBill} id="referencia"
                        value={form.referenciaPago} handleChange={handleChange} placeholder='Escribe la referencia...' />
                </div>
                <div className="w-full space-y-2">
                    <label className="block text-sm font-semibold text-slate-900">
                        Soporte de pago
                    </label>

                    <label className={`group flex cursor-pointer items-center gap-4 rounded-3xl border border-dashed px-5 py-4 transition ${archivoSeleccionado
                        ? 'border-emerald-300 bg-emerald-50' : 'border-slate-300 bg-slate-50 hover:border-emerald-400 hover:bg-white'}`}
                    >
                        <div className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-sm ${archivoSeleccionado
                            ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-emerald-600'}`}
                        >
                            {archivoSeleccionado ? (
                                <CheckCircle2 className="h-7 w-7" />
                            ) : (
                                <FilePlus className="h-6 w-6" />
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            {archivoSeleccionado ? (
                                <>
                                    <p className="truncate text-sm font-bold text-emerald-800">
                                        {archivoSeleccionado.name}
                                    </p>
                                    <p className="text-xs text-emerald-700">
                                        Archivo seleccionado correctamente
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-sm font-bold text-slate-900">
                                        Seleccionar soporte
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Formatos soportados: .jpg, .jpeg, .png, .pdf
                                    </p>
                                </>
                            )}
                        </div>

                        <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" onChange={handleChangeFile} />
                    </label>

                    {archivoSeleccionado && (
                        <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-white px-4 py-3">
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-slate-800">
                                    {archivoSeleccionado.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {(archivoSeleccionado.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>

                            <button type="button" onClick={limpiar} title="Quitar archivo"
                                className="rounded-xl p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex gap-4">
                        <div className="flex h-8 items-center">
                            <Checkbox id="valorDiferente" name="valorDiferente" checked={form.valorDiferente} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="valorDiferente">
                                ¿Pagar un valor diferente?
                            </Label>
                            <span className="text-xs font-normal leading-5 text-slate-500">
                                Marca esta opción si deseas registrar un monto diferente.
                                Cualquier valor adicional se abonará automáticamente a la siguiente cuotaBaile.
                            </span>
                        </div>
                    </div>

                    {form.valorDiferente && (
                        <div className="mt-4">
                            <InputField label="Valor a pagar" name="valor" type="number" icon={FaMoneyBill} id="valor"
                                value={form.valor} handleChange={handleChange} placeholder="Escribe el valor..."
                            />
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}