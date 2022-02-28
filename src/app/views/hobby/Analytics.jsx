import React, { Fragment } from 'react'
import { Grid,
    // Card, 
    // Avatar 
} from '@material-ui/core'
import Emoji from 'a11y-react-emoji';

// import DoughnutChart from './shared/Doughnut'
// import StatCards from './shared/StatCards'
// import TopSellingTable from './shared/TopSellingTable'
// import RowCards from './shared/RowCards'
// import StatCards2 from './shared/StatCards2'
// import UpgradeCard from './shared/UpgradeCard'
// import Campaigns from './shared/Campaigns'

// import { useTheme } from '@material-ui/styles'
// import useAuth from 'app/hooks/useAuth'

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()

    return (

        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <h4 className="card-title text-muted mb-4">
                    Hobby
                </h4>
                <Grid container spacing={0} class='text-green'>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <h4>Thank you for showing your interest. This page is currently under development..!! 
                            {/* <span role="img">&#128522;</span> */}
                            <Emoji symbol="&#128522;" label="face" />
                            </h4>                            
                    </Grid>
                </Grid>
            </div>
        </Fragment>

    )
}

export default Analytics
