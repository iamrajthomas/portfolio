import React from 'react'
import { authRoles } from '../../auth/authRoles'

const educationRoutes = [
    {
        path: '/education',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default educationRoutes
