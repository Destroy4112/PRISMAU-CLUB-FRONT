import LoadingComponent from "@shared/components/loading/LoadingComponent"
import { URL_BACK } from "@shared/constants/endpoints/Endpoints.model"
import { Button, Card } from "flowbite-react"
import { CheckCircle, CreditCard, Hash, Heart, XCircle } from "lucide-react"
import { FaEdit, FaImages, FaLock, FaRegTrashAlt } from "react-icons/fa"
import type { CardsFamiliaresProps } from "../types/familiar"

export default function CardFamiliares({ familiares = [], loading, cargar, handleDelete, change, reset }: CardsFamiliaresProps) {

    if (familiares.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4">
                <div className="relative mb-8">
                    <div className="w-32 h-32 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner">
                        <div className="w-24 h-24 bg-linear-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg">
                            <i className="fas fa-user text-4xl text-gray-400"></i>
                        </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-linear-to-br from-green-400 to-teal-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">No hay familiares</h3>
                <p className="text-gray-600 text-center max-w-full leading-relaxed mb-6">
                    Este socio no tiene familiares registrados. Puedes agregar familiares desde el boton crear ubicado en la parte superior izquierda.
                </p>
            </div>
        )
    }

    if (loading) return <LoadingComponent />

    return (
        <div className="w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {familiares.map((familiar) => (
                    <Card key={familiar.id} className="group hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border-slate-200 bg-white">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                                {familiar.imagen ?
                                    <img className="h-12 w-12 rounded-full ring-2 ring-slate-100" src={URL_BACK + familiar.imagen} alt="foto" /> :
                                    familiar.Sexo === "Femenino" ?
                                        <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" alt="foto" /> :
                                        <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="foto" />
                                }
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-slate-900 leading-tight mb-1">
                                    {familiar.Nombre} {familiar.Apellidos}
                                </h3>
                                <span className={`flex items-center flex-row text-sm gap-2`}                                    >
                                    <Heart className="h-4 w-4 text-red-500" />
                                    {familiar.Parentesco}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                <div className="p-1.5 bg-white rounded-md shadow-sm">
                                    <Hash className="h-4 w-4 text-slate-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Código</p>
                                    <p className="font-semibold text-slate-900">
                                        {familiar.Codigo || "Sin asignar"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                <div className="p-1.5 bg-white rounded-md shadow-sm">
                                    <CreditCard className="h-4 w-4 text-slate-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Identificación</p>
                                    <p className="font-semibold text-slate-900">
                                        {familiar.TipoDocumento}. {familiar.Documento}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                <div>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Estado</p>
                                    <p className={`font-semibold ${familiar.Estado === 1 ? "text-emerald-600" : "text-red-600"}`}>
                                        {familiar.Estado === 1 ? "Activo" : "Inactivo"}
                                    </p>
                                </div>
                                <div className={`p-2 rounded-full ${familiar.Estado === 1 ? "bg-emerald-100" : "bg-red-100"}`}>
                                    {familiar.Estado === 1 ? (
                                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                                    ) : (
                                        <XCircle className="h-5 w-5 text-red-600" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-center gap-1">
                                <Button color="alternative" size="sm" className="py-2 px-2 font-medium text-xs text-blue-600 hover:text-white hover:bg-blue-600"
                                    onClick={() => cargar(familiar)} title="Editar Familiar">
                                    <FaEdit className="h-3 w-3 mr-0.5" /> Editar
                                </Button>
                                <Button color="alternative" size="sm" className="py-2 px-2 font-medium text-xs text-red-600 hover:text-white hover:bg-red-500"
                                    onClick={() => handleDelete(familiar.id!)} title="Eliminar Familiar">
                                    <FaRegTrashAlt className="h- w-3 mr-0.5" /> Eliminar
                                </Button>
                                <Button color="alternative" size="sm" className="py-2 px-2 font-medium text-xs text-purple-600 hover:text-white hover:bg-purple-500"
                                    onClick={() => change(familiar.id!, familiar.imagen!)} title="Cambiar Foto">
                                    <FaImages className="h-3 w-3 mr-0.5" /> Foto
                                </Button>
                                <Button color="alternative" size="sm" className="py-2 px-2 font-medium text-xs text-yellow-600 hover:text-white hover:bg-yellow-500"
                                    onClick={() => reset(familiar.user_id!)} title="Restablecer Clave">
                                    <FaLock className="h-3 w-3 mr-0.5" /> Clave
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
