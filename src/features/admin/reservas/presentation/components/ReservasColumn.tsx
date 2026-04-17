import { formatearFecha, formatearHora } from '@shared/utilities/convertidores/normalizeText';
import type { TableColumn } from 'react-data-table-component';
import { FaListOl } from 'react-icons/fa';
import type { Reserva } from '../../domain/model/reserva.model';

export default function ReservasColumn(): TableColumn<Reserva>[] {

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
            cell: row => formatearFecha(row.fecha),
        },
        {
            name: "Hora inicial",
            cell: row => formatearHora(row.inicio),
        },
        {
            name: "Hora final",
            cell: row => formatearHora(row.fin),
        },
        {
            name: "Nombre completo",
            cell: row => `${row.usuario?.Nombre} ${row.usuario?.Apellidos}`,
            width: '300px',
        },

    ];
}
