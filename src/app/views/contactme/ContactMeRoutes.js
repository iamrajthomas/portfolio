import React from 'react'
import { authRoles } from '../../auth/authRoles'

const contactMeRoutes = [
    {
        path: '/portfolio/contactme', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default contactMeRoutes
