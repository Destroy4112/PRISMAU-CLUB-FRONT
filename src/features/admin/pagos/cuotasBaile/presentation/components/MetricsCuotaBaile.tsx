import CardMetric from '@shared/components/cards/CardMetric';
import { CheckCircle2, Clock, DollarSign } from 'lucide-react';

type Props = {
    total: number;
    pagadas: number;
    pendientes: number
}

export default function MetricsCuotaBaile({ total, pagadas, pendientes }: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <CardMetric
                icon={DollarSign}
                label="Total"
                value={total}
                detail="Total facturas generadas"
                tone="dark"
            />

            <CardMetric
                icon={CheckCircle2}
                label="Pagadas"
                value={pagadas}
                detail="Facturas pagadas"
                tone="success"
            />

            <CardMetric
                icon={Clock}
                label="Pendientes"
                value={pendientes}
                detail="Facturas pendientes por pagar"
                tone="danger"
            />
        </div>
    );
}