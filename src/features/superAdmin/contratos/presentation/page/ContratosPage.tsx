import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import ToolbarFilter from '@shared/components/toolbar/ToolbarFilter';
import { FileChartColumn } from 'lucide-react';
import type { Contrato } from '../../domain/models/contrato.model';
import AdminColumns from '../components/ContratosColumns';
import useContrato from '../hooks/useContrato';

function ContratosPage() {

    const { titulo, subtitulo, isLoading, contratos, filters, limit, page, total, campos,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useContrato();

    const columns = AdminColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileChartColumn className="w-7 h-7" />} color="green" />
            <Contenido>
                <ToolbarFilter entityName={titulo} onSearchChange={handleFilterChange} onClearSearch={limpiarFiltros}
                    filters={filters} total={total} campos={campos} />
                <DataTableComponent<Contrato> columns={columns} data={contratos} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}

export default ContratosPage;