import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import NavBar from '../components/Navbar/Navbar'

export const Route = createRootRoute({
    component: () => (
        <div
            style={{ display: 'flex', flexDirection: 'column', height: '100svh' }}
        >
            <NavBar />
            <Outlet />
        </div>
    ),
})