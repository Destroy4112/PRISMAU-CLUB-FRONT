import FiltrosBusqueda from '@shared/components/buscador/FiltrosBusqueda';
import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import { FileChartColumn } from 'lucide-react';
import type { Contrato } from '../../domain/contrato.model';
import { CAMPOS_CONTRATO } from '../components/camposContrato';
import AdminColumns from '../components/ContratosColumns';
import useContrato from '../hooks/useContrato';

function ContratosPage() {

    const { titulo, subtitulo, isLoading, contratos, filters, limit, page, total,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useContrato();
    const columns = AdminColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<FileChartColumn className="w-7 h-7" />} color="purple" />
            <Contenido>
                <FiltrosBusqueda fields={CAMPOS_CONTRATO} values={filters} handleChange={handleFilterChange} limpiar={limpiarFiltros} />
                <DataTableComponent<Contrato> columns={columns} data={contratos} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}

export default ContratosPage;