import { AuthGuard } from '@/app/guards/AuthGuard'
import { AdminGuard, SuperadminGuard } from '@/app/guards/RolGuard'
import { SesionGuard } from '@/app/guards/SesionGuard'
import Plantilla from '@app/layouts/Plantilla'
import LoadingComponent from '@shared/components/loading/LoadingComponent'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ADMINROUTES, COMMONPRIVATEROUTES, ERRORROUTES, LOGINROUTES, PUBLICROUTES, SUPERADMINROUTES } from './routes.config'

const Loading = () => <LoadingComponent />

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<SesionGuard />}>
                        {LOGINROUTES.map(r => (
                            <Route key={r.path} path={r.path} element={r.element} />
                        ))}
                    </Route>
                    {PUBLICROUTES.map(r => (
                        <Route key={r.path} path={r.path} element={r.element} />
                    ))}
                    <Route element={<AuthGuard />}>
                        <Route element={<Plantilla />}>
                            {COMMONPRIVATEROUTES.map(r => (
                                <Route key={r.path} path={r.path} element={r.element} />
                            ))}
                            <Route element={<SuperadminGuard />}>
                                {SUPERADMINROUTES.map(r => (
                                    <Route key={r.path} path={r.path} element={r.element} />
                                ))}
                            </Route>
                            <Route element={<AdminGuard />}>
                                {ADMINROUTES.map(r => (
                                    <Route key={r.path} path={r.path} element={r.element} />
                                ))}
                            </Route>
                        </Route>
                        {ERRORROUTES.map(r => (
                            <Route key={r.path} path={r.path} element={r.element} />
                        ))}
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
