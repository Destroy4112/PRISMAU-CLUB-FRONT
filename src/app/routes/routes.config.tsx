import { ERROR_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from '@shared/constants/rutas/Rutas.model'
import { lazy } from 'react'

const LoginPage = lazy(() => import('@features/auth/login/presentation/page/LoginPage'))
const RecuperacionPage = lazy(() => import('@/features/auth/recuperar/RecuperacionPage'))
const ChangePasswordPage = lazy(() => import('@/features/auth/cambiarClave/ChangePasswordPage'))
const ValidateCodePage = lazy(() => import('@/features/auth/verificarCodigo/ValidateCodePage'))

const DashboardPage = lazy(() => import('@/features/dashboard/presentation/page/DashboardPage'))
const Page403 = lazy(() => import('@/features/errors/403/Page403'))
const Page404 = lazy(() => import('@/features/errors/404/Page404'))

const AdministradoresPage = lazy(() => import('@/features/superAdmin/administradores/presentation/page/AdministradoresPage'))
const RolesPage = lazy(() => import('@/features/superAdmin/roles/presentation/page/RolesPage'))
const MenusPage = lazy(() => import('@/features/superAdmin/menus/presentation/page/MenusPage'))
const HobbiesPage = lazy(() => import('@features/superAdmin/hobbies/presentation/page/HobbiesPage'))
const ContratosPage = lazy(() => import('@features/superAdmin/contratos/presentation/page/ContratosPage'))

const SolicitudesPage = lazy(() => import('@features/admin/solicitudes/presentation/page/SolicitudesPage'))
const ReservasPage = lazy(() => import('@/features/admin/reservas/presentation/page/ReservasPage'))
const EncuestasPage = lazy(() => import('@features/admin/encuesta/encuestas/presentation/page/EncuestasPage'))
const PreguntasPage = lazy(() => import('@features/admin/encuesta/preguntas/presentation/page/PreguntasPage'))
const BusquedaUserPage = lazy(() => import('@/features/admin/busquedaUser/presentation/page/BusquedaUserPage'))
const AsociadosPage = lazy(() => import('@features/admin/asociados/presentation/page/AsociadosPage'))
const FamiliaresAsociadoPage = lazy(() => import('@/features/admin/familiares/presentation/pages/FamiliaresAsociadoPage'))
const AdherentesPage = lazy(() => import('@/features/admin/adherentes/AdherentesPage'))
const FamiliaresAdherentePage = lazy(() => import('@/features/admin/familiares/presentation/pages/FamiliaresAdherentePage'))
const EmpleadosPage = lazy(() => import('@/features/admin/empleados/EmpleadosPage'))
const EspaciosPage = lazy(() => import('@/features/admin/espacios/EspaciosPage'))
const EventosPage = lazy(() => import('@/features/admin/eventos/EventosPage'))
const InvitacionesPage = lazy(() => import('@/features/admin/invitaciones/InvitacionesPage'))
const AccesosPage = lazy(() => import('@/features/admin/accesos/AccesosPage'))
const EstadosPage = lazy(() => import('@/features/admin/estados/EstadosPage'))
const GestionPage = lazy(() => import('@/features/admin/pagos/gestion/GestionPage'))
const RubrosPage = lazy(() => import('@/features/admin/pagos/rubros/presentation/pages/RubrosPage'))
const ProgramacionPage = lazy(() => import('@/features/admin/pagos/programacion/presentation/page/ProgramacionPage'))

export const LOGINROUTES = [
    { path: PUBLIC_ROUTES.LOGIN, element: <LoginPage /> }
]

export const PUBLICROUTES = [
    { path: PUBLIC_ROUTES.RECUPERAR, element: <RecuperacionPage /> },
    { path: PUBLIC_ROUTES.VALIDAR, element: <ValidateCodePage /> },
    { path: PUBLIC_ROUTES.CHANGE_PASSWORD, element: <ChangePasswordPage /> },
]

export const COMMONPRIVATEROUTES = [
    { path: PRIVATE_ROUTES.DASHBOARD, element: <DashboardPage /> },
]

export const SUPERADMINROUTES = [
    { path: PRIVATE_ROUTES.ADMINISTRADORES, element: <AdministradoresPage /> },
    { path: PRIVATE_ROUTES.ROLES, element: <RolesPage /> },
    { path: PRIVATE_ROUTES.MODULOS, element: <MenusPage /> },
    { path: PRIVATE_ROUTES.HOBBIES, element: <HobbiesPage /> },
    { path: PRIVATE_ROUTES.CONTRATOS, element: <ContratosPage /> },
]

export const ADMINROUTES = [
    { path: PRIVATE_ROUTES.SOLICITUDES, element: <SolicitudesPage /> },
    { path: PRIVATE_ROUTES.RESERVAS, element: <ReservasPage /> },
    { path: PRIVATE_ROUTES.ENCUESTAS, element: <EncuestasPage /> },
    { path: PRIVATE_ROUTES.PREGUNTAS, element: <PreguntasPage /> },
    { path: PRIVATE_ROUTES.BUSCAR_USER, element: <BusquedaUserPage /> },
    { path: PRIVATE_ROUTES.ASOCIADOS, element: <AsociadosPage /> },
    { path: PRIVATE_ROUTES.FAMILIARES_ASOCIADO, element: <FamiliaresAsociadoPage /> },
    { path: PRIVATE_ROUTES.ADHERENTES, element: <AdherentesPage /> },
    { path: PRIVATE_ROUTES.FAMILIARES_ADHERENTE, element: <FamiliaresAdherentePage /> },
    { path: PRIVATE_ROUTES.EMPLEADOS, element: <EmpleadosPage /> },
    { path: PRIVATE_ROUTES.ESPACIOS, element: <EspaciosPage /> },
    { path: PRIVATE_ROUTES.EVENTOS, element: <EventosPage /> },
    { path: PRIVATE_ROUTES.INVITACIONES, element: <InvitacionesPage /> },
    { path: PRIVATE_ROUTES.ACCESOS, element: <AccesosPage /> },
    { path: PRIVATE_ROUTES.ESTADOS, element: <EstadosPage /> },
    { path: PRIVATE_ROUTES.GESTION_PAGOS, element: <GestionPage /> },
    { path: PRIVATE_ROUTES.RUBROS, element: <RubrosPage /> },
    { path: PRIVATE_ROUTES.PROGRAMACION_PAGOS, element: <ProgramacionPage /> },
]

export const ERRORROUTES = [
    { path: ERROR_ROUTES.PAGE_403, element: <Page403 /> },
    { path: ERROR_ROUTES.PAGE_404, element: <Page404 /> },
]