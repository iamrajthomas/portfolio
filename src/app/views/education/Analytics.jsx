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


// import Intermediate from './intermediate'
import Graduaction from './graduation'
// import School from './school'

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()

    return (

        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <h4 className="card-title text-muted mb-4">
                    Academic Qualifications 
                </h4>
                <Grid container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Graduaction></Graduaction>
                    </Grid>
                    {/* <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Intermediate></Intermediate>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <School></School>
                    </Grid> */}
                </Grid>
            </div>
        </Fragment>

    )
}

export default Analytics
