import React from 'react'
import { authRoles } from '../../auth/authRoles'

const experienceRoutes = [
    {
        path: '/experience',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default experienceRoutes
