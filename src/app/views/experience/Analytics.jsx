import React, { Fragment } from 'react'
import { Grid, 
    // Card, 
    // Avatar
 } from '@material-ui/core'
// import DoughnutChart from './shared/Doughnut'
// import StatCards from './shared/StatCards'
// import TopSellingTable from './shared/TopSellingTable'
// import RowCards from './shared/RowCards'
// import StatCards2 from './shared/StatCards2'
// import UpgradeCard from './shared/UpgradeCard'
// import Campaigns from './shared/Campaigns'


// import { useTheme } from '@material-ui/styles'
// import useAuth from 'app/hooks/useAuth'


import FusionStack from './fusionstack'
import InfoVision from './infovision'
import CaseFlow from './caseflow'
import Harman from './harman'

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <h4 className="card-title text-muted mb-0">
                    Professional Experiences
                </h4>
                <Grid container spacing={0}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Harman></Harman>
                        <CaseFlow></CaseFlow>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <InfoVision></InfoVision>
                        <FusionStack></FusionStack>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics 