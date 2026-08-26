import { useState } from "react";

export type ModalsApi<K extends string = string> = {
   modals: Record<K, boolean>;
   toggleModal: (key: K) => void;
   openModal: (key: K) => void;
   closeModal: (key: K) => void;
};

export default function useModals<K extends string = string>(): ModalsApi<K> {

   const [modals, setModals] = useState<Record<string, boolean>>({});

   const toggleModal = (name: K) => {
      const key = String(name);
      setModals((prev) => ({ ...prev, [key]: !prev[key] }));
   };

   const openModal = (name: K) => {
      const key = String(name);
      setModals((prev) => ({ ...prev, [key]: true }));
   };

   const closeModal = (name: K) => {
      const key = String(name);
      setModals((prev) => ({ ...prev, [key]: false }));
   };

   return {
      modals: modals as Record<K, boolean>,
      toggleModal,
      openModal,
      closeModal,
   };

}