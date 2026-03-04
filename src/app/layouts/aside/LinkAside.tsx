import { useAppLocation } from '@app/routes/hooks';
import React from 'react';
import { NavLink } from 'react-router';
import type { SidebarLinksProps } from '../types/plantilla';

const LinkAside = React.memo(function LinkAside({ menu, activeSubroutes }: SidebarLinksProps) {

    const location = useAppLocation();

    const isActive = () => {
        if (location.pathname === menu.link) {
            return true;
        }
        if (activeSubroutes) {
            return activeSubroutes.some((subroute: string) => location.pathname.startsWith(subroute));
        }
        return false;
    };

    return (
        <li className="mb-2">
            <NavLink to={menu.link} replace={true} className={`flex items-center p-2 text-gray-800 rounded-lg hover:bg-green-300  group ${isActive() ? 'activo' : ''}`}>
                {menu.icono}
                <span className="flex-1 ms-4 whitespace-nowrap">{menu.texto}</span>
            </NavLink>
        </li>
    );
});

export default LinkAside;
