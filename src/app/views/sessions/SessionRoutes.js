import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import JwtRegister from './register/JwtRegister'
import JwtLogin from './login/JwtLogin'

const sessionRoutes = [
    {
        path: '/portfolio/session/signup', //change28022022
        component: JwtRegister,
    },
    {
        path: '/portfolio/session/signin', //change28022022
        component: JwtLogin,
    },
    {
        path: '/portfolio/session/forgot-password', //change28022022
        component: ForgotPassword,
    },
    {
        path: '/portfolio/session/404', //change28022022
        component: NotFound,
    },
]

export default sessionRoutes
