import React from 'react'
import { authRoles } from '../../auth/authRoles'

const geoLocationRoutes = [
    {
        path: '/portfolio/geolocation', //change28022022
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default geoLocationRoutes
