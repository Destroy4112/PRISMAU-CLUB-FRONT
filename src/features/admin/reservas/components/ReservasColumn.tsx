import type { IReserva } from '@models/entities/Entity.model';
import { formatearFecha, formatearHora } from '@utils/convertidores/normalizeText';
import type { TableColumn } from 'react-data-table-component';
import { FaListOl } from 'react-icons/fa';

export default function ReservasColumn(): TableColumn<IReserva>[] {

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: '50px',
        },
        {
            name: "Espacio",
            cell: row => row.espacio?.Descripcion,
        },
        {
            name: "Fecha",
            cell: row => formatearFecha(row.Fecha),
        },
        {
            name: "Hora inicial",
            cell: row => formatearHora(row.Inicio),
        },
        {
            name: "Hora final",
            cell: row => formatearHora(row.Fin),
        },
        {
            name: "Nombre completo",
            cell: row => `${row.usuario?.Nombre} ${row.usuario?.Apellidos}`,
            width: '300px',
        },

    ];
}
