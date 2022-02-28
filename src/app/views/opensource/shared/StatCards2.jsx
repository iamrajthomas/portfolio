import React from 'react'
import { Grid, Card, Icon, Fab } from '@material-ui/core'

const StatCards2 = () => {
    return (
        <Grid container spacing={3} className="mb-6">
            <Grid item xs={8} md={4}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-green circle-44 box-shadow-none"
                        >
                            <Icon className="text-green">trending_up</Icon>
                        </Fab>
                        <h5 className="font-medium text-green m-0 ml-3">
                            Active on React JS
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow"></h2>
                        <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-green text-white">
                            <Icon className="text-14">expand_less</Icon>
                        </div>
                        <span className="text-13 text-green ml-1"> (12 Months+)</span>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={8} md={4}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-error">star_outline</Icon>
                        </Fab>
                        <h5 className="font-medium text-error m-0 ml-3">
                            Active on Bug Fixes
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow"></h2>
                        <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-error text-white">
                            <Icon className="text-14">expand_less</Icon>
                        </div>
                        <span className="text-13 text-error ml-1">(24 Months+)</span>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={8} md={4}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-primary circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-primary">code</Icon>
                        </Fab>
                        <h5 className="font-medium text-primary m-0 ml-3">
                            Open Source Contribution 
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow"></h2>
                        <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-primary text-white">
                            <Icon className="text-14">expand_less</Icon>
                        </div>
                        <span className="text-13 text-primary ml-1">(40 Months+)</span>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards2
