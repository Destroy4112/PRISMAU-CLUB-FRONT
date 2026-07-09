import type { FacturaMensualidadProps } from '@features/admin/pagos/mensualidades/presentation/types/mensualidad';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { formatearFechaHora, formatearFechaMesAnio, formatearMoneda } from '@shared/utilities/convertidores/normalizeText';
import { styles } from '@shared/utilities/factura/factura.util';

export default function FacturaMensualidadPdf({ mensualidad, socio }: FacturaMensualidadProps) {


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text>CORPORACION CLUB SINCELEJO</Text>
                    <Text>NIT: 800.007.089-9</Text>
                    <Text>CALLE 38 NO 34 184</Text>
                    <Text>SINCELEJO - COLOMBIA</Text>
                    <Text>Tel: 3135335145 - 2804889</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.label}>RECIBO DE CAJA - SOSTENIMIENTO</Text>
                        <Text style={styles.value}>R-{mensualidad.id}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Fecha Comprobante</Text>
                        <Text style={styles.value}>{formatearFechaHora(mensualidad.pagos[0].fechaPago)}</Text>
                    </View>
                </View>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCellTitle, styles.col1]}>Nombre</Text>
                        <Text style={[styles.tableCellValue, styles.col2]}> {socio.nombre} {socio.apellidos}</Text>
                        <Text style={[styles.tableCellTitle, styles.col1]}>NIT</Text>
                        <Text style={[styles.tableCellValue, styles.col3]}> {socio.documento}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCellTitle, styles.col1]}>Dirección</Text>
                        <Text style={[styles.tableCellValue, styles.col2]}>{socio.direccion || "No registrada"}</Text>
                        <Text style={[styles.tableCellTitle, styles.col1]}>Teléfono</Text>
                        <Text style={[styles.tableCellValue, styles.col3]}>{socio.telefono}</Text>
                    </View>
                </View>

                {/* Tabla de detalles */}
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableCell, styles.col1]}>Referencia</Text>
                    <Text style={[styles.tableCell, styles.col2]}>Descripción</Text>
                    <Text style={[styles.tableCell, styles.col1]}>Metodo</Text>
                    <Text style={[styles.tableCell, styles.col1]}>Valor</Text>
                </View>

                {
                    mensualidad.pagos.map((pago) => (
                        <View style={styles.tableRow} key={pago.id}>
                            <Text style={[styles.tableCell, styles.col1, styles.padding]}>{pago.referenciaPago}</Text>
                            <Text style={[styles.tableCell, styles.col2, styles.padding]}>PAGO FACTURA {formatearFechaMesAnio(mensualidad.fecha)}</Text>
                            <Text style={[styles.tableCell, styles.col1, styles.padding]}>{pago.metodoPago}</Text>
                            <Text style={[styles.tableCell, styles.col1, styles.padding]}>{formatearMoneda(pago.monto)}</Text>
                        </View>
                    ))
                }

                {/* Total */}
                <View style={styles.row}>
                    <Text style={[styles.label, { marginTop: 8 }]}>Total</Text>
                    <Text style={[styles.value, { marginTop: 8 }]}>{formatearMoneda(mensualidad.valor)}</Text>
                </View>
            </Page>
        </Document>
    )
}
