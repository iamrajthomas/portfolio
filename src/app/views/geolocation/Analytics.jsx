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
// import BasicMap from '../map/BasicMap'
import { SimpleCard } from 'app/components'
import MarkerMap from '../map/MarkerMap'
import configuration from "../../config/configuration";

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()
    const geolocation = configuration.geolocation;

    const filteredgeolocation = geolocation.filter(x => x.id === geolocation[0].displayLocId)[0];
    return (


        

        <Fragment>
            <div className="m-sm-30">
                <h4 className="card-title text-muted mb-4">
                    Geo Location
                </h4>
            <SimpleCard>
                <p><b>Work Location: </b>{filteredgeolocation?.loc}</p>
                <div className="analytics m-sm-30 mt-6">
                
                {/* <Grid container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <BasicMap></BasicMap>
                    </Grid>
                </Grid> */}

                {/* <Grid container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <MarkerMap
                            defaultCenter={{ lat: 19.171209, lng: 83.416323 }}
                            position={{ lat: 19.171209, lng: 83.416323 }}
                            displayText="Rayagada"
                        ></MarkerMap>                            
                    </Grid>
                </Grid> */}

                    <Grid container spacing={0}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <MarkerMap
                            defaultCenter={{ lat: filteredgeolocation?.lat, lng: filteredgeolocation?.lng }}
                            position={{ lat: filteredgeolocation?.lat, lng: filteredgeolocation?.lng }}
                            displayText={filteredgeolocation?.loc}
                            ></MarkerMap>                            
                        </Grid>
                    </Grid>
                </div>
            </SimpleCard>
            </div>
        </Fragment>

    )
}

export default Analytics
