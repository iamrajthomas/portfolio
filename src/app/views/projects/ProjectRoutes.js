// import NotFound from './NotFound'
import ADGA from './adga'
import CTS from './cts'
import ICI from './ici'
import SigmaFlow from './sigmaflow'
import WiseConnect from './wiseconnect'
import Plexosoft from './plexosoft'

const projectRoutes = [
    {
        path: '/project/adga',
        component: ADGA
    },
    {
        path: '/project/cts',
        component: CTS
    },
    {
        path: '/project/ici',
        component: ICI
    },
    {
        path: '/project/sigmaflow',
        component: SigmaFlow
    },
    {
        path: '/project/wiseconnect',
        component: WiseConnect
    },
    {
        path: '/project/plexosoft',
        component: Plexosoft
    }
]

export default projectRoutes
