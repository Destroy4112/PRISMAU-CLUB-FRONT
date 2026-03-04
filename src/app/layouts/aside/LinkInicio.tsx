import { useAppLocation } from '@app/routes/hooks';
import { PRIVATE_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { Home } from 'lucide-react';
import { NavLink } from 'react-router';

function LinkInicio() {

    const location = useAppLocation();

    const isActive = () => {
        if (location.pathname === PRIVATE_ROUTES.DASHBOARD) {
            return true;
        }
        return false;
    };

    return (
        <>
            <li>
                <NavLink to={PRIVATE_ROUTES.DASHBOARD} className={`flex items-center p-2 text-gray-800 rounded-lg hover:bg-green-300 group ${isActive() ? 'activo' : ''}`}>
                    <Home className="text-green-700 transition duration-75" />
                    <span className="flex-1 ms-4 whitespace-nowrap">Inicio</span>
                </NavLink>
            </li>
        </>
    );
}

export default LinkInicio;