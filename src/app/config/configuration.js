// configuration.js
// module.exports = {
 
const configuration = {
    portfolio: {
        baseUrl: 'portfolio',
        tagline: 'Made with Love',
        logo: '/assets/images/products/project-img/codelogo.jpg',
        loginImg: '/assets/images/rt/login2.jpg',
    },
    userprofile:{
        id: 1,
        role: 'SA',
        name: 'Rajesh Thomas',
        username: 'iamrajthomas',
        email: 'visitor@myportfolio.com', 
        contactEmail: 'iamrajthomas@gmail.com',
        avatar: '/assets/images/rt/rt-face.jpg',
        designation: 'Senior Product Engineer - Software Development',
        location: 'India',
        cvUrl: '/assets/doc/Rajesh_Thomas_Resume_2022.pdf',
    },
    github: {
        name: 'Rajesh Thomas',
        username: 'iamrajthomas', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 15, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['Angular2-GettingStarted'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
        authorUrl: 'https://github.com/iamrajthomas'
    },
    social: {
        linkedin: 'iamrajthomas',
        twitter: 'iamrajthomas',
        facebook: 'iamrajthomas',
        dribbble: '',
        behance: '',
        medium: 'iamrajthomas',
        devto: '',
        website: 'https://iamrajthomas.github.io/RT-Portfolio',
        email: 'contact@iamrajthomas.com',
        contactEmail: 'iamrajthomas@gmail.com'
    },
    highlights: [
        { 
            title: 'Having domain knowledge of .Net Technologies and SQL Server.',
            isactive: true,
        },
        { 
            title: 'Skilled in Scripting like Angular 2, 4, 6 & 8, ReactJS 16.4, JavaScript.',
            isactive: true,
        }
    ],
    skills: [
        'Algorithm / System Design',
        'MS Azure',
        'CSharp.Net',
        'ASP.Net MVC',
        'ASP.Net Core 2.0',
        'SQL Server',
        'Angular 2/4/6',
        'React.js',
        'JavaScript/ ECMAScript',
        'Jquery',
        'HTML',
        'CSS/ Bootstrap',
        'Bootstrap',
        'TFS',
        'Git'
    ],
    liveproject: [
        { 
            imgUrl: '/assets/images/products/project-img/ici.png',
            shorttitle: 'ICI',
            title: 'ICI - Contract Lifecycle Management',
            domain: 'Contract Management',
            description: 'ICI CLM is a product-based web application. This solution starts with the core ICI contract management platform, which covers the full lifecycle of contract management capabilities beginning with intelligent contract setup and then continuing with authoring, approvals, negotiations, and all other aspects of ongoing contract operations. The true value of ICI begins after a contract is signed, providing full visibility and powerful tools to ensure what you and your partners have committed to happens, even as conditions change.',
            responsibilities: 'Working as patch owner, as part of HyperCare-Team, involved in end to end project deliverables like planning for release scope, distributing work-items to colleagues/ subordinates, actively working on the PBIs/ project deliverables es, handling customer feedbacks/ escalations, extension of releases, automation, Veracode (security changes evaluation), performance,  getting the work-items to closure/ follow-ups, taking decisions on the resolutions, prioritizing the tech challenges, releasing product with all artifacts and draw schema for the up-coming schedules.',
            role: 'Senior Product Engineer',
            techstack: {
                frontEnd: ['Razor View Engine', 'React JS'],
                backEnd: ['Asp.Net MVC', 'MicroSoft Azure', 'C#'],
                db: ['SQL Server 2016'],
                others: ['Automation', 'Veracode']
            },
            organization: 'Harman Connected Services Corp India Private Ltd (Client Location: Icertis - Applied Cloud)',
            duration: '2 Year(s)',
            isactive: true
        },
        { 
            imgUrl: '/assets/images/products/project-img/adga.png',
            shorttitle: 'ADGA',
            title: 'American Dairy Goat Association (ADGA)',
            domain: 'General',
            description: 'ADGA is a product-based web application, deals with keeping track of the animals (goats), owners of animals (goats) & its associated data. This helps ADGA manage the animals (goats) purchase & sell information in real-time by integrating the payment module, keep track of animal of what breed type, its family members and analytical reporting. The workflow covers pre-production procedure from concept to tie-in, multiple schedules to create actions in real-time, process requests after being queued and governance.',
            responsibilities: 'Involved in client call, requirement analysis, design, pure implementations and front & back-end coding, maintenance and meet-up sprint objectives & project deliverables.',
            role: 'Product Engineer',
            techstack: {
                frontEnd: ['React JS 16.4'],
                backEnd: ['ASP.Net Core', 'C#'],
                db: ['SQL Server 2017'],
                others: ['Docker', 'Swagger', 'Material UI']
            },
            organization: 'Case Flow Technologies Pvt Ltd',
            duration: '1 Year(s)',
            isactive: true
        },
        { 
            imgUrl: '/assets/images/products/project-img/sigmaflow.png',
            shorttitle: 'Sigmaflow',
            title: 'Sigmaflow',
            domain: 'Oil, Gas and Electricity Industry',
            description: 'SigmaFlow is a product-based application, deals with Compliance Management and Well Delivery Solution. This helps oil and gas companies manage the well delivery workflows in real-time by integrating the multiple schedules from the drilling schedule, to process execution and analytical reporting. The workflows cover pre-production processes from concept to tie-in, multiple schedules flags, key milestone dates forecasted, process governance and compliance.',
            responsibilities: 'Involved in requirement analysis, design, pure implementations and front & back-end coding, maintenance and meet-up project objectives.',
            role: 'Software Engineer',
            techstack: {
                frontEnd: ['Angular 6'],
                backEnd: ['ASP.Net', 'ASP.Net MVC', 'C#'],
                db: ['SQL Server 2014'],
                others: ['Telerik Kendo UI']
            },
            organization: 'InfoVision Labs',
            duration: '6 Month(s)',
            isactive: true
        },
        { 
            imgUrl: '/assets/images/products/project-img/wiseconnect.png',
            shorttitle: 'Wiseconnect',
            title: 'Wiseconnect',
            domain: 'Health-Care',
            description: 'This is a health care application for connecting patients to the doctors, book appointments and check for the test results and growth on their health after taking doses. The medical devices, given to the patient will keep track of the patients’ data and that data will be pushed as records into the database. Anytime patient can sign into Patient Portal and check for the availability, test results and growth in charts and have pre-cautions if needed. It applies for doctors and managers with different set of scenarios.',
            responsibilities: 'Involved in requirement analysis, database design, core implementations in coding, maintenances, and client interactions on weekly basis.',
            role: 'Software Developer',
            techstack: {
                frontEnd: ['Angular 4'],
                backEnd: ['ASP.Net Core', 'C#'],
                db: ['SQL Server 2016'],
                others: ['JQuery']
            },
            organization: 'FusionStak Techlogies Pvt Ltd',
            duration: '1 Year(s)',
            isactive: true
        },
        { 
            imgUrl: '/assets/images/products/project-img/plexosoft.png',
            shorttitle: 'Plexosoft',
            title: 'Plexosoft',
            domain: 'Disaster Management',
            description: 'The core objective of the application is to keep track of the sensitive information of people surrounded with natural disasters like tropical cyclone. These people will be inspected with the legal documents and they will get the common but very useful resources for being settled down.',
            responsibilities: 'Involved in requirement analysis, core implementations, strong coding, maintenances and client interactions.',
            role: 'Software Developer',
            techstack: {
                frontEnd: ['Angular 2'],
                backEnd: ['ASP.Net Core', 'C#'],
                db: ['SQL Server 2016'],
                others: []
            },
            organization: 'FusionStak Techlogies Pvt Ltd',
            duration: '6 Month(s)',
            isactive: true
        },
        { 
            imgUrl: '/assets/images/products/project-img/cts.png',
            shorttitle: 'CTS',
            title: 'Client Tracking System (CTS)',
            domain: 'General',
            description: 'The objective of the application is to keep track of professional and personal information of clients and users. Further, if they want, they can get different set of events like, programs and services for their professional and organizational needs by paying at low cost or free. For any program and services, reports are being generated and being availed to the client after successful completion of each event.',
            responsibilities: 'Involved in requirement analysis, database design, pure implementations and coding, maintenance and client interactions on monthly basis.',
            role: 'Software Developer',
            techstack: {
                frontEnd: ['Angular 2'],
                backEnd: ['ASP.Net Core', 'C#'],
                db: ['SQL Server 2016'],
                others: ['Bootstrap']
            },
            organization: 'FusionStak Techlogies Pvt Ltd',
            duration: '1 Year(s)',
            isactive: true
        },
    ],
    experiences: [
        { 
            id: 4,
            organization: 'Harman Connected Services',
            position: 'Senior Engineer - Product Development',
            from: 'December 2019 ',
            to: 'Present'
        },
        { 
            id: 3,
            organization: 'Case Flow Technologies',
            position: 'Software Engineer',
            from: 'February 2019',
            to: 'December 2019'
        },
        { 
            id: 2,
            organization: 'InfoVision Labs',
            position: 'Software Developer',
            from: 'July 2018',
            to: ' February 2019'
        },
        {
            id: 1,
            organization: 'FusionStak Techlogies',
            position: 'Junior Software Developer',
            from: 'July 2017',
            to: 'July 2018'
        }
    ],
    education: [
        { 
            id: 1,
            name: "Graduation",
            institution: 'Gandhi Institute of Engineering and Technology, Gunupur, India',
            degree: 'Bachelor of Technology (B.Tech) In Computational Science and Engineering',
            from: '2012',
            to: '2016',
        },
        { 
            id: 2,
            institution: 'Rayagada Junior College, Rayagada, India',
            degree: 'Intermidiate Science',
            from: '2010',
            to: '2012',
        },
        { 
            id: 3,
            institution: 'Saraswati Vidya Mandir, Bhawani Patna, India',
            degree: 'High School',
            from: '2007',
            to: '2010'
        }
    ],
    hobby: [
        { 
            name: 'Problem Solving/ Coding',
            description: 'Problem Solving/ Coding',
            isactive: true,
        },
        { 
            name: 'Photography',
            description: 'Photography',
            isactive: true,
        },
        { 
            name: 'Dance - Urban and Street Styles',
            description: 'Dance - Urban and Street Styles',
            isactive: true,
        },
        { 
            name: 'Biking',
            description: 'Race and Touring in Bike',
            isactive: true,
        },
        { 
            name: 'Rubiks Cube Solve',
            description: 'Rubiks Cube Solve',
            isactive: true,
        },
        { 
            name: 'PlayStation - Call of Duty, FIFA',
            description: 'PlayStation - Call of Duty, FIFA',
            isactive: true,
        }
    ],
    geolocation: [
        {
            displayLocId: 1
        },
        {
            id: 1,
            loc: 'Pune, India',
            lat: 18.516726, 
            lng: 73.856255
        },
        {
            id: 2,
            loc: 'Rayagada, India',
            lat: 19.171209, 
            lng: 83.416323
        },
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'medium', //'dev.to', // medium | dev.to
        username: 'iamrajthomas',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeconfiguration: {
        default: 'dark', //'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false, //true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'dark',
            'light',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}

export default configuration;