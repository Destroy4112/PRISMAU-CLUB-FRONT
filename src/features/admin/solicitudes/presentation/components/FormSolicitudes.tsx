import imagen from "@/shared/assets/img/imagen";
import { URL_BACK } from "@core/constants/endpoints";
import TextAreaField from "@shared/components/form/TextAreaField";
import { Mail, Phone, User } from "lucide-react";
import type { FormSolicitudesProps } from "../types/solicitud";

function FormSolicitudes({ solicitud, form, handleChange }: FormSolicitudesProps) {

   const isClosed = solicitud.estado == 0;
   const foto = solicitud.usuario.imagen ? `${URL_BACK + solicitud.usuario.imagen}` : solicitud.usuario.Sexo === "Femenino" ? imagen.femenino : imagen.masculino;

   return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
         <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-200">
               <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                     <div>
                        <h3 className="text-lg font-semibold text-gray-900">Detalles de la Solicitud</h3>
                        <p className="text-sm text-gray-600 mt-1">Información completa de la solicitud</p>
                     </div>
                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isClosed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {isClosed ? "Aprobada" : "Pendiente"}
                     </span>
                  </div>
               </div>

               <div className="p-6 space-y-6">
                  <div className="space-y-2">
                     <label className="block text-sm font-medium text-gray-900">Tipo de solicitud</label>
                     <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-900">{solicitud.tipo}</p>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="block text-sm font-medium text-gray-900">Descripción de la solicitud</label>
                     <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 min-h-25">
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">{solicitud.descripcion}</p>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <TextAreaField
                        id="idRespuesta"
                        name="respuesta"
                        handleChange={handleChange}
                        value={form.respuesta}
                        placeholder="Escriba la respuesta de la solicitud..."
                        label="Respuesta de la solicitud"
                        required
                     />
                     <p className="text-xs text-gray-500">*Campo requerido para completar la solicitud</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white rounded-lg shadow-md border border-gray-200 self-start">
            <div className="px-6 py-4 border-b border-gray-200">
               <h3 className="text-base font-semibold text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-green-600" />
                  Solicitante
               </h3>
            </div>
            <div className="p-4">
               <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                     <img src={foto} alt={"perfil"} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                     <p className="text-sm font-semibold text-gray-900 truncate">
                        {solicitud.usuario.Nombre}
                     </p>
                     <p className="text-xs text-gray-500">{solicitud.usuario.Apellidos}</p>
                  </div>
               </div>
               <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center">
                     <Mail className="w-3 h-3 mr-2 shrink-0" />
                     <span className="truncate">{solicitud.usuario.Correo}</span>
                  </div>
                  <div className="flex items-center">
                     <Phone className="w-3 h-3 mr-2 shrink-0" />
                     <span>{solicitud.usuario.Telefono}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FormSolicitudes
