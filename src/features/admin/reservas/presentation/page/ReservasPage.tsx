import FiltrosBusqueda from '@shared/components/buscador/FiltrosBusqueda';
import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import { CalendarClock } from 'lucide-react';
import { CAMPOS_RESERVA } from '../components/camposReserva';
import ReservasColumn from '../components/ReservasColumn';
import useReservas from '../hooks/useReservas';

export default function ReservasPage() {

    const { titulo, subtitulo, isLoading, filters, limit, page, reservas, total,
        handleFilterChange, onPageChange, onRowsPerPageChange, limpiarFiltros } = useReservas();

    const columns = ReservasColumn();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<CalendarClock className="w-7 h-7" />} color="pink" />
            <Contenido>
                <FiltrosBusqueda fields={CAMPOS_RESERVA} handleChange={handleFilterChange} values={filters}
                    limpiar={limpiarFiltros} />
                <DataTableComponent data={reservas} loading={isLoading} columns={columns} limit={limit} page={page}
                    total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}