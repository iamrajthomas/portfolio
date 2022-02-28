import React from 'react'
import { authRoles } from '../../auth/authRoles'

const hobbyRoutes = [
    {
        path: '/portfolio/hobby', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default hobbyRoutes
