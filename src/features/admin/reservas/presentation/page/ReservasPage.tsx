import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import ToolbarFilter from '@shared/components/toolbar/ToolbarFilter';
import { CalendarClock } from 'lucide-react';
import ReservasColumn from '../components/ReservasColumn';
import useReservas from '../hooks/useReservas';

export default function ReservasPage() {

    const { titulo, subtitulo, isLoading, filters, limit, page, reservas, total, campos,
        handleFilterChange, onPageChange, onRowsPerPageChange, limpiarFiltros } = useReservas();

    const columns = ReservasColumn();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<CalendarClock className="w-7 h-7" />} color="pink" />
            <Contenido>
                <ToolbarFilter entityName={titulo} onSearchChange={handleFilterChange} onClearSearch={limpiarFiltros}
                    filters={filters} total={total} campos={campos} />
                <DataTableComponent data={reservas} loading={isLoading} columns={columns} limit={limit} page={page}
                    total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}