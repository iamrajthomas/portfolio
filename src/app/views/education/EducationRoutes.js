import React from 'react'
import { authRoles } from '../../auth/authRoles'

const educationRoutes = [
    {
        path: '/portfolio/education', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default educationRoutes
