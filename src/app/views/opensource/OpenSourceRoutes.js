import React from 'react'
import { authRoles } from '../../auth/authRoles'

const openSourceRoutes = [
    {
        path: '/openSource',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default openSourceRoutes
