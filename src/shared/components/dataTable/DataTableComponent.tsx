import DataTable from 'react-data-table-component';
import TableSkeleton from '../skeletons/TableSkeleton';
import type { TableProps } from './table.type';

export default function DataTableComponent<T>(
   { total, page, limit, data = [], columns, loading, onPageChange, onRowsPerPageChange }: TableProps<T>
) {

   const customStyles = {
      headCells: { style: { color: 'gray', fontSize: '15px', }, },
      cells: { style: { fontSize: '13px', }, },
   };

   return (
      <div className="border border-gray-200 rounded-lg shadow w-full">
         <DataTable
            columns={columns}
            data={data}
            progressPending={loading}
            progressComponent={<TableSkeleton />}
            customStyles={customStyles}
            pagination
            paginationServer
            paginationTotalRows={total}
            paginationPerPage={limit}
            paginationDefaultPage={page}
            onChangePage={onPageChange}
            onChangeRowsPerPage={onRowsPerPageChange}
            noDataComponent={<div className='flex justify-center font-bold my-20 text-gray-500'>No hay datos</div>}
         />
      </div>
   )
}
