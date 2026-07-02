import type { Rubro } from '@features/admin/pagos/rubros/domain/model/rubro.model';
import Spinner from '@shared/components/spinner/Spinner';
import { formatearMoneda } from '@shared/utilities/convertidores/normalizeText';
import { Label, Select, TextInput } from 'flowbite-react';
import type { ChangeEvent, ReactNode } from 'react';
import { FaCalendarAlt, FaCheck, FaFileInvoiceDollar, FaHashtag, FaLayerGroup } from 'react-icons/fa';
import type { ProgramacionForm } from '../types/programacion';
import EmptyState from './EmptyState';
import LoadingRubros from './LoadingRubros';

interface Props {
    form: ProgramacionForm;
    rubros: Rubro[];
    rubroSeleccionado?: Rubro;
    formularioCompleto: boolean;
    loading: boolean;
    loadingRubros: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: () => void;
}

export default function FormProgramacion({ form, rubros, rubroSeleccionado, formularioCompleto, loading, loadingRubros, handleChange, handleSubmit }: Props) {

    if (loadingRubros) return <LoadingRubros />;

    if (!rubros.length) return <EmptyState />;

    return (
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.3)]">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent" />

            <div className="grid xl:grid-cols-[minmax(0,1fr)_340px]">
                <section className="p-6 sm:p-8 lg:p-10">
                    <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                                Configuración
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                                Programar facturación
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Define el periodo y el concepto que se aplicará durante la generación de las facturas.
                            </p>
                        </div>

                        <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-bold ${formularioCompleto ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
                            <span className={`h-2 w-2 rounded-full ${formularioCompleto ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                            {formularioCompleto ? 'Configuración completa' : 'Pendiente por completar'}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            <FormField number="01" label="Año de facturación" completed={Boolean(form.anio)}
                                description="Periodo al que pertenecerán las facturas."
                            >
                                <TextInput id="anio" name="anio" type="number" min={2000} max={2100} inputMode="numeric" icon={FaCalendarAlt}
                                    value={form.anio ?? ''} onChange={handleChange} placeholder="Ej. 2026" required className={inputClassName} />
                            </FormField>

                            <FormField number="02" label="Concepto de facturación" description="Rubro que será utilizado para generar el cobro."
                                completed={Boolean(form.rubroId)}>
                                <Select id="rubroId" name="rubroId" icon={FaLayerGroup} value={form.rubroId ?? ''}
                                    onChange={handleChange} required className={selectClassName}
                                >
                                    <option value="" disabled>Selecciona un rubro</option>
                                    {rubros.map((rubro) => (
                                        <option key={rubro.id} value={rubro.id}>{rubro.rubro}</option>
                                    ))}
                                </Select>
                            </FormField>
                        </div>

                        {form.isCuota && (
                            <div className="border-y border-emerald-100 bg-emerald-50/40 py-6 sm:px-5">
                                <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-center">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                                            <FaHashtag />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900">
                                                Configuración de cuotas
                                            </h3>

                                            <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
                                                Indica cuántos cobros se generarán para este rubro durante el periodo.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="cuotas" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Número de cuotas
                                        </Label>
                                        <TextInput id="cuotas" name="cuotas" type="number" min={1} inputMode="numeric"
                                            icon={FaHashtag} value={form.cuotas ?? ''} onChange={handleChange}
                                            placeholder="Ej. 4" required className={inputClassName} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-10 flex flex-col gap-12 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-xl text-sm leading-6 text-slate-500">
                            Verifica los datos antes de continuar. La programación generará las facturas asociadas al rubro seleccionado.
                        </p>

                        <button type="button" disabled={loading || !formularioCompleto} onClick={handleSubmit}
                            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.8)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none disabled:hover:translate-y-0"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <Spinner />
                                </div>
                            ) : (
                                <>
                                    <FaFileInvoiceDollar />
                                    Generar
                                </>
                            )}
                        </button>
                    </div>
                </section>

                <ResumenProgramacion
                    anio={form.anio}
                    rubro={rubroSeleccionado?.rubro}
                    valorRubro={rubroSeleccionado?.valor ?? 0}
                    cantidadCuotas={form.cuotas ? Number(form.cuotas) : 0}
                    isCuota={form.isCuota}
                    formularioCompleto={formularioCompleto}
                />
            </div>
        </div>
    )
}

interface FormFieldProps {
    number: string;
    label: string;
    description: string;
    completed: boolean;
    children: ReactNode;
}

function FormField({ number, label, description, completed, children }: FormFieldProps) {
    return (
        <div>
            <div className="mb-3 flex items-start gap-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition ${completed ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' : 'bg-slate-100 text-slate-500'}`}>
                    {completed ? <FaCheck className="text-[10px]" /> : number}
                </div>

                <div className="min-w-0">
                    <Label className="block text-sm font-bold text-slate-900">
                        {label}
                    </Label>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        {description}
                    </p>
                </div>
            </div>

            <div className="sm:pl-11">
                {children}
            </div>
        </div>
    )
}

