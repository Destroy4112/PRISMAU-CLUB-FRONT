import { FcApproval, FcSettings } from 'react-icons/fc'
import type { SidebarInfoRolProps } from '../types/plantilla'

export default function InfoRol({ rol }: SidebarInfoRolProps) {

    const role = rol === 0 ? 'Super Admin' : 'Empleado'

    return (
        <div className="flex items-center justify-between border-t border-gray-200 py-4 mx-4 bg-white">
            <div className="flex items-center gap-3 mx-1">
                <FcApproval className="h-8 w-8" />
                <div className="flex-1">
                    <h3 className="text-sm font-medium">Rol</h3>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>
            </div>
            <div>
                <button>
                    <FcSettings className="h-6 w-6" />
                </button>
            </div>
        </div>
    )
}
