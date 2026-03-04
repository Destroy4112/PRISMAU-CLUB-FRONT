import FiltrosBusqueda from '@components/buscador/FiltrosBusqueda';
import DataTableComponent from '@components/dataTable/DataTableComponent';
import Contenido from '@components/helpers/Contenido';
import TituloPage from '@components/helpers/TituloPage';
import type { IEstado } from '@models/entities/Entity.model';
import { History } from 'lucide-react';
import { CAMPOS_ESTADO } from './components/camposEstado';
import EstadosColumns from './components/EstadosColumns';
import useEstado from './hooks/useEstado';

function EstadosPage() {

    const { titulo, subtitulo, isLoading, accesos, limit, page, total, filters,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useEstado();

    const columns = EstadosColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<History className="w-7 h-7" />} color="pink" />
            <Contenido>
                <FiltrosBusqueda fields={CAMPOS_ESTADO} handleChange={handleFilterChange}
                    values={filters} limpiar={limpiarFiltros} />
                <DataTableComponent<IEstado> columns={columns} data={accesos} limit={limit} page={page}
                    total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} loading={isLoading} />
            </Contenido>
        </>
    );
}

export default EstadosPage;