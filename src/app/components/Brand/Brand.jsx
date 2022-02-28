import React from 'react'
// import { MatxLogo } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'
import configuration from "../../config/configuration";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    brand: {
        padding: '20px 18px 20px 29px',
    },
    hideOnCompact: {
        display: 'none',
    },
}))

const Brand = ({ children }) => {
    const classes = useStyles()
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    const portfolio = configuration.portfolio;

    return (
        <div
            className={clsx('flex items-center justify-between', classes.brand)}
        >
            <div className="flex items-center">
                {/* <MatxLogo /> */}
                {
                    portfolio?.logo &&
                    <a href="#" title="profile logo">
                        <img 
                        src={`${process.env.PUBLIC_URL}${portfolio.logo}`}
                        // src={portfolio.logo}
                        //src={`${process.env.PUBLIC_URL}/assets/images/products/project-img/codelogo.jpg`}
                        alt="" height='25px' width='25px'></img>
                    </a>
                }
                <span
                    className={clsx({
                        'text-18 ml-2 font-medium sidenavHoverShow': true,
                        [classes.hideOnCompact]: mode === 'compact',
                    })}
                >
                    [RT]
                    {/* Matx */}
                </span>
            </div>
            <div
                className={clsx({
                    sidenavHoverShow: true,
                    [classes.hideOnCompact]: mode === 'compact',
                })}
            >
                {children || null}
            </div>
        </div>
    )
}

export default Brand
