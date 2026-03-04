export const inputValidation = (value: string | number | undefined, touched: boolean) => (
    touched && (!value || (typeof value === 'string' && value.trim() === '')) ? 'border border-red-500 rounded-lg' : ''
);