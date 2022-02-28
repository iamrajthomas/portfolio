import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import profileRoutes from './views/profile/ProfileRoutes'
import projectRoutes from './views/projects/ProjectRoutes'
import experienceRoutes from './views/experience/ExperienceRoutes'
import educationRoutes from './views/education/EducationRoutes'
import openSourceRoutes from './views/opensource/OpenSourceRoutes'
import hobbyRoutes from './views/hobby/HobbyRoutes'
import geoLocationRoutes from './views/geolocation/GeoLocationRoutes'
import contactMeRoutes from './views/contactme/ContactMeRoutes'

import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'


const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/profile/default" />,
    }
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...profileRoutes,
    ...projectRoutes,
    ...experienceRoutes,
    ...educationRoutes,
    ...openSourceRoutes,
    ...hobbyRoutes,
    ...geoLocationRoutes,
    ...contactMeRoutes,
    //=================================
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
