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
// import BasicMap from '../map/BasicMap'
// import MarkerMap from '../map/MarkerMap'
import configuration from "../../config/configuration";

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()
    const github = configuration.github;
    return (

        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <h4 className="card-title text-muted mb-4">
                    Open Source Contributions
                </h4>
                <Grid container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12} class='text-green'>
                        <h4>Thank you for showing your interest. This page is currently under development..!!  
                            <Emoji symbol="&#128522;" label="face" />
                            </h4>
                        <div>
                            <h4>
                                <a target='_blank' href={github?.authorUrl} className="thing" tabIndex="0" rel="noopener noreferrer">
                                    To Find my github repo, please  
                                    <span class='text-error'> click here. </span>
                                    </a> 
                                    <Emoji symbol="&#129333;" label="face" />
                            </h4>
                        </div>
                            
                    </Grid>
                </Grid>
            </div>
        </Fragment>

    )
}

export default Analytics
