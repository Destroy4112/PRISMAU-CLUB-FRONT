import Spinner from "@shared/components/spinner/Spinner"
import { Button } from "flowbite-react"
import { X } from "lucide-react"
import type { CardsMenuRolProps } from "../types/menuRol"

function CardMenusRol({ menus, loading, eliminar }: CardsMenuRolProps) {

   if (loading) {
      return (
         <div className="flex justify-center items-center h-20"><Spinner /></div>
      )
   }

   return (
      <>
         {menus && menus.length > 0 ? (
            <div className="space-y-8">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-blue-700">{menus.length} módulos</span>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menus.map((menu, index) => {
                     const typeInfo = getTypeInfo(menu.type)
                     const statusInfo = getStatusInfo(menu.estado)

                     return (
                        <div className="group relative bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                           key={menu.menuRolId} style={{ animationDelay: `${index * 100}ms` }}
                        >
                           <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           <div className="relative p-6">
                              <div className="flex items-start justify-between mb-4">
                                 <div className="flex items-center gap-4">
                                    <div className={`relative p-4 rounded-2xl bg-linear-to-br from-${typeInfo.bgColor} to-gray-100 border border-gray-200 group-hover:shadow-lg transition-all duration-300`}>
                                       <i className={`fa fa-${menu.icon} text-xl ${typeInfo.textColor} group-hover:scale-110 transition-transform duration-300`}                                                    ></i>
                                       <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div>
                                       <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                                          {menu.name}
                                       </h3>
                                       <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${typeInfo.bgColor} ${typeInfo.textColor} mt-1`}>
                                          {typeInfo.label}
                                       </div>
                                    </div>
                                 </div>
                                 <Button className="opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 p-0 rounded-full hover:scale-110 shadow-lg"
                                    color="red" size="sm" onClick={() => eliminar(menu.menuRolId)}>
                                    <X className="h-4 w-4" />
                                 </Button>
                              </div>
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${statusInfo.dotColor}`}></div>
                                    <span className={`text-sm font-medium ${statusInfo.color}`}>{statusInfo.label}</span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-gray-500">Ruta:</span>
                                    <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono text-gray-700">
                                       /{menu.route}
                                    </code>
                                 </div>
                              </div>
                           </div>
                           <div className={`absolute left-0 top-0 bottom-0 w-1 ${getColorClasses(menu.color)}`}></div>
                        </div>
                     )
                  })}
               </div>
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4">
               <div className="relative mb-8">
                  <div className="w-32 h-32 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner">
                     <div className="w-24 h-24 bg-linear-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg">
                        <i className="fas fa-folder-open text-4xl text-gray-400"></i>
                     </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-linear-to-br from-green-400 to-teal-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
               </div>

               <h3 className="text-2xl font-bold text-gray-900 mb-3">No hay módulos asignados</h3>
               <p className="text-gray-600 text-center max-w-full leading-relaxed mb-6">
                  Los módulos aparecerán aquí una vez que sean configurados por el administrador.
               </p>
            </div>
         )}
      </>
   )
}

export default CardMenusRol

const getTypeInfo = (type: string) => {
   const typeMap: Record<string, { label: string; bgColor: string; textColor: string }> = {
      bienestar: {
         label: "Bienestar",
         bgColor: "bg-blue-50",
         textColor: "text-blue-700",
      },
      portal: {
         label: "Portal",
         bgColor: "bg-green-50",
         textColor: "text-green-700",
      },
      perfil: {
         label: "Administración",
         bgColor: "bg-purple-50",
         textColor: "text-purple-700",
      },
      reportes: {
         label: "Reportes",
         bgColor: "bg-orange-50",
         textColor: "text-orange-700",
      },
   }
   return (
      typeMap[type] || {
         label: type.charAt(0).toUpperCase() + type.slice(1),
         description: "Módulo del sistema",
         bgColor: "bg-gray-50",
         textColor: "text-gray-700",
      }
   )
}

const getColorClasses = (color: string) => {
   const colorClass = color.includes("-") ? `bg-${color}` : `bg-${color}`
   return colorClass
}

const getStatusInfo = (estado: string) => {
   return estado === "1"
      ? { label: "Activo", color: "text-green-600", bgColor: "bg-green-100", dotColor: "bg-green-500" }
      : { label: "Inactivo", color: "text-red-600", bgColor: "bg-red-100", dotColor: "bg-red-500" }
}