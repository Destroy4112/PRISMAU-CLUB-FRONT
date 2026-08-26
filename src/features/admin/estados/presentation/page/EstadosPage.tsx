import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import ToolbarFilterSocios from '@shared/components/toolbar/ToolbarFilterSocios';
import { History } from 'lucide-react';
import type { Estado } from '../../domain/models/estado.model';
import EstadosColumns from '../components/EstadosColumns';
import useEstado from '../hooks/useEstado';
import { statusEstados } from '../utils/estado.util';

function EstadosPage() {

   const { titulo, subtitulo, isLoading, contratos, filters, limit, page, total,
      handleFilterChange, clearFilter, setFilter, onPageChange, onRowsPerPageChange } = useEstado();

   const columns = EstadosColumns();

   return (
      <>
         <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<History className="w-7 h-7" />} color="pink" />
         <Contenido>
            <ToolbarFilterSocios<string | null> filters={filters} total={total} onSearchChange={handleFilterChange}
               entityName={titulo} statusOptions={statusEstados} onClearSearch={() => clearFilter("search")}
               onStatusFilterChange={(v) => setFilter("state", v)} />
            <DataTableComponent<Estado> columns={columns} data={contratos} loading={isLoading}
               limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
         </Contenido>
      </>
   );
}

export default EstadosPage;