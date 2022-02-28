// import NotFound from './NotFound'
import ADGA from './adga'
import CTS from './cts'
import ICI from './ici'
import SigmaFlow from './sigmaflow'
import WiseConnect from './wiseconnect'
import Plexosoft from './plexosoft'

const projectRoutes = [
    {
        path: '/portfolio/project/adga', //change28022022
        component: ADGA
    },
    {
        path: '/portfolio/project/cts', //change28022022
        component: CTS
    },
    {
        path: '/portfolio/project/ici', //change28022022
        component: ICI
    },
    {
        path: '/portfolio/project/sigmaflow', //change28022022
        component: SigmaFlow
    },
    {
        path: '/portfolio/project/wiseconnect', //change28022022
        component: WiseConnect
    },
    {
        path: '/portfolio/project/plexosoft', //change28022022
        component: Plexosoft
    }
]

export default projectRoutes
