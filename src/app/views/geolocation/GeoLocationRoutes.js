import React from 'react'
import { authRoles } from '../../auth/authRoles'

const geoLocationRoutes = [
    {
        path: '/geolocation',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default geoLocationRoutes
