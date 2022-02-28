import React from 'react'
import { Breadcrumb, 
    // SimpleCard 
} from 'app/components'
import { Card } from '@material-ui/core'

const Experience = ({ filteredExperienceList = [], orgPath = '', orgName = '', className = '' }) => {
    
    return (
        <div className="m-sm-30">

            {
                filteredExperienceList.length > 0 &&
                filteredExperienceList.map((exp, index) => {
                    return(
                        <div key={index}>

                            <Card title='' className={`px-5 py-3 ${className}`}>
                                <div className="mb-sm-30">
                                    <Breadcrumb
                                        routeSegments={[
                                            { name: 'Organization', path: orgPath },
                                            // { name: "[" + exp.id + "]" + " " + orgName },
                                            { name: `[${exp.id}] ${orgName}` },
                                        ]}
                                    />
                                </div>
                                <p><b>Organization Name: </b>{exp?.organization}</p>
                                <p><b>Position: </b>{exp?.position}</p>
                                <p><b>Tenure: </b>{exp?.from} - {exp?.to}</p>
                            </Card>
                            {/* <div className="py-3" /> */}
                        </div>
                    )
                })
            }
            {/* <div className="py-3" /> */}
        </div>
    )
}

export default Experience