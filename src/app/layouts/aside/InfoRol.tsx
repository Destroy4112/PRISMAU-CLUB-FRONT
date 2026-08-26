import { traslateRol } from '@shared/utilities/convertidores/converters';
import { FcApproval, FcSettings } from 'react-icons/fc';
import type { SidebarInfoRolProps } from '../types/plantilla';

export default function InfoRol({ rol, collapsed = false }: SidebarInfoRolProps) {
   const role = traslateRol(rol);

   return (
      <div className={`border-t border-gray-200 bg-white py-4 ${collapsed ? 'mx-0 px-0' : 'mx-4 px-0'} `}>
         {collapsed ? (
            <div className="flex items-center justify-center">
               <button type="button" className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition" title="Configuración" aria-label="Configuración">
                  <FcSettings className="h-6 w-6" />
               </button>
            </div>
         ) : (
            <div className="flex items-center justify-between mx-1">
               <div className="flex items-center gap-3">
                  <FcApproval className="h-8 w-8 shrink-0" />
                  <div className="flex-1">
                     <h3 className="text-sm font-medium">Rol</h3>
                     <p className="text-xs text-gray-500">{role}</p>
                  </div>
               </div>

               <button type="button" className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition" title="Configuración" aria-label="Configuración">
                  <FcSettings className="h-6 w-6" />
               </button>
            </div>
         )}
      </div>
   );
}