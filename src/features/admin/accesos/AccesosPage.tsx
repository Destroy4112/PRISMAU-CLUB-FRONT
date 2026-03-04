import FiltrosBusqueda from '@components/buscador/FiltrosBusqueda';
import DataTableComponent from '@components/dataTable/DataTableComponent';
import Contenido from '@components/helpers/Contenido';
import TituloPage from '@components/helpers/TituloPage';
import type { IAcceso } from '@models/entities/Entity.model';
import { ScanQrCode } from 'lucide-react';
import AccesosColumns from './components/AccesosColumns';
import { CAMPOS_ACCESO } from './components/camposAcceso';
import useAcceso from './hooks/useAcceso';

function AccesosPage() {

    const { titulo, subtitulo, isLoading, accesos, limit, page, total, filters,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useAcceso();

    const columns = AccesosColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<ScanQrCode className="w-7 h-7" />} color="purple" />
            <Contenido>
                <FiltrosBusqueda fields={CAMPOS_ACCESO} handleChange={handleFilterChange}
                    values={filters} limpiar={limpiarFiltros} />
                <DataTableComponent<IAcceso> columns={columns} data={accesos} limit={limit} page={page}
                    total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} loading={isLoading} />
            </Contenido>
        </>
    );
}

export default AccesosPage;