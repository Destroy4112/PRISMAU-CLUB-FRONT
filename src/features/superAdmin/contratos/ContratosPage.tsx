import FiltrosBusqueda from '@components/buscador/FiltrosBusqueda';
import DataTableComponent from '@components/dataTable/DataTableComponent';
import Contenido from '@components/helpers/Contenido';
import TituloPage from '@components/helpers/TituloPage';
import type { IContrato } from '@models/entities/Entity.model';
import { FileChartColumn } from 'lucide-react';
import { CAMPOS_CONTRATO } from './components/camposContrato';
import AdminColumns from './components/ContratosColumns';
import useContrato from './hooks/useContrato';

function ContratosPage() {

    const { titulo, subtitulo, isLoading, contratos, filters, limit, page, total,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useContrato();
    const columns = AdminColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileChartColumn className="w-7 h-7" />} color="purple" />
            <Contenido>
                <FiltrosBusqueda fields={CAMPOS_CONTRATO} values={filters} handleChange={handleFilterChange} limpiar={limpiarFiltros} />
                <DataTableComponent<IContrato> columns={columns} data={contratos} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}

export default ContratosPage;