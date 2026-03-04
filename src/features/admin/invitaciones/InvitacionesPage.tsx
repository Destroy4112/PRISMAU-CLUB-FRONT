import FiltrosBusqueda from '@components/buscador/FiltrosBusqueda';
import DataTableComponent from '@components/dataTable/DataTableComponent';
import Contenido from '@components/helpers/Contenido';
import TituloPage from '@components/helpers/TituloPage';
import type { IInvitacion } from '@models/entities/Entity.model';
import { Contact } from 'lucide-react';
import { CAMPOS_INVITACION } from './components/camposInvitacion';
import InvitacionesColumns from './components/InvitacionesColumns';
import useInvitacion from './hooks/useInvitacion';

function InvitacionesPage() {

    const { titulo, subtitulo, isLoading, invitaciones, limit, page, total, filters,
        handleFilterChange, limpiarFiltros, onPageChange, onRowsPerPageChange } = useInvitacion();

    const columns = InvitacionesColumns();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<Contact className="w-7 h-7" />} color="green" />
            <Contenido>
                <FiltrosBusqueda fields={CAMPOS_INVITACION} handleChange={handleFilterChange}
                    values={filters} limpiar={limpiarFiltros} />
                <DataTableComponent<IInvitacion> columns={columns} data={invitaciones} limit={limit} page={page}
                    total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} loading={isLoading} />
            </Contenido>
        </>
    );
}

export default InvitacionesPage;