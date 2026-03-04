import "@assets/css/403.css";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { Link } from "react-router";
import IconoProhibido from "./components/IconoProhibido";

function Page403() {

    return (
        <div className='contenedor-403'>
            <IconoProhibido />
            <h1 className='message-403'>No tienes permiso para acceder a esta página.</h1>
            <Link className='link-403' to={PRIVATE_ROUTES.DASHBOARD}>Volver</Link>
        </div>
    )
}

export default Page403