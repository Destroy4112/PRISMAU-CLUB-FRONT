import imagen from '@/shared/assets/img/imagen';
import type { SidebarInfoUserProps } from '../types/plantilla';

export default function InfoUser({ usuario, collapsed = false }: SidebarInfoUserProps) {
    return (
        <div className={`flex items-center gap-3 pb-3 mt-2 px-4 border-b border-gray-200 ${collapsed ? 'lg:justify-center lg:px-2' : ''}`}>
            <img src={imagen.usuario} className="h-9 w-9 min-w-9" />
            <div className={`${collapsed ? 'hidden lg:hidden' : 'flex-1'}`}>
                <p className="text-md font-medium">{usuario?.nombre}</p>
                <p className="text-sm text-gray-500 -mt-1">{usuario?.apellidos}</p>
            </div>
        </div>
    );
}