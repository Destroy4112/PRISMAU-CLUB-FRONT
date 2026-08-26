import type { HeaderAsignProps } from '../types/menuRol'

export default function HeaderAsigMenu({ toggleModal }: HeaderAsignProps) {
   return (
      <div className="flex items-center justify-between mb-5">
         <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900">Módulos Asignados</h2>
            <p className="text-sm text-gray-600">Gestiona los módulos disponibles para este rol</p>
         </div>
         <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600"
            onClick={toggleModal}>
            Asignar
         </button>
      </div>
   )
}
