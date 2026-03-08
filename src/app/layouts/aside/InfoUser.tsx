import imagen from '@/shared/assets/img/imagen'
import { Link } from 'react-router'
import type { SidebarInfoUserProps } from '../types/plantilla'

export default function InfoUser({ usuario }: SidebarInfoUserProps) {
    return (
        <Link to="#" className="flex items-center gap-3 pb-3 mt-2 px-4 border-b border-gray-200">
            <img src={imagen.usuario} className="h-9 w-9" />
            <div className="flex-1">
                <p className="text-md font-medium">{usuario?.nombre}</p>
                <p className="text-sm text-gray-500 -mt-1">{usuario?.apellidos}</p>
            </div>
        </Link>
    )
}
