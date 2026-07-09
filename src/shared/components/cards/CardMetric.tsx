import type { LucideIcon } from "lucide-react";

type Tone = "dark" | "success" | "info" | "warning" | "danger";

type Props = {
    icon: LucideIcon;
    label: string;
    value: string | number;
    detail?: string;
    tone?: Tone;
};

export default function CardMetric({ icon: Icon, label, value, detail, tone = "dark" }: Props) {
    const toneClass: Record<Tone, string> = {
        dark: "bg-slate-950 text-white shadow-slate-950/20",
        success: "bg-emerald-600 text-white shadow-emerald-600/20",
        info: "bg-indigo-600 text-white shadow-indigo-600/20",
        warning: "bg-amber-500 text-white shadow-amber-500/20",
        danger: "bg-rose-600 text-white shadow-rose-600/20",
    };

    const progressClass: Record<Tone, string> = {
        dark: "bg-slate-950",
        success: "bg-emerald-500",
        info: "bg-indigo-500",
        warning: "bg-amber-500",
        danger: "bg-rose-500",
    };

    return (
        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/80">
            <div className="relative flex items-center justify-between gap-3">
                <div className={`shrink-0 rounded-xl p-2.5 shadow-md ${toneClass[tone]}`}>
                    <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1 text-right">
                    <p className="text-xs font-bold text-slate-500">
                        {label}
                    </p>

                    <p className="mt-0.5 truncate text-xl font-black tracking-tight text-slate-950">
                        {value}
                    </p>
                </div>
            </div>

            <div className="relative mt-2 w-full">
                <div className="h-1 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full w-[72%] rounded-full ${progressClass[tone]}`} />
                </div>
            </div>

            {detail && (
                <p className="relative mt-1.5 text-right text-[12px] font-medium leading-4 text-slate-400">
                    {detail}
                </p>
            )}
        </div>
    );
}