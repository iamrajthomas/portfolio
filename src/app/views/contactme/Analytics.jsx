import React, { Fragment } from 'react'
import { Grid, 
    // Card, 
    // Avatar 
} from '@material-ui/core'
import { SimpleCard } from 'app/components'
// import DoughnutChart from './shared/Doughnut'
// import StatCards from './shared/StatCards'
// import TopSellingTable from './shared/TopSellingTable'
// import RowCards from './shared/RowCards'
// import StatCards2 from './shared/StatCards2'
// import UpgradeCard from './shared/UpgradeCard'
// import Campaigns from './shared/Campaigns'


// import { useTheme } from '@material-ui/styles'
// import useAuth from 'app/hooks/useAuth'
import configuration from "../../config/configuration";

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()
    const userprofile = configuration.userprofile;

    return (

        <Fragment>
            <div className="m-sm-30">
                <h4 className="card-title text-muted mb-4">
                    Contact Me 
                </h4>
                <SimpleCard>
                    <div className="analytics m-sm-30 mt-6">
                        <Grid container spacing={0}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                            {
                                userprofile?.contactEmail &&
                                <h4>Feel free to reach out for any collaboration/ query at "<span className='text-green'>{userprofile?.contactEmail}</span>".</h4>
                            }
                            <h4>Thankyou.</h4>
                            </Grid>
                        </Grid>
                    </div>
                </SimpleCard>
            </div>
        </Fragment>

    )
}

export default Analytics
