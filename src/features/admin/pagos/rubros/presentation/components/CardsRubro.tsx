import CardSkeleton from '@shared/components/skeletons/CardSkeleton'
import { gradientes } from '@shared/utilities/convertidores/converters'
import { formatearMoneda } from '@shared/utilities/convertidores/normalizeText'
import { Pagination } from 'flowbite-react'
import { Calendar, Edit, Trash2, TrendingUp } from 'lucide-react'
import type { CardsRubrosProps } from '../types/rubro'

export default function CardsRubro({ rubros, loading, page, totalPages, total, onPageChange, cargar, handleDelete }: CardsRubrosProps) {

  if (loading) return <CardSkeleton />

  const safeTotalPages = Math.max(1, Number(totalPages) || 1)
  const safePage = Math.min(Math.max(1, Number(page) || 1), safeTotalPages)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rubros?.map((rubro, index) => {
          const gradient = gradientes[index % gradientes.length]
          return (
            <article key={rubro.id} className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-gray-300/70 focus-within:shadow-xl">
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${gradient} opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]`} />
              <div className={`pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-linear-to-r ${gradient} opacity-60`} />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-25 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`relative grid h-11 w-11 place-items-center rounded-xl bg-linear-to-br ${gradient} shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105`} aria-hidden="true">
                      <Calendar className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold text-gray-900 leading-snug line-clamp-2">{rubro.rubro}</h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-500"><TrendingUp className="h-3.5 w-3.5" />Valor configurado</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 focus-within:opacity-100">
                    <button type="button" onClick={() => cargar(rubro)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur transition-all duration-200 hover:cursor-pointer hover:bg-blue-100 hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-200" title="Editar rubro" aria-label="Editar rubro">
                      <Edit className="h-4 w-4 text-gray-700" strokeWidth={2.5} />
                    </button>

                    <button type="button" onClick={() => handleDelete(rubro.id!)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur transition-all duration-200 hover:cursor-pointer hover:bg-red-50 hover:border-red-200 hover:shadow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-200" title="Eliminar rubro" aria-label="Eliminar rubro">
                      <Trash2 className="h-4 w-4 text-red-600" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-4 shadow-inner-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-gray-600">Total</p>
                      <span className={`h-2.5 w-2.5 rounded-full bg-linear-to-br ${gradient} opacity-80`} aria-hidden="true" />
                    </div>

                    <p className="mt-2 text-xl font-extrabold tracking-tight text-gray-900">{formatearMoneda(Number(rubro.valor))}</p>

                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className={`h-full w-1/2 bg-linear-to-r ${gradient} transition-all duration-500 group-hover:w-2/3`} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="text-xs text-gray-500">Registros: <span className="font-semibold text-gray-700">{total ?? rubros?.length ?? 0}</span></div>

        {safeTotalPages > 1 ? (
          <Pagination totalPages={safeTotalPages} onPageChange={onPageChange} currentPage={safePage} />
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">Página 1 de 1</div>
        )}
      </div>
    </div>
  )
}
