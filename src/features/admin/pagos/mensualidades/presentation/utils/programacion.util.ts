import type { ToolbarStatusOption } from "@shared/components/toolbar/ToolbarFilter2";

export const statusSocios: ToolbarStatusOption<boolean | null>[] = [
    {
        label: "Todos",
        value: null,
        variant: "dark",
    },
    {
        label: "Pagados",
        value: true,
        variant: "success",
    },
    {
        label: "Inactivos",
        value: false,
        variant: "danger",
    }
];