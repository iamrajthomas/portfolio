import React from 'react'
import { authRoles } from '../../auth/authRoles'

const experienceRoutes = [
    {
        path: '/portfolio/experience', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default experienceRoutes
