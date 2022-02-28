import React from 'react'
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles'
import { 
    // Button, 
    Toolbar, AppBar, Card } from '@material-ui/core'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'
import configuration from '../../config/configuration'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    footer: {
        minHeight: 'var(--topbar-height)',
        '@media (max-width: 499px)': {
            display: 'table',
            width: '100%',
            minHeight: 'auto',
            padding: '1rem 0',
            '& .container': {
                flexDirection: 'column !important',
                '& a': {
                    margin: '0 0 16px !important',
                },
            },
        },
    },
    appbar: {
        zIndex: 96,
    },
}))

const Footer = () => {
    const classes = useStyles()
    const theme = useTheme()
    const { settings } = useSettings()

    const footerTheme = settings.themes[settings.footer.theme] || theme

    const github = configuration.github;
    const portfolio = configuration.portfolio;

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar
                color="primary"
                position="static"
                className={classes.appbar}
            >
                <Toolbar className={clsx('flex items-center', classes.footer)}>
                    <div className="flex items-center container w-full">
                        {/* <a
              href="https://github.com/uilibrary/matx-react"
              href="https://ui-lib.com/downloads/matx-pro-react-admin/"
              target="_blank"
              className="mr-2"
              rel="noopener noreferrer"
            >
              <Button variant="contained">Download Free version</Button>
            </a> */}
                        {/* <a href=""> */}
                        <Card>
                            <a href={github?.authorUrl} className="thing" tabIndex="0" target='_blank' rel="noopener noreferrer">{github?.name}</a>
                        </Card>
                        {/* <Button variant="contained" color="secondary">
                            Get MatX Pro
                        </Button> */}
                        {/* </a> */}
                        <span className="m-auto"></span>
                        <p className="m-0">
                            {portfolio?.tagline || ''} | 
                            <a href={github?.authorUrl} className="thing" tabIndex="1" target='_blank' rel="noopener noreferrer"> {github?.username}</a>
                        </p>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Footer
