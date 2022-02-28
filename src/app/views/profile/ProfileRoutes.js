import React from 'react'
import { authRoles } from '../../auth/authRoles'

const profileRoutes = [
    {
        path: '/portfolio/profile', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default profileRoutes
