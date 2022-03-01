import React, { Fragment } from 'react'
import { Grid, 
    // Card, 
    // Avatar 
} from '@material-ui/core'
import { SimpleCard } from 'app/components'
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
// import configuration from "../../config/configuration";

const Analytics = () => {
    // const theme = useTheme()
    // const { logout, user } = useAuth()
    // const userprofile = configuration.userprofile;

    return (
        <Fragment>
            <div className="m-sm-30">
                <h4 className="card-title text-muted mb-4">
                    About Me 
                </h4>
                <SimpleCard>
                    <div className="analytics m-sm-30 mt-6">
                        <Grid container spacing={0}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <h4> Hi. <Emoji symbol="👋" label="" /> I am a Full-Stack Software Engineer based in India. </h4>
                                <h4> I build universe with code. </h4>
                                <br/><hr/><br/>
                                <h4> Talk to me about Software Enginnering <Emoji symbol="💻" label="" />, Programming <Emoji symbol="➿" label="" />, Algorithms <Emoji symbol="⏳" label="" />, Problem Solving <Emoji symbol="🔑" label="" /> and Life <Emoji symbol="🎯" label="" /> in general..!!! </h4>                       
                                <br/>
                                <div className='text-green'>
                                    <div>  <Emoji symbol="📲" label="" /> Recent Activity:  </div>
                                    <ul>
                                        <li> <Emoji symbol="🔆" label="" /> Help building <b>Enterprise</b> level web application with .Net and web technologies such as React, Angular. </li>
                                        <li> <Emoji symbol="💡" label="" /> Loves to solve problems, build tools/ POCs to reduce repeative human efforts and <b>automate things</b>. </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </SimpleCard>
            </div>
        </Fragment>
    )
}

export default Analytics