interface ResumenProgramacionProps {
    anio: string;
    rubro?: string;
    valorRubro: number;
    cantidadCuotas: number;
    isCuota: boolean;
    formularioCompleto: boolean;
}

function ResumenProgramacion({ anio, rubro, valorRubro, cantidadCuotas, isCuota, formularioCompleto }: ResumenProgramacionProps) {

    return (
        <aside className="border-t border-slate-200 bg-slate-50/70 xl:border-l xl:border-t-0">
            <div className="flex h-full flex-col p-6 sm:p-8">
                <div>
                    <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                        Resumen
                    </p>
                </div>

                <div className="mt-4 border-y border-slate-200">
                    <DetalleResumen label="Periodo" value={anio || 'Sin definir'} />
                    <DetalleResumen label="Rubro" value={rubro ?? 'Sin seleccionar'} />
                    {isCuota && (
                        <DetalleResumen label="No. cuotas" value={cantidadCuotas > 0 ? String(cantidadCuotas) : 'Sin definir'} />
                    )}
                </div>

                <div className="mt-8">
                    <p className="text-xs font-semibold text-slate-500">
                        Valor del rubro
                    </p>

                    <div className="mt-2 flex items-end justify-between gap-4">
                        <p className="text-3xl font-bold tracking-tight text-slate-950">
                            {formatearMoneda(valorRubro)}
                        </p>

                        <span className="mb-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                            COP
                        </span>
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="flex items-start gap-3 border-t border-slate-200 pt-5">
                        <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${formularioCompleto ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                            {formularioCompleto ? <FaCheck className="text-[10px]" /> : <span className="text-xs font-bold">!</span>}
                        </div>

                        <div>
                            <p className="text-sm font-bold text-slate-900">
                                {formularioCompleto ? 'Configuración completa' : 'Información pendiente'}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                {formularioCompleto ? 'La programación está lista para generar las facturas.' : 'Completa los campos requeridos para continuar.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

interface DetalleResumenProps {
    label: string;
    value: string | number;
}

function DetalleResumen({ label, value }: DetalleResumenProps) {

    return (
        <div className="grid grid-cols-[90px_minmax(0,1fr)] gap-4 border-b border-slate-200 py-4 last:border-b-0">
            <span className="text-xs font-medium text-slate-400">
                {label}
            </span>

            <span className="text-right text-sm font-semibold leading-5 text-slate-800">
                {value}
            </span>
        </div>
    )
}

const inputClassName = '[&_input]:h-12 [&_input]:rounded-2xl [&_input]:border-slate-200 [&_input]:bg-slate-50/70 [&_input]:text-sm [&_input]:font-medium [&_input]:text-slate-900 [&_input]:shadow-none [&_input]:transition [&_input]:placeholder:text-slate-400 [&_input]:hover:border-slate-300 [&_input]:focus:border-emerald-500 [&_input]:focus:bg-white [&_input]:focus:ring-4 [&_input]:focus:ring-emerald-500/10';
const selectClassName = '[&_select]:h-12 [&_select]:rounded-2xl [&_select]:border-slate-200 [&_select]:bg-slate-50/70 [&_select]:text-sm [&_select]:font-medium [&_select]:text-slate-900 [&_select]:shadow-none [&_select]:transition [&_select]:hover:border-slate-300 [&_select]:focus:border-emerald-500 [&_select]:focus:bg-white [&_select]:focus:ring-4 [&_select]:focus:ring-emerald-500/10';