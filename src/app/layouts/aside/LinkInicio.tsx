import { useAppLocation } from '@app/routes/hooks';
import { PRIVATE_ROUTES } from '@app/routes/constants/rutas';
import { Home } from 'lucide-react';
import { NavLink } from 'react-router';
import type { SidebarLinkInicioProps } from '../types/plantilla';

function LinkInicio({ collapsed = false }: SidebarLinkInicioProps) {
   const location = useAppLocation();

   const isActive = () => {
      return location.pathname === PRIVATE_ROUTES.DASHBOARD;
   };

   return (
      <li className="mb-2">
         <NavLink to={PRIVATE_ROUTES.DASHBOARD} replace={true} title={collapsed ? 'Inicio' : undefined}
            className={`flex items-center p-2 text-gray-800 rounded-lg group transition-all duration-200 hover:bg-green-300 ${collapsed ? 'lg:justify-center' : ''} ${isActive() ? 'activo' : ''}`}
         >
            <span className={collapsed ? 'lg:mx-auto' : ''}>
               <Home className="text-green-700 transition duration-75 shrink-0" />
            </span>
            <span className={`flex-1 ms-4 whitespace-nowrap ${collapsed ? 'hidden lg:hidden' : 'block'}`}>
               Inicio
            </span>
         </NavLink>
      </li>
   );
}

export default LinkInicio;