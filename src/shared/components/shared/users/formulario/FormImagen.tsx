import { URL_BACK } from "@core/constants/endpoints";
import { ImageIcon, Trash2, UploadCloud, X } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";

interface FormImagenProps {
   value?: string | null;
   label: string;
   name: string;
   handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
   deleteImagen?: () => void;
}

export default function FormImagen({ value, label, name, handleChange, deleteImagen, }: FormImagenProps) {

   const inputId = `id_${name}`;
   const inputRef = useRef<HTMLInputElement | null>(null);

   const [preview, setPreview] = useState<string | null>(null);
   const [fileName, setFileName] = useState<string | null>(null);

   useEffect(() => {
      return () => { if (preview) URL.revokeObjectURL(preview); };
   }, [preview]);

   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (preview) URL.revokeObjectURL(preview);

      if (!file) {
         setPreview(null);
         setFileName(null);
         handleChange(event);
         return;
      }

      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
      handleChange(event);
   };

   const clearSelectedFile = () => {
      if (preview) URL.revokeObjectURL(preview);

      if (inputRef.current) {
         inputRef.current.value = "";

         const dataTransfer = new DataTransfer();
         inputRef.current.files = dataTransfer.files;

         const event = {
            target: inputRef.current,
            currentTarget: inputRef.current,
         } as ChangeEvent<HTMLInputElement>;

         handleChange(event);
      }

      setPreview(null);
      setFileName(null);
   };

   const displayedImage = preview ?? (value ? `${URL_BACK}${value}` : null);
   const isNewFile = Boolean(preview);

   return (
      <div className="w-full space-y-4">
         <div>
            <label htmlFor={inputId} className="text-sm font-semibold text-slate-800"                >
               {label}
            </label>
            <p className="mt-1 text-sm text-slate-500">
               Selecciona una imagen en formato PNG o JPG.
            </p>
         </div>

         {displayedImage && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
               <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                     <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isNewFile ? "bg-indigo-50 text-indigo-600" : "bg-slate-100 text-slate-600"}`}>
                        <ImageIcon className="h-5 w-5" />
                     </div>
                     <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800">
                           {isNewFile ? "Nueva imagen seleccionada" : "Imagen actual"}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                           {isNewFile ? fileName : "Imagen guardada actualmente"}
                        </p>
                     </div>
                  </div>

                  {isNewFile ? (
                     <button type="button" onClick={clearSelectedFile} className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                        <X className="h-4 w-4" />
                        Quitar
                     </button>
                  ) : (
                     deleteImagen && (
                        <button type="button" onClick={deleteImagen} className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:border-red-300 hover:bg-red-100">
                           <Trash2 className="h-4 w-4" />
                           Eliminar
                        </button>
                     )
                  )}
               </div>

               <div className="bg-slate-50 p-4">
                  <div className="relative mx-auto aspect-video w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
                     <img src={displayedImage} alt={isNewFile ? "Vista previa de la nueva imagen" : "Imagen actual"} className="h-full w-full object-contain" />

                     {isNewFile && (
                        <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                           Vista previa
                        </span>
                     )}
                  </div>
               </div>
            </div>
         )}

         <div className="relative">
            <input ref={inputRef} id={inputId} type="file" name={name} onChange={handleFileChange} accept="image/png, image/jpeg" className="peer sr-only" />

            <label htmlFor={inputId}
               className="group flex min-h-44 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-indigo-400 hover:bg-indigo-50/40 peer-focus-visible:border-indigo-500 peer-focus-visible:ring-4 peer-focus-visible:ring-indigo-100"
            >
               <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200 transition group-hover:-translate-y-1 group-hover:shadow-md">
                  <UploadCloud className="h-7 w-7" />
               </div>

               <p className="text-sm font-semibold text-slate-800">
                  {displayedImage ? "Selecciona otra imagen" : "Selecciona una imagen"}
               </p>

               <p className="mt-1 text-sm text-slate-500">
                  Haz clic para buscar el archivo en tu dispositivo
               </p>

               <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                     PNG
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                     JPG
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                     Máx. 2 MB
                  </span>
               </div>
            </label>
         </div>
      </div>
   );
}