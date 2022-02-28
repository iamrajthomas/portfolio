import React, { Fragment } from 'react'
import { Grid, 
    Card, 
    // Avatar
 } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
// import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
// import UpgradeCard from './shared/UpgradeCard'
// import Campaigns from './shared/Campaigns'
import AvatarCard from './shared/AvatarCard'

import { useTheme } from '@material-ui/styles'
import useAuth from 'app/hooks/useAuth'

const Analytics = () => {
    const theme = useTheme()
    const { 
        // logout, 
        user } = useAuth()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                                            
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <h4 className="card-title text-muted mb-4 ">
                            Profile  
                        </h4>
                        <AvatarCard user={user}></AvatarCard>

                        <Grid container spacing={3}>  
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <h4 className="card-title text-muted mb-4 ">
                                    Technology Stacks 
                                </h4>
                                <Card className="px-6 py-4 mb-6">
                                    <div className="card-title">Tech Stacks</div>
                                    <div className="card-subtitle">Last 4+ Years</div>
                                    <DoughnutChart
                                        height="540px"
                                        color={[
                                            theme.palette.primary.dark,
                                            theme.palette.primary.main,
                                            theme.palette.primary.light,
                                        ]}
                                    />
                                </Card>
                                {/* <UpgradeCard /> */}
                                {/* <Campaigns /> */}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <h4 className="card-title text-muted mb-4">
                            Active Participations
                        </h4>
                        <StatCards2 />
                        {/* <StatCards /> */}

                        <h4 className="card-title text-muted mb-4">
                            Ongoing Projects
                        </h4>
                        <RowCards />

                        {/* Top Selling Products */}
                        <h4 className="card-title text-muted mb-4 mt-4">
                            Projects Worked On
                        </h4>
                        <TopSellingTable />
                    </Grid>
                </Grid>

                
            </div>
        </Fragment>
    )
}

export default Analytics
