import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import ToolbarFilterSocios from '@shared/components/toolbar/ToolbarFilterSocios';
import { UserCog } from 'lucide-react';
import type { Socio } from '../../domain/models/socio.model';
import SociosColumns from '../components/SociosColumns';
import useAdministracion from '../hooks/useAdministracion';
import { statusSocios } from '../utils/programacion.util';

function AdministracionPage() {

    const { titulo, subtitulo, isLoading, socios, filters, limit, page, total, edit, loading, handleFilterChange, clearFilter,
        setFilter, onPageChange, onRowsPerPageChange, cancelEdit, changeEditValue, saveEdit, startEdit, go } = useAdministracion();

    const columns = SociosColumns({ edit, loading, startEdit, changeEditValue, saveEdit, cancelEdit, go });

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} icono={<UserCog className="w-7 h-7" />} color="pink" />
            <Contenido>
                <ToolbarFilterSocios<number | null> filters={filters} total={total} onSearchChange={handleFilterChange}
                    entityName={titulo} statusOptions={statusSocios} onClearSearch={() => clearFilter("search")}
                    onStatusFilterChange={(v) => setFilter("state", v)} />
                <DataTableComponent<Socio> columns={columns} data={socios} loading={isLoading}
                    limit={limit} page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            </Contenido>
        </>
    );
}

export default AdministracionPage;