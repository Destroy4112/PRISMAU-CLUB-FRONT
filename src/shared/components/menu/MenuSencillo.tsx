import { FaPlus, FaSearch, FaTimes } from 'react-icons/fa';
import ExportExcel, { type AnyRow } from '../excel/ExportExcel';

interface MenuProps<T extends object = AnyRow> {
   busqueda?: string;
   noBuscar?: boolean;
   noCrear?: boolean;
   exportar?: boolean;
   data?: T[];
   titulo?: string;
   handleBusqueda?: (value: string) => void;
   toggleModal?: () => void;
};

function MenuSencillo<T extends object>(props: MenuProps<T>) {

   const { busqueda, noBuscar, noCrear, exportar, data, titulo, handleBusqueda, toggleModal } = props;

   const handleClearSearch = () => handleBusqueda?.('');

   return (
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 sm:space-y-0 pb-4 bg-white">
         {!noCrear ?
            <div className="inline-flex rounded-md shadow-sm" role="group">
               <button onClick={toggleModal} type="button" className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 ${exportar ? 'rounded-s-lg' : 'rounded-lg'} hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:z-10 focus:ring-2`}>
                  <FaPlus className='me-2' />
                  Crear
               </button>
               {exportar && <ExportExcel<T> data={data!} fileName={titulo!} canCreate={noCrear} />}
            </div>
            :
            <div></div>
         }
         {!noBuscar ?
            <div className="relative">
               <div className="absolute inset-y-0 rtl:inset-r-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch className="w-4 h-4 text-gray-500" />
               </div>
               <input type="text" id="table-search-users" onChange={(e) => handleBusqueda?.(e.target.value)} value={busqueda ?? ''} placeholder="Buscar..."
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-30 sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
               {busqueda && (
                  <button onClick={handleClearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                     <FaTimes className="w-4 h-4 text-gray-500" />
                  </button>
               )}
            </div>
            :
            <div></div>
         }
      </div >
   );
}

export default MenuSencillo;
