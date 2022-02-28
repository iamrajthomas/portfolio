import React, { Fragment } from 'react'
import { format } from 'date-fns'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Checkbox,
    Fab,
    Avatar,
    Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import configuration from '../../../config/configuration';


const useStyles = makeStyles(({ palette, ...theme }) => ({
    projectName: {
        marginLeft: 24,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 4,
        },
    },
}))

const RowCards = () => {
    const classes = useStyles()

    
    const educationList = configuration.education;
    const filteredEducationList = educationList.filter(p => p.id === 1);

    return filteredEducationList.map((data, index) => (
        <Fragment key={index}>
            <Card className="py-2 px-4 project-card bg-light-green">
                <Grid container alignItems="center">
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div className="flex items-center">
                            {/* <Checkbox /> */}
                            <Hidden smDown>
                                {index % 2 === 1 ? (
                                    <Fab
                                        className="ml-4 bg-error box-shadow-none"
                                        size="small"
                                    >
                                        <Icon>check_circle_outline</Icon>
                                    </Fab>
                                ) : (
                                    <Fab
                                        className="ml-4 bg-green box-shadow-none text-white"
                                        size="small"
                                    >
                                        <Icon>lightbulb</Icon>
                                    </Fab>
                                )}
                            </Hidden>
                            <span
                                className={clsx(
                                    'font-medium',
                                    classes.projectName
                                )}
                            >
                                Institution: {data?.institution}
                            </span>
                        </div>
                    </Grid>

                    <Grid item lg={1} md={1} sm={12} xs={12}></Grid>

                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div className="text-muted">
                            Degree: {data?.degree}
                        </div>
                    </Grid>

                    <Grid item lg={1} md={1} sm={12} xs={12}></Grid>

                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div className="text-muted">
                            Tenure: {data?.to} - {data?.from}
                        </div>
                    </Grid>

                    {/* <Grid item xs={4}>
                        <div className="flex relative face-group">
                            <Avatar
                                className="avatar"
                                src="/assets/images/rt/rt-face.jpg"
                            />
                        </div>
                    </Grid> */}
                </Grid>
            </Card>
            <div className="py-2" />
        </Fragment>
    ))
}

export default RowCards
