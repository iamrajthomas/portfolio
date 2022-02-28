import React from 'react'
import { authRoles } from '../../auth/authRoles'

const openSourceRoutes = [
    {
        path: '/portfolio/openSource', //change28022022
        //path: '/openSource',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default openSourceRoutes
