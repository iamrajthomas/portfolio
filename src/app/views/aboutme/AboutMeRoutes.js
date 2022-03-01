import React from 'react'
import { authRoles } from '../../auth/authRoles'

const aboutMeRoutes = [
    {
        path: '/portfolio/aboutme', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default aboutMeRoutes
