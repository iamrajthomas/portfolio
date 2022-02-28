//Find material fonts on this link for ref: https://fonts.google.com/icons?selected=Material+Icons

// import { authRoles } from './auth/authRoles'

export const navigations = [
    // {
    //     name: 'Dashboard',
    //     path: '/dashboard',
    //     icon: 'dashboard',
    // },    
    {
        label: 'Profile',
        type: 'label',
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: 'assignment_ind',
    },    
    {
        name: 'OpenSource',
        path: '/opensource',
        icon: 'cloud_done',
    },
    
    {
        label: 'Live Projects',
        type: 'label',
    },
    {
        name: 'Project Details',
        icon: 'source',
        badge: { value: '5+', color: 'primary' },
        children: [
            {
                name: 'ICI',
                icon: 'favorite_border',
                iconText: 'favorite_border',
                path: '/project/ici',
            },
            {
                name: 'ADGA',
                icon: 'star',
                iconText: 'star',
                path: '/project/adga',
            },
            {
                name: 'SigmaFlow',
                icon: 'work',
                iconText: 'work',
                path: '/project/sigmaflow',
            },
            {
                name: 'CTS',
                icon: 'insights',
                iconText: 'insights',
                path: '/project/cts',
            },
            {
                name: 'WiseConnect',
                icon: 'health_and_safety',
                iconText: 'health_and_safety',
                path: '/project/wiseconnect',
            },
            {
                name: 'Plexosoft',
                icon: 'psychology',
                iconText: 'psychology',
                path: '/project/plexosoft',
            },
        ],
    },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },   
    
    {
        label: 'Work Experience',
        type: 'label',
    },
    {
        name: 'Experience',
        path: '/experience',
        icon: 'laptop_mac',
    },
    
    {
        label: 'Education',
        type: 'label',
    },
    {
        name: 'Education',
        path: '/education',
        icon: 'developer_board',
    },
    {
        label: 'Location',
        type: 'label',
    },
    {
        name: 'Location',
        path: '/geolocation',
        icon: 'explore',
    },
    {
        label: 'Hobby',
        type: 'label',
    },
    {
        name: 'Hobby',
        path: '/hobby',
        icon: 'sports_esports',
    },
    {
        label: 'Contact Me',
        type: 'label',
    },
    {
        name: 'Contact',
        path: '/contactme',
        icon: 'contacts',
    },
    
    // Commenting Down
    // {
    //     label: 'Components',
    //     type: 'label',
    // },
    // {
    //     name: 'Components',
    //     icon: 'favorite',
    //     badge: { value: '30+', color: 'secondary' },
    //     children: [
    //         {
    //             name: 'Auto Complete',
    //             path: '/material/autocomplete',
    //             iconText: 'A',
    //         },
    //         {
    //             name: 'Buttons',
    //             path: '/material/buttons',
    //             iconText: 'B',
    //         },
    //         {
    //             name: 'Checkbox',
    //             path: '/material/checkbox',
    //             iconText: 'C',
    //         },
    //         {
    //             name: 'Dialog',
    //             path: '/material/dialog',
    //             iconText: 'D',
    //         },
    //         {
    //             name: 'Drag and Drop',
    //             iconText: 'D',
    //             path: '/others/drag-and-drop',
    //         },
    //         {
    //             name: 'Expansion Panel',
    //             path: '/material/expansion-panel',
    //             iconText: 'E',
    //         },
    //         {
    //             name: 'Form',
    //             path: '/material/form',
    //             iconText: 'F',
    //         },
    //         {
    //             name: 'Icons',
    //             path: '/material/icons',
    //             iconText: 'I',
    //         },
    //         {
    //             name: 'Menu',
    //             path: '/material/menu',
    //             iconText: 'M',
    //         },
    //         {
    //             name: 'Progress',
    //             path: '/material/progress',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Radio',
    //             path: '/material/radio',
    //             iconText: 'R',
    //         },
    //         {
    //             name: 'Switch',
    //             path: '/material/switch',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Slider',
    //             path: '/material/slider',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Snackbar',
    //             path: '/material/snackbar',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Table',
    //             path: '/material/table',
    //             iconText: 'T',
    //         },
    //     ],
    // },
    // {
    //     name: 'Utilities',
    //     icon: 'format_list_bulleted',
    //     children: [
    //         {
    //             name: 'Color',
    //             path: '/utilities/color',
    //             iconText: 'C',
    //             auth: authRoles.admin,
    //         },
    //         {
    //             name: 'Spacing',
    //             path: '/utilities/spacing',
    //             iconText: 'S',
    //             auth: authRoles.admin,
    //         },
    //         {
    //             name: 'Typography',
    //             path: '/utilities/typography',
    //             iconText: 'T',
    //         },
    //         {
    //             name: 'Display',
    //             path: '/utilities/display',
    //             iconText: 'D',
    //         },
    //         {
    //             name: 'Position',
    //             path: '/utilities/position',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Shadow',
    //             path: '/utilities/shadow',
    //             iconText: 'S',
    //         },
    //     ],
    // },
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',
    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         }
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
