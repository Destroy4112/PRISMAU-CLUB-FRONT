import { PRIVATE_ROUTES } from '@app/routes/constants/rutas';
import { FaCalendarAlt, FaLayerGroup, FaUsersCog } from 'react-icons/fa';

export const MENUS_PAGO = [
   // {
   //     title: "Realizar Pago",
   //     description: "Realiza pagos de socios de forma manual",
   //     icon: FaWallet,
   //     path: PRIVATE_ROUTES.PAGAR,
   //     gradient: "from-green-500 via-teal-500 to-emerald-600",
   // },
   {
      title: "Rubros",
      description: "Organiza y administra rubros financieros",
      icon: FaLayerGroup,
      path: PRIVATE_ROUTES.RUBROS,
      gradient: "from-green-500 via-teal-500 to-emerald-600",
   },
   {
      title: "Programación de Pagos",
      description: "Automatiza y planifica pagos recurrentes",
      icon: FaCalendarAlt,
      path: PRIVATE_ROUTES.PROGRAMACION_PAGOS,
      gradient: "from-violet-400 via-purple-500 to-blue-600",
   },
   // {
   //     title: "Mensualidades",
   //     description: "Registro completo de pagos de mensualidades",
   //     icon: FaReceipt,
   //     path: PRIVATE_ROUTES.HISTORIAL_MENSUALIDADES,
   //     gradient: "from-red-500 via-rose-500 to-rose-600",
   // },
   // {
   //     title: "Cuotas de Baile",
   //     description: "Seguimiento de pagos de cuotas de baile",
   //     icon: FaMoneyCheckDollar,
   //     path: PRIVATE_ROUTES.HISTORIAL_CUOTAS_BAILE,
   //     gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
   // },
   {
      title: "Administración",
      description: "Gestión de pagos de los socios",
      icon: FaUsersCog,
      path: PRIVATE_ROUTES.ADMINISTRACION_PAGOS,
      gradient: "from-pink-400 via-pink-500 to-rose-400",
   },
];