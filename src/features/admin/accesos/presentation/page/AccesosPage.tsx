import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import ToolbarFilter from '@shared/components/toolbar/ToolbarFilter';
import { Contact } from 'lucide-react';
import type { Acceso } from '../../domain/models/acceso.model';
import AccesosColumns from '../components/AccesosColumns';
import useAcceso from '../hooks/useAcceso';

function AccesoPage() {

    const { titulo, subtitulo, isLoading, contratos, filters, limit, page, total, campos,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useAcceso();

    const columns = AccesosColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Contact className="w-7 h-7" />} color="green" />
            <Contenido>
                <ToolbarFilter entityName={titulo} onSearchChange={handleFilterChange} onClearSearch={limpiarFiltros}
                    filters={filters} total={total} campos={campos} />
                <DataTableComponent<Acceso> columns={columns} data={contratos} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}

export default AccesoPage;