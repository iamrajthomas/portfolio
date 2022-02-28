import React from 'react'
import { authRoles } from '../../auth/authRoles'

const hobbyRoutes = [
    {
        path: '/hobby',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default hobbyRoutes
