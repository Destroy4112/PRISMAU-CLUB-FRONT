import type { ChangeEvent } from "react";

export type ContentDescriptionProps = {
    title: string;
    description: string;
};

export type FormResetProps = {
    id: string;
    label: string;
    type: string;
    value: string | number;
    loading: boolean;
    textButton: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
};