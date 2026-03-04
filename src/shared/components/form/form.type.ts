import type { ChangeEvent, FC, SVGProps } from "react";

export type InputProps = {
    id: string,
    clase?: string,
    classInput?: string,
    label?: string,
    name?: string,
    type?: string,
    value?: string | number,
    icon?: FC<SVGProps<SVGSVGElement>>,
    placeholder?: string,
    disabled?: boolean,
    required?: boolean,
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export type SelectProps = {
    id: string,
    clase?: string,
    classInput?: string,
    label: string,
    name: string,
    items: { value: string | number, label: string }[],
    icon?: FC<SVGProps<SVGSVGElement>>,
    value?: string | number,
    error?: boolean,
    disabled?: boolean,
    required?: boolean,
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void,
}

export type TextareaProps = {
    id: string,
    label?: string,
    name: string,
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    value: string | number,
    disabled?: boolean,
    clase?: string,
    classInput?: string,
    required?: boolean
}

export type CheckProps = {
    id: string,
    label: string,
    name: string,
    value: boolean,
    disabled?: boolean,
    required?: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
};