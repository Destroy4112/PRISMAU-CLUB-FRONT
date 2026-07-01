import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import ToolbarFilter from '@shared/components/toolbar/ToolbarFilter';
import { History } from 'lucide-react';
import type { Estado } from '../../domain/models/estado.model';
import EstadosColumns from '../components/EstadosColumns';
import useEstado from '../hooks/useEstado';

function EstadosPage() {

    const { titulo, subtitulo, isLoading, contratos, filters, limit, page, total, campos,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useEstado();

    const columns = EstadosColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<History className="w-7 h-7" />} color="pink" />
            <Contenido>
                <ToolbarFilter entityName={titulo} onSearchChange={handleFilterChange} onClearSearch={limpiarFiltros}
                    filters={filters} total={total} campos={campos} />
                <DataTableComponent<Estado> columns={columns} data={contratos} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}

export default EstadosPage;