import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import VentanaModal from '@shared/components/modals/VentanaModal';
import VentanaModalSencilla from '@shared/components/modals/VentanaModalSencilla';
import ToolbarFilter2 from '@shared/components/toolbar/ToolbarFilter2';
import { DollarSign } from 'lucide-react';
import type { Mensualidad } from '../../domain/models/mensualidad.model';
import FacturaMensualidad from '../components/FacturaMensualidad';
import FormMensualidad from '../components/FormMensualidad';
import InfoPagoMensualidad from '../components/InfoPagoMensualidad';
import SociosColumns from '../components/MensualidadesColumns';
import MetricsMensualidad from '../components/MetricsMensualidad';
import useMensualidad from '../hooks/useMensualidad';
import { statusMensualidades } from '../utils/mensualidad.util';

function MensualidadesPage() {

    const { titulo, subtitulo, campos, tituloModal, isLoading, socios, filters, limit, page, total, loading, payMensualidadForm,
        modals, socio, pagadas, pendientes, pagoInfo, archivoSeleccionado, handleFilterChange, clearFilter, setFilter, onPageChange,
        cargar, ver, onRowsPerPageChange, handleChange, closeModal, handleChangeFile, handleSubmit, closeModalFactura,
        closeModalPago, limpiarArchivo } = useMensualidad();

    const columns = SociosColumns({ cargar, ver });

    return (
        <>
            <TituloPage titulo={`${titulo} de ${socio.nombre} ${socio.apellidos}`} subtitulo={subtitulo}
                icono={<DollarSign className="w-7 h-7" />} color="pink" />
            <Contenido>
                <div className="flex flex-col gap-6">
                    <MetricsMensualidad total={total} pagadas={pagadas} pendientes={pendientes} />
                    <ToolbarFilter2<boolean | null> filters={filters} total={total} onSearchChange={handleFilterChange}
                        entityName={titulo} statusOptions={statusMensualidades} onClearSearch={() => clearFilter("search")}
                        onStatusFilterChange={(v) => setFilter("state", v)} campos={campos} searchType='number' />
                </div>
                <DataTableComponent<Mensualidad> columns={columns} data={socios} loading={isLoading} limit={limit}
                    page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
                <VentanaModal size={'full'} titulo={tituloModal} show={modals.pagar} cerrarModal={closeModal}
                    handleSubmit={handleSubmit} loading={loading}>
                    <FormMensualidad form={payMensualidadForm} handleChange={handleChange} handleChangeFile={handleChangeFile}
                        archivoSeleccionado={archivoSeleccionado} limpiar={limpiarArchivo} />
                </VentanaModal>
                <VentanaModalSencilla size={'full'} show={modals.ver} cerrarModal={closeModalFactura}
                    titulo={'Detalle de pago'}>
                    <FacturaMensualidad mensualidad={payMensualidadForm.mensualidad!} socio={socio} />
                </VentanaModalSencilla>
                {modals.pago && <InfoPagoMensualidad pago={pagoInfo!} closeModal={closeModalPago} />}
            </Contenido >
        </>
    );
}

export default MensualidadesPage;