import DataTableComponent from '@shared/components/dataTable/DataTableComponent';
import Contenido from '@shared/components/helpers/Contenido';
import TituloPage from '@shared/components/helpers/TituloPage';
import VentanaModal from '@shared/components/modals/VentanaModal';
import VentanaModalSencilla from '@shared/components/modals/VentanaModalSencilla';
import ToolbarFilter2 from '@shared/components/toolbar/ToolbarFilter2';
import { DollarSign } from 'lucide-react';
import type { CuotaBaile } from '../../domain/models/cuotaBaile.model';
import SociosColumns from '../components/CuotasBaileColumns';
import FacturaCuotaBaile from '../components/FacturaCuotaBaile';
import FormCuotaBaile from '../components/FormCuotaBaile';
import InfoPagoCuotaBaile from '../components/InfoPagoCuotaBaile';
import MetricsCuotaBaile from '../components/MetricsCuotaBaile';
import useCuotaBaile from '../hooks/useCuotaBaile';
import { statusCuotasBaile } from '../utils/cuotaBaile.util';

function CuotasBailePage() {

   const { titulo, subtitulo, campos, tituloModal, isLoading, cuotas, filters, limit, page, total, loading, payCuotaBaileForm,
      modals, socio, pagadas, pendientes, pagoInfo, archivoSeleccionado, handleFilterChange, clearFilter, setFilter, cargar,
      onPageChange, ver, limpiarArchivo, onRowsPerPageChange, handleChange, closeModal, handleChangeFile, handleSubmit,
      closeModalFactura, closeModalPago } = useCuotaBaile();

   const columns = SociosColumns({ cargar, ver });

   return (
      <>
         <TituloPage titulo={`${titulo} de ${socio.nombre} ${socio.apellidos}`} subtitulo={subtitulo}
            icono={<DollarSign className="w-7 h-7" />} color="pink" />
         <Contenido>
            <div className="flex flex-col gap-6">
               <MetricsCuotaBaile total={total} pagadas={pagadas} pendientes={pendientes} />
               <ToolbarFilter2<boolean | null> filters={filters} total={total} onSearchChange={handleFilterChange}
                  entityName={titulo} statusOptions={statusCuotasBaile} onClearSearch={() => clearFilter("search")}
                  onStatusFilterChange={(v) => setFilter("state", v)} campos={campos} searchType='number' />
            </div>
            <DataTableComponent<CuotaBaile> columns={columns} data={cuotas} loading={isLoading} limit={limit}
               page={page} total={total} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />
            <VentanaModal size={'full'} titulo={tituloModal} show={modals.pagar} cerrarModal={closeModal}
               handleSubmit={handleSubmit} loading={loading}>
               <FormCuotaBaile form={payCuotaBaileForm} handleChange={handleChange} handleChangeFile={handleChangeFile}
                  limpiar={limpiarArchivo} archivoSeleccionado={archivoSeleccionado} />
            </VentanaModal>
            <VentanaModalSencilla size={'full'} show={modals.ver} cerrarModal={closeModalFactura}
               titulo={'Detalle de pago'}>
               <FacturaCuotaBaile cuotaBaile={payCuotaBaileForm.cuotaBaile!} socio={socio} />
            </VentanaModalSencilla>
            {modals.pago && <InfoPagoCuotaBaile pago={pagoInfo!} closeModal={closeModalPago} />}
         </Contenido >
      </>
   );
}

export default CuotasBailePage;