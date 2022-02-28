import React from 'react'
import { authRoles } from '../../auth/authRoles'

const contactMeRoutes = [
    {
        path: '/contactme',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default contactMeRoutes
