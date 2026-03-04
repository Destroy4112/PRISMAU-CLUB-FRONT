import { useState } from 'react';

type ModalsState = Record<string, boolean>;

export default function useModals() {
    const [modals, setModals] = useState<ModalsState>({});

    const toggleModal = (name: string) => {
        setModals((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const openModal = (name: string) => {
        setModals((prev) => ({
            ...prev,
            [name]: true,
        }));
    };

    const closeModal = (name: string) => {
        setModals((prev) => ({
            ...prev,
            [name]: false,
        }));
    };

    return {
        modals,
        toggleModal,
        openModal,
        closeModal,
    };
}
