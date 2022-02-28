import React, { Fragment } from 'react'
import { format } from 'date-fns'
import {
    Grid,
    Card,
    Icon,
    //IconButton,
    Checkbox,
    Fab,
    Avatar,
    Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import configuration from "../../../config/configuration";

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
    const userprofile = configuration.userprofile;

    return [ { id: 1, title: "ICI", stack: "DotNet"}, { id: 2, title: "Portfolio", stack: "ReactJS"} ].map((data, index) => (
        <Fragment key={index}>
            <Card className="py-2 px-4 project-card bg-light-green">
                <Grid container alignItems="center">
                    <Grid item md={4} xs={7}>
                        <div className="flex items-center">
                            <Checkbox />
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
                                {data.title}
                            </span>
                        </div>
                    </Grid>

                    <Grid item md={3} xs={4}>
                        <div className="text-muted">
                            Last Worked: {format(new Date().getTime(), 'MM/dd/yyyy')}
                        </div>
                    </Grid>

                    <Grid item md={3} xs={4}>
                        <div className="text-muted">
                            Stack: {data.stack}
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="flex relative face-group">
                            <Avatar
                                className="avatar"
                                src={`${process.env.PUBLIC_URL}${userprofile.avatar}`}
                                // src="/assets/images/rt/rt-face.jpg"
                                // src={`${process.env.PUBLIC_URL}/assets/images/rt/rt-face.jpg`}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Card>
            <div className="py-2" />
        </Fragment>
    ))
}

export default RowCards
